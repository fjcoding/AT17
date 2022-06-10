

export class Scenario {
    constructor(row, col) {
        this.row = row + 2;
        this.col = col + 2;
        this.content = [];
    }

    /**
     * This function create a vector bidimensional with borders adition but all of them will have character (' . ')
     *
     * . . . .
     * . . . .
     * . . . .
     * . . . .
     *
     * return this content
     */
    initBoard() {
        for (let row = 0; row < this.row; row++) {
            this.content[row] = [];
            for (let column = 0; column < this.col; column++) {
                this.content[row][column] = ' . ';
            }
        }
    }

    getBoard() {
        return this.content;
    }

    /**
     * This function create a border on the content with specific characters
     *
     * ╔-----╗
     * | . . |
     * | . . |
     * ╚-----╝
     *
     * return this content
     */
    putBorder() {
        for (let i = 0; i < this.col; i++) {
            this.content[0][i] = '---';
        }
        for (let i = 0; i < this.col; i++) {
            this.content[this.row - 1][i] = '---';
        }
        for (let i = 0; i < this.row; i++) {
            this.content[i][0] = ' | ';
        }
        for (let i = 0; i < this.row; i++) {
            this.content[i][this.col - 1] = ' | ';
        }
        this.content[0][0] = ' ╚-';
        this.content[0][this.col - 1] = '-╝ ';
        this.content[this.row - 1][0] = ' ╔-';
        this.content[this.row - 1][this.col - 1] = '-╗ ';
        return this.content;
    }

    /**
     * This function print in one chain and it will give all the positions the character send like:
     *
     * printed : ╔-----╗ +'\n' + | . . | '\n' + | . . | '\n' + ╚-----╝' \n'
     *
     * return all the chain to print on console
     */
    print() {
        let printed = '';
        for (let posX = this.row - 1; posX >= 0; posX--) {
            for (let posY = 0; posY < this.col; posY++) {
                printed += this.content[posX][posY];
            }
            printed += '\n';
        }
        return printed;
    }
}