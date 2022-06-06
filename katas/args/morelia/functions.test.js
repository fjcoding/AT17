import { boolean } from './functions';
import { number } from './functions';
import { string } from './functions';
import { arrayString } from './functions';
import { arrayNumber } from './functions';

test('boolean validate that the function returns true', () => {
    const result = boolean();
    expect(result).toBe(true);
});
test('number validate that the function returns a number int', () => {
    const value = '8080';
    const result = number(value);
    expect(result).toBe(8080);
});
test('number validate that the function returns a null when it is not a number', () => {
    const value = 'p';
    const result = number(value);
    expect(result).toBe(null);
});
test('string validate that the function returns a string', () => {
    const value = '/usr/logs';
    const result = string(value);
    expect(result).toBe('/usr/logs');
});
test('string validate that the function returns a null when it is not a string', () => {
    const value = '58';
    const result = string(value);
    expect(result).toBe(null);
});
test('arrayString validate that the function returns an array of strings', () => {
    const value = 'this,is,a,list';
    const result = arrayString(value);
    expect(result).toEqual([ 'this', 'is', 'a', 'list' ]);
});
test('arrayString validate that the function returns null when an array value is not string', () => {
    const value = 'this,is,30,list';
    const result = arrayString(value);
    expect(result).toEqual(null);
});
test('arrayNumber validate that the function returns an array of number int', () => {
    const value = '1,2,-3,5';
    const result = arrayNumber(value);
    expect(result).toEqual([ 1, 2, -3, 5 ]);
});
test('arrayNumber validate that the function returns null when an array value is not int', () => {
    const value = '1,hola,-3,5';
    const result = arrayNumber(value);
    expect(result).toEqual(null);
});