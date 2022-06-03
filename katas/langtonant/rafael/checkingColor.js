//this functino check if the color is black
export function ChekingColorBlack(Picture, posX, PosY) {
    if (Picture[PosY][posX] == 'b') {
        return true;
    } else {
        return false;
    }
}