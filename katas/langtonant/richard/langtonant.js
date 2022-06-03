import { isSquareBlack } from './verifiers.js';
import { isSquareLimit } from './verifiers.js';
import { changePositionX } from './changers.js';
import { changePositionY } from './changers.js';
import { ChangeColor } from './changers.js';
import { ChangeDirection } from './changers.js';


export function langtonant(DimensionSize, numberSteps) {
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
    }
    return myArray;
}