import type { DataValidationCxt, ErrorObject } from 'ajv/dist/types';

export interface BasicValidateFunction<T> {
    (this: any, data: any, dataCxt?: DataValidationCxt): data is T;
    errors?: Partial<ErrorObject>[];
}

export type ValidatorsMap = Partial<Record<string, BasicValidateFunction<any>>>;

export function isSchemaValid<T>(schema: BasicValidateFunction<T>, data: any): data is T {
    return schema(data);
}

export function formatSchemaErrors(errors: { message?: string }[] | null | undefined): string {
    return errors != null ? errors.map(({message}) => message).join(", ") : "";
}

export interface ValidationResult {
    valid: boolean;
    errors?: { message?: string }[] | null;
}

export function validateSchemaFromMap(validators: ValidatorsMap, schemaName: string, data: any): ValidationResult {
    const schema: BasicValidateFunction<any> | undefined = validators[schemaName];
    if (schema == null) {
        return {valid: false, errors: [{message: `Schema ${schemaName} is not found`}]};
    }
    const valid = isSchemaValid(schema, data);
    return {valid, errors: schema.errors};
}
