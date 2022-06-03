
import { langtonant } from './langtonant.js';

const DimensionSize = process.argv[2];
const numberSteps =  process.argv[3];
var myArray = new Array();

const LimArray = Array(parseInt(DimensionSize)).fill('-');


for (let i = 1; i <= parseInt(numberSteps); i++) {
    myArray = langtonant(parseInt(DimensionSize), i);
    console.log(...LimArray);
    for (let i = 0; i < parseInt(DimensionSize); i++) {
        console.log(...myArray[i]);
    }
    console.log(...LimArray);
}
