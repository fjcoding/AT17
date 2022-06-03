import { Cell } from './main.js';

test('ant alive', () => {
    const objectAnt = new Cell();
    expect(objectAnt.setAlive()).toBeFalsy();
});