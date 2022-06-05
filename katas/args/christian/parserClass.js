export class Parser {
    constructor(args) {
        this.args = args;
    }

    init() {
        let array = this.args.split(' ');
        let result = verifyString(array);

        if (result == '') {
            return 'Ningun Argumento Coincide';
        } else {
            return result;
        }
    }
}


export function verifyString(array) {
    let aux = '';
    for (let i = 0; i < array.length; i++) {
        if (array[i] == '-l') {
            aux += true + ' ';
        }
        if (array[i] == '-p' && array[i + 1] != undefined) {
            if (!isNaN(array[i + 1])) {
                aux += array[i + 1] + ' ';
            }
        }
        if (array[i] == '-d' && array[i + 1] != undefined) {
            if (isNaN(array[i + 1])) {
                aux += array[i + 1] + ' ';
            }
        }
        if (array[i] == '-g' && array[i + 1] != undefined) {
            let arrString = array[i + 1].split(',');
            if (isArrayString(arrString)) {
                aux += arrString + ' ';
            }
        }
        if (array[i] == '-n' && array[i + 1] != undefined) {
            let arrNumber = array[i + 1].split(',');
            if (isArrayNumber(arrNumber)) {
                aux += arrNumber + ' ';
            }
        }
    }
    return aux.trim();
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