

export class Scenario {
    constructor(row, col) {
        this.row = row + 2;
        this.col = col + 2;
        this.content = [];
    }

    initBoard() {
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

    putBorder() {
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
        for (let i = 0; i < this.row; i++) {
            this.content[0][i] = '---';
        }
        for (let i = 0; i < this.row; i++) {
            this.content[this.row - 1][i] = '---';
        }
        for (let i = 0; i < this.col; i++) {
            this.content[i][0] = ' | ';
        }
        for (let i = 0; i < this.col; i++) {
            this.content[i][this.col - 1] = ' | ';
        }
        this.content[0][0] = ' ╚-';
        this.content[0][this.row - 1] = '-╝ ';
        this.content[this.col - 1][0] = ' ╔-';
        this.content[this.col - 1][this.row - 1] = '-╗ ';
        return this.content;
    }


    print() {
        /**
 * This function print in one chain and it will give all the positions the character send like:
 *
 * printed : ╔-----╗ +'\n' + | . . | '\n' + | . . | '\n' + ╚-----╝' \n'
 *
 *
 * return all the chain to print on console
 */
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