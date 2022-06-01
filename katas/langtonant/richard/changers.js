export function changePositionX(posX, direction) {
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
export function changePositionY(posY, direction) {
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
export function ChangeColor(myArray, posX, PosY) {
    if (myArray[PosY][posX] == 'O') {
        myArray[PosY][posX] = '#';
    } else {
        myArray[PosY][posX] = 'O';
    }
    return myArray;
}


export function ChangeDirection(OldDir, color) {
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

