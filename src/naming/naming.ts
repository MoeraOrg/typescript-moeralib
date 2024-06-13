import { JSONRPCClient } from 'json-rpc-2.0';

import { formatSchemaErrors } from "../schema";
import { validateSchema } from "./validate";
import { ErrorResult, OperationStatusInfo, RegisteredNameInfo, SigningKeyInfo } from "./types";

export const MAIN_NAMING_SERVER = "https://naming.moera.org/moera-naming";
export const DEV_NAMING_SERVER = "https://naming-dev.moera.org/moera-naming";

export class MoeraNamingError extends Error {

    constructor(method: string, message: string) {
        super(method + ": Naming server error: " + message);
    }

}

export class MoeraNamingApiError extends MoeraNamingError {

    errorCode: number;

    constructor(method: string, result: ErrorResult) {
        super(method, result.error.message);
        this.errorCode = result.error.code;
    }

}

export class MoeraNamingConnectionError extends Error {

    constructor(message: string) {
        super("Naming server connection error: " + message);
    }

}

export class MoeraNaming {

    private rpcClient: JSONRPCClient<[string, string]>;

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

    async getStatus(operationId: string): Promise<OperationStatusInfo | null> {
        return await this.rpcClient.request("getStatus", {operationId}, ["getStatus", "OperationStatusInfo"]);
    }

    async getCurrent(name: string, generation: number): Promise<RegisteredNameInfo> {
        return await this.rpcClient.request("getCurrent", {name, generation}, ["getCurrent", "RegisteredNameInfo"]);
    }

    async getPast(name: string, generation: number, at: number): Promise<RegisteredNameInfo | null> {
        return await this.rpcClient.request("getPast", {name, generation, at}, ["getPast", "RegisteredNameInfo"]);
    }

    async isFree(name: string, generation: number): Promise<boolean> {
        return await this.rpcClient.request("isFree", {name, generation}, ["isFree", "boolean"]);
    }

    async getSimilar(name: string): Promise<RegisteredNameInfo | null> {
        return await this.rpcClient.request("getSimilar", {name}, ["getSimilar", "RegisteredNameInfo"]);
    }

    async getAllKeys(name: string, generation: number): Promise<SigningKeyInfo[]> {
        return await this.rpcClient.request("getAllKeys", {name, generation}, ["getAllKeys", "SigningKeyInfoArray"]);
    }

    async getAll(at: number, page: number, size: number): Promise<RegisteredNameInfo[]> {
        return await this.rpcClient.request("getAll", {at, page, size}, ["getAll", "RegisteredNameInfoArray"]);
    }

    async getAllNewer(at: number, page: number, size: number): Promise<RegisteredNameInfo[]> {
        return await this.rpcClient.request("getAllNewer", {at, page, size}, ["getAllNewer", "RegisteredNameInfoArray"]);
    }

}

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

function expand(nodeName: string | null): string | null {
    if (nodeName === null) {
        return null;
    }
    const [name, gen] = parseNodeName(nodeName);
    return `${name}_${gen}`;
}

export async function resolve(name: string, namingServer: string = MAIN_NAMING_SERVER): Promise<string | null> {
    const [parsedName, gen] = parseNodeName(name);
    const naming = new MoeraNaming(namingServer);
    return (await naming.getCurrent(parsedName, gen))?.nodeUri ?? null;
}
