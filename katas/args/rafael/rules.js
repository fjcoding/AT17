
export function portRule(port) {
    let array = {
        symbol: '-p',
        argument: 'port',
        type: 'int',
        typeofdata: port
    };
    return array;
}
export function addressRule(address) {
    let array = {
        argument: '-d',
        name: 'address',
        type: 'string',
        typeofdata: address
    };
    return array;
}
export function loginRule() {
    let array = {
        argument: '-l',
        name: 'loging',
        type: 'boolean',
        typeofdata: true
    };
    return array;
}