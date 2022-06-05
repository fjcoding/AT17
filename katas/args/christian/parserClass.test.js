import { Parser, verifyString, isArrayString, isArrayNumber } from './parserClass.js';

const aux = new Parser('hola mundo');
test('Class Init recived String correctly', () => {
    const result = aux.args;
    expect(result).toBe('hola mundo');
});

const aux1 = new Parser('hola mundo');
test(' Parser Work Completly', () => {
    const result = aux1.init();
    expect(result).toBe('Ningun Argumento Coincide');
});

const aux2 = new Parser('-l -g r,t,r');
test(' Parser Work Completly', () => {
    const result = aux2.init();
    expect(result).toBe('true r,t,r');
});

test(' VerifyString parse, compare whit schema -l logging and return result', () => {
    const result = verifyString(['-l']);
    expect(result).toBe('true');
});

test(' VerifyString parse, compare whit schema -d directory and return result', () => {
    const result = verifyString(['-d']);
    expect(result).toBe('');
});

test(' VerifyString parse, compare whit schema -d directory and return result', () => {
    const result = verifyString(['-d', 'C:/user']);
    expect(result).toBe('C:/user');
});

test(' VerifyString parse, compare whit schema -l logging -g Array from Strings later return result', () => {
    const result = verifyString(['-l', '-g', 'r,t,r,t']);
    expect(result).toBe('true r,t,r,t');
});

test(' VerifyString parse, compare whit schema -n Array from Numbers and -g Array from Strings later return result', () => {
    const result = verifyString(['-n', '1,3,4,5', '-g', 'r,t,r,t']);
    expect(result).toBe('1,3,4,5 r,t,r,t');
});

test(' VerifyString parse, compare whit schema -n withour parameters and -g without parameters later return result', () => {
    const result = verifyString(['-n', '-g']);
    expect(result).toBe('');
});

test(' VerifyString parse, compare whit schema -p port and it parameter later return result', () => {
    const result = verifyString(['-p', '5656']);
    expect(result).toBe('5656');
});

test(' isArrayString, verify that Array entered is pure Strings', () => {
    const result = isArrayString(['asd', 'sdasrf', 'hola']);
    expect(result).toBe(true);
});

test(' isArrayString, verify that Array entered is pure Strings', () => {
    const result = isArrayString(['1', 'sdasrf', 'hola']);
    expect(result).toBe(false);
});

test(' isArrayNumber, verify that Array entered is pure Numbers', () => {
    const result = isArrayNumber(['1', '2', '3']);
    expect(result).toBe(true);
});

test(' isArrayNumber, verify that Array entered is pure Numbers', () => {
    const result = isArrayNumber(['1', 'hola', '3']);
    expect(result).toBe(false);
});