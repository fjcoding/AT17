import { Stage } from './stage.js';

test('the function initialize the Stage and the content on center it will be the dimension in this case 2x2', () => {
    let characterTest = ' . ';
    let content = [];
    let contentExpect = [];
    for (let i = 0; i < 4; i++) {
        contentExpect[i] = [];
        for (let j = 0; j < 4; j++) {
            contentExpect[i][j] = characterTest;
        }
    }
    let board = new Stage(2, 2, content);
    board.initBoard(characterTest);

    expect(board.content).toEqual(contentExpect);
});
test('the function to comprobe the border of the Stage, in this case 2x2 dimension', () => {
    let content = [];
    let contentExpect = [
        [' ╚-', '---', '---', '-╝ '],
        [' | ', ' . ', ' . ', ' | '],
        [' | ', ' . ', ' . ', ' | '],
        [' ╔-', '---', '---', '-╗ ']

    ];

    let board = new Stage(2, 2, content);
    board.initBoard(' . ');
    board.putBorder();

    expect(board.content).toEqual(contentExpect);
});

test('the function to get only the board at the moment that the method getBoard is called', () => {
    let content = [];
    let contentExpect = [
        [' . ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' . ', ' . '],
        [' . ', ' . ', ' . ', ' . ']

    ];

    let board = new Stage(2, 2, content);
    board.initBoard(' . ');

    expect(board.getBoard()).toEqual(contentExpect);
});

test('the function that print the board when it is called, only return a large string', () => {
    let content = [];
    let resultExpect = ' .  .  . \n .  .  . \n .  .  . \n';

    let board = new Stage(1, 1, content);
    board.initBoard(' . ');
    expect(board.print()).toBe(resultExpect);
});
