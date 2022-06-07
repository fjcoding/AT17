import { isLetter } from './args.js';
import { flagExist } from './args.js';
import { correctValues } from './args.js';
test('isLetter must return true if string is a letter  ', () => {
    const str = 'a';
    const result = isLetter(str);
    expect(result).toBe(true);
});

test('isLetter must return false if string is a number  ', () => {
    const str = 1;
    const result = isLetter(str);
    expect(result).toBe(false);
});

test('flagExist must return true if all flags values exist in schema  ', () => {
    let schema = ['-l', '-p', '-d'];
    let flags = ['-l', '-p', '-d'];
    const result = flagExist(flags, schema);
    expect(result).toBe(true);
});

test('flagExist must return false if one flags value doesnt exist in schema  ', () => {
    let schema = ['-l', '-p', '-d'];
    let flags = ['-k', '-p', '-d'];
    const result = flagExist(flags, schema);
    expect(result).toBe(false);
});

test('correctValues must return false in l value if this is empty  ', () => {
    let flags = ['-l', '-p', '-d'];
    let values = ['', '8080', '/usr/logs'];
    const result  = correctValues(flags, values);
    expect(result).toEqual([ 'false', '8080', '/usr/logs' ]);
});

test('correctValues must return true in l value if this is true  ', () => {
    let flags = ['-l', '-p', '-d'];
    let values = ['true', '8080', '/usr/logs'];
    const result  = correctValues(flags, values);
    expect(result).toEqual([ 'true', '8080', '/usr/logs' ]);
});

test('correctValues must return 0 in p value if this is string or is empty  ', () => {
    let flags = ['-l', '-p', '-d'];
    let values = ['true', '', '/usr/logs'];
    const result  = correctValues(flags, values);
    expect(result).toEqual([ 'true', '0', '/usr/logs' ]);
});

test('correctValues must return an empty string in d value if this is a number  ', () => {
    let flags = ['-l', '-p', '-d'];
    let values = ['true', '8080', '8080'];
    const result  = correctValues(flags, values);
    expect(result).toEqual([ 'true', '8080', '' ]);
});

