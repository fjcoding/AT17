import { isSquareBlack } from './verifiers.js';
import { isSquareLimit } from './verifiers.js';

test('isSquareBlack should return true if position contains # symbol', () => {
    const testGrid = new Array();
    testGrid[0] = new Array();
    testGrid[1] = new Array();

    testGrid[0][0] = 'O';
    testGrid[0][1] = 'O';
    testGrid[1][0] = 'O';
    testGrid[1][1] = '#';

    const result = isSquareBlack(testGrid, 1, 1);
    expect(result).toBe(true);
});
test('isSquareBlack should return false if position does not contains # symbol', () => {
    const testGrid = new Array();
    testGrid[0] = new Array();
    testGrid[1] = new Array();

    testGrid[0][0] = 'O';
    testGrid[0][1] = 'O';
    testGrid[1][0] = 'O';
    testGrid[1][1] = '#';

    const result = isSquareBlack(testGrid, 0, 0);
    expect(result).toBe(false);
});

test('isSquareLimit should return 0 if the value is greather than  ', () => {
    const testLimitValue = 11;
    const result = isSquareLimit(11, testLimitValue);
    expect(result).toBe(0);
});
test('isSquareLimit should return value-1 if the value is negative  ', () => {
    const testLimitValue = 10;
    const result = isSquareLimit(-1, testLimitValue);
    expect(result).toBe(testLimitValue - 1);
});
test('isSquareLimit should return the same value if the range betwen 0 and limitValue  ', () => {
    const testLimitValue = 10;
    const testValue = 4;
    const result = isSquareLimit(testValue, testLimitValue);
    expect(result).toBe(testValue);
});

