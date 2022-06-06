export class ModuleArgs {
    constructor() {
        this.args = new Object();
    }

    getL(string) {
	    let expre = /-l/g;
	    let result = string.match(expre);
        if (result != null) {
            this.args.identifier = '-l';
            this.args.value = true;
        } else {
            this.args.identifier = '-l';
            this.args.value = false;
        }
        return this.args;
    }

    getP(string) {
        let expre = /-p ([1-9]{1}[0-9]*)*/g;
        let result = string.match(expre);
        if (result != null) {
            this.args.identifier = '-p';
            let value = result[0].match(/[1-9]{1}[0-9]*/g);
            if (value != null) {
                this.args.value = parseInt(value[0]);
            } else {
                this.args.value = 0;
            }
            return this.args;
        } else {
            return null;
        }
    }

    getD(string) {
        let expre = /-d (\/[a-zA-Z]+)*/g;
        let result = string.match(expre);
        if (result != null) {
            this.args.identifier = '-d';
            let val = result[0].match(/(\/[a-zA-Z]+)+/g);
            if (val != null) {
                this.args.value = val[0];
            } else {
                this.args.value = '';
            }
            return this.args;
        } else {
            return null;
        }
    }

    getG(string) {
        let expre = /-g ([a-z]+,*)+/g;
        let result = string.match(expre);
        if (result != null) {
            this.args.identifier = '-g';
            this.args.value = result[0].match(/[^-, ][a-z]+/g);
            return this.args;
        } else {
            return null;
        }
    }

    getDecimal(string) {
        let expre = /-d (-*[1-9][0-9]*,*)+/g;
        let result = string.match(expre);
        if (result != null) {
            this.args.identifier = '-d';
            this.args.value = result[0].match(/-*[1-9][0-9]*/g);
            return this.args;
        } else {
            return null;
        }
    }
}

