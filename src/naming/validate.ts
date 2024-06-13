import { validateSchemaFromMap, ValidationResult } from "../schema";
import { NAMING_API_VALIDATORS } from "./api-validators";

export function validateSchema(schemaName: string, data: any): ValidationResult {
    return validateSchemaFromMap(NAMING_API_VALIDATORS, schemaName, data);
}
