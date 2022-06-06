import { declareSchema } from './constructors.js';
import { constructLogging } from './constructors.js';
import { constructPort } from './constructors.js';
import { constructDirection } from './constructors.js';
import { constructStringArray } from './constructors.js';
import { constructIntegerArray } from './constructors.js';

test('declareSchema should be retorned a json structure', () => {
    const testSchema = {
        symbol: '-l',
        name: 'logging',
        type: 'boolean',
        value: false
    };
    const result = declareSchema();
    expect(result[0]).toStrictEqual(testSchema);
});

test('constructLogging should be retorned a json structure with a logging dates', () => {
    const testLogging = {
        symbol: '-l',
        name: 'logging',
        type: 'boolean',
        value: true
    };
    const result = constructLogging();
    expect(result).toStrictEqual(testLogging);
});


test('constructPort should be retorned a json structure with a port dates and a port value', () => {
    const testValue = 8080;
    const testPort = {
        symbol: '-p',
        name: 'port',
        type: 'int',
        value: testValue
    };
    const result = constructPort(testValue);
    expect(result).toStrictEqual(testPort);
});
test('constructDirection should be retorned a json structure with a direction dates and a direction value', () => {
    const testDirectionValue = '/usr/dir';
    const testDirection = {
        symbol: '-d',
        name: 'direction',
        type: 'string',
        value: testDirectionValue
    };
    const result = constructDirection(testDirectionValue);
    expect(result).toStrictEqual(testDirection);
});

test('constructStringArray should be retorned a json structure with an array dates and a string array values', () => {
    const testChain = 'this,is,a,list';
    const stringArray = testChain.split(',');
    const testListString = {
        symbol: '-g',
        name: 'list of strings',
        type: 'array',
        value: stringArray
    };
    const result = constructStringArray(testChain);
    expect(result).toStrictEqual(testListString);
});

test('constructIntegerArray should be retorned a json structure with an array dates and a string array values', () => {
    const testChain = '1,2,3,-5';
    const stringArray = testChain.split(',');
    const testListInteger = {
        symbol: '-d',
        name: 'list of integers',
        type: 'array',
        value: stringArray
    };
    const result = constructIntegerArray(testChain);
    expect(result).toStrictEqual(testListInteger);
});