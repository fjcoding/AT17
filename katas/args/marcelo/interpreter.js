import * as fs from 'fs';

export class Interpreter {
    constructor(command = '-l 446 -p true -d true') {
        this.command = command;
        this.commandArray = this.convertToArray(this.command);
        this.fileSchema = JSON.parse(fs.readFileSync('./katas/args/marcelo/commandsSchema.json'));
    }

    convertToArray(command) {
        let arrayResult = {};
        if (typeof command === 'string') {
            let arrayData = 0;
            arrayData = command.slice(1).split('-');
            arrayData.forEach(data => {
                let key = data.trim().split(' ')[0];
                let value = data.trim().split(' ').length > 1 ? data.trim().split(' ')[1] : true;
                arrayResult[key] = (value == true) ? value : (Number(value) ? Number(value) : value);
            });
        }
        return arrayResult;
    }


    getObjectParameter() {
        let stringObject = {};
        for (let commandCaptured in this.commandArray) {
            let key = commandCaptured;
            let value = (this.commandArray[key] != true) ? this.getValue(key, this.commandArray[key]) : this.commandArray[key];
            stringObject[key] = value;
        }
        return stringObject;
    }

    controlValueParameter() {
        let validation = '';
        for (let key in this.commandArray) {
            if (this.fileSchema.integers.includes(key)) {
                validation += typeof this.commandArray[key] != 'number' ? 'The data type of the \'' + key + '\' parameter must be integer.\n' : '';
            } else if (this.fileSchema.booleans.includes(key)) {
                validation += typeof this.commandArray[key] != 'boolean' ? 'The data type of the \'' + key + '\' parameter must be boolean.\n' : '';
            } else if (this.fileSchema.strings.includes(key)) {
                validation += typeof this.commandArray[key] != 'string' ? 'The data type of the \'' + key + '\' parameter must be string.\n' : '';
            }
        }
        return validation;
    }

    getValue(parameter, value) {
        let response = false;
        if (this.fileSchema.integers.includes(parameter) || this.fileSchema.booleans.includes(parameter) || this.fileSchema.strings.includes(parameter)) {
            response = this.returnTypeValueCorrect(parameter, value);
            // }
        } else {
            if (typeof value != 'boolean') {
                response = (Number(value) ? parseInt(value) : value);
            } else {
                response = true;
            }
        }
        return response;
    }

    displayCommandParameters() {
        let showResponse = '\tInput: ' + this.command + '\n';
        showResponse += this.controlValueParameter();
        if (this.controlValueParameter() == '') {
            showResponse += JSON.stringify(this.getObjectParameter());
        }
        return showResponse;
    }

    getSchema() {
        return this.fileSchema;
    }

    returnTypeValueCorrect(parameter, value) {
        let valueCorrect = value;
        if (this.fileSchema.booleans.includes(parameter)) {
            valueCorrect = (typeof value != 'boolean') ? false : true;
        } else if (this.fileSchema.integers.includes(parameter)) {
            valueCorrect = isNaN(value) || typeof value == 'boolean' ? 0 : parseInt(value);
        } else if (this.fileSchema.strings.includes(parameter)) {
            valueCorrect = (typeof value != 'string') ? '' : value;
        }
        return valueCorrect;
    }
}