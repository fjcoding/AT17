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
    return matrix;
}
export function nextDirection(matrix, row, column, direction) {
    var sense = true; // true: right , false:left
    if (matrix[row][column] == 1) {
        sense = false;
    }
    if (sense) {
        if (direction != Direction.LEFT) {
            return direction + 1;
        } else {
            return 0;
        }
    } else {
        if (direction != Direction.UP) {
            return direction - 1;
        } else {
            return 3;
        }
    }
}
export function move(x, y, direction, size) {
    const max = size - 1;
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