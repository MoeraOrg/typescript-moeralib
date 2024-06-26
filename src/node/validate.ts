import { validateSchemaFromMap, ValidationResult } from "../schema";
import { NODE_API_VALIDATORS } from "./validators";

export function validateSchema(schemaName: string, data: any): ValidationResult {
    return validateSchemaFromMap(NODE_API_VALIDATORS, schemaName, data);
}
