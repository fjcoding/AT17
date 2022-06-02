import { Ant } from './ant.js';

export class TableAnt {
    constructor(size = 3) {
        this.ant = new Ant();
        this.table =  this.createTable(size);
    }
    // constructor(size = 3, positionX=2,positionX=5) {
    //     this.table =  tableArray(size);
    //     this.ant = new Ant();
    //     this.ant.positionX = positionX;
    //     this.ant.positionY = positionY;

    //     this.addAntTable(positionX, positionY);

    // }


    rotateAnt() {
        this.ant.rotate(this.ant.colorCell);
    }

    addAntTable(positionX, positionY) {
        if (positionX < this.table.length && positionY < this.table[0].length) {
            this.ant.positionX = positionX;
            this.ant.positionY = positionY;

            this.table[positionX][positionY] = this.ant;
        }
    }

    showTable() {
        let tableString = '';
        for (let i = 0; i < this.table.length; i++) {
            for (let j = 0; j < this.table[0].length; j++) {
                if (this.isAnt(i, j)) {
                    // tableString += this.ant.direction + ' ';
                    tableString += this.ant.getImage() + ' ';
                } else {
                    tableString += this.table[i][j] + ' ';
                }
            }
            tableString += '\n';
        }
        return tableString;
    }

    moveAnt(iterationAnt) {
        for (let k = 0; k < iterationAnt; k++) {
            this.rotateAnt();
            let posX = this.ant.positionX;
            let posY = this.ant.positionY;
            if (this.ant.direction == 'N') {
                this.ant.positionX = this.controlerLimits(posX - 1);
                this.table[posX][posY] = this.ant.paint(this.ant.colorCell);
                this.ant.colorCell = this.table[this.controlerLimits(posX - 1)][posY];
                this.table[this.controlerLimits(posX - 1)][posY] = this.ant;
            }
            if (this.ant.direction == 'S') {
                this.ant.positionX = this.controlerLimits(posX + 1);
                this.table[posX][posY] = this.ant.paint(this.ant.colorCell);
                this.ant.colorCell = this.table[this.controlerLimits(posX + 1)][posY];
                this.table[this.controlerLimits(posX + 1)][posY] = this.ant;
            }
            if (this.ant.direction == 'E') {
                this.ant.positionY = this.controlerLimits(posY + 1);
                this.table[posX][posY] = this.ant.paint(this.ant.colorCell);
                this.ant.colorCell = this.table[posX][this.controlerLimits(posY + 1)];
                this.table[posX][this.controlerLimits(posY + 1)] = this.ant;
            }
            if (this.ant.direction == 'O') {
                this.ant.positionY = this.controlerLimits(posY - 1);
                this.table[posX][posY] = this.ant.paint(this.ant.colorCell);
                this.ant.colorCell = this.table[posX][this.controlerLimits(posY - 1)];
                this.table[posX][this.controlerLimits(posY - 1)] = this.ant;
            }
        }
    }

    createTable(size = 10) {
        let tableArray = new Array(size);
        for (let i = 0; i < tableArray.length; i++) {
            tableArray[i] = new Array(size);
            for (let j = 0; j < tableArray.length; j++) {
                tableArray[i][j] = '.';
            }
        }

        return tableArray;
    }

    isAnt(positionX, positionY) {
        if (this.table[positionX][positionY] instanceof Ant) {
            return true;
        }
        return false;
    }

    controlerLimits(position) {
        let newPosition = position;
        if (position > this.table.length - 1) {
            newPosition = this.table.length - 1;
        } else {
            if (position < 0) {
                newPosition = 0;
            }
        }
        return newPosition;
    }
}