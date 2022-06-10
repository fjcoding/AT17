export class langtonant {
    constructor() {
        this.direction = 1;
        this.matrix = new Array(10);
        this.PosiX = 5;
        this.PosiY = 5;
        this.wayMatrix = new Array(10);
        this.Left  = 4, this.Up = 1, this.Right = 2, this.Down = 3;

        for (let i = 0; i < 10; i++) {
            this.matrix[i] = new Array(10);
            this.wayMatrix[i] = new Array(10);
        }
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                this.matrix[i][j] = true;
                this.wayMatrix[i][j] = true;
            }
        }
    }

    getPosiX() {
        return this.PosiX;
    }

    getPosiY() {
        return this.PosiY;
    }

    changeColorBlock() {
        this.matrix[this.getPosiX()][this.getPosiY()] = !this.matrix[this.getPosiX()][this.getPosiY()];
    }

    getColorBlock() {
        return this.matrix[this.getPosiX()][this.getPosiY()];
    }

    setColorBlock(ColorVar) {
        this.matrix[this.getPosiX()][this.getPosiY()] = ColorVar;
    }

    getMatrix() {
        return this.matrix;
    }

    changeDirection(ColorBlock) {
        // 1->up 2->right 3->down 4->left
        if (ColorBlock) {
            if (this.direction != this.Left) {
                this.direction++;
            } else {
                this.direction = this.Up;
            }
        } else {
            if (this.direction != this.Up) {
                this.direction--;
            } else {
                this.direction = this.Left;
            }
        }
    }

    setDirection(DirecVar) {
        this.direction = DirecVar;
    }

    getDirection() {
        return this.direction;
    }

    changePositionAnt() {
        if (this.direction == this.Up) {
            this.PosiX = this.PosiX - 1;
        }

        if (this.direction == this.Down) {
            this.PosiX = this.PosiX + 1;
        }

        if (this.direction == this.Right) {
            this.PosiY = this.PosiY + 1;
        }

        if (this.direction == this.Left) {
            this.PosiY = this.PosiY - 1;
        }
    }

    printmatriz() {
        let cadena = '';
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.matriz[i][j]) {
                    cadena = cadena + '■';
                } else {
                    cadena = cadena + ' ';
                }
            }
            console.log(cadena);
            cadena = '';
        }
    }

    setWayAnt(PosX, PosY) {
        this.wayMatrix[PosX][PosY] = false;
    }

    printWaymatrix() {
        let cadena = '';
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                if (this.wayMatrix[i][j]) {
                    cadena = cadena + '■';
                } else {
                    cadena = cadena + ' ';
                }
            }
            console.log(cadena);
            cadena = '';
        }
    }
}

