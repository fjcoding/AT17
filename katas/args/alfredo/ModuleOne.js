import { Schema } from './Schema.js';
export class ModuleOne {
    constructor(stringArg) {
        this.varSchema = new Schema();
        this.paramSchema = this.varSchema.getSchema();
        this.stringArg = stringArg;
    }

    getL(string) {
        let expre = /-l/g;
        let result = string.match(expre);
        if (result != null) {
            this.paramSchema[0].value = true;
            this.paramSchema[0].isDefine = true;
        }
    }

    getP(string) {
        let expre = /-p ([1-9]{1}[0-9]*)*/g;
        let result = string.match(expre);
        if (result != null) {
            this.paramSchema[1].isDefine = true;
            let value = result[0].match(/[1-9]{1}[0-9]*/g);
            if (value != null) {
                this.paramSchema[1].value = parseInt(value[0]);
            } else {
                this.paramSchema[1].value = 0;
            }
        }
    }

    getD(string) {
        let expre = /-d (\/[a-zA-Z]+)*/g;
        let result = string.match(expre);
        if (result != null) {
            this.paramSchema[2].isDefine = true;
            let val = result[0].match(/(\/[a-zA-Z]+)+/g);
            if (val != null) {
                this.paramSchema[2].value = val[0];
            } else {
                this.paramSchema[2].value = '';
            }
        }
    }

    getG(string) {
        let expre = /-g ([a-z]+,*)+/g;
        let result = string.match(expre);
        if (result != null) {
            result[0] = result[0].substring(2, result[0].length);
            this.paramSchema[3].isDefine = true;
            this.paramSchema[3].value = result[0].match(/[a-z]+/g);
        }
    }

    getDecimal(string) {
        let expre = /-d (-*[1-9][0-9]*,*)+/g;
        let result = string.match(expre);
        if (result != null) {
            this.paramSchema[4].isDefine = true;
            this.paramSchema[4].value = result[0].match(/-*[1-9][0-9]*/g).map(Number);
        }
    }

    exeProcess() {
        this.getL(this.stringArg);
        this.getP(this.stringArg);
        this.getD(this.stringArg);
        this.getG(this.stringArg);
        this.getDecimal(this.stringArg);

        return this.paramSchema;
    }
}