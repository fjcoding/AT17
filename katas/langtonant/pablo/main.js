import { class1 } from './module1.js';
import { testFunc } from './module1.js';
import {grid} from './ant.js';

//console.log(new ant().start());
grid(process.argv[2],process.argv[3]);

// new class1().func1(process.argv[2],process.argv[3]);
// console.log(process.argv[4]);
// console.log(process.argv[5]);
console.log(process.argv[2]);
console.log(process.argv[3]);
// testFunc();