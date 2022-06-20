import { Player } from './player.js';

test ('Test player with symbol W is well located', () => {
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let expectedContent = [
        [0, 0],
        [0, 0],
        [0, ' W '],
        [0, 0]];
    let player = new Player(2, 1, matrixEmpty, ' W ', true);
    expect(player.setPlayer(matrixEmpty, ' W ')).toStrictEqual(expectedContent);
});

test ('Test player with symbol W is well located at (1,1)', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];
    let expectedContent = [
        [0, 0, 0],
        [0, ' W ', 0],
    ];
    let player = new Player(1, 1, matrixEmpty, ' W ', true);
    expect(player.setPlayer(matrixEmpty, ' W ')).toStrictEqual(expectedContent);
});

test('Test player W moves to right', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];

    let player = new Player(1, 1, matrixEmpty, ' W ', true);

    expect(player.changeDirection(true, 3, 0)).toBe(2);
});

test('Test player W moves to left', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];

    let player = new Player(1, 1, matrixEmpty, ' W ', false);

    expect(player.changeDirection(false, 3, 0)).toBe(0);
});

test('Test flag changes to false when arrives to the end right', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];

    let player = new Player(1, 1, matrixEmpty, ' W ', true);

    expect(player.changeDirection(true, 3, 0)).toBe(2);
});

test('Test flag changes to true when arrives to the end left', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];

    let player = new Player(1, 1, matrixEmpty, ' W ', false);

    expect(player.changeDirection(false, 3, 0)).toBe(0);
});

test('Test flag changes to true when arrives to the end left', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];

    let player = new Player(1, 0, matrixEmpty, ' W ', true);

    expect(player.changeDirection(false, 3, 0)).toBe(0);
});


test('Test changeFlag returns the correct flag value', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];

    let player = new Player(1, 1, matrixEmpty, ' W ', false);

    expect(player.changeFlag()).toBe(false);
});

test('Test getPosX returns the current value', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];

    let player = new Player(1, 1, matrixEmpty, ' W ', false);

    expect(player.getPosX()).toBe(1);
});

test('Test getPosY returns the current value', () => {
    let matrixEmpty = [
        [0, 0, 0],
        [0, 0, 0],
    ];

    let player = new Player(1, 1, matrixEmpty, ' W ', false);

    expect(player.getPosY()).toBe(1);
});

