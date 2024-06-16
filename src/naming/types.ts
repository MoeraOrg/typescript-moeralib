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
    /**
     * the name that was created or updated by the operation
     */
    name: string;
    /**
     * the generation of the name that was created or updated by the operation
     */
    generation: number;
    /**
     * the current status of the operation
     */
    status: OperationStatus;
    /**
     * when the operation was added
     */
    added?: number | null;
    /**
     * when the operation was completed
     */
    completed?: number | null;
    /**
     * the error code, if the operation has been failed
     */
    errorCode?: string | null;
    /**
     * the human-readable error description, if the operation has been failed
     */
    errorMessage?: string | null;
}

export interface RegisteredNameInfo {
    name: string;
    generation: number;
    /**
     * the public key for verifying signatures of further updates of the name
     */
    updatingKey?: string | null;
    /**
     * URI of the REST API endpoint of the node to which the name is assigned
     */
    nodeUri: string;
    /**
     * when the name was created
     */
    created?: number | null;
    /**
     * the public key of the name owner. May be ``null``.
     */
    signingKey?: string | null;
    /**
     * the moment in time the owner's key is valid from. May be absent if ``signingKey`` is also absent.
     */
    validFrom?: number | null;
    /**
     * a unique identifier of the current state of the name. May be a transaction ID of the latest transaction with
     * this name in the blockchain, or a cryptographic digest of the current state.
     */
    digest?: string | null;
}

export interface SigningKeyInfo {
    /**
     * the public key
     */
    key: string;
    /**
     * the moment in time the key is valid from
     */
    validFrom: number;
}
