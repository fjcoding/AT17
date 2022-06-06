import { isValidValue } from './validateModule.js';
import { existInSchema } from './existModule.js';

export function parser (schema, alias, value, result) {
    const findedResult = existInSchema (schema, alias);
    if (!findedResult) {
        result['error'] = result['error'] + 'The parameter ' + alias + ' does not exist in the schema \n';
    } else {
        if (findedResult.type == 'boolean') {
            result[findedResult.name] = true;
        } else {
            const validedValue = isValidValue(value, findedResult.type, findedResult.subtype);
            if (validedValue) {
                result[findedResult.name] = value;
            } else {
                result[findedResult.name] = 'The ' + findedResult.name + ' argument only support ' + (findedResult.subtype ? 'List with ' + findedResult.subtype + ' types' : findedResult.type + ' types');
            }
        }
    }
}