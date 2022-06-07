import { textParserToArray, verifyString, isArrayString, isArrayNumber } from './parseFunctions.js';

const auxTest = new textParserToArray('Any text');
test('Class Init recived String correctly', () => {
    const result = auxTest.args;
    expect(result).toBe('Any text');
});

const auxTest1 = new textParserToArray('');
test('Empty argments', () => {
    const result = auxTest1.init();
    expect(result).toBe('Please write your args');
});

test('Verify -l value return true', () => {
    const result = verifyString(['-l']);
    expect(result).toBe('true');
});

test('Verify -d without a value after it', () => {
    const result = verifyString(['-d']);
    expect(result).toBe('');
});

test(' Verifyinpt text -p 8080 returns 8080', () => {
    const result = verifyString(['-p', '8080']);
    expect(result).toBe('8080');
});

const auxTest2 = new textParserToArray('-l -g a,b,c');
test('Parser with -l and -g values', () => {
    const result = auxTest2.init();
    expect(result).toBe('true a,b,c');
});

test('Verify -d command with a directory', () => {
    const result = verifyString(['-d', 'D:/User/Jorge/AT17']);
    expect(result).toBe('D:/User/Jorge/AT17');
});

test('Verify commands -l , -g w,x,y,z', () => {
    const result = verifyString(['-l', '-g', 'w,x,y,z']);
    expect(result).toBe('true w,x,y,z');
});

test('Verify input text -g -n without its value', () => {
    const result = verifyString(['-n', '-g']);
    expect(result).toBe('');
});

test('Verify input is an array of strings', () => {
    const result = isArrayString(['aabcde', 'efgh', 'xd']);
    expect(result).toBe(true);
});

test(' isArrayNumber, verify that Array entered is pure Numbers', () => {
    const result = isArrayNumber(['9', '8', '7']);
    expect(result).toBe(true);
});