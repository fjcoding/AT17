export class Schema {
    constructor() {
        this.schemaArg = [
            {
                parameter : '-l',
                value: false,
                isDefine: false
            },
            {   parameter : '-p',
                value : 0,
                isDefine: false
            },
            {
                parameter : '-d',
                value : '',
                isDefine: false
            },
            {
                parameter : '-g',
                value : null,
                isDefine: false
            },
            {
                parameter : '-d',
                value : null,
                isDefine: false
            },
        ];
    }

    getSchema() {
        return this.schemaArg;
    }
}