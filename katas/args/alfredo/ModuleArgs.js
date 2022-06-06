export class ModuleArgs {
    constructor() {
    }

    getL(string) {
        let args = new Object();
        let expre = /-l/g;
        let result = string.match(expre);
        if (result != null) {
            args.identifier = '-l';
            args.value = true;
        } else {
            args.identifier = '-l';
            args.value = false;
        }
        return args;
    }

    getP(string) {
        let args = new Object();
        let expre = /-p ([1-9]{1}[0-9]*)*/g;
        let result = string.match(expre);
        if (result != null) {
            args.identifier = '-p';
            let value = result[0].match(/[1-9]{1}[0-9]*/g);
            if (value != null) {
                args.value = parseInt(value[0]);
            } else {
                args.value = 0;
            }
            return args;
        } else {
            return null;
        }
    }

    getD(string) {
        let args = new Object();
        let expre = /-d (\/[a-zA-Z]+)*/g;
        let result = string.match(expre);
        if (result != null) {
            args.identifier = '-d';
            let val = result[0].match(/(\/[a-zA-Z]+)+/g);
            if (val != null) {
                args.value = val[0];
            } else {
                args.value = '';
            }
            return args;
        } else {
            return null;
        }
    }

    getG(string) {
        let args = new Object();
        let expre = /-g ([a-z]+,*)+/g;
        let result = string.match(expre);
        if (result != null) {
            result[0] = result[0].substring(2, result[0].length);
            args.identifier = '-g';
            args.value = result[0].match(/[a-z]+/g);
            return args;
        } else {
            return null;
        }
    }

    getDecimal(string) {
        let args = new Object();
        let expre = /-d (-*[1-9][0-9]*,*)+/g;
        let result = string.match(expre);
        if (result != null) {
            args.identifier = '-d';
            args.value = result[0].match(/-*[1-9][0-9]*/g).map(Number);
            return args;
        } else {
            return null;
        }
    }
}