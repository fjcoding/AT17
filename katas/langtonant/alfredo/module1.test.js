import { class1 } from './module1.js';

test('change position ant ', () => {
    const class1Inst = new class1();
    class1Inst.setdirection(1);
    class1Inst.changedirection(true);
    expect(class1Inst.getdirection()).toBe(2);
    class1Inst.changedirection(true);
    expect(class1Inst.getdirection()).toBe(3);
    class1Inst.changedirection(true);
    expect(class1Inst.getdirection()).toBe(4);
    class1Inst.changedirection(true);
    expect(class1Inst.getdirection()).toBe(1);

    class1Inst.changedirection(false);
    expect(class1Inst.getdirection()).toBe(4);
    class1Inst.changedirection(false);
    expect(class1Inst.getdirection()).toBe(3);
    class1Inst.changedirection(false);
    expect(class1Inst.getdirection()).toBe(2);
    class1Inst.changedirection(false);
    expect(class1Inst.getdirection()).toBe(1);
});

test('Change Color Block', () => {
    const class1Inst = new class1();

     var x = class1Inst.getblock();
     class1Inst.changeblock();
     expect(class1Inst.getblock()).toBe(!x);

});