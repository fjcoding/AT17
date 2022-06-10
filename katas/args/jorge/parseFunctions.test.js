import { textParserToArray, verifyInputString, isString, isNumber } from './parseFunctions.js';

const auxTest = new textParserToArray('Any text');
test('Class Init recived String correctly', () => {
    const result = auxTest.inputText;
    expect(result).toBe('Any text');
});

const auxTest1 = new textParserToArray('');
test('Empty argments', () => {
    const result = auxTest1.init();
    expect(result).toBe('Please write again your input Text');
});

test('Verify -l value return true', () => {
    const result = verifyInputString(['-l']);
    expect(result).toBe('true');
});

test('Verify -d without a value after it', () => {
    const result = verifyInputString(['-d']);
    expect(result).toBe('');
});

test(' Verify input text -p 8080 returns 8080', () => {
    const result = verifyInputString(['-p', '8080']);
    expect(result).toBe('8080');
});

const auxTest2 = new textParserToArray('-l -g a,b,c');
test('Parser with -l and -g values', () => {
    const result = auxTest2.init();
    expect(result).toBe('true a,b,c');
});

test('Verify -d command with a directory', () => {
    const result = verifyInputString(['-d', 'D:/User/Jorge/AT17']);
    expect(result).toBe('D:/User/Jorge/AT17');
});

test('Verify commands -l , -g w,x,y,z', () => {
    const result = verifyInputString(['-l', '-g', 'w,x,y,z']);
    expect(result).toBe('true w,x,y,z');
});

test('Verify input text -g -n without its value', () => {
    const result = verifyInputString(['-n', '-g']);
    expect(result).toBe('');
});

test('Verify input is an array of strings', () => {
    const result = isString(['aabcde', 'efgh', 'xd']);
    expect(result).toBe(true);
});

test(' isNumber, verify that Array entered is pure Numbers', () => {
    const result = isNumber(['9', '8', '7']);
    expect(result).toBe(true);
});