const BLANK_PIXEL = '.';

/**
 * Class to represent a screen that displays game content
 *
 * Screen is composed by rows and columns, where X can be used to select each row
 * and Y for each column, starting bottom left position as x=0 y=0
 *
 * Example: Say screen 5x10 (5 rows, 10 columns)
 *
 * . . . . . . . . . .
 * . . . . . . . . . .
 * . . . . A . . . . .
 * . . . . . . . . . .
 * . . . . . . . B . .
 *
 * That said, if we ask screen to return pixel in row 2, column 4, it should
 * return 'A', as it is the content of that pixel
 */
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
                this.content[row][column] = BLANK_PIXEL;
            }
        }
    }

    /**
     * Prints screen content. Given the nature of matrix structure, if we iterate
     * directly over array[row][column] from 0 to rows/columns size, the returned
     * string would print a 'tipped over' screen, say, for a Screen of 3 rows and 5 columns
     * where we have an element 'A' in pos x=0 and y=0, we would expect to print:
     *
     *      .....
     *      .....
     *      A....
     *
     * Internally, content matrix would be constructed like this:
     * [
     *   ['A', '.', '.', '.', '.']
     *   ['.', '.', '.', '.', '.']
     *   ['.', '.', '.', '.', '.']
     * ]
     *
     * In order to print it correctly, we start printing row by row starting by
     * the last row. Check unit tests for more examples and details
     */
    print() {
        let printed = '';
        for (let posX = this.rows - 1; posX >= 0; posX--) {
            for (let posY = 0; posY < this.columns; posY++) {
                printed += this.content[posX][posY];
            }
            printed += '\n';
        }
        return printed;
    }

    /**
     * Sets an element in the given row/column (posX/posY)
     */
    set(posX, posY, element) {
        this.content[posX][posY] = element;
    }
}