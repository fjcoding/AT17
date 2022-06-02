export class Board {
    constructor(sizeX, sizeY) {
        this.positionX = sizeX * 1;
        this.positionY = sizeY * 1;
        this.board = new Array(sizeX * 1);
    }

    createBoard() {
        const x = this.positionX * 1;
        const y = this.positionY * 1;
        for (var i = 0; i < x; i++) {
            this.board[i] = new Array(y);
        }
        this.fillboard(x, y);
        return this.board;
    }

    fillboard(sizeX, sizeY) {
        const x = sizeX * 1;
        const y = sizeY * 1;
        for (var i = 0; i < x; i++) {
            for (var j = 0; j < y; j++) {
                this.board[i][j] = ' ';
            }
        }
    }
}