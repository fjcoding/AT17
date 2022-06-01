import { isSquareBlack } from './verifiers.js';
import { isSquareLimit } from './verifiers.js';
import { changePositionX } from './changers.js';
import { changePositionY } from './changers.js';
import { ChangeColor } from './changers.js';
import { ChangeDirection } from './changers.js';
import { printLimit } from './printers.js';
import { printGrid } from './printers.js';

export function Langtonant(DimensionSize, numberSteps) {
    console.log('The Area will be : ' + DimensionSize + ' X ' + DimensionSize);
    console.log('Steps Number: ' + numberSteps);
    var size = parseInt(DimensionSize);
    var myArray = new Array();
    for (let i = 0; i < size; i++) {
        myArray[i] = new Array();
        for (let j = 0; j < size; j++) {
            myArray[i][j] = 'O';
        }
    }
    // status ant
    var HeadDirection = 'left';
    var posX = (Math.floor(size / 2)) - 1;
    var posY = (Math.floor(size / 2)) - 1;
    console.log('X: ' + posX + ' - ' + 'Y: ' + posY);

    for (let i = 1; i <= parseInt(numberSteps); i++) {
        //Code Ant
        if (isSquareBlack(myArray, posX, posY)) {
            HeadDirection = ChangeDirection(HeadDirection, 'black');
            myArray = ChangeColor(myArray, posX, posY);
        } else {
            HeadDirection = ChangeDirection(HeadDirection, 'white');
            myArray = ChangeColor(myArray, posX, posY);
        }

        posX = changePositionX(posX, HeadDirection);
        posY = changePositionY(posY, HeadDirection);

        posX = isSquareLimit(posX, size);
        posY = isSquareLimit(posY, size);

        console.log('');
        console.log('step: ' + i);
        printLimit(size);
        printGrid(myArray, size);
        printLimit(size);
        console.log('info ant: dir>' + HeadDirection + ' _ ' + 'pos>[' + posY + '][' + posX + ']');
        console.log('');
    }
}