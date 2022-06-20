import { Boss } from './boss.js';

test('Test bonus alien $ moves to right', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];

    let boss = new Boss(0, 1, matrixEmpty, ' $ ', true);

    expect(boss.changeDirectionBoss(true, 3, 0)).toBe(2);
});

test('Test function to disappear the bonus when arrives end', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];

    let boss = new Boss(0, 2, matrixEmpty, ' $ ', true);
    boss.changeDirectionBoss(true, 3, 0);
    boss.changeElement();
    expect(boss.element).toBe('   ');
});

test('Test function boss still disappears', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];

    let boss = new Boss(0, 1, matrixEmpty, ' $ ', false);
    boss.changeDirectionBoss(false, 3, 0);
    boss.noBonus();
    expect(boss.element).toBe('   ');
});

test('Test function returns the current element', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];

    let boss = new Boss(0, 1, matrixEmpty, ' $ ', true);
    boss.changeElement();
    expect(boss.element).toBe(' $ ');
});