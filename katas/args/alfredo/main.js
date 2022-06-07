import { ModuleOne } from './ModuleOne.js';

//npm run args:alfredo -- "-l -d /user/val -p 8080 -g world,aleatory,phase -d 5,4,-3,-2" example of use
let string = process.argv[2];
console.log('String to eval : ' + string);
const Marg = new ModuleOne(string);
let resultSchema = Marg.exeProcess();
if (!resultSchema[1].isDefine) {
    console.log('The parameter p is not present');
} else {
    if (!resultSchema[2].isDefine) {
        console.log('The parameter d is not presents');
    } else {
        console.log(resultSchema[0]);
        console.log(resultSchema[1]);
        console.log(resultSchema[2]);
        if (resultSchema[3].isDefine) {
            console.log(resultSchema[3]);
        }
        if (resultSchema[4].isDefine) {
            console.log(resultSchema[4]);
        }
    }
}