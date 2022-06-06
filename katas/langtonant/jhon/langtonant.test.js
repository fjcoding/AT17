import { Langtonant } from './langtonant.js';
test('isValidPos should return true if is a valid pos', () => {
    const boarTest = new Langtonant(5, 5);
    expect(boarTest.isPosValid(2, 2)).toBe(true);
});

test('isValidPos should return false if is a invalid position', () => {
    const boarTest = new Langtonant(5, 5);
    expect(boarTest.isPosValid(2, -1)).toBe(false);
});
test('isWhiteSlot should return true if the pos had \' \'', () => {
    const boarTest = new Langtonant(5, 5);
    boarTest.board[2][2] = '0';
    expect(boarTest.isWhiteSlot(2, 2)).toBe(false);
    expect(boarTest.isWhiteSlot(3, 3)).toBe(true);
});
test('setValidPos should set the position -1 to size of the board -1', () => {
    const posTest = new Langtonant(5, 5);
    posTest.setValidPos(-1, 2);
    expect(posTest.positionX).toBe(5 - 1);
    posTest.setValidPos(2, -1);
    expect(posTest.positionY).toBe(5 - 1);
});

test('setValidPos should set the pos greater to the size of the array to 0', () => {
    const posTest = new Langtonant(5, 5);
    posTest.setValidPos(6, 2);
    expect(posTest.positionX).toBe(0);
    posTest.setValidPos(2, 6);
    expect(posTest.positionY).toBe(0);
});

test('TurnLeft should update the var "orientation"', () => {
    const posTest = new Langtonant(5, 5);
    posTest.turnLeft();
    expect(posTest.orientation).toBe(3);
    posTest.turnLeft();
    expect(posTest.orientation).toBe(2);
    posTest.turnLeft();
    expect(posTest.orientation).toBe(1);
    posTest.turnLeft();
    expect(posTest.orientation).toBe(0);
});

test('TurnRight should update the var "orientation"', () => {
    const posTest = new Langtonant(5, 5);
    posTest.turnRight();
    expect(posTest.orientation).toBe(1);
    posTest.turnRight();
    expect(posTest.orientation).toBe(2);
    posTest.turnRight();
    expect(posTest.orientation).toBe(3);
    posTest.turnRight();
    expect(posTest.orientation).toBe(0);
});

test('updatePost should update the vars "positionX, PositionY"', () => {
    const posTest = new Langtonant(5, 5);
    posTest.positionX = 2;
    posTest.positionY = 2;
    posTest.orientation = 0;
    posTest.updatePos();
    expect(posTest.positionX * 1).toBe(1);
    posTest.orientation = 1;
    posTest.updatePos();
    expect(posTest.positionY).toBe(3);
    posTest.orientation = 2;
    posTest.updatePos();
    expect(posTest.positionX).toBe(2);
    posTest.orientation = 3;
    posTest.updatePos();
    expect(posTest.positionX).toBe(2);
});
