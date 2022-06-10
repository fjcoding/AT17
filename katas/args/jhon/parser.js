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
        this.res = {
            l : false,
            p : 0,
            d : ''
        };
        this.pos = 0;
    }

    parser(args) {
        while (this.pos < args.length) {
            let char = args.charAt(this.pos);
            if (char == '-') {
                char = args.charAt(this.pos = this.pos + 1);
                let charR = args.charAt(this.pos = this.pos + 1);
                this.disjoinArgs(char, charR, args);
            } else {
                console.log('Please insert valids args');
                break;
            }
        }
        return this.res;
    }

    disjoinArgs(char, charR, args) {
        if (this.isCommand(char) && charR == ' ' && args.charAt(this.pos + 1) != '-') {
            let cont = this.getValue(args, this.pos);
            this.pos = this.pos + cont.length + 2;
            this.res[char] = this.fillSchema(cont, char);
            console.log(this.res);
        } else {
            this.res[char] = this.fillSchema('', char);
            this.pos++;
        }
    }

    isCommand(char) {
        let flag = Boolean(false);
        for (let index = 0; index < 3; index++) {
            let args = 'param' + index;
            let charAux = this.schema[args]['symbol'];
            if (char == charAux) {
                flag = Boolean(true);
            }
        }
        return flag;
    }

    getValue(args, pos) {
        let res = '';
        for (let index = pos + 1; index < args.length; index++) {
            if (args.charAt(index) != ' ') {
                res = res + args.charAt(index);
            } else {
                index = args.length;
            }
        }
        return res;
    }

    fillSchema(cont, command) {
        let flag;
        if (command == 'l') {
            flag = cont.length <= 0;
        } else if (command == 'p') {
            flag = this.isNumber(cont) ? flag = cont * 1 : flag = 0;
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