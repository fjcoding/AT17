export class Parser {
    constructor() {
        this.args = process.argv[2];
        this.schema = {
            param0 :{
                id: 0,
                symbol: 'l',
                type: 'boolean'
            },
            param1 :{
                id: 1,
                symbol: 'p',
                type: 'int'
            },
            param2 :{
                id: '2',
                symbol: 'd',
                type: 'String'
            }
        };
    }

    parser(args) {
        let res = {
            l : false,
            p : 0,
            d : ''
        };
        let pos = 0;
        while (pos < args.length) {
            let char = args.charAt(pos);
            if (char == '-') {
                char = args.charAt(pos = pos + 1);
                let charR = args.charAt(pos = pos + 1);
                if (this.isCommand(char) && charR == ' ' && args.charAt(pos + 1) != '-') {
                    let cont = this.getValue(args, pos);
                    pos = pos + cont.length + 2;
                    res[char] = this.fillSchema(cont, char);
                    console.log(res);
                } else {
                    res[char] = this.fillSchema('', char);
                    pos++;
                }
            } else {
                console.log('Inserte argumentos validos');
                break;
            }
        }
        return res;
    }

    isCommand(char) {
        let flag = Boolean(false);
        for (let x = 0; x < 3; x++) {
            let args = 'param' + x;
            let charAux = this.schema[args]['symbol'];
            if (char == charAux) {
                flag = Boolean(true);
            }
        }
        return flag;
    }

    getValue(args, pos) {
        let res = '';
        for (let x = pos + 1; x < args.length; x++) {
            if (args.charAt(x) != ' ') {
                res = res + args.charAt(x);
            } else {
                x = args.length;
            }
        }
        return res;
    }

    fillSchema(cont, command) {
        let flag;
        if (command == 'l') {
            if (cont.length <= 0) {
                flag = Boolean(true);
            } else {
                flag = Boolean(false);
            }
        } else if (command == 'p') {
            if (this.isNumber(cont)) {
                flag = cont * 1;
            } else {
                flag = 0;
            }
        } else if (command == 'd') {
            flag = cont;
        }
        return flag;
    }

    isNumber(number) {
        const regex = /^[0-9]*$/;
        const flag = regex.test(number);
        return flag;
    }
}