import { Interpreter } from './interpreter.js';

let schema = {
    'booleans':[ 'l', 'a', 'b', 'e', 'f'],
    'integers':['p', 'n'],
    'strings':['d', 'm']
};
// let intepreterCommand = new Interpreter(process.argv[2],"./commandsSchema.json");
let intepreterCommand = new Interpreter(process.argv[2], schema);

console.log(intepreterCommand.displayParameters());

