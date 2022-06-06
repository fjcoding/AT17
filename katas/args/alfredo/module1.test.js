import { ModuleArgs } from './ModuleArgs.js';

test('get argument -l', () => {
    const classArgs = new ModuleArgs;
    let test1 = classArgs.getL('-l');
    let result = new Object();
    result.identifier = '-l';
    result.value = true;
    expect(test1).toEqual(result);
});

test('get argument -p', () => {
    const classArgs = new ModuleArgs;
    let test1 = classArgs.getP('-p 9091');
    let result = new Object();
    result.identifier = '-p';
    result.value = 9091;
    expect(test1).toEqual(result);
});

test('get argument -d', () => {
    const classArgs = new ModuleArgs;
    let test1 = classArgs.getD('-d /dir/user/desktop/file');
    let result = new Object();
    result.identifier = '-d';
    result.value = '/dir/user/desktop/file';
    expect(test1).toEqual(result);
});

test('get argument -g', () => {
    const classArgs = new ModuleArgs;
    let test1 = classArgs.getG('-g room,table,wall');
    let result = new Object();
    result.identifier = '-g';
    result.value = ['room', 'table', 'wall'];
    expect(test1).toEqual(result);
});

test('get argument -d list decimal', () => {
    const classArgs = new ModuleArgs;
    let test1 = classArgs.getDecimal('-d 1,2,3,-4,19,-800,800');
    let result = new Object();
    result.identifier = '-d';
    result.value = [1, 2, 3, -4, 19, -800, 800];
    expect(test1).toEqual(result);
});