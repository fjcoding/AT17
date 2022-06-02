import { VerifyBlack } from './jlangtonsant.js';

test('Verify antWalk should return true if position contains #', () => {
    const testGrid = new Array();
    testGrid[0] = new Array();
    testGrid[1] = new Array();

    testGrid[0][0] = '0';
    testGrid[0][1] = '0';
    testGrid[1][0] = '0';
    testGrid[1][1] = '#';

    const result = VerifyBlack(testGrid, 1, 1);

    expect(result).toBe(true);
});

test('Verify antWalk should return false if position does not contains #', () => {
    const testGrid = new Array();
    testGrid[0] = new Array();
    testGrid[1] = new Array();

    testGrid[0][0] = '0';
    testGrid[0][1] = '0';
    testGrid[1][0] = '0';
    testGrid[1][1] = '#';

    const result = VerifyBlack(testGrid, 0, 0);

    expect(result).toBe(false);
});