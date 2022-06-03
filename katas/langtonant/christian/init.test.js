import { grid, move, init, x, dir } from './movements.js';

init(3);
move(3, 1);

test('Init Test whit position x and di is correct', () => {
    const result = x;
    expect(result).toBe(2);
});


test('Init Test correct craeation from Matrix', () => {
    const result = grid.length;
    expect(result).toBe(3);
});


test('turnRight function must changue position to dir', () => {
    const result = dir;
    expect(result).toBe(1);
});

