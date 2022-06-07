export function rules() {
    let address = ' ';
    let port = 0;
    let loging = false;
    let givenRules = [
        {
            symbol: '-l',
            name: 'loging',
            type: 'boolean',
            value: loging
        },
        {
            symbol: '-d',
            name: 'direction',
            type: 'string',
            value: address
        },
        {
            symbol: '-p',
            name: 'port',
            type: 'int',
            value: port
        },

    ];
    return givenRules;
}
