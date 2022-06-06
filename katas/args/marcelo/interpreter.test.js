import { Interpreter } from './interpreter';
const input = '-l -p 8080 -d /usr/logs';
const expectedResult = {
    l:true,
    p:8080,
    d:'/usr/log'
};
const schema = {
    'booleans':[ 'l', 'a', 'b', 'e', 'f'],
    'integers':['p', 'n'],
    'strings':['d', 'm']
};
// const intepreterCommand = new Interpreter(input, './commandsSchema.json');
const intepreterCommand = new Interpreter(input, schema);
test('Interpreter, the isParameterValid function should return empty if the parameters are correct.', () => {
    const intepreter = new Interpreter('-l 446 -p true -d true', schema);
    expect(intepreter.isParameterValid()).not.toBe('');
});

test('Interpreter, the isParameterValid function should return message if are parameters are not correct.', () => {
    // expect(intepreterCommand.isParameterValid()).not.toBe("");
    expect(intepreterCommand.isParameterValid()).toBe('');
});

test('Interpreter, the getObjectParameter function should return an object equal to expectedResult. ', () => {
    // console.log(intepreterCommand.convertToObject());
    expect(intepreterCommand.getObjectParameter()).toMatchObject(expectedResult);
});

test('Interpreter, the getValue function should return an object equal to expectedResult. ', () => {
    expect(intepreterCommand.getValue('p', '8080')).toBe(8080);
    expect(intepreterCommand.getValue('l', true)).toBe(true);
    expect(intepreterCommand.getValue('h', '465422')).toBe(0);
});
test('Interpreter, the displayCommandParameters function should return an object. ', () => {
    expect(intepreterCommand.displayCommandParameters()).toMatchObject(expectedResult);
});
test('Interpreter, the displayCommandParameters function should return an message string. ', () => {
    const intepreter = new Interpreter('-l 446 -p true -d true', schema);
    expect(intepreter.displayCommandParameters()).not.toBe('');
});
test('Interpreter, the getSchema function should return an message string. ', () => {
    const intepreter = new Interpreter('-l 446 -p true -d true', schema);
    expect(intepreter.getSchema()).toMatchObject(schema);
});

