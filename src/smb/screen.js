const EMPTY_PIXEL = '.';

export class Screen {
    constructor(rows, columns) {
        this.rows = rows;
        this.columns = columns;
        this.content = [];
        this.init();
    }

    init() {
        for (let row = 0; row < this.rows; row++) {
            this.content[row] = [];
            for (let column = 0; column < this.columns; column++) {
                this.content[row][column] = EMPTY_PIXEL;
            }
        }
    }

    print() {
        let printed = '';
        for (let row = 0; row < this.rows; row++) {
            for (let column = 0; column < this.columns; column++) {
                printed += this.content[row][column];
            }
            printed += '\n';
        }
        return printed;
    }
}