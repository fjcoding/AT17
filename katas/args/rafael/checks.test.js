
import { login } from './checks.js';
import {address} from './checks.js';
test('This would return true because acomplished the rigth argument ', () => {
    let schema = [{
        symbol: '-l',
        name: 'loging',
        type: 'boolean',
        value: false
    }];
    let result = login(schema, '-l');
    expect(result).toBe(true);
});
test('This have to return false because there is no value', () => {
    let schema = [{
        symbol: '-l',
        name: 'logging',
        type: 'boolean',
        value: false
    }];
    let result = login(schema, '');
    expect(result).toBe(false);
});
test('this needs to return false', () => {
    let schema = [{
        symbol: '-d',
        name: 'direction',
        type: 'string',
        value: ' '
    }];
    let result = login(schema, '-l');
    expect(result).toBe(false);
});
test('This have to return because the value is not -l', () => {
    let schema = [{
        symbol: '-l',
        name: 'logging',
        type: 'boolean',
        value: false
    }];
    let result = login(schema, '-d');
    expect(result).toBe(false);
});

test('addres will return true because we are giving the rigth input', () => {
    let testSchema = [{
        symbol: '-d',
        name: 'direction',
        type: 'string',
        value: ' '
    }];
    let result = address(testSchema, '-d');
    expect(result).toBe(true);
});
test('It will return false because is a differente value', () => {
    let testSchema = [{
        symbol: '-p',
        name: 'port',
        type: 'int',
        value: '8080'
    }];
    let result = address(testSchema, '-d');
    expect(result).toBe(false);
});
test('address will return false because is other value', () => {
    let testSchema = [{
        symbol: '-d',
        name: 'direction',
        type: 'string',
        value: ' '
    }];
    let result = address(testSchema, '-l');
    expect(result).toBe(false);
});
test('It will return false because we will an empty value', () => {
    let testSchema = [{
        symbol: '-d',
        name: 'direction',
        type: 'string',
        value: ' '
    }];
    let result = address(testSchema, '');
    expect(result).toBe(false);
});