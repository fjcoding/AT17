import { Scenario } from './scenario.js';

test('the function initialize the scenario and the content on center it will be the dimension in this case 2x2', () => {
    let row = 2;
    let col = 2;
    let content = [];

    let board = new Scenario(row, col, content);
    board.initBoard();

    expect(board.content[1][1]).toBe(' . ');
    expect(board.content[1][2]).toBe(' . ');
    expect(board.content[2][1]).toBe(' . ');
    expect(board.content[2][2]).toBe(' . ');
});
test('the function to comprobe the border of the scenario, in this case 2x2 dimension', () => {
    let row = 2;
    let col = 2;
    let content = [];

    let board = new Scenario(row, col, content);
    board.initBoard();
    board.putBorder();

    expect(board.content[0][1]).toBe('---');
    expect(board.content[0][2]).toBe('---');
    expect(board.content[3][1]).toBe('---');
    expect(board.content[3][2]).toBe('---');
    expect(board.content[1][0]).toBe(' | ');
    expect(board.content[2][0]).toBe(' | ');
    expect(board.content[1][3]).toBe(' | ');
    expect(board.content[2][3]).toBe(' | ');
    expect(board.content[0][0]).toBe(' ╚-');
    expect(board.content[0][3]).toBe('-╝ ');
    expect(board.content[3][0]).toBe(' ╔-');
    expect(board.content[3][3]).toBe('-╗ ');
});