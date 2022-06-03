
export function Grid(n, m) {
    this.n = n;
    this.m = m;
    var matrix = new Array();

    this.load = function() {
        for (let i = 0; i <= n - 1; i++) {
            matrix[i] = new Array();

            for (let j = 0; j <= m - 1; j++) {
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
        for (let elemento in matrix) {
            console.log(elemento + '=' + matrix[elemento]);
        }
    };

    this.getValor = function(n, m) {
        return matrix[n][m];
    };

    this.setValor = function(n, m, v) {
        matrix[n][m] = v;
    };
    
}


export function Ant(a, c, direction, matrix) {
    this.a = a;
    this.c = c;

    this.direction = direction;
    this.matrixCopy = matrix;

    this.setDir = function(dir) {
        this.direction = dir;
    };
    this.rigth = function() {
        let directions = ['n', 'e', 's', 'w'];

        let i = directions.indexOf(this.direction);
        console.log(' turn to right');
        if (i + 1 > 3) {
            return directions[0];
        } else {
            return directions[i + 1];
        }
    };
    this.left = function() {
        let directions = ['n', 'e', 's', 'w'];

        let i = directions.indexOf(this.direction);
        console.log(' turn to left');
        if (i - 1 == -1) {
            return directions[4];
        } else {
            return directions[i - 1];
        }
    };

    this.changeDirection = function() {
        let white = 0;
        let black = 1;
        if (this.matrixCopy.getValor(this.a, this.c) == white) {
            this.setDir(this.rigth());

            this.matrixCopy.setValor(this.a, this.c, black);
        } else {
            this.setDir(this.left());

            this.matrixCopy.setValor(this.a, this.c, white);
        }
    };
    this.move = function(nStep) {
        for (let i = 0; i < nStep; i++) {
            console.log('Ant position: ' + this.a + ',' + this.c + ', ' + this.direction);
            this.changeDirection();
            if (this.direction == 'n') {
                this.a = this.a - 1;
            }
            if (this.direction == 's') {
                this.a = this.a + 1;
            }
            if (this.direction == 'e') {
                this.c = this.c + 1;
            }
            if (this.direction == 'w') {
                this.c = this.c - 1;
            }
            console.log('-----------------');
            this.matrixCopy.print();
        }
    };
}

