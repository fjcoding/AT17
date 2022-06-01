import { Board } from './board.js';

test('isValidPos should return true', () => {
    const boarTest = new Board(5, 5);
    expect(boarTest.isPosValid(2, 2)).toBe(true);
});