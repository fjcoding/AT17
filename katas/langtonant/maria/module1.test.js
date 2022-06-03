import {Ant} from './antolangt.js';
test('right should return w if ant previous position is s if matrix[n][m] contains 0 ', () => {
    let matrix = new Array();
    matrix[0] = new Array();
    matrix[1] = new Array();
    matrix[0][0] = 0;
    matrix[0][1] = 0;
    matrix[1][0] = 0;
    matrix[1][1] = 0;
    let ant = new Ant (0, 1, 's', matrix);
    let result = ant.rigth();
    expect(result).toBe('w');
});

test('left should return e if ant previous position is s if matrix[n][m] contains 1 ', () => {
    let matrix = new Array();
    matrix[0] = new Array();
    matrix[1] = new Array();
    matrix[0][0] = 0;
    matrix[0][1] = 1;
    matrix[1][0] = 0;
    matrix[1][1] = 0;
    let ant = new Ant (0, 1, 's', matrix);
    let result = ant.left();
    expect(result).toBe('e');
});

