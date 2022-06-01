export class class1 {
    constructor() {
        this.direction = 1 ;
        this.matriz = new Array(10);
        this.posi = new Array(2);
        this.posi[0] = 5;
        this.posi[1] = 5;
        this.waymatriz = new Array(10);
    }

    changeblock() {
        this.posicion = this.getAntPosition();
        if (this.matriz[this.posicion[0]][this.posicion[1]]) {
            this.matriz[this.posicion[0]][this.posicion[1]] = false;
        } else {
            this.matriz[this.posicion[0]][this.posicion[1]] = true;
        }
    }

    matrizdefine() {
        for (let i = 0; i < 10 ;i++) {
            this.matriz[i] = new Array(10);
            this.waymatriz[i] = new Array(10);
        }
        for (let i = 0; i < 10 ;i++) {
            for (let j = 0; j < 10 ;j++) {
                this.matriz[i][j] = true;
                this.waymatriz[i][j] = true;
            }
        }
    }

    getmatriz() {
        return this.matriz;
    }

    changedirection(vardir) {
        // 1->up 2->right 3->down 4->left
        if (vardir) {
            if (this.direction != 4) {
                this.direction++;
            } else {
                this.direction = 1;
            }
        } else {
            if (this.direction != 1) {
                this.direction--;
            } else {
                this.direction = 4;
            }
        }
        return this.getdirection();
    }

    getdirection() {
        return this.direction;
    }

    getAntPosition() {
        return this.posi;
    }

    setAntPosition(newposi) {  // x--> file y--> column
        this.posi[0] = newposi[0];
        this.posi[1] = newposi[1];
    }

    changepositionAnt() {
        this.posicion = this.getAntPosition();
        if (this.direction == 1) {
            this.posicion[0] = this.posicion[0] - 1;
            this.setAntPosition(this.posicion);
        }
        if (this.direction == 3) {
            this.posicion[0] = this.posicion[0] + 1;
            this.setAntPosition(this.posicion);
        }
        if (this.direction == 2) {
            this.posicion[1] = this.posicion[1] + 1;
            this.setAntPosition(this.posicion);
        }
        if (this.direction == 4) {
            this.posicion[1] = this.posicion[1] - 1;
            this.setAntPosition(this.posicion);
        }
    }

    printmatriz() {
        let cadena = '';
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10 ; j++) {
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

    waysmatriz(position) {
        this.waymatriz[position[0]][position[1]] = false;
    }

    printwaymatriz() {
        let cadena = '';
        for (let i = 0; i < 10 ; i++) {
            for (let j = 0; j < 10 ; j++) {
                if (this.waymatriz[i][j]) {
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

