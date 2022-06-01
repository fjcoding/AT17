
export function Langtonant(DimensionSize, numberSteps) {
    console.log('The Area will be : ' + DimensionSize + ' X ' + DimensionSize);
    console.log('Steps Number: ' + numberSteps);
    var size = parseInt(DimensionSize);
    var myArray = new Array();
    for (let i = 0;i < size;i++) {
        myArray[i] = new Array();
        for (let j = 0;j < size;j++) {
            myArray[i][j] = 'O';
        }
    }

    // status ant
    var HeadDirection = 'left';
    var posX = (Math.floor(size / 2)) - 1;
    var posY = (Math.floor(size / 2)) - 1;
    console.log('X: ' + posX + ' - ' + 'Y: ' + posY);


    for (let i = 1;i <= parseInt(numberSteps);i++) {
        //Code Ant
        if (VerifyBlack(myArray, posX, posY)) {
            HeadDirection = ChangeDirection(HeadDirection, 'black');
            myArray = ChangeColor(myArray, posX, posY);
        } else {
            HeadDirection = ChangeDirection(HeadDirection, 'white');
            myArray = ChangeColor(myArray, posX, posY);
        }

        posX = changePositionX(posX, HeadDirection);
        posY = changePositionY(posY, HeadDirection);

        posX = VerifyLimitAnt(posX, size);
        posY = VerifyLimitAnt(posY, size);


        console.log('');
        console.log('step: ' + i);
        MostrarLimite(size);
        mostrarMatriz(myArray, size);
        MostrarLimite(size);
        console.log('info ant: dir>' + HeadDirection + ' _ ' + 'pos>[' + posY + '][' + posX + ']');
        console.log('');
    }

    function VerifyLimitAnt(value, size) {
        if (value > size) {
            return 0;
        }
        if (value < 0) {
            return size - 1;
        }
        return value;
    }
    function changePositionX(posX, direction) {
        switch (direction) {
        case 'up':
            return posX;
        case 'right':
            return posX + 1;
        case 'down':
            return posX;
        case 'left':
            return posX - 1;
        }
    }
    function changePositionY(posY, direction) {
        switch (direction) {
        case 'up':
            return posY - 1;
        case 'right':
            return posY;
        case 'down':
            return posY + 1;
        case 'left':
            return posY;
        }
    }
    function ChangeColor(myArray, posX, PosY) {
        if (myArray[PosY][posX] == 'O') {
            myArray[PosY][posX] = '#';
        } else {
            myArray[PosY][posX] = 'O';
        }
        return myArray;
    }


    function ChangeDirection(OldDir, color) {
        if (color == 'black') {
            switch (OldDir) {
            case 'up':
                return 'left';
            case 'right':
                return 'up';
            case 'down':
                return 'right';
            case 'left':
                return 'down';
            }
        } else {
            if (color == 'white') {
                switch (OldDir) {
                case 'up':
                    return 'right';
                case 'right':
                    return 'down';
                case 'down':
                    return 'left';
                case 'left':
                    return 'up';
                }
            }
        }
    }
    function VerifyBlack(myArray, posX, PosY) {
        if (myArray[PosY][posX] == '#') {
            return true;
        } else {
            return false;
        }
    }
}
function MostrarLimite(size) {
    var LimArray = Array(size).fill('-');
    console.log(...LimArray);
}
function mostrarMatriz(ArrayM, lenght) {
    for (let i = 0; i < lenght; i++) {
        console.log(...ArrayM[i]);
    }
}