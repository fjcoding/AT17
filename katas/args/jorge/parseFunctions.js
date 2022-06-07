export class textParserToArray {
    constructor(args) {
        this.args = args;
    }

    init() {
        let textIntoArray = this.args.split(' ');  
        let result = verifyString(textIntoArray);

        if (result == '') {
            return 'Please write your args';
        } else {
            return result;
        }
    }
}

export function verifyString(array) {
    let result = '';
    // -l flag logging = trues if exist and false if not exist
    for (let i = 0; i < array.length; i++) {
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
            let arrString = array[i + 1].split(',');
            if (isArrayString(arrString)) {
                result += arrString + ' ';
            }
        }
        // -n flag Array Of Numbers = must go accompanied for Array Of Numbers
        if (array[i] == '-n' && array[i + 1] != undefined) {
            let arrNumber = array[i + 1].split(',');
            if (isArrayNumber(arrNumber)) {
                result += arrNumber + ' ';
            }
        }
    }
    return result.trim();
}


export function isArrayString(array) {
    let flag = true;

    for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
            flag = flag && true;
        } else {
            return false;
        }
    }
    return flag;
}

export function isArrayNumber(array) {
    let flag = true;

    for (let i = 0; i < array.length; i++) {
        if (!isNaN(parseInt(array[i]))) {
            flag = flag && true;
        } else {
            return false;
        }
    }

    return flag;
}