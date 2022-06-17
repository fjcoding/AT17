import { Actor } from './actor.js';
import { RIGHT, LEFT, UP, DOWN } from './actor.js';

const actor = new Actor(1, 1);
const  matrixA = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
];
const  matrixB = [
    [0, 2, 0],
    [2, 2, 2],
    [0, 2, 0]
];

test('This function proof the cornes in the map ', () => {
    expect(actor.oppositeDirection()).toBe(LEFT);
    actor.setDirection(LEFT);
    expect(actor.oppositeDirection()).toBe(RIGHT);

    actor.setDirection(UP);
    expect(actor.oppositeDirection()).toBe(DOWN);
    actor.setDirection(DOWN);
    expect(actor.oppositeDirection()).toBe(UP);
});

test('The function listFreeDirections return an array of directions that are free(dots) to move to, with parameter routeFree=1,AXIS= X', () => {
    actor.setPosition(1, 1);
    actor.setDirection(UP);
    expect(actor.listFreeDirections(matrixA, 1).sort()).toEqual([LEFT, UP, RIGHT].sort());
    actor.setDirection(DOWN);
    expect(actor.listFreeDirections(matrixA, 1).sort()).toEqual([DOWN, LEFT, RIGHT].sort());
    actor.setDirection(RIGHT);
    expect(actor.listFreeDirections(matrixA, 1).sort()).toEqual([DOWN, RIGHT, UP].sort());
    actor.setDirection(LEFT);
    expect(actor.listFreeDirections(matrixA, 1).sort()).toEqual([DOWN, LEFT, UP].sort());

    actor.setPosition(1, 0);
    actor.setDirection(UP);
    expect(actor.listFreeDirections(matrixA, 1).sort()).toEqual([].sort());
    actor.setDirection(DOWN);
    expect(actor.listFreeDirections(matrixA, 1).sort()).toEqual([DOWN].sort());

    actor.setPosition(1, 2);
    actor.setDirection(DOWN);
    expect(actor.listFreeDirections(matrixA, 1).sort()).toEqual([].sort());
    actor.setDirection(UP);
    expect(actor.listFreeDirections(matrixA, 1).sort()).toEqual([UP].sort());
});
test('The function listFreeDirections return an array of directions that are free(dots) to move to, with parameter routeFree=1,AXIS =Y', () => {
    actor.setPosition(0, 1);
    actor.setDirection(RIGHT);
    expect(actor.listFreeDirections(matrixA, 1).sort()).toEqual([RIGHT, LEFT].sort());
    actor.setDirection(LEFT);
    expect(actor.listFreeDirections(matrixA, 1).sort()).toEqual([LEFT].sort());

    actor.setPosition(2, 1);
    actor.setDirection(LEFT);
    expect(actor.listFreeDirections(matrixA, 1).sort()).toEqual([RIGHT, LEFT].sort());
    actor.setDirection(RIGHT);
    expect(actor.listFreeDirections(matrixA, 1).sort()).toEqual([RIGHT].sort());
});

test('The function listFreeDirections return an array of directions that are free(void) to move to, with parameter routeFree=2, AXIS = X', () => {
    actor.setPosition(1, 1);
    actor.setDirection(UP);
    expect(actor.listFreeDirections(matrixB, 2).sort()).toEqual([LEFT, UP, RIGHT].sort());
    actor.setDirection(DOWN);
    expect(actor.listFreeDirections(matrixB, 2).sort()).toEqual([DOWN, LEFT, RIGHT].sort());
    actor.setDirection(RIGHT);
    expect(actor.listFreeDirections(matrixB, 2).sort()).toEqual([DOWN, RIGHT, UP].sort());
    actor.setDirection(LEFT);
    expect(actor.listFreeDirections(matrixB, 2).sort()).toEqual([DOWN, LEFT, UP].sort());

    actor.setPosition(1, 0);
    actor.setDirection(UP);
    expect(actor.listFreeDirections(matrixB, 2).sort()).toEqual([].sort());
    actor.setDirection(DOWN);
    expect(actor.listFreeDirections(matrixB, 2).sort()).toEqual([DOWN].sort());

    actor.setPosition(1, 2);
    actor.setDirection(DOWN);
    expect(actor.listFreeDirections(matrixB, 2).sort()).toEqual([].sort());
    actor.setDirection(UP);
    expect(actor.listFreeDirections(matrixB, 2).sort()).toEqual([UP].sort());
});
test('The function listFreeDirections return an array of directions that are free(void) to move to, with parameter routeFree=2, AXIS = Y', () => {
    actor.setPosition(0, 1);
    actor.setDirection(RIGHT);
    expect(actor.listFreeDirections(matrixB, 2).sort()).toEqual([RIGHT, LEFT].sort());
    actor.setDirection(LEFT);
    expect(actor.listFreeDirections(matrixB, 2).sort()).toEqual([LEFT].sort());

    actor.setPosition(2, 1);
    actor.setDirection(LEFT);
    expect(actor.listFreeDirections(matrixB, 2).sort()).toEqual([RIGHT, LEFT].sort());
    actor.setDirection(RIGHT);
    expect(actor.listFreeDirections(matrixB, 2).sort()).toEqual([RIGHT].sort());
});