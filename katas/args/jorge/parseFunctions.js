export class textParserToArray {
    constructor(inputText) {
        this.inputText = inputText;
    }

    init() {
        let textIntoArray = this.inputText.split(' ');
        let result = verifyInputString(textIntoArray);

        if (result == '') {
            return 'Please write again your input Text';
        } else {
            return result;
        }
    }
}

export function verifyInputString(array) {
    let result = '';
    let size = array.length;
    // -l flag logging = trues if exist and false if not exist
    for (let i = 0; i < size; i++) {
        if (array[i] == '-l') {
            result += true + ' ';
        }
        // -p flag port = port must go accompanied for number of port (Number)
        if (array[i] == '-p' && array[i + 1] != undefined) {
            if (!isNaN(array[i + 1])) {
                result += array[i + 1] + ' ';
            }
        }
        // -d flag directory =  directory must go accompanied for direction of directory (String)
        if (array[i] == '-d' && array[i + 1] != undefined) {
            if (isNaN(array[i + 1])) {
                result += array[i + 1] + ' ';
            }
        }
        // -g flag Array Of String = must go accompanied for Array Of String
        if (array[i] == '-g' && array[i + 1] != undefined) {
            let flagString = array[i + 1].split(',');
            if (isString(flagString)) {
                result += flagString + ' ';
            }
        }
        // -n flag Array Of Numbers = must go accompanied for Array Of Numbers
        if (array[i] == '-n' && array[i + 1] != undefined) {
            let flagNumber = array[i + 1].split(',');
            if (isNumber(flagNumber)) {
                result += flagNumber + ' ';
            }
        }
    }
    return result.trim();
}


export function isString(array) {
    let size = array.length;

    for (let i = 0; i < size; i++) {
        if (isNaN(array[i])) {
            return true;
        } else {
            return false;
        }
    }
    return true;
}

export function isNumber(array) {
    let size = array.length;

    for (let i = 0; i < size; i++) {
        if (!isNaN(parseInt(array[i]))) {
            return true;
        } else {
            return false;
        }
    }

    return true;
}