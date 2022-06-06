export function isDirectionOrArray(arrayArgument) {
    for (let i = 0; i < arrayArgument.length; i++) {
        if (arrayArgument[i] == '-d') {
            const string = arrayArgument[i + 1].split(',');
            if (string.length > 1) {
                return 'array';
            } else {
                return 'direction';
            }
        }
    }
}
export function isLogging(schema, name) {
    for (let i = 0; i < schema.length; i++) {
        if (schema[i].name == 'logging' && name == '-l') {
            return true;
        }
    }
    return false;
}
export function isPort(schema, name) {
    for (let i = 0; i < schema.length; i++) {
        if (schema[i].name == 'port' && name == '-p') {
            return true;
        }
    }
    return false;
}
export function isDirection(schema, name) {
    for (let i = 0; i < schema.length; i++) {
        if (schema[i].name == 'direction' && name == '-d') {
            return true;
        }
    }
    return false;
}
export function isStringArray(schema, name) {
    for (let i = 0; i < schema.length; i++) {
        if (schema[i].name == 'list of strings' && name == '-g') {
            return true;
        }
    }
    return false;
}
export function isIntegerArray(schema, name) {
    for (let i = 0; i < schema.length; i++) {
        if (schema[i].name == 'list of integers' && name == '-d') {
            return true;
        }
    }
    return false;
}