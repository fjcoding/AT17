import { class1 } from './module1.js';
import { testFunc } from './module1.js';

console.log(new class1().func1());
console.log(process.argv[2]);
console.log(process.argv[3]);
testFunc();