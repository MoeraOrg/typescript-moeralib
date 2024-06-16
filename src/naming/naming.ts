import { JSONRPCClient } from 'json-rpc-2.0';

import { formatSchemaErrors } from "../schema";
import { validateSchema } from "./validate";
import { ErrorResult, OperationStatusInfo, RegisteredNameInfo, SigningKeyInfo } from "./types";

/**
 * Main Moera naming server.
 */
export const MAIN_NAMING_SERVER = "https://naming.moera.org/moera-naming";
/**
 * Moera developers' naming server.
 */
export const DEV_NAMING_SERVER = "https://naming-dev.moera.org/moera-naming";

/**
 * Generic naming server error.
 */
export class MoeraNamingError extends Error {

    /**
     * @param {string} method - API method name
     * @param {string} message - error message
     */
    constructor(method: string, message: string) {
        super(method + ": Naming server error: " + message);
    }

}

/**
 * Naming server returned an error response.
 */
export class MoeraNamingApiError extends MoeraNamingError {

    /**
     * Error code.
     */
    errorCode: number;

    /**
     * @param {string} method - API method name
     * @param {ErrorResult} result - server response
     */
    constructor(method: string, result: ErrorResult) {
        super(method, result.error.message);
        this.errorCode = result.error.code;
    }

}

/**
 * Naming server connection error.
 */
export class MoeraNamingConnectionError extends Error {

    /**
     * @param {string} message - error message
     */
    constructor(message: string) {
        super("Naming server connection error: " + message);
    }

}

/**
 * Naming API interface.
 */
export class MoeraNaming {

    private rpcClient: JSONRPCClient<[string, string]>;

    /**
     * @param {string} server - the naming server URL
     */
    constructor(server: string = MAIN_NAMING_SERVER) {
        this.rpcClient = new JSONRPCClient(async (request, [method, schema]) => {
            let response;
            try {
                response = await fetch(server, {
                    method: "POST",
                    headers: {
                        "accept": "application/json",
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(request),
                });
            } catch (e) {
                return Promise.reject(new MoeraNamingConnectionError(String(e)));
            }

            let data: any;
            try {
                data = await response.json();
            } catch (e) {
                if (!response.ok) {
                    return Promise.reject(new MoeraNamingError(method, "Server returned error status"));
                } else {
                    return Promise.reject(new MoeraNamingError(method, "Server returned empty result"));
                }
            }

            if ("error" in data) {
                const {valid, errors} = validateSchema("ErrorResult", data)
                if (!valid) {
                    return Promise.reject(
                        new MoeraNamingError(
                            method,
                            "Server returned invalid error response: " + formatSchemaErrors(errors)
                        )
                    );
                }
                return Promise.reject(new MoeraNamingApiError(method, data));
            } else if (!response.ok && request.id !== undefined) {
                return Promise.reject(
                    new MoeraNamingError(method, "Server returned invalid error response: " + JSON.stringify(data))
                );
            }

            if (schema == "boolean") {
                const {valid, errors} = validateSchema("BooleanResult", data);
                if (!valid) {
                    return Promise.reject(
                        new MoeraNamingError(
                            method,
                            "Server returned invalid boolean response: " + formatSchemaErrors(errors)
                        )
                    );
                }
                this.rpcClient.receive(data);
                return;
            }

            if (schema == "string") {
                const {valid, errors} = validateSchema("StringResult", data);
                if (!valid) {
                    return Promise.reject(
                        new MoeraNamingError(
                            method,
                            "Server returned invalid string response: " + formatSchemaErrors(errors)
                        )
                    );
                }
                this.rpcClient.receive(data);
                return;
            }

            {
                const {valid, errors} = validateSchema("ObjectResult", data);
                if (!valid) {
                    return Promise.reject(
                        new MoeraNamingError(
                            method,
                            "Server returned invalid object response: " + formatSchemaErrors(errors)
                        )
                    );
                }
            }

            const result = data.result;

            if (result == null) {
                this.rpcClient.receive(data);
                return;
            }

            const {valid, errors} = validateSchema(schema, result);
            if (!valid) {
                return Promise.reject(
                    new MoeraNamingError(
                        method,
                        "Server returned invalid object: " + formatSchemaErrors(errors)
                    )
                );
            }

            this.rpcClient.receive(data);
        });
    }

    /**
     * Register or update the name. See Architecture Overview for the `detailed description
     * {@link https://moera.org/overview/naming.html} of the algorithm.
     *
     * @param {string} name - the name to be registered/updated
     * @param {number} generation - the name generation to be registered/updated
     * @param {string | null} updatingKey - the public key for verifying signatures of further updates of the name. May
     *     be ``null`` if the current generation of the name is updated – the current key is preserved in this case.
     * @param {string | null} nodeUri - URI of the REST API endpoint of the node to which the name is assigned. May be
     *     ``null`` - the current URI is preserved in this case.
     * @param {string | null} signingKey - the public key of the name owner. May be ``null`` – the current key is
     *     preserved in this case.
     * @param {number | null} validFrom - the moment in time the owner's key is valid from. May be ``null`` if
     *     ``signingKey`` is also ``null``.
     * @param {string | null} previousDigest - the unique identifier as reported by a naming server of the current state
     *     of the name. Used to detect the situations when the name was changed by someone else between sending
     *     the request and processing it. May be ``null`` if the name was never registered before.
     * @param {string | null} signature - the signature, if required, ``null`` otherwise
     * @return {Promise<string>} identifier of the operation that was created
    */
    async put(
        name: string, generation: number, updatingKey: string | null = null, nodeUri: string | null = null,
        signingKey: string | null = null, validFrom: number | null = null, previousDigest: string | null = null,
        signature: string | null = null
    ): Promise<string> {
        return await this.rpcClient.request(
            "put",
            {name, generation, updatingKey, nodeUri, signingKey, validFrom, previousDigest, signature},
            ["put", "string"]
        );
    }

    /**
     * Get the current status of the operation.
     *
     * @param {string} operationId
     * @return {Promise<OperationStatusInfo |null>} the operation status or ``null``, if the operation ID is unknown
     */
    async getStatus(operationId: string): Promise<OperationStatusInfo | null> {
        return await this.rpcClient.request("getStatus", {operationId}, ["getStatus", "OperationStatusInfo"]);
    }

    /**
     * Get current information about the given generation of the name.
     *
     * @param {string} name
     * @param {number} generation
     * @return {Promise<RegisteredNameInfo>} the information or ``null``, if the name/generation is not found
     */
    async getCurrent(name: string, generation: number): Promise<RegisteredNameInfo> {
        return await this.rpcClient.request("getCurrent", {name, generation}, ["getCurrent", "RegisteredNameInfo"]);
    }

    /**
     * Get past information about the given generation of the name.
     *
     * @param {string} name
     * @param {number} generation
     * @param {number} at - the moment in time the information is related to
     * @return {Promise<RegisteredNameInfo | null>} the information or ``null``, if the name/generation did not exist at
     *     the given moment
     */
    async getPast(name: string, generation: number, at: number): Promise<RegisteredNameInfo | null> {
        return await this.rpcClient.request("getPast", {name, generation, at}, ["getPast", "RegisteredNameInfo"]);
    }

    /**
     * Check if the given name is available for registration.
     *
     * @param {string} name
     * @param {number} generation
     * @return {Promise<boolean>} ``true``, if the name is free, ``false`` otherwise
     */
    async isFree(name: string, generation: number): Promise<boolean> {
        return await this.rpcClient.request("isFree", {name, generation}, ["isFree", "boolean"]);
    }

    /**
     * Find a name that is close to the given name.
     *
     * @param {string} name
     * @return {Promise<RegisteredNameInfo | null>} information about the name or ``null``, if no name found that is
     *     close enough
     */
    async getSimilar(name: string): Promise<RegisteredNameInfo | null> {
        return await this.rpcClient.request("getSimilar", {name}, ["getSimilar", "RegisteredNameInfo"]);
    }

    /**
     * Get the whole history of signing keys for the given name.
     *
     * @param {string} name
     * @param {number} generation
     * @return {Promise<SigningKeyInfo[]>} the keys
     */
    async getAllKeys(name: string, generation: number): Promise<SigningKeyInfo[]> {
        return await this.rpcClient.request("getAllKeys", {name, generation}, ["getAllKeys", "SigningKeyInfoArray"]);
    }

    /**
     * Get the list of all registered names at the given moment. The list is returned in pages, one per call.
     *
     * @param {number} at - the moment in time the information is related to
     * @param {number} page - number of the page to be returned (starting from 0)
     * @param {number} size - size of the page
     * @return {Promise<RegisteredNameInfo[]>}
     */
    async getAll(at: number, page: number, size: number): Promise<RegisteredNameInfo[]> {
        return await this.rpcClient.request("getAll", {at, page, size}, ["getAll", "RegisteredNameInfoArray"]);
    }

    /**
     * Get the list of all names registered after the given moment. The list is returned in pages, one per call.
     *
     * @param {number} at - the moment in time the information is related to
     * @param {number} page - number of the page to be returned (starting from 0)
     * @param {number} size - size of the page
     * @return {Promise<RegisteredNameInfo[]>}
     */
    async getAllNewer(at: number, page: number, size: number): Promise<RegisteredNameInfo[]> {
        return await this.rpcClient.request("getAllNewer", {at, page, size}, ["getAllNewer", "RegisteredNameInfoArray"]);
    }

}

/**
 * Parse a node name and return its name and generation parts.
 *
 * If the node name does not include a generation, generation 0 is returned. If name syntax is invalid, ``Error``
 * is thrown.
 *
 * @param {string} nodeName - the node name to be parsed
 * @return {[string, number]} [name, generation]
 */
export function parseNodeName(nodeName: string): [string, number] {
    let name = nodeName;
    let generation = 0;

    const pos = nodeName.lastIndexOf('_');
    if (pos >= 0) {
        const gen = nodeName.substring(pos + 1);
        name = nodeName.substring(0, pos);
        try {
            generation = parseInt(gen, 10);
        } catch (error) {
            throw new Error(`invalid generation: "${gen}"`);
        }
    }

    return [name, generation];
}

/**
 * Converts the node name to the compact form, omitting generation 0.
 *
 * @param {string | null} nodeName - the node name in compact or full form
 * @return {string | null} the node name in the compact form
 */
export function shorten(nodeName: null): null;
export function shorten(nodeName: string): string;
export function shorten(nodeName: string | null): string | null;
export function shorten(nodeName: string | null): string | null {
    if (nodeName === null) {
        return null;
    }
    const [name, gen] = parseNodeName(nodeName);
    if (gen === 0) {
        return name;
    } else {
        return nodeName;
    }
}

/**
 * Converts the node name to the full form, containing generation.
 *
 * @param {string | null} nodeName - the node name in compact or full form
 * @return {string | null} the node name in the full form
 */
export function expand(nodeName: null): null;
export function expand(nodeName: string): string;
export function expand(nodeName: string | null): string | null;
export function expand(nodeName: string | null): string | null {
    if (nodeName === null) {
        return null;
    }
    const [name, gen] = parseNodeName(nodeName);
    return `${name}_${gen}`;
}

/**
 * Shortcut function to resolve a node name and get the node URI.
 *
 * @param name {string} - the node name
 * @param namingServer {string} - a naming server to be used
 * @return {Promise<string | null>} the node URI, or ``null`` if the name does not exist
 */
export async function resolve(name: string, namingServer: string = MAIN_NAMING_SERVER): Promise<string | null> {
    const [parsedName, gen] = parseNodeName(name);
    const naming = new MoeraNaming(namingServer);
    return (await naming.getCurrent(parsedName, gen))?.nodeUri ?? null;
}
