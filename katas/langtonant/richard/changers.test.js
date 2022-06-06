import { changePositionX } from './changers.js';
import { changePositionY } from './changers.js';
import { ChangeColor } from './changers.js';
import { ChangeDirection } from './changers.js';

test('changePositionX should return the same value if the direction is up  ', () => {
    const testPositionX = 5;
    const result = changePositionX(testPositionX, 'up');
    expect(result).toBe(testPositionX);
});
test('changePositionX should return the value plus 1 unit if the direction is right  ', () => {
    const testPositionX = 5;
    const result = changePositionX(testPositionX, 'right');
    expect(result).toBe(testPositionX + 1);
});
test('changePositionX should return the same value if the direction is down  ', () => {
    const testPositionX = 5;
    const result = changePositionX(testPositionX, 'down');
    expect(result).toBe(testPositionX);
});
test('changePositionX should return the value minus 1 unit if the direction is left  ', () => {
    const testPositionX = 5;
    const result = changePositionX(testPositionX, 'left');
    expect(result).toBe(testPositionX - 1);
});
test('changePositionY should return the value minus 1 unit if the direction is up  ', () => {
    const testPositionY = 2;
    const result = changePositionY(testPositionY, 'up');
    expect(result).toBe(testPositionY - 1);
});
test('changePositionY should return the same value if the direction is right  ', () => {
    const testPositionY = 4;
    const result = changePositionY(testPositionY, 'right');
    expect(result).toBe(testPositionY);
});
test('changePositionY should return the value plus 1 unit if the direction is down  ', () => {
    const testPositionY = 3;
    const result = changePositionY(testPositionY, 'down');
    expect(result).toBe(testPositionY + 1);
});
test('changePositionY should return the same value if the direction is left  ', () => {
    const testPositionY = 7;
    const result = changePositionY(testPositionY, 'left');
    expect(result).toBe(testPositionY);
});
test('ChangeColor should return the array and the symbol changed  O to #, in PositionX and PositionY', () => {
    const testGrid = new Array();
    testGrid[0] = new Array();
    testGrid[1] = new Array();

    testGrid[0][0] = 'O';
    testGrid[0][1] = 'O';
    testGrid[1][0] = 'O';
    testGrid[1][1] = 'O';

    const result = ChangeColor(testGrid, 1, 1);
    expect(result[1][1]).toBe('#');
});
test('ChangeColor should return the array and the symbol changed # to O, in PositionX and PositionY', () => {
    const testGrid = new Array();
    testGrid[0] = new Array();
    testGrid[1] = new Array();

    testGrid[0][0] = '#';
    testGrid[0][1] = '#';
    testGrid[1][0] = '#';
    testGrid[1][1] = '#';

    const result = ChangeColor(testGrid, 1, 1);
    expect(result[1][1]).toBe('O');
});
test('ChangeDirection should return left if the direction is up when the color is black ', () => {
    const result = ChangeDirection('up', 'black');
    expect(result).toBe('left');
});
test('ChangeDirection should return up if the direction is right when the color is black ', () => {
    const result = ChangeDirection('right', 'black');
    expect(result).toBe('up');
});
test('ChangeDirection should return right if the direction is down when the color is black ', () => {
    const result = ChangeDirection('down', 'black');
    expect(result).toBe('right');
});
test('ChangeDirection should return down if the direction is left when the color is black ', () => {
    const result = ChangeDirection('left', 'black');
    expect(result).toBe('down');
});
test('ChangeDirection should return right if the direction is up when the color is white ', () => {
    const result = ChangeDirection('up', 'white');
    expect(result).toBe('right');
});
test('ChangeDirection should return down if the direction is right when the color is white ', () => {
    const result = ChangeDirection('right', 'white');
    expect(result).toBe('down');
});
test('ChangeDirection should return left if the direction is down when the color is white ', () => {
    const result = ChangeDirection('down', 'white');
    expect(result).toBe('left');
});
test('ChangeDirection should return up if the direction is left when the color is white ', () => {
    const result = ChangeDirection('left', 'white');
    expect(result).toBe('up');
});
