import { isValidValue } from './validateModule.js';
import { isValidList } from './validateModule.js';

test('the isValidValue return the value when a number is introduce and typevalue is number', () => {
    expect(isValidValue('8080', 'number', false)).toBe('8080');
});

test('the isValidValue return false when a string and typevalue is number', () => {
    expect(isValidValue('probe', 'number', false)).toBe(false);
});

test('the isValidValue return true the value when a string is introduce and typevalue is string', () => {
    expect(isValidValue('probe', 'string', false)).toBe('probe');
});

test('the isValidValue return false when a number and typevalue is number', () => {
    expect(isValidValue('8080', 'string', false)).toBe(false);
});

test('the isValidList return false when a string list is added and subtypevalue is number', () => {
    expect(isValidList('this,is,a,list', 'number')).toBe(false);
});

test('the isValidList return false when a number list is added and subtypevalue is string', () => {
    expect(isValidList('1,2,-4,-9', 'string')).toBe(false);
});

const expectedStringList = ['this', 'is', 'a', 'list'];
test('the isValidList return the expected string array when a string is introduced subtypevalue is string', () => {
    expect(isValidList('this,is,a,list', 'string')).toEqual(expectedStringList);
});

const expectedNumberList = ['1', '2', '-4', '-9'];
test('the isValidList return the expected number array when a number is introduced subtypevalue is number', () => {
    expect(isValidList('1,2,-4,-9', 'number')).toEqual(expectedNumberList);
});