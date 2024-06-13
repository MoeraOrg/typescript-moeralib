// This file is for schema compiler only, do not use directly

export const NAMING_API_SCHEMAS = {
    $id: "naming",
    definitions: {
        ObjectResult: {
            type: "object",
            properties: {
                "jsonrpc": {
                    type: "string"
                },
                "result": {
                    type: "object",
                    nullable: true
                },
                "id": {
                    type: "integer"
                }
            },
            additionalProperties: false,
            required: ["jsonrpc", "id"]
        },

        BooleanResult: {
            type: "object",
            properties: {
                "jsonrpc": {
                    type: "string"
                },
                "result": {
                    type: "boolean",
                    nullable: true
                },
                "id": {
                    type: "integer"
                }
            },
            additionalProperties: false,
            required: ["jsonrpc", "id"]
        },

        StringResult: {
            type: "object",
            properties: {
                "jsonrpc": {
                    type: "string"
                },
                "result": {
                    type: "string",
                    nullable: true
                },
                "id": {
                    type: "integer"
                }
            },
            additionalProperties: false,
            required: ["jsonrpc", "id"]
        },

        ErrorResult: {
            type: "object",
            properties: {
                "jsonrpc": {
                    type: "string"
                },
                "error": {
                    type: "object",
                    properties: {
                        "code": {
                            type: "integer"
                        },
                        "message": {
                            type: "string"
                        }
                    },
                    additionalProperties: false,
                    required: ["code", "message"]
                },
                "id": {
                    type: "integer"
                }
            },
            additionalProperties: false,
            required: ["jsonrpc", "error", "id"]
        },

        OperationStatus: {
            type: "string",
            enum: ["WAITING", "ADDED", "STARTED", "SUCCEEDED", "FAILED", "UNKNOWN"]
        },

        OperationStatusInfo: {
            type: "object",
            properties: {
                "operationId": {
                    type: "string"
                },
                "name": {
                    type: "string"
                },
                "generation": {
                    type: "number"
                },
                "status": {
                    $ref: "naming#/definitions/OperationStatus"
                },
                "added": {
                    type: "integer",
                    nullable: true
                },
                "completed": {
                    type: "integer",
                    nullable: true
                },
                "errorCode": {
                    type: "string",
                    nullable: true
                },
                "errorMessage": {
                    type: "string",
                    nullable: true
                }
            },
            additionalProperties: false,
            required: ["operationId", "name", "generation", "status"]
        },

        RegisteredNameInfo: {
            type: "object",
            properties: {
                "name": {
                    type: "string"
                },
                "generation": {
                    type: "integer",
                    minimum: 0
                },
                "updatingKey": {
                    type: "string",
                    nullable: true
                },
                "nodeUri": {
                    type: "string"
                },
                "created": {
                    type: "integer",
                    nullable: true
                },
                "signingKey": {
                    type: "string",
                    nullable: true
                },
                "validFrom": {
                    type: "integer",
                    nullable: true
                },
                "digest": {
                    type: "string",
                    nullable: true
                }
            },
            additionalProperties: false,
            required: ["name", "generation", "nodeUri"]
        },

        RegisteredNameInfoArray: {
            type: "array",
            items: {
                $ref: "naming#/definitions/RegisteredNameInfo"
            }
        },

        SigningKeyInfo: {
            type: "object",
            properties: {
                key: {
                    "type": "string"
                },
                validFrom: {
                    "type": "number"
                }
            },
            additionalProperties: false,
            required: ["key", "validFrom"]
        },

        SigningKeyInfoArray: {
            type: "array",
            items: {
                $ref: "naming#/definitions/SigningKeyInfo"
            }
        }
    }
}
