import { ModuleOne } from './ModuleOne.js';
import { Schema } from './Schema.js';

test('get argument -l', () => {
    const classArgs = new ModuleOne('-l');
    let result = classArgs.exeProcess();
    let varScheme = new Schema();
    let expected = varScheme.getSchema();
    expected[0].parameter = '-l';
    expected[0].value = true;
    expected[0].isDefine = true;
    expect(expected[0]).toEqual(result[0]);
});

test('get argument -p', () => {
    const classArgs = new ModuleOne('-p 9091');
    let result = classArgs.exeProcess();
    let varScheme = new Schema();
    let expected = varScheme.getSchema();
    expected[1].parameter = '-p';
    expected[1].value = 9091;
    expected[1].isDefine = true;
    expect(expected[1]).toEqual(result[1]);
});

test('get argument -d', () => {
    const classArgs = new ModuleOne('-d /dir/user/desktop/file');
    let result = classArgs.exeProcess();
    let varScheme = new Schema();
    let expected = varScheme.getSchema();
    expected[2].parameter = '-d';
    expected[2].value = '/dir/user/desktop/file';
    expected[2].isDefine = true;
    expect(expected[2]).toEqual(result[2]);
});

test('get argument -g', () => {
    const classArgs = new ModuleOne('-g room,table,wall');
    let result = classArgs.exeProcess();
    let varScheme = new Schema();
    let expected = varScheme.getSchema();
    expected[3].parameter = '-g';
    expected[3].value = ['room', 'table', 'wall'];
    expected[3].isDefine = true;
    expect(expected[3]).toEqual(result[3]);
});

test('get argument -d', () => {
    const classArgs = new ModuleOne('-d 1,2,3,-4,19,-800,800');
    let result = classArgs.exeProcess();
    let varScheme = new Schema();
    let expected = varScheme.getSchema();
    expected[4].parameter = '-d';
    expected[4].value = [1, 2, 3, -4, 19, -800, 800];
    expected[4].isDefine = true;
    expect(expected[4]).toEqual(result[4]);
});
/*


test('get argument -d list decimal', () => {
    const classArgs = new ModuleArgs;
    let test1 = classArgs.getDecimal('-d 1,2,3,-4,19,-800,800');
    let result = new Object();
    result.identifier = '-d';
    result.value = [1, 2, 3, -4, 19, -800, 800];
    expect(test1).toEqual(result);
});*/