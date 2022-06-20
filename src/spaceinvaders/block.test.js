import { Block } from './block.js';
import { Scenario} from './scenario.js';

test('SetBlock is the function that put a new block in board', () => {
    let content = [];
    let contentExpect = [
        [ ' . ', ' . ', ' . ', ' . ' ],
        [ ' ◢ ', ' ━ ', ' ━ ', ' ◣ ' ],
        [ ' . ', ' ━ ', ' ━ ', ' . ' ],
        [ ' . ', ' . ', ' . ', ' . ' ]
    ];

    let board = new Scenario(2, 2, content);
    board.initBoard(' . ');
    let block = new Block(board.content);
    block.setBlock(1, 2, 1);
    expect(board.content).toEqual(contentExpect);
});

test('CheckDimentionBoard check if the dimension of columns in board is enough to put a block, in this case will return false', () => {
    let content = [];

    let board = new Scenario(2, 2, content);
    board.initBoard(' . ');

    let block = new Block(board.content);
    let result = block.CheckDimentionBoard(board.content);
    expect(result).toBe(false);
});
test('CheckDimentionBoard check if the dimension of columns in board is enough to put a block, in this case will return true', () => {
    let content = [];

    let board = new Scenario(10, 10, content);
    board.initBoard(' . ');

    let block = new Block(board.content);
    let result = block.CheckDimentionBoard(board.content);
    expect(result).toBe(true);
});
test('CheckDimentionBoard check if the dimension of columns in board is enough to put a block, in this case will return true', () => {
    let content = [];

    let board = new Scenario(4, 4, content);
    board.initBoard(' . ');

    let block = new Block(board.content);
    let result = block.CheckDimentionBoard(board.content);
    expect(result).toBe(false);
});

test('putDinamicBlocks put diferent number of block in case to have the dimension correct', () => {
    let content = [];
    let contentExpect = [
        [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '],
        [' . ', ' ◢ ', ' ━ ', ' ━ ', ' ◣ ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' ━ ', ' ━ ', ' . ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ', ' . ']
    ];

    let board = new Scenario(10, 6, content);
    board.initBoard(' . ');

    let block = new Block(board.content);
    block.putDinamicBlocks(3, board.content);
    expect(board.content).toStrictEqual(contentExpect);
});


