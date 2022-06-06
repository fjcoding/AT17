import {types} from './functions.js';
import {valueArgs} from './functions.js';
import {boolean} from './functions.js';

let argv = process.argv.slice(2);

while (argv.length) {
    let arg = argv.shift();
    if (arg.includes('-')) {
        arg = arg.substring(1);
        if (types[arg] === boolean) {
            valueArgs[arg] = true;
        } else {
            let value = argv.shift();
            if (types[arg] == null) {
                console.error('The -', arg, 'argument is not valid');
            } else if (value == undefined) {
                console.error('The value of the -', arg, 'argument is not defined *');
            } else {
                let check = types[arg](value);
                if (check == null) {
                    if (value.includes('-') && !value.includes(',')) {
                        console.error('The value of the -', arg, 'argument is not defined');
                        argv = [value, ...argv];
                    } else {
                        console.error('The value of the -', arg, 'is incorrect ');
                    }
                } else {
                    valueArgs[arg] = check;
                }
            }
        }
    }
}
console.log(valueArgs);