// This funcionts show the position of the ant when he moves
export function positionX(positionX, dir) {
    switch (dir) {
    case 'up':
        return positionX;

    case 'right':
        return positionX + 1;

    case 'down':
        return positionX;

    case 'left':
        return positionX - 1;
    }
}
export function positionY(positionY, dir) {
    switch (dir) {
    case 'up':
        return positionY - 1;

    case 'right':
        return positionY;

    case 'down':
        return positionY + 1;

    case 'left':
        return positionY;
    }
}