import { Alien } from './enemy.js';
test('Probing if the alien is setting up in the position (1,1)', () => {
    let expected = [[0, 0],
        [0, ' A '],
        [0, 0],
        [0, 0],
        [0, 0]];
    let matrixEmpty = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let alien = new Alien(1, 1, matrixEmpty);
    expect(alien.setAlien(1, 1)).toStrictEqual(expected);
});


test('Probing if the alien is setting up in the position (0,0)', () => {
    let expected = [[' A ', 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0] ];
    let matrixEmpty = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let alien = new Alien(0, 0, matrixEmpty);
    expect(alien.setAlien(0, 0)).toStrictEqual(expected);
});

test('Probing if the alien is setting up in the position (2,0)', () => {
    let expected = [[0, 0],
        [0, 0],
        [' A ', 0],
        [0, 0],
        [0, 0] ];
    let matrixEmpty = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let alien = new Alien(2, 0, matrixEmpty);
    expect(alien.setAlien(2, 0)).toStrictEqual(expected);
});

test('Probing if the alien is setting up in the position (4,1)', () => {
    let expected = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, ' A '] ];
    let matrixEmpty = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let alien = new Alien(4, 1, matrixEmpty);
    expect(alien.setAlien(4, 1)).toStrictEqual(expected);
});

test('Probing if the alien is update to position add to y+1', () => {
    let expected = [
        [0, 0],
        [0, ' A '],
        [0, 0],
        [0, 0],
        [0, 0] ];
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let alien = new Alien(1, 0, matrixEmpty);
    alien.moveAlienOneStep(true);
    expect(alien.content).toStrictEqual(expected);
});

test('Probing if the alien is update to position add to y-1', () => {
    let expected = [
        [0, 0],
        [0, 0],
        [' A ', 0],
        [0, 0],
        [0, 0] ];
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let alien = new Alien(2, 1, matrixEmpty);
    alien.moveAlienOneStep(false);
    expect(alien.content).toStrictEqual(expected);
});


