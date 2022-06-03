import { generateMatrix } from './matrix.js';

test('generateMatrix shoudld a 3x3 matrix', () => {
    const testSize = 3;
    const result = generateMatrix(testSize, testSize);
    expect(result).toEqual(expect.arrayContaining([[0, 0, 0], [0, 0, 0], [0, 0, 0]]));
});
