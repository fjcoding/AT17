
export function Grid(numberOfArrows, numberOfColumns) {
    this.numberOfArrows = numberOfArrows;
    this.numberOfColumns = numberOfColumns;
    var matrix = new Array();

    this.load = function() {
        for (let i = 0; i < numberOfArrows; i++) {
            matrix[i] = new Array();

            for (let j = 0; j < numberOfColumns; j++) {
                matrix[i][j] = this.random();
            }
        }
    };

    this.random = function() {
        let randomN = Math.random();
        let white = 0;
        let black = 1;
        if (randomN < 0.2) {
            return black;
        }
        return white;
    };
    this.print = function() {
        for (let element in matrix) {
            console.log(element + '=' + matrix[element]);
        }
    };

    this.getValor = function(n, m) {
        return matrix[n][m];
    };

    this.setValor = function(n, m, v) {
        matrix[n][m] = v;
    };
}


export function Ant(arrow, column, direction, matrix) {
    this.arrow = arrow;
    this.column = column;

    this.direction = direction;
    this.matrixCopy = matrix;

    this.setDir = function(direction) {
        this.direction = direction;
    };
    this.rigth = function() {
        //n=north, e= est, s=south, w=west
        let directions = ['n', 'e', 's', 'w'];
        let i = directions.indexOf(this.direction);
        if (i + 1 > 3) {
            return directions[0];
        } else {
            return directions[i + 1];
        }
    };
    this.left = function() {
        //n=north, e= est, s=south, w=west
        let directions = ['n', 'e', 's', 'w'];
        let i = directions.indexOf(this.direction);
        if (i - 1 == -1) {
            return directions[4];
        } else {
            return directions[i - 1];
        }
    };

    this.changeDirection = function() {
        let white = 0;
        let black = 1;
        if (this.matrixCopy.getValor(this.arrow, this.column) == white) {
            this.setDir(this.rigth());

            this.matrixCopy.setValor(this.arrow, this.column, black);
        } else {
            this.setDir(this.left());

            this.matrixCopy.setValor(this.arrow, this.column, white);
        }
    };
    this.move = function(nStep) {
        for (let i = 0; i < nStep; i++) {
            console.log('Ant position: ' + this.arrow + ',' + this.column + ', ' + this.direction);
            this.changeDirection();
            if (this.direction == 'n') {
                this.arrow = this.arrow - 1;
            }
            if (this.direction == 's') {
                this.arrow = this.arrow + 1;
            }
            if (this.direction == 'e') {
                this.column = this.column + 1;
            }
            if (this.direction == 'w') {
                this.column = this.column - 1;
            }
            console.log('-----------------');
            this.matrixCopy.print();
        }
    };
}
