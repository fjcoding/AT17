import {isWhite, isBlack, grid, move, init, x} from './movements.js'



//------------------------Init Test-----------------------------------------
init(3);

test('Init Test whit position x and di is correct', () => {
    const result = x;
    expect(result).toBe(1);  
});


test('Init Test correct craeation from Matrix', () => {
    const result = grid.length;
    expect(result).toBe(3);
});
//-------------------------MOVE TEST--------------------------------------
init(3);
move(3,1);

test('Move function must changue position to Black if is not in Black', () => {
    const result = grid[1][1];
    expect(result).toBe("1");
});
//------------------------------------------------------------------------
move(3,2);

test('Move function must changue position to Black if is not in Black', () => {
    const result = grid[1][1];
    const result2 = grid[2][1];
    expect(result).toBe("1");
    expect(result2).toBe("1");
});
//-------------------------isWhite or isBlack Test------------------------
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


