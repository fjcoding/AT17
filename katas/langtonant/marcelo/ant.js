export class Ant {
    constructor() {
        this.listImagens = {'N':'↑', 'S':'↓', 'E':'→', 'O':'←'};
        this.direction = 'N';
        this.imageAnt  = '↑';
        this.positionX = 0;
        this.positionY = 0;
        this.colorCell = '.';
    }

    rotate(color = '.') {
        switch (this.direction) {
        case 'N':this.direction = (color == '.') ? 'E' : 'O'; break;
        case 'S':this.direction = (color == '.') ? 'O' : 'E'; break;
        case 'E':this.direction = (color == '.') ? 'S' : 'N'; break;
        case 'O':this.direction = (color == '.') ? 'N' : 'S'; break;
        }
    }

    paint(color = '.') {
        let paintColor = '.';
        if (color == '.') {
            paintColor = '#';
        }
        return paintColor;
    }

    getDirecction() {
        return this.direction;
    }

    getImage() {
        return this.listImagens[this.direction];
    }
}

