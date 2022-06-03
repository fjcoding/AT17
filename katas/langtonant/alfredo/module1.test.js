import { langtonant } from './langtonant.js';

test('change position ant ', () => {
    const class1Inst = new langtonant();
    class1Inst.setDirection(1);
    class1Inst.changeDirection(true);
    expect(class1Inst.getDirection()).toBe(2);
    class1Inst.changeDirection(true);
    expect(class1Inst.getDirection()).toBe(3);
    class1Inst.changeDirection(true);
    expect(class1Inst.getDirection()).toBe(4);
    class1Inst.changeDirection(true);
    expect(class1Inst.getDirection()).toBe(1);

    class1Inst.changeDirection(false);
    expect(class1Inst.getDirection()).toBe(4);
    class1Inst.changeDirection(false);
    expect(class1Inst.getDirection()).toBe(3);
    class1Inst.changeDirection(false);
    expect(class1Inst.getDirection()).toBe(2);
    class1Inst.changeDirection(false);
    expect(class1Inst.getDirection()).toBe(1);
});

test('Change Color Block', () => {
    const class1Inst = new langtonant();

    class1Inst.setColorBlock(true);
    class1Inst.changeColorBlock();
    expect(class1Inst.getColorBlock()).toBe(false);
});