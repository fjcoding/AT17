import { isDirectionOrArray } from './verifiers.js';
import { isLogging } from './verifiers.js';
import { isPort } from './verifiers.js';
import { isDirection } from './verifiers.js';
import { isStringArray } from './verifiers.js';
import { isIntegerArray } from './verifiers.js';

test('isDirectionOrArray should return a text direction if the argument -d have a direction', () => {
    const testArray = ['-d', '/usr/dir'];
    const result = isDirectionOrArray(testArray);
    expect(result).toBe('direction');
});
test('isDirectionOrArray should return a values array if the argument -d have an array', () => {
    const testArray = ['-d', '1,2,3,4,-5'];
    const result = isDirectionOrArray(testArray);
    expect(result).toBe('array');
});

test('isLogging should return true if the schema have the parameter -l', () => {
    const testSchema = [{
        symbol: '-l',
        name: 'logging',
        type: 'boolean',
        value: false
    }];
    const result = isLogging(testSchema, '-l');
    expect(result).toBe(true);
});
test('isLogging should return false if the schema doest not have the parameter -l', () => {
    const testSchema = [{
        symbol: '-d',
        name: 'direction',
        type: 'string',
        value: ' '
    }];
    const result = isLogging(testSchema, '-l');
    expect(result).toBe(false);
});
test('isLogging should return false if the schema havethe parameter but the value is not -l', () => {
    const testSchema = [{
        symbol: '-l',
        name: 'logging',
        type: 'boolean',
        value: false
    }];
    const result = isLogging(testSchema, '-d');
    expect(result).toBe(false);
});

test('isPort should return false if the schema doest not have the parameter -p', () => {
    const testSchema = [{
        symbol: '-p',
        name: 'port',
        type: 'int',
        value: '8080'
    }];
    const result = isPort(testSchema, '-p');
    expect(result).toBe(true);
});
test('isPort should return false if the schema doest not have the parameter -p', () => {
    const testSchema = [{
        symbol: '-d',
        name: 'direction',
        type: 'string',
        value: ' '
    }];
    const result = isPort(testSchema, '-p');
    expect(result).toBe(false);
});
test('isPort should return false if the schema have the parameter but the value is not -p', () => {
    const testSchema = [{
        symbol: '-p',
        name: 'port',
        type: 'int',
        value: '8080'
    }];
    const result = isPort(testSchema, '-g');
    expect(result).toBe(false);
});
test('isDirection should return true if the schema and the value have the parameter -d and direction name', () => {
    const testSchema = [{
        symbol: '-d',
        name: 'direction',
        type: 'string',
        value: ' '
    }];
    const result = isDirection(testSchema, '-d');
    expect(result).toBe(true);
});
test('isDirection should return false if the schema does not have value -d and direction name', () => {
    const testSchema = [{
        symbol: '-p',
        name: 'port',
        type: 'int',
        value: '8080'
    }];
    const result = isDirection(testSchema, '-d');
    expect(result).toBe(false);
});
test('isDirection should return false if the schema have name direction but the value is not -d', () => {
    const testSchema = [{
        symbol: '-d',
        name: 'direction',
        type: 'string',
        value: ' '
    }];
    const result = isDirection(testSchema, '-l');
    expect(result).toBe(false);
});
test('isStringArray should return true if the schema does not have value -g and direction name', () => {
    const testSchema = [{
        symbol: '-g',
        name: 'list of strings',
        type: 'array',
        value: ['this', 'is']
    }];
    const result = isStringArray(testSchema, '-g');
    expect(result).toBe(true);
});
test('isStringArray should return false if the schema does not have value -g and direction name', () => {
    const testSchema = [{
        symbol: '-p',
        name: 'port',
        type: 'int',
        value: '8080'
    }];
    const result = isDirection(testSchema, '-g');
    expect(result).toBe(false);
});
test('isStringArray should return false if the schema have name but the value is not -g', () => {
    const testSchema = [{
        symbol: '-g',
        name: 'list of strings',
        type: 'array',
        value: ['this', 'is']
    }];
    const result = isStringArray(testSchema, '-d');
    expect(result).toBe(false);
});
test('isIntegerArray should return true if the schema does not have value -d and direction name', () => {
    const testSchema = [{
        symbol: '-d',
        name: 'list of integers',
        type: 'array',
        value: ['1', '2']
    }];
    const result = isIntegerArray(testSchema, '-d');
    expect(result).toBe(true);
});
test('isIntegerArray should return false if the schema does not have value -d and direction name', () => {
    const testSchema = [{
        symbol: '-p',
        name: 'port',
        type: 'int',
        value: '8080'
    }];
    const result = isIntegerArray(testSchema, '-d');
    expect(result).toBe(false);
});
test('isIntegerArray should return false if the schema have name but the value is not -d', () => {
    const testSchema = [{
        symbol: '-d',
        name: 'list of integers',
        type: 'array',
        value: ['1', '2']
    }];
    const result = isIntegerArray(testSchema, '-l');
    expect(result).toBe(false);
});

