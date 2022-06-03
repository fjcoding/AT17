import { VerifyBlack, turnAntRight, turnAntLeft } from './jlangtonsant.js';

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

test('Verify if turn right function adds 1 to the current ants direction', () => {
    const testDirec = 1;
    const result = turnAntRight(testDirec);
    expect(result).toBe(2);
});

test('Verify if turn right function put the direction again in 0 if the current ants direction in left', () => {
    const testDirec = 3;
    const result = turnAntRight(testDirec);
    expect(result).toBe(0);
});

test('Verify if turn left function substracts 1 to the current ants direction', () => {
    const testDirec = 1;
    const result = turnAntLeft(testDirec);
    expect(result).toBe(0);
});

test('Verify if turn left function put the direction again in 3 if the current ants direction in up', () => {
    const testDirec = 0;
    const result = turnAntLeft(testDirec);
    expect(result).toBe(3);
});