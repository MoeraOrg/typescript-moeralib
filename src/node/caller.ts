import cloneDeep from 'lodash.clonedeep';

import { Body, BodyFormat, Result, SourceFormat } from "./types";
import { validateSchema } from "./validate";
import { urlWithParameters } from "../util";
import { formatSchemaErrors } from "../schema";

export class MoeraNodeError extends Error {

    constructor(name: string, message: string) {
        super(name + ": Node error: " + message);
    }

}

export class MoeraNodeApiError extends MoeraNodeError {

    errorCode: string;

    constructor(name: string, result: Result) {
        super(name, result.message);
        this.errorCode = result.errorCode;
    }

}

export class MoeraNodeConnectionError extends Error {

    constructor(message: string) {
        super("Node connection error: " + message);
    }

}

export class MoeraCallError extends Error {

    constructor(message: string) {
        super(message);
    }

}

type Structure = Partial<Record<string, any>>;

function encodeBody(decoded: Body | null, format: BodyFormat | SourceFormat | null): string | null {
    if (decoded == null) {
        return null;
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
        encoded.body = encodeBody(data.bodyPreview, data.bodyFormat);
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

export type NodeAuth = "none" | "peer" | "admin" | "root-admin";

export interface CarteSource {
    getCarte: () => string;
}

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

interface CallOptions {
    params?: Partial<Record<string, string | number | boolean | null>> | null
    method: string;
    body?: Structure | Structure[] | Buffer | null;
    contentType?: string | null;
    auth?: boolean;
    schema: string;
    bodies?: boolean;
    srcBodies?: boolean;
}

export class Caller {

    root: string | null = null;
    private _rootSecret: string | null = null;
    private _token: string | null = null;
    private _carte: string | null = null;
    private _carteSource: CarteSource | null = null;
    private _authMethod: NodeAuth = "none";

    nodeUrl(url: string): void {
        this.root = moeraRoot(url);
    }

    rootSecret(secret: string): void {
        this._rootSecret = secret;
    }

    token(token: string): void {
        this._token = token
    }

    carte(carte: string): void {
        this._carte = carte
    }

    carteSource(carteSource: CarteSource): void {
        this._carteSource = carteSource;
    }

    authMethod(authMethod: NodeAuth): void {
        this._authMethod = authMethod;
    }

    noAuth(): void {
        this.authMethod("none");
    }

    auth(): void {
        this.authMethod("peer");
    }

    authAdmin(): void {
        this.authMethod("admin");
    }

    authRootAdmin(): void {
        this.authMethod("root-admin");
    }

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
        let bodyEncoded: string | null = null;
        if (body != null) {
            if (srcBodies) {
                body = encodeBodies(body);
            }
            bodyEncoded = JSON.stringify(body);
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
                        bearer = "carte:" + this._carteSource.getCarte();
                    } else if (this._carte != null) {
                        bearer = "carte:" + this._carte;
                    } else {
                        throw new MoeraCallError("Carte is not set");
                    }
                    break;
                case "admin":
                    if (this._token == null) {
                        throw new MoeraCallError("Token is not set");
                    }
                    bearer = "token:" + this._token;
                    break;
                case "root-admin":
                    if (this._rootSecret == null) {
                        throw new MoeraCallError("Root secret is not set");
                    }
                    bearer = "secret:" + this._rootSecret;
                    break;
            }
        }
        if (bearer != null) {
            headers["Authorization"] = `Bearer ${bearer}`;
        }

        if (this.root == null) {
            throw new MoeraCallError("Node URL is not set");
        }

        let url = urlWithParameters(this.root + "api/" + location, params);
        let response;
        try {
             response = await fetch(url, {method, headers, body: bodyEncoded});
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
            throw new MoeraNodeApiError(data.errorCode, data.message);
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
