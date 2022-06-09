export function declareSchema() {
    const stringArray = new Array();
    const integerArray = new Array();
    const direction = ' ';
    const port = 0;
    const logging = false;
    const schema = [
        {
            symbol: '-l',
            name: 'logging',
            type: 'boolean',
            value: logging
        },
        {
            symbol: '-p',
            name: 'port',
            type: 'int',
            value: port
        },
        {
            symbol: '-d',
            name: 'direction',
            type: 'string',
            value: direction
        },
        {
            symbol: '-g',
            name: 'list of strings',
            type: 'array',
            value: stringArray
        },
        {
            symbol: '-d',
            name: 'list of integers',
            type: 'array',
            value: integerArray
        }
    ];
    return schema;
}
export function constructLogging() {
    const array = {
        symbol: '-l',
        name: 'logging',
        type: 'boolean',
        value: true
    };
    return array;
}
export function constructPort(valuePort) {
    const array = {
        symbol: '-p',
        name: 'port',
        type: 'int',
        value: valuePort
    };
    return array;
}
export function constructDirection(valueDirection) {
    const array = {
        symbol: '-d',
        name: 'direction',
        type: 'string',
        value: valueDirection
    };
    return array;
}
export function constructStringArray(valueString) {
    const stringArray = valueString.split(',');
    const array = {
        symbol: '-g',
        name: 'list of strings',
        type: 'array',
        value: stringArray
    };
    return array;
}
export function constructIntegerArray(valueString) {
    const stringArray = valueString.split(',');
    const array = {
        symbol: '-d',
        name: 'list of integers',
        type: 'array',
        value: stringArray
    };
    return array;
}
