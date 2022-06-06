import { ModuleArgs } from './ModuleArgs.js';

//npm run args:alfredo -- "-l -d /user/val -p 8080 -g world,aleatory,phase -d 5,4,-3,-2" example of use

let string = process.argv[2];
console.log('String to eval : ' + string);
const Marg = new ModuleArgs();
if (Marg.getP(string) == null) {
    console.log('The parameter p is not present');
} else {
    if (Marg.getD(string) == null) {
        console.log('The parameter d is not presents');
    } else {
        let paramL = Marg.getL(string);
        let paramP = Marg.getP(string);
        let paramD = Marg.getD(string);
        let paramG = Marg.getG(string);
        let paramDe = Marg.getDecimal(string);
        console.log(paramL);
        console.log(paramP);
        console.log(paramD);
        if (paramG != null) {
            console.log(paramG);
        }
        if (paramDe != null) {
            console.log(paramDe);
        }
    }
}