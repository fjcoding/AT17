import { Ant } from './main.js';

test('ant turn right should return >3', () => {
    const objectAnt = new Ant();
    expect(objectAnt.turnRight()).toBeGreaterThan(3);
});