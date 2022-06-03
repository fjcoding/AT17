import {Board} from './board.js';
export class Langtonant {
    constructor(sizeX, sizeY) {
        this.positionX = this.random(0, sizeX);
        this.positionY = this.random(0, sizeY);
        this.orientation = 0;
        this.board = new Board(sizeX, sizeY).createBoard();
    }

    langtonantFunction(moves) {
        const steps = moves * 1;
        if (steps > 0) {
            var count = 0;
            while (count < steps) {
                var x = this.positionX;
                var y = this.positionY;
                if (this.isPosValid(x, y)) {
                    if (this.isWhiteSlot(x, y)) {
                        this.board[x][y] = '0';
                        this.turnRight();
                        this.updatePos();
                        this.printBoard();
                        count++;
                    } else {
                        this.board[x][y] = ' ';
                        this.turnLeft();
                        this.updatePos();
                        this.printBoard();
                        count++;
                    }
                } else {
                    this.setValidPos(x, y);
                }
            }
        } else {
            console.log('Insert a valid number of steps');
        }
    }

    isPosValid(posXin, posYin) {
        var posX = posXin * 1;
        var posY = posYin * 1;
        var res = Boolean(false);
        if (posX >= 0 && posX < this.board.length) {
            if (posY >= 0 && posY < this.board.length) {
                res = Boolean(true);
            }
        }
        return res;
    }

    setValidPos(posXin, posYin) {
        var posX = posXin * 1;
        var posY = posYin * 1;
        if (posX < 0) {
            this.positionX = this.board.length - 1;
        } else if (posX >= this.board.length) {
            this.positionX = 0;
        }
        if (posY < 0) {
            this.positionY = this.board.length - 1;
        } else if (posY >= this.board.length) {
            this.positionY = 0;
        }
    }

    isWhiteSlot(posXin, posYin) {
        var posX = posXin * 1;
        var posY = posYin * 1;
        var res = Boolean(false);
        if (this.board[posX][posY] == ' ') {
            res = Boolean(true);
        }
        return res;
    }

    turnLeft() {
        this.orientation--;
        if (this.orientation < 0) {
            this.orientation = 3;
        }
    }

    turnRight() {
        this.orientation++;
        if (this.orientation > 3) {
            this.orientation = 0;
        }
    }

    updatePos() {
        if (this.orientation === 0) {
            this.positionX--;
        } else if (this.orientation === 1) {
            this.positionY++;
        } else if (this.orientation === 2) {
            this.positionX++;
        } else if (this.orientation === 3) {
            this.positionY--;
        }
    }

    printBoard() {
        console.clear();
        let boardFilled = this.board;
        console.log(boardFilled.join('\n') + '\n\n');
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}