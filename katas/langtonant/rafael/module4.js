export function ChangeToBlackOrWhite(Picture, posX, PosY) {
    if (Picture[PosY][posX] == '.') {
        Picture[PosY][posX] = 'b' ;
    } else {
        Picture[PosY][posX] = '.';
    }
    return Picture;
}