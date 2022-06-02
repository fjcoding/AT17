import { Ant } from './ant.js';

export class TableAnt {
    constructor(size = 3) {
        this.ant = new Ant();
        this.table = this.createTable(size);
    }

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

            if (this.ant.direction == this.ant.NORTH) {
                this.takeAStep(posX - 1, true, posX, posY);
            }
            if (this.ant.direction == this.ant.SOUTH) {
                this.takeAStep(posX + 1, true, posX, posY);
            }
            if (this.ant.direction == this.ant.EAST) {
                this.takeAStep(posY + 1,false, posX, posY);
            }
            if (this.ant.direction == this.ant.WEST) {
                this.takeAStep(posY - 1, false, posX, posY);
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
        let isAnt = false;
        if (this.table[positionX][positionY] instanceof Ant) {
            isAnt = true;
        }
        return isAnt;
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

    takeAStep(step, axisX, positionX, positionY) {

        if (axisX) {
            this.ant.positionX = this.controlerLimits(step);
            this.table[positionX][positionY] = this.ant.paint(this.ant.colorCell);
            this.ant.colorCell = this.table[this.controlerLimits(step)][positionY];
            this.table[this.controlerLimits(step)][positionY] = this.ant;
        } else {
            this.ant.positionY = this.controlerLimits(step);
            this.table[positionX][positionY] = this.ant.paint(this.ant.colorCell);
            this.ant.colorCell = this.table[positionX][this.controlerLimits(step)];
            this.table[positionX][this.controlerLimits(step)] = this.ant;
        }
    }
}