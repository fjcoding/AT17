import { Ant } from '../ant.js';
const paintBlack = '#';
const paintWhite = '.';

test('Ant rotate function should not change the direcction(N)', () => {
    const antInst = new Ant();
    let direction = antInst.direction;
    antInst.rotate('dfadsf');
    let newDirection1 = antInst.direction;
    antInst.rotate(' ');
    let newDirection2 = antInst.direction;
    antInst.rotate(1);
    let newDirection3 = antInst.direction;
    antInst.rotate('#$%');
    let newDirection4 = antInst.direction;
    expect(direction).toBe(newDirection1);
    expect(direction).toBe(newDirection2);
    expect(direction).toBe(newDirection3);
    expect(direction).toBe(newDirection4);
});

test('Ant rotate function should change the direcction (N)', () => {
    const antInst = new Ant();
    let direction = antInst.direction;
    antInst.rotate('.');
    let newDirection1 = antInst.direction;
    antInst.rotate('#');
    let newDirection2 = antInst.direction;

    // console.log(direction, newDirection_1);
    expect(direction).not.toBe(newDirection1);
    // console.log(direction, newDirection_2);
    expect(direction).toBe(newDirection2);
});

test('Ant paint function should change the color (. => #)', () => {
    const antInst = new Ant();
    expect(antInst.paint(paintWhite)).not.toBe(paintWhite);
    expect(antInst.paint(paintBlack)).toBe(paintWhite);
});

test('Ant paint function should not change the color(. or #)', () => {
    const antInst = new Ant();

    expect(antInst.rotate('dfadsf')).not.toBe(paintWhite);
    expect(antInst.rotate(' ')).not.toBe(paintWhite);
    expect(antInst.rotate(1)).not.toBe(paintBlack);
    expect(antInst.rotate('#$%')).not.toBe(paintBlack);
});

