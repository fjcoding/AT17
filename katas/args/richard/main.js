import { declareSchema } from './constructors.js';
import { constructLogging } from './constructors.js';
import { constructPort } from './constructors.js';
import { constructDirection } from './constructors.js';
import { constructStringArray } from './constructors.js';
import { constructIntegerArray } from './constructors.js';

import { isDirectionOrArray } from './verifiers.js';
import { isLogging } from './verifiers.js';
import { isPort } from './verifiers.js';
import { isDirection } from './verifiers.js';
import { isStringArray } from './verifiers.js';
import { isIntegerArray } from './verifiers.js';

const argument = process.argv[2];

const arrayArgument =  argument.split(' ');

const schema = declareSchema();

const specificSchema = [];

for (let i = 0; i < arrayArgument.length; i++) {
    if (isLogging(schema, arrayArgument[i])) {
        const array = constructLogging();
        specificSchema.push(array);
    }
    if (isPort(schema, arrayArgument[i])) {
        const array = constructPort(arrayArgument[i + 1]);
        specificSchema.push(array);
    }
    if (isDirection(schema, arrayArgument[i]) && isDirectionOrArray(arrayArgument) == 'direction') {
        const array = constructDirection(arrayArgument[i + 1]);
        specificSchema.push(array);
    }
    if (isStringArray(schema, arrayArgument[i])) {
        const array = constructStringArray(arrayArgument[i + 1]);
        specificSchema.push(array);
    }
    if (isIntegerArray(schema, arrayArgument[i]) && isDirectionOrArray(arrayArgument) == 'array') {
        const array = constructIntegerArray(arrayArgument[i + 1]);
        specificSchema.push(array);
    }
}

console.table(specificSchema);


