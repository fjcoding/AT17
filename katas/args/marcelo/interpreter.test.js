import { Interpreter } from './interpreter';
const input = '-l -p 8080 -d /usr/logs';
const expectedResult = {
    l: true,
    p: 8080,
    d: '/usr/logs'
};
const schema = {
    'booleans': ['l', 'a', 'b', 'e', 'f'],
    'integers': ['p', 'n'],
    'strings': ['d', 'm'],
    'stringsList': ['y', 'q'],
    'integersList': ['j', 'w']
};
const responseExpected = '\tInput: -l -p 8080 -d /usr/logs\n{"l":true,"p":8080,"d":"/usr/logs"}';
const intepreterCommand = new Interpreter(input, schema);
test('Interpreter, the controlValueParameter function should return an empty string if the value type of the input parameters is correct.', () => {
    const intepreter = new Interpreter('-l 446 -p true -d true', schema); // the value of the -l parameter has the wrong data type
    expect(intepreter.controlValueParameter()).not.toBe('');
});

test('Interpreter, the controlValueParameter function should return message if are parameters are not correct.', () => {
    expect(intepreterCommand.controlValueParameter()).toBe('');
});

test('Interpreter, the getObjectParameter function should return an object equal to expectedResult. ', () => {
    expect(intepreterCommand.getObjectParameter()).toMatchObject(expectedResult);
});

test('Interpreter, the getValue function should return the default values. ', () => {
    expect(intepreterCommand.getValue('p', '8080')).toBe(8080);
    expect(intepreterCommand.getValue('l', true)).toBe(true);
    expect(intepreterCommand.getValue('h', '465422')).toBe(465422);
    expect(intepreterCommand.getValue('p', true)).toBe(0);
    expect(intepreterCommand.getValue('l', 'pato')).toBe(false);
    expect(intepreterCommand.getValue('h', 'pollo')).toBe('pollo');
});
test('Interpreter, the displayCommandParameters function should return an String (responseExpect). ', () => {
    expect(intepreterCommand.displayCommandParameters()).toBe(responseExpected);
});
test('Interpreter, the displayCommandParameters function should return an message string. ', () => {
    const intepreter = new Interpreter('-l 446 -p true -d true', schema);
    expect(intepreter.displayCommandParameters()).not.toBe('');
});
test('Interpreter, the getSchema function should return an message string. ', () => {
    const intepreter = new Interpreter('-l 446 -p true -d true', schema);
    expect(intepreter.getSchema()).toMatchObject(schema);
});

