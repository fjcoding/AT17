import { Board } from './board.js';

test('createBoard should return matriz 5 x 5 Filled with \'\'', () => {
    let expected = [[' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' '], [' ', ' ', ' ', ' ', ' ']];
    let board = new Board(5, 5).createBoard();
    expect(board).toEqual(expected);
});