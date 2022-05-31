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
export function nextDirection(direction1, min, max) {
    var direction2;
    if (direction1 == Direction.UP) {
        do {
            direction2 = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (direction2 == 2);
    }
    if (direction1 == Direction.RIGHT) {
        do {
            direction2 = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (direction2 == 3);
    }
    if (direction1 == Direction.DOWN) {
        do {
            direction2 = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (direction2 == 0);
    }
    if (direction1 == Direction.LEFT) {
        do {
            direction2 = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (direction2 == 1);
    }
    return direction2;
}
export function move(x, y, direction, size) {
    var max = size - 1;
    if (direction == Direction.UP) {
        if (x == 0) {
            x = max;
        } else {
            x -= 1;
        }
    } else if (direction == Direction.RIGHT) {
        if (y == max) {
            y = 0;
        } else {
            y += 1;
        }
    } else if (direction == Direction.DOWN) {
        if (x == max) {
            x = 0;
        } else {
            x += 1;
        }
    } else if (direction == Direction.LEFT) {
        if (y == 0) {
            y = max;
        } else {
            y -= 1;
        }
    }
    return [x, y];
}