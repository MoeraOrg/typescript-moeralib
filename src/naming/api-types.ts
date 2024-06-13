import { JSONRPCErrorResponse, JSONRPCSuccessResponse } from "json-rpc-2.0";

interface Result<T> extends JSONRPCSuccessResponse {
    result: T | null;
}

export type ObjectResult = Result<object>;
export type BooleanResult = Result<boolean>;
export type ErrorResult = JSONRPCErrorResponse;

export interface RegisteredNameInfo {
    name: string;
    generation: number;
    updatingKey: string;
    nodeUri?: string | null;
    signingKey?: string | null;
    validFrom?: number | null;
}
