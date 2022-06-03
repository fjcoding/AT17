//this function change the color according to the last position
export function ChangeToBlackOrWhite(Picture, posX, PosY) {
    if (Picture[PosY][posX] == '.') {
        Picture[PosY][posX] = 'b';
    } else {
        Picture[PosY][posX] = '.';
    }
    return Picture;
}