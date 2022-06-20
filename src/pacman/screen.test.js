import { Screen } from './screen.js';

test('The function printGameOver print the screen of gameover', () => {
    let screenProf = new Screen();
    let test = screenProf.printGameOver();
    expect(test).toBeUndefined();
});