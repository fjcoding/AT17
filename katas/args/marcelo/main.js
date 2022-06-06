import { Interpreter } from './interpreter.js';


// let intepreterCommand = new Interpreter(process.argv[2],"./commandsSchema.json");
let intepreterCommand = new Interpreter(process.argv[2]);
console.log("Used Schema: ");
console.log(intepreterCommand.getSchema());
console.log("Result: ");
console.log(intepreterCommand.displayParameters());

