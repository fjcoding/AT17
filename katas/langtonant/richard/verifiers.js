export function isSquareLimit(value, size) {
    if (value == size) {
        return 0;
    }
    if (value < 0) {
        return (size - 1);
    }
    return value;
}
export function isSquareBlack(myArray, posX, PosY) {
    ///console.log('Entra X:['+posX+']  - Y:['+PosY+']' )
    if (myArray[PosY][posX] == '#') {
        return true;
    } else {
        return false;
    }
}