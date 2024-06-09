import { NODE_API_VALIDATORS } from "./api-validators";
import { BasicValidateFunction, isSchemaValid } from "../schema";

interface ValidationResult {
    valid: boolean;
    errors?: { message?: string }[] | null;
}

export function validateSchema(schemaName: string, data: any): ValidationResult {
    const schema: BasicValidateFunction<any> = NODE_API_VALIDATORS[schemaName];
    if (schema == null) {
        return {valid: false, errors: [{message: `Schema ${schemaName} is not found`}]};
    }
    const valid = isSchemaValid(schema, data);
    return {valid, errors: schema.errors};
}
