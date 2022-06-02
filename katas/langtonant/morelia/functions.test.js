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
    //expect(result).toBe(1);
});
test('changeColor change to 0 if the place was already ocuupied before by the ant', () => {
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
test('nextDirection to force the ant in the top right corner and look up to move to the left', () => {
    // const dir1=0;
    //const result = nextDirection(0,0,5,0,4);
    expect(nextDirection(0, 0, 5, 0, 4)).toBe(3);
});/*
test('nextDirection to force the ant in the lower left corner looking down to move to the right', () => {
    expect(nextDirection(2, 0, 5, 4, 0)).toBe(1);
});
test('nextDirection to force the ant in the lower right corner and looking to the right to advance to the top', () => {
    expect(nextDirection(1, 0, 5, 4, 4)).toBe(0);
});*/
test('move the ante to the up', () => {
    const result = move(2, 2, 0);
    expect(result).toEqual(expect.arrayContaining([1, 2]));
});
test('move the ant to the right', () => {
    const result = move(2, 2, 1);
    expect(result).toEqual(expect.arrayContaining([2, 3]));
});
test('move the ant to the down', () => {
    const result = move(2, 2, 2);
    expect(result).toEqual(expect.arrayContaining([3, 2]));
});
test('move the ant to the left', () => {
    const result = move(2, 2, 3);
    expect(result).toEqual(expect.arrayContaining([2, 1]));
});