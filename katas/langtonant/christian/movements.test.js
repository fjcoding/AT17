import { isWhite, isBlack, grid, move, init, x, dir } from './movements.js';


init(5);
move(5, 5);

test('Move function must changue position to Black if is not in Black', () => {
    const result = grid[3][2];
    expect(result).toBe('1');
});

test('Move function must changue position to Black if is not in Black', () => {
    const result = grid[2][3];
    const result2 = grid[3][2];
    expect(result).toBe('1');
    expect(result2).toBe('1');
});

test('Move function must changue position to White if is in Black', () => {
    const result = grid[2][2];
    expect(result).toBe('');
});

test('Move function must changue position to 5 steps', () => {
    const result = grid[3][2];
    const result2 = grid[2][3];
    const result3 = grid[3][3];
    const result4 = grid[2][2];
    expect(result).toBe('1');
    expect(result2).toBe('1');
    expect(result3).toBe('1');
    expect(result4).toBe('');
});

const testGrid = new Array();
testGrid[0] = new Array();
testGrid[1] = new Array();

testGrid[0][0] = 0;
testGrid[0][1] = 1;
testGrid[1][0] = 0;
testGrid[1][1] = 1;

test('isWhite function must return true', () => {
    const result = isWhite(testGrid[0][0]);
    expect(result).toBe(true);
});

test('isWhite function must return false', () => {
    const result = isWhite(testGrid[0][1]);
    expect(result).toBe(false);
});

test('isBlack function must return true', () => {
    const result = isBlack(testGrid[0][1]);
    expect(result).toBe(true);
});

test('isBlack function must return false', () => {
    const result = isBlack(testGrid[0][0]);
    expect(result).toBe(false);
});


