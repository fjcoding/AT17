import { changeColor } from './functions.js';
import { nextDirection } from './functions.js';
import { move } from './functions.js';

test('changeColor change to 1 the place where the ant will be positioned, when the space is 0', () => {
    const matrix = new Array();
    matrix[0] = new Array();
    matrix[1] = new Array();
    matrix[0][0] = 0;
    matrix[0][1] = 0;
    matrix[1][0] = 0;
    matrix[1][1] = 0;
    const result = changeColor(matrix, 1, 0);
    expect(result).toEqual(expect.arrayContaining([[0, 0], [1, 0]]));
});
test('changeColor change to 0 if the place was already ocupied before by the ant', () => {
    const matrix = new Array();
    matrix[0] = new Array();
    matrix[1] = new Array();
    matrix[0][0] = 0;
    matrix[0][1] = 1;
    matrix[1][0] = 0;
    matrix[1][1] = 1;
    const result = changeColor(matrix, 0, 1);
    expect(result).toEqual(expect.arrayContaining([[0, 0], [0, 1]]));
});
test('nextDirection changes the direction of the ant to the left when sense is true(1)', () => {
    const matrix = new Array();
    matrix[0] = new Array();
    matrix[1] = new Array();
    matrix[0][0] = 0;
    matrix[0][1] = 1;
    matrix[1][0] = 0;
    matrix[1][1] = 0;
    const row = 0;
    const column = 1;
    const direction = 0;
    const result = nextDirection(matrix, row, column, direction);
    expect(result).toBe(3);
});
test('nextDirection changes the direction of the ant to the right when sense is false(0)', () => {
    const matrix = new Array();
    matrix[0] = new Array();
    matrix[1] = new Array();
    matrix[0][0] = 0;
    matrix[0][1] = 0;
    matrix[1][0] = 0;
    matrix[1][1] = 0;
    const row = 0;
    const column = 1;
    const direction = 0;
    const result = nextDirection(matrix, row, column, direction);
    expect(result).toBe(1);
});
test('move the ant to the up', () => {
    const row = 2;
    const column = 2;
    const direction = 0;
    const size = 5;
    const result = move(row, column, direction, size);
    expect(result).toEqual(expect.arrayContaining([1, 2]));
});
test('move the ant to the right', () => {
    const row = 2;
    const column = 2;
    const direction = 1;
    const size = 5;
    const result = move(row, column, direction, size);
    expect(result).toEqual(expect.arrayContaining([2, 3]));
});
test('move the ant to the down', () => {
    const row = 2;
    const column = 2;
    const direction = 2;
    const size = 5;
    const result = move(row, column, direction, size);
    expect(result).toEqual(expect.arrayContaining([3, 2]));
});
test('move the ant to the left', () => {
    const row = 2;
    const column = 2;
    const direction = 3;
    const size = 5;
    const result = move(row, column, direction, size);
    expect(result).toEqual(expect.arrayContaining([2, 1]));
});