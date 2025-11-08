import cloneDeep from 'lodash.clonedeep';

import { Body, BodyFormat, Result, SourceFormat } from "./types";
import { validateSchema } from "./validate";
import { urlWithParameters } from "../util";
import { formatSchemaErrors } from "../schema";

/**
 * Generic node error.
 */
export class MoeraNodeError extends Error {

    /**
     * @param {string} name - request name
     * @param {string} message - error message
     */
    constructor(name: string, message: string) {
        super(name + ": Node error: " + message);
    }

}

/**
 * Node returned an error response.
 */
export class MoeraNodeApiError extends MoeraNodeError {

    /**
     * Error code.
     */
    errorCode: string;

    /**
     * @param {string} name - request name
     * @param {Result} result - node response
     */
    constructor(name: string, result: Result) {
        super(name, result.message);
        this.errorCode = result.errorCode;
    }

}

/**
 * Error while connecting the node.
 */
export class MoeraNodeConnectionError extends Error {

    /**
     * @param {string} message - error message
     */
    constructor(message: string) {
        super("Node connection error: " + message);
    }

}

/**
 * Missing context of the call (authentication parameters or node URL).
 */
export class MoeraNodeCallError extends Error {

    /**
     * @param {string} message - error message
     */
    constructor(message: string) {
        super(message);
    }

}

type Structure = Partial<Record<string, any>>;

function encodeBody(decoded: Body | string | null, format: BodyFormat | SourceFormat | null): string | null {
    if (decoded == null || typeof decoded === "string") {
        return decoded;
    }
    if (format === "application") {
        return decoded.text ?? null;
    }
    return JSON.stringify(decoded);
}

function encodeBodies(data: Structure | Structure[]): Structure | Structure[] {
    if (Array.isArray(data)) {
        return data.map(item => encodeBodies(item));
    }
    const encoded = cloneDeep(data);
    if (data.body != null) {
        encoded.body = encodeBody(data.body, data.bodyFormat);
    }
    if (data.bodyPreview != null) {
        encoded.bodyPreview = encodeBody(data.bodyPreview, data.bodyFormat);
    }
    if (data.bodySrc != null) {
        encoded.bodySrc = encodeBody(data.bodySrc, data.bodySrcFormat);
    }
    return encoded;
}

function decodeBody(name: string, encoded: string, format: BodyFormat | SourceFormat | null): Body {
    if (format === "application") {
        return {text: encoded};
    }

    let body: Body;
    try {
        body = JSON.parse(encoded);
    } catch (e) {
        if (e instanceof SyntaxError) {
            throw new MoeraNodeError(name, "Invalid body encoding: " + e.message);
        }
        throw e;
    }

    const {valid, errors} = validateSchema("Body", body);
    if (!valid) {
        throw new MoeraNodeError(name, "Invalid body: " + formatSchemaErrors(errors));
    }

    return body;
}

function decodeBodies(name: string, data: Structure | Structure[]): Structure | Structure[] {
    if (Array.isArray(data)) {
        return data.map(item => decodeBodies(name, item));
    }
    const decoded = cloneDeep(data);
    if (data.stories != null) {
        decoded.stories = data.stories.map((item: Structure) => decodeBodies(name, item));
    }
    if (data.comments != null) {
        decoded.comments = data.comments.map((item: Structure) => decodeBodies(name, item));
    }
    if (data.comment != null) {
        decoded.comment = decodeBodies(name, data.comment);
    }
    if (data.posting != null) {
        decoded.posting = decodeBodies(name, data.posting);
    }
    if (data.body != null) {
        decoded.body = decodeBody(name, data.body, data.bodyFormat);
    }
    if (data.bodyPreview != null) {
        decoded.bodyPreview = decodeBody(name, data.bodyPreview, data.bodyFormat);
    }
    if (data.bodySrc != null) {
        decoded.bodySrc = decodeBody(name, data.bodySrc, data.bodySrcFormat);
    }
    return decoded;
}

/**
 * Authentication type.
 *
 * "none" - No authentication.\
 * "peer" - Carte authentication.\
 * "admin" - Admin token authentication.\
 * "root-admin" - Root admin secret authentication.
 */
export type NodeAuth = "none" | "peer" | "admin" | "root-admin";

export interface CarteSource {
    getCarte: () => Promise<string>;
}

/**
 * Convert partial node URL to a standardized form.
 *
 * @param {string} url - partial URL
 * @return {string} standard URL
 */
export function moeraRoot(url: string): string {
    if (!url.startsWith("http:") && !url.startsWith("https:")) {
        url = "https://" + url;
    }
    if (url.endsWith("/")) {
        url = url.slice(0, -1);
    }
    if (url.endsWith("/api")) {
        url = url.slice(0, -4);
    }
    if (!url.endsWith("/moera")) {
        url += "/moera";
    }
    return url;
}

const FETCH_TIMEOUT = 10000; // ms
const UPDATE_TIMEOUT = 60000; // ms
const LARGE_BODY_MIN = 65536;

function abortSignal(method: string, body: string | Buffer | null): AbortSignal {
    let signal: AbortSignal | null;
    if (method === "POST" || method === "PUT") {
        const largeBody = body != null && (typeof body === "string" ? body.length > LARGE_BODY_MIN : true);
        signal = AbortSignal.timeout(largeBody ? UPDATE_TIMEOUT : FETCH_TIMEOUT);
    } else {
        signal = AbortSignal.timeout(FETCH_TIMEOUT);
    }

    return signal;
}

/**
 * Parameters of a node API request.
 */
interface CallOptions {
    /**
     * Query parameters, mapping name to value, ``null`` values are skipped
     */
    params?: Partial<Record<string, string | number | boolean | null>> | null
    /**
     * Request method (one of 'GET', 'POST', 'PUT', 'DELETE'), the default is 'GET'
     */
    method: string;
    /**
     * Request body
     */
    body?: Structure | Structure[] | Buffer | null;
    /**
     * Content-Type of the request body, when it is not a JSON structure
     */
    contentType?: string | null;
    /**
     * `true` (default) to authenticate the request, `false` otherwise
     */
    auth?: boolean;
    /**
     * JSON schema name to validate the response, or ``"blob"`` if the result is ``Buffer``
     */
    schema: string;
    /**
     * `true` to decode `Body` structures in the response, `false` (default) otherwise
     */
    bodies?: boolean;
    /**
     * `true` to encode `Body` structures in the request, `false` (default) otherwise
     */
    srcBodies?: boolean;
}

export class Caller {

    /**
     * API endpoint URL of the node.
     */
    root: string | null = null;
    private _rootSecret: string | null = null;
    private _token: string | null = null;
    private _carte: string | null = null;
    private _carteSource: CarteSource | null = null;
    private _authMethod: NodeAuth = "none";

    /**
     * Set node URL.
     *
     * @param {string} url
     */
    nodeUrl(url: string): void {
        this.root = moeraRoot(url);
    }

    /**
     * Set root secret for authentication.
     *
     * @param {string} secret
     */
    rootSecret(secret: string): void {
        this._rootSecret = secret;
    }

    /**
     * Set admin token for authentication.
     *
     * @param {string} token
     */
    token(token: string): void {
        this._token = token
    }

    /**
     * Set carte for authentication.
     *
     * @param {string} carte
     */
    carte(carte: string): void {
        this._carte = carte
    }

    /**
     * Set a source of cartes for authentication.
     *
     * @param {CarteSource} carteSource
     */
    carteSource(carteSource: CarteSource): void {
        this._carteSource = carteSource;
    }

    /**
     * Select authentication method for the following requests.
     *
     * @param {NodeAuth} authMethod
     */
    authMethod(authMethod: NodeAuth): void {
        this._authMethod = authMethod;
    }

    /**
     * Switch off authentication for the following requests.
     */
    noAuth(): void {
        this.authMethod("none");
    }

    /**
     * Select carte authentication for the following requests.
     */
    auth(): void {
        this.authMethod("peer");
    }

    /**
     * Select admin token authentication for the following requests.
     */
    authAdmin(): void {
        this.authMethod("admin");
    }

    /**
     * Select root admin secret authentication for the following requests.
     */
    authRootAdmin(): void {
        this.authMethod("root-admin");
    }

    /**
     * Generic method for making node API requests.
     *
     * @param {string} name - request name (for error messages)
     * @param {string} location - request path
     * @param {Partial<Record<string, string | number | boolean | null>> | null} params - query parameters, mapping
     *     name to value, ``null`` values are skipped
     * @param {string} method - request method (one of 'GET', 'POST', 'PUT', 'DELETE'), the default is 'GET'
     * @param {Structure | Structure[] | Buffer | null} body - request body
     * @param {string | null} contentType - content-type of the request body, when it is not a JSON structure
     * @param {boolean} auth - `true` (default) to authenticate the request, `false` otherwise
     * @param {string} schema - JSON schema to validate the response
     * @param {boolean} bodies - `true` to decode `Body` structures in the response, `false` (default) otherwise
     * @param {boolean} srcBodies - `true` to encode `Body` structures in the request, `false` (default) otherwise
     * @return {Promise<any>}
     */
    async call(
        name: string,
        location: string,
        {
            params = null,
            method = "GET",
            body = null,
            contentType = null,
            auth = true,
            schema,
            bodies = false,
            srcBodies = false
        }: CallOptions
    ): Promise<any> {
        let bodyEncoded: string | Buffer | null;
        if (body != null && !Buffer.isBuffer(body)) {
            if (srcBodies) {
                body = encodeBodies(body);
            }
            bodyEncoded = JSON.stringify(body);
        } else {
            bodyEncoded = body;
        }

        const headers: HeadersInit = {
            "Accept": "application/json",
            "Content-Type": contentType ?? "application/json"
        }
        let bearer: string | null = null;
        if (auth) {
            switch (this._authMethod) {
                case "peer":
                    if (this._carteSource != null) {
                        bearer = "carte:" + (await this._carteSource.getCarte());
                    } else if (this._carte != null) {
                        bearer = "carte:" + this._carte;
                    } else {
                        throw new MoeraNodeCallError("Carte is not set");
                    }
                    break;
                case "admin":
                    if (this._token == null) {
                        throw new MoeraNodeCallError("Token is not set");
                    }
                    bearer = "token:" + this._token;
                    break;
                case "root-admin":
                    if (this._rootSecret == null) {
                        throw new MoeraNodeCallError("Root secret is not set");
                    }
                    bearer = "secret:" + this._rootSecret;
                    break;
            }
        }
        if (bearer != null) {
            headers["Authorization"] = `Bearer ${bearer}`;
        }

        if (this.root == null) {
            throw new MoeraNodeCallError("Node URL is not set");
        }

        const url = urlWithParameters(this.root + "/api" + location, params);
        const signal = abortSignal(method, bodyEncoded);
        let response;
        try {
             response = await fetch(url, {method, headers, body: bodyEncoded as BodyInit, signal});
        } catch (e) {
            throw new MoeraNodeConnectionError(String(e));
        }

        let data: any;
        try {
            if (schema === "blob" && response.ok) {
                data = await response.blob();
            } else {
                data = await response.json();
            }
        } catch (e) {
            if (!response.ok) {
                throw new MoeraNodeError(name, "Server returned error status");
            } else {
                throw new MoeraNodeError(name, "Server returned empty result");
            }
        }

        if (!response.ok) {
            const {valid} = validateSchema("Result", data);
            if (!valid) {
                throw new MoeraNodeError(name, "Server returned error status");
            }
            throw new MoeraNodeApiError(name, data);
        }

        if (schema !== "blob") {
            const result = validateSchema(schema, data);
            const {valid, errors} = result;
            if (!valid) {
                throw new MoeraNodeError(name, "Server returned incorrect response" + formatSchemaErrors(errors));
            }
            if (bodies) {
                data = decodeBodies(name, data);
            }
        }

        return data;
    }

}
