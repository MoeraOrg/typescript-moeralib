import { JSONRPCErrorResponse, JSONRPCSuccessResponse } from "json-rpc-2.0";

interface Result<T> extends JSONRPCSuccessResponse {
    result: T | null;
}

export type ObjectResult = Result<object>;
export type BooleanResult = Result<boolean>;
export type StringResult = Result<string>;
export type ErrorResult = JSONRPCErrorResponse;

export type OperationStatus = "WAITING" | "ADDED" | "STARTED" | "SUCCEEDED" | "FAILED" | "UNKNOWN";

export interface OperationStatusInfo {
    operationId: string;
    name: string;
    generation: number;
    status: OperationStatus;
    added?: number | null;
    completed?: number | null;
    errorCode?: string | null;
    errorMessage?: string | null;
}

export interface RegisteredNameInfo {
    name: string;
    generation: number;
    updatingKey?: string | null;
    nodeUri: string;
    created?: number | null;
    signingKey?: string | null;
    validFrom?: number | null;
    digest?: string | null;
}

export interface SigningKeyInfo {
    key: string;
    validFrom: number;
}
