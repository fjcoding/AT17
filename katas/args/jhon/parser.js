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
                console.log('Please insert valids args');
                break;
            }
        }
        return res;
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