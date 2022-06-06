
export class Interpreter {
    // constructor(command = '-l -p 8080 -d /usr/logs', fileSchema = "./commandsSchema.json") {
    constructor(command = '-l -p 8080 -d /usr/logs', fileSchema) {
        // const defaultboolean = false;
        // const defaultInteger = 0;
        // const defaullString = '';
        this.commandArray = this.convertToArray(command);
        // let fileSchema = require('./commandsSchema.json');
        // this.fileSchema = myJson;
        this.fileSchema = fileSchema;
    }

    convertToArray(command) {
        if (typeof command === 'string') {
            return command.slice(1, command.length - 1).split('-');
        }
    }


    getObjectParameter() {
        let stringObject = '{';
        this.commandArray.forEach(e => {
            let index = e.trim().indexOf(' ');
            let key = e.trim();
            let value = true;
            if (index > -1) {
                key = e.trim().substring(0, index);
                value = e.trim().substring(index, e.trim().length);
                value = (Number(value) ? parseInt(value) : '"' + value.trim() + '"');
            }
            stringObject += '"' + key + '":' + value + ',';
        });
        return JSON.parse(stringObject.slice(0, -1) + '}');
        // this.objectParameter = JSON.parse(stringObject.slice(0, -1)+"}");
    }

    isParameterValid() {
        let objectParameter = this.getObjectParameter();
        // let objectSchema = this.fileSchema;
        let validation = ''; for (let key in objectParameter) {
            if (this.fileSchema.integers.includes(key)) {
                validation += typeof objectParameter[key] != 'number' ? 'The data type of the \'' + key + '\' parameter must be integer.\n' : '';
            } else if (this.fileSchema.booleans.includes(key)) {
                validation += typeof objectParameter[key] != 'boolean' ? 'The data type of the \'' + key + '\' parameter must be boolean.\n' : '';
            } else if (this.fileSchema.strings.includes(key)) {
                validation += typeof objectParameter[key] != 'string' ? 'The data type of the \'' + key + '\' parameter must be string.\n' : '';
            }
        }
        return validation;
    }

    getValue(parameter, value) {
        let response = false;
        // let index = value.indexOf(' ');
        // response = value.substring(index, value.length);
        // response = value;
        if (!this.fileSchema.integers.includes(parameter) && !this.fileSchema.booleans.includes(parameter) && !this.fileSchema.strings.includes(parameter)) {
            if (typeof value != 'boolean') {
                response = (Number(response) ? 0 : '""');
            }
        } else {
            console.log(value, '========== ');
            if (typeof value != 'boolean') {
                response = (Number(value) ? parseInt(value) : '"' + value.trim() + '"');
            } else {
                response = true;
            }
        }
        return response;
    }

    displayParameters() {
        let showResponse = '';
        if (this.isParameterValid() != '') {
            showResponse = this.isParameterValid();
        } else {
            showResponse = this.getObjectParameter();
        }
        return showResponse;
    }
}