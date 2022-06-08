let map = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const column = 27;
const rows = 30;

let arrText = '';

const LEFT = 0;
const UP = 1;
const RIGHT = 2;
const DOWN = 3;

export class Pacman {
    constructor() {
        this.positionX = 1;
        this.positionY = 29;
        this.direction = RIGHT;
    }
}

export function movePacman(pacman) {
    switch (pacman.direction) {
    case LEFT:
        pacman.positionX--;
        break;
    case UP:
        pacman.positionY--;
        break;
    case RIGHT:
        pacman.positionX++;
        break;
    case DOWN:
        pacman.positionY++;
        break;
    }
}

function checkRight(map, pacman) {
    if (map[pacman.positionY][pacman.positionX + 1] == 1) {
        return RIGHT;
    } else if (map[pacman.positionY - 1][pacman.positionX] == 1) {
        return UP;
    } else if (map[pacman.positionY + 1][pacman.positionX] == 1) {
        return DOWN;
    }
}

function checkLeft(map, pacman) {
    if (map[pacman.positionY][pacman.positionX - 1] == 1) {
        return LEFT;
    } else if (map[pacman.positionY - 1][pacman.positionX] == 1) {
        return UP;
    } else if (map[pacman.positionY + 1][pacman.positionX] == 1) {
        return DOWN;
    }
}

function checkUp(map, pacman) {
    if (map[pacman.positionY - 1][pacman.positionX] == 1) {
        return UP;
    } else if (map[pacman.positionY][pacman.positionX + 1] == 1) {
        return RIGHT;
    } else if (map[pacman.positionY][pacman.positionX - 1] == 1) {
        return LEFT;
    }
}

function checkDown(map, pacman) {
    if (map[pacman.positionY + 1][pacman.positionX] == 1) {
        return DOWN;
    } else if (map[pacman.positionY][pacman.positionX + 1] == 1) {
        return RIGHT;
    } else if (map[pacman.positionY][pacman.positionX - 1] == 1) {
        return LEFT;
    }
}

function checkCorners (map, pacman) {
    switch (pacman.direction) {
    case RIGHT:
        return checkRight(map, pacman);
    case LEFT:
        return checkLeft(map, pacman);
    case UP:
        return checkUp(map, pacman);
    case DOWN:
        return checkDown(map, pacman);
    }
}

function changeStatus(map, pacman) {
    if (map[pacman.positionY][pacman.positionX] == 1) {
        map[pacman.positionY][pacman.positionX] = 2;
    }
}

export function checkPath(pacman, map) {
    pacman.direction = checkCorners(map, pacman);
    changeStatus(map, pacman);
    movePacman(pacman);
}

function run(pacman, map) {
    //console.clear();
    process.stdout.write('\x1Bc');
    checkPath(pacman, map);
    for (let i = 0; i <= rows; i++) {
        for (let k = 0; k <= column; k++) {
            if (pacman.positionY == i && pacman.positionX == k) {
                arrText += '\u15E7' + '  ';
            } else {
                if (map[i][k] == 0) {
                    arrText += '\u25B1' + '  ';
                } else if ((map[i][k] == 1)) {
                    arrText += '*' + '  ';
                } else if ((map[i][k] == 2)) {
                    arrText += ' ' + '  ';
                }
            }
            process.stdout.write(arrText);
            arrText = '';
        }
        process.stdout.write('\n');
    }
}

let pacman = new Pacman();
// run(pacman);
// let counter = 0;
// if (counter <= 5) {
//     counter++;
// } else {
//     clearInterval(intervalId);
// }
// console.clear();
setInterval(run, 500, pacman, map);

