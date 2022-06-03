import { langtonant } from './langtonant.js';

test('Langtonant should return the way that the and go', () => {
    const testGrid = new Array();
    testGrid[0] = new Array();
    testGrid[1] = new Array();

    testGrid[0][0] = '#';
    testGrid[0][1] = 'O';
    testGrid[1][0] = '#';
    testGrid[1][1] = 'O';

    const result = langtonant(2, 2);
    expect(result).toStrictEqual(testGrid);
});
