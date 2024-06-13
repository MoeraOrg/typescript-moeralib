import { writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import Ajv from 'ajv';
import standaloneCode from 'ajv/dist/standalone/index.js';

import { NAMING_API_SCHEMAS } from "./naming/api-schemas.mjs";
import { NODE_API_SCHEMAS } from "./node/schemas.mjs";

const apiDir = path.dirname(fileURLToPath(import.meta.url));

function compileNamingApiSchemas() {
    const ajv = new Ajv({
        schemas: [NAMING_API_SCHEMAS],
        code: {source: true, esm: true, lines: true},
        removeAdditional: true,
        useDefaults: true,
        coerceTypes: "array"
    });
    const idMapping = Object.fromEntries(
        Object.keys(NAMING_API_SCHEMAS.definitions).map(k => [k, `naming#/definitions/${k}`])
    );
    let moduleCode = '// This file is generated\n\n';
    moduleCode += standaloneCode(ajv, idMapping);
    moduleCode += '\nexport const NAMING_API_VALIDATORS = {\n';
    Object.keys(NAMING_API_SCHEMAS.definitions).forEach(k => moduleCode += `    "${k}": ${k},\n`);
    moduleCode += '};\n';
    writeFileSync(path.resolve(apiDir, "naming/api-validators.js"), moduleCode);
}

function compileNodeApiSchemas() {
    const ajv = new Ajv({
        schemas: [NODE_API_SCHEMAS],
        code: {source: true, esm: true, lines: true},
        removeAdditional: true,
        useDefaults: true,
        coerceTypes: "array"
    });
    const idMapping = Object.fromEntries(
        Object.keys(NODE_API_SCHEMAS.definitions).map(k => [k, `node#/definitions/${k}`])
    );
    let moduleCode = '// This file is generated\n\n';
    moduleCode += standaloneCode(ajv, idMapping);
    moduleCode += '\nexport const NODE_API_VALIDATORS = {\n';
    Object.keys(NODE_API_SCHEMAS.definitions).forEach(k => moduleCode += `    "${k}": ${k},\n`);
    moduleCode += '};\n';
    writeFileSync(path.resolve(apiDir, "node/validators.js"), moduleCode);
}

compileNamingApiSchemas();
compileNodeApiSchemas();
