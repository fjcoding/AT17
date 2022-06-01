export var Direction = {
    UP:0,
    RIGHT:1,
    DOWN:2,
    LEFT:3,
};
export function changeColor(matrix, row, column) {
    if (matrix[row][column] == 0) {
        matrix[row][column] = 1;
    } else {
        matrix[row][column] = 0;
    }
}
export function nextDirection(direction1, min, max, x, y) {
    var direction2;
    if (direction1 == Direction.UP) {
        if (x == min && y == min) { //Top left corner
            direction2 = 1;
        } else if (x == min && y == max) { //Top right corner
            direction2 = 3;
        } else if (x == min) {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 2 || direction2 == 0);
        } else if (y == min) {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 2 || direction2 == 3);
        } else if (y == max) {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 2 || direction2 == 1);
        } else {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 2);
        }
    }
    if (direction1 == Direction.RIGHT) {
        if (x == min && y == max) { //Top right corner
            direction2 = 2;
        } else if (x == max && y == max) { //Lower right corner
            direction2 = 0;
        } else if (y == max) {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 3 || direction2 == 1);
        } else if (x == min) {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 3 || direction2 == 0);
        } else if (x == max) {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 3 || direction2 == 2);
        } else {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 3);
        }
    }
    if (direction1 == Direction.DOWN) {
        if (x == max && y == min) { //Lower left corner
            direction2 = 1;
        } else if (x == max && y == max) { //Lower right corner
            direction2 = 3;
        } else if (x == max) {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 0 || direction2 == 2);
        } else if (y == min) {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 0 || direction2 == 3);
        } else if (y == max) {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 0 || direction2 == 1);
        } else {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 0);
        }
    }
    if (direction1 == Direction.LEFT) {
        if (x == min && y == min) { //Top left corner
            direction2 = 2;
        } else if (x == max && y == min) { //Lower left corner
            direction2 = 0;
        } else if (y == min) {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 1 || direction2 == 3);
        } else if (x == min) {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 1 || direction2 == 0);
        } else if (x == max) {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 1 || direction2 == 2);
        } else {
            do {
                direction2 = Math.floor(Math.random() * 4);
            } while (direction2 == 1);
        }
    }
    return direction2;
}
export function move(x, y, direction) {
    if (direction == Direction.UP) {
        x -= 1;
    } else if (direction == Direction.RIGHT) {
        y += 1;
    } else if (direction == Direction.DOWN) {
        x += 1;
    } else if (direction == Direction.LEFT) {
        y -= 1;
    }
    return [x, y];
}