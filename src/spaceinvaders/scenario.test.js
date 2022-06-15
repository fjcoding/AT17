import { Scenario } from './scenario.js';

test('the function initialize the scenario and the content on center it will be the dimension in this case 2x2', () => {
    let characterTest = ' . ';
    let content = [];
    let contentExpect = [];
    for (let i = 0; i < 4; i++) {
        contentExpect[i] = [];
        for (let j = 0; j < 4; j++) {
            contentExpect[i][j] = characterTest;
        }
    }
    let board = new Scenario(2, 2, content);
    board.initBoard(characterTest);

    expect(board.content).toEqual(contentExpect);
});
test('the function to comprobe the border of the scenario, in this case 2x2 dimension', () => {
    let content = [];
    let contentExpect = [
        [' ╚-', '---', '---', '-╝ '],
        [' | ', ' . ', ' . ', ' | '],
        [' | ', ' . ', ' . ', ' | '],
        [' ╔-', '---', '---', '-╗ ']

    ];

    let board = new Scenario(2, 2, content);
    board.initBoard(' . ');
    board.putBorder();

    expect(board.content).toEqual(contentExpect);
});