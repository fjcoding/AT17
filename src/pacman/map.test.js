import { Map } from './map.js';
import { RIGHT, LEFT, UP, DOWN } from './pacman.js';

test('This function proof the cornes in the map ', () => {
    let map = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    let mapProbe = new Map(map);
    expect(mapProbe.checkCorners(LEFT, 0, 2)).toBe(LEFT);

    map = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    mapProbe = new Map(map);
    expect(mapProbe.checkCorners(RIGHT, 3, 2)).toBe(RIGHT);

    map = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0]
    ];

    mapProbe = new Map(map);
    expect(mapProbe.checkCorners(DOWN, 2, 3)).toBe(DOWN);

    map = [
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    mapProbe = new Map(map);
    expect(mapProbe.checkCorners(UP, 2, 1)).toBe(UP);
});

test('This function proof the cornes in the map ', () => {
    let matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    const mapTest = new Map(matrix);
    expect(mapTest.oppositeDirection(RIGHT)).toBe(LEFT);
    expect(mapTest.oppositeDirection(LEFT)).toBe(RIGHT);
    expect(mapTest.oppositeDirection(UP)).toBe(DOWN);
    expect(mapTest.oppositeDirection(DOWN)).toBe(UP);
});

test('The function getFreeDirection return an array of directions that are free(dots) to move to, with parameter routeFree=1', () => {
    let matrix = [
        [0, 1, 0],
        [1, 1, 1],
        [0, 1, 0]
    ];
    const mapTestP = new Map(matrix);
    expect(mapTestP.getFreeDirection(1, 1, 1, UP).sort()).toEqual([LEFT, UP, RIGHT].sort());
    expect(mapTestP.getFreeDirection(1, 1, 1, DOWN).sort()).toEqual([DOWN, LEFT, RIGHT].sort());
    expect(mapTestP.getFreeDirection(1, 1, 1, RIGHT).sort()).toEqual([DOWN, RIGHT, UP].sort());
    expect(mapTestP.getFreeDirection(1, 1, 1, LEFT).sort()).toEqual([DOWN, LEFT, UP].sort());

    expect(mapTestP.getFreeDirection(0, 1, 1, RIGHT).sort()).toEqual([RIGHT, LEFT].sort());
    expect(mapTestP.getFreeDirection(0, 1, 1, LEFT).sort()).toEqual([LEFT].sort());
    expect(mapTestP.getFreeDirection(2, 1, 1, LEFT).sort()).toEqual([RIGHT, LEFT].sort());
    expect(mapTestP.getFreeDirection(2, 1, 1, RIGHT).sort()).toEqual([RIGHT].sort());

    expect(mapTestP.getFreeDirection(1, 0, 1, UP).sort()).toEqual([].sort());
    expect(mapTestP.getFreeDirection(1, 0, 1, DOWN).sort()).toEqual([DOWN].sort());
    expect(mapTestP.getFreeDirection(1, 2, 1, DOWN).sort()).toEqual([].sort());
    expect(mapTestP.getFreeDirection(1, 2, 1, UP).sort()).toEqual([UP].sort());
});
test('The function getFreeDirection return an array of directions that are free(void) to move to, with parameter routeFree=2', () => {
    let matrix = [
        [0, 2, 0],
        [2, 2, 2],
        [0, 2, 0]
    ];
    const mapTestP = new Map(matrix);
    expect(mapTestP.getFreeDirection(1, 1, 2, UP).sort()).toEqual([LEFT, UP, RIGHT].sort());
    expect(mapTestP.getFreeDirection(1, 1, 2, DOWN).sort()).toEqual([DOWN, LEFT, RIGHT].sort());
    expect(mapTestP.getFreeDirection(1, 1, 2, RIGHT).sort()).toEqual([DOWN, RIGHT, UP].sort());
    expect(mapTestP.getFreeDirection(1, 1, 2, LEFT).sort()).toEqual([DOWN, LEFT, UP].sort());

    expect(mapTestP.getFreeDirection(0, 1, 2, RIGHT).sort()).toEqual([RIGHT, LEFT].sort());
    expect(mapTestP.getFreeDirection(0, 1, 2, LEFT).sort()).toEqual([LEFT].sort());
    expect(mapTestP.getFreeDirection(2, 1, 2, LEFT).sort()).toEqual([RIGHT, LEFT].sort());
    expect(mapTestP.getFreeDirection(2, 1, 2, RIGHT).sort()).toEqual([RIGHT].sort());

    expect(mapTestP.getFreeDirection(1, 0, 2, UP).sort()).toEqual([].sort());
    expect(mapTestP.getFreeDirection(1, 0, 2, DOWN).sort()).toEqual([DOWN].sort());
    expect(mapTestP.getFreeDirection(1, 2, 2, DOWN).sort()).toEqual([].sort());
    expect(mapTestP.getFreeDirection(1, 2, 2, UP).sort()).toEqual([UP].sort());
});

test('The function getPacmanRoute return an direction that are free(dots) to move to, routeFree=1', () => {
    let matrixA = [
        [0, 1, 0],
        [0, 1, 0],
        [0, 1, 0]
    ];
    let matrixB = [
        [0, 0, 0],
        [1, 1, 1],
        [0, 0, 0]
    ];
    const mapTestA = new Map(matrixA);
    const mapTestB = new Map(matrixB);
    expect(mapTestA.getPacmanRoute(1, 1, UP)).toBe(UP);
    expect(mapTestA.getPacmanRoute(1, 1, DOWN)).toBe(DOWN);
    expect(mapTestB.getPacmanRoute(1, 1, LEFT)).toBe(LEFT);
    expect(mapTestB.getPacmanRoute(1, 1, RIGHT)).toBe(RIGHT);
    expect(mapTestA.getPacmanRoute(1, 0, DOWN)).toBe(DOWN);
    expect(mapTestA.getPacmanRoute(1, 2, UP)).toBe(UP);
});
test('The function getPacmanRoute return an direction that are free(void) to move to, routeFree=2', () => {
    let matrixA = [
        [0, 2, 0],
        [0, 2, 0],
        [0, 2, 0]
    ];
    let matrixB = [
        [0, 0, 0],
        [2, 2, 2],
        [0, 0, 0]
    ];
    const mapTestA = new Map(matrixA);
    const mapTestB = new Map(matrixB);
    expect(mapTestA.getPacmanRoute(1, 1, UP)).toBe(UP);
    expect(mapTestA.getPacmanRoute(1, 1, DOWN)).toBe(DOWN);
    expect(mapTestB.getPacmanRoute(1, 1, LEFT)).toBe(LEFT);
    expect(mapTestB.getPacmanRoute(1, 1, RIGHT)).toBe(RIGHT);
    expect(mapTestA.getPacmanRoute(1, 0, DOWN)).toBe(DOWN);
    expect(mapTestA.getPacmanRoute(1, 2, UP)).toBe(UP);
});