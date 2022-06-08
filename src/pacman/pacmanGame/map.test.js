import { Map } from './map.js';
import { RIGHT, LEFT, UP, DOWN } from './pacman.js';

test('the function changeValue change the value in the determinated position', () => {
    let mapExpected = [
        [0, 0, 0],
        [0, 2, 0],
        [0, 0, 0],
    ];
    let map = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    let mapProbe = new Map(map);
    mapProbe.changeValue(1, 1, 2);
    expect(mapProbe.map).toEqual(mapExpected);
});

test('the function getValue return the value in the determinated position', () => {
    let map = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 5, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.getValue(1, 2)).toBe(5);
});

test('the function checkRight return RIGHT if a turn right could be possible', () => {
    let map = [
        [0, 0, 0],
        [0, 0, 1],
        [0, 0, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.checkRight(1, 1)).toBe(RIGHT);
});

test('the function checkRight return UP if a turn up could be possible', () => {
    let map = [
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.checkRight(1, 1)).toBe(UP);
});

test('the function checkRight return DOWN if a turn down could be possible', () => {
    let map = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.checkRight(1, 1)).toBe(DOWN);
});

test('the function checkLeft return LEFT if a turn left could be possible', () => {
    let map = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.checkLeft(1, 1)).toBe(LEFT);
});

test('the function checkLeft return UP if a turn up could be possible', () => {
    let map = [
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.checkLeft(1, 1)).toBe(UP);
});

test('the function checkLeft return DOWN if a turn up could be possible', () => {
    let map = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.checkLeft(1, 1)).toBe(DOWN);
});

test('the function checkUp return UP if a turn up could be possible', () => {
    let map = [
        [0, 1, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.checkUp(1, 1)).toBe(UP);
});

test('the function checkUp return RIGHT if a turn right could be possible', () => {
    let map = [
        [0, 0, 0],
        [0, 0, 1],
        [0, 0, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.checkUp(1, 1)).toBe(RIGHT);
});

test('the function checkUp return LEFT if a turn left could be possible', () => {
    let map = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.checkUp(1, 1)).toBe(LEFT);
});

test('the function checkDown return DOWN if a turn down could be possible', () => {
    let map = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 1, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.checkDown(1, 1)).toBe(DOWN);
});

test('the function checkUp return RIGHT if a turn right could be possible', () => {
    let map = [
        [0, 0, 0],
        [0, 0, 1],
        [0, 0, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.checkDown(1, 1)).toBe(RIGHT);
});

test('the function checkUp return LEFT if a turn left could be possible', () => {
    let map = [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
    ];
    let mapProbe = new Map(map);
    expect(mapProbe.checkDown(1, 1)).toBe(LEFT);
});