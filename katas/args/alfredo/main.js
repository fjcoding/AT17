import { Console } from 'console';
import { ModuleArgs } from './ModuleArgs.js';

let string = '-l -d /user/val -p 8080 -g list,of,words,random';

const Marg = new ModuleArgs();

if (Marg.getP(string) == null) {
    console.log('The parameter p is not present');
} else {
    if (Marg.getD(string) == null) {
        console.log('The parameter d is not presents');
    } else {
	    console.log(Marg.getL(string));
        console.log(Marg.getP(string));
        console.log(Marg.getD(string));
        console.log(Marg.getG(string));
        console.log(Marg.getDecimal(string));
    }
}

