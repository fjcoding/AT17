import { class1 } from './module1.js';

test('class1 func1 should return 1', () => {
    const class1Inst = new class1();
    expect(class1Inst.func1()).toBe(1);
});