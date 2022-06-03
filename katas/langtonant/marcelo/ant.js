export class Ant {
    constructor() {
        this.EAST = 'E';
        this.WEST = 'O';
        this.NORTH = 'N';
        this.SOUTH = 'S';
        this.listImagens = { 'N': '↑', 'S': '↓', 'E': '→', 'O': '←' };
        this.direction = this.NORTH;
        this.imageAnt = '↑';
        this.positionX = 0;
        this.positionY = 0;
        this.colorCellBlack = '#';
        this.colorCellWhite = '.';
    }

    rotate(color = '.') {
        if (color == this.colorCellWhite || color == this.colorCellBlack) {
            switch (this.direction) {
            case this.NORTH: this.direction = (color == this.colorCellWhite) ? this.EAST : this.WEST; break;
            case this.SOUTH: this.direction = (color == this.colorCellWhite) ? this.WEST : this.EAST; break;
            case this.EAST: this.direction = (color == this.colorCellWhite) ? this.SOUTH : this.NORTH; break;
            case this.WEST: this.direction = (color == this.colorCellWhite) ? this.NORTH : this.SOUTH; break;
            }
        }
    }

    paint(color = '.') {
        if (color == this.colorCellWhite || color == this.colorCellBlack) {
            let paintColor = this.colorCellWhite;
            if (color == this.colorCellWhite) {
                paintColor = this.colorCellBlack;
            }
            return paintColor;
        }
    }

    getDirecction() {
        return this.direction;
    }

    getImage() {
        return this.listImagens[this.direction];
    }
}

