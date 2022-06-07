import { Parser } from './parser.js';

test('parser should return the argument parsed ', () => {
    let resExpected = {
        l : true,
        p : 1010,
        d : '/path/etc'
    };
    let parser = new Parser;
    let valActual = parser.parser('-l -p 1010 -d /path/etc');
    expect(valActual).toEqual(resExpected);
});

test('parser should return l:false because arg \'l\' is not in the arg or is filled with a string ', () => {
    let resExpected = {
        l : false,
        p : 1010,
        d : '/path/etc'
    };
    let parser = new Parser;
    let valActual = parser.parser('-p 1010 -d /path/etc');
    expect(valActual).toEqual(resExpected);
    let valActual2 = parser.parser('-l asdasd -p 1010 -d /path/etc');
    expect(valActual2).toEqual(resExpected);
});

test('parser should return p: 0 because arg \'p\' not contain a number', () => {
    let resExpected = {
        l : true,
        p : 0,
        d : '/path/etc'
    };
    let parser = new Parser;
    let valActual = parser.parser('-l -p 1010asd -d /path/etc');
    expect(valActual).toEqual(resExpected);
    let valActual2 = parser.parser('-l -p asdasdasd -d /path/etc');
    expect(valActual2).toEqual(resExpected);
});


test('iscommand should return true is exist in the schema', () => {
    let valActual = new Parser().isCommand('l');
    expect(valActual).toEqual(true);
    valActual = new Parser().isCommand('p');
    expect(valActual).toEqual(true);
    valActual = new Parser().isCommand('d');
    expect(valActual).toEqual(true);
    valActual = new Parser().isCommand('x');
    expect(valActual).toEqual(false);
});

test('getValue should return the value of te command', () => {
    let valExpected = 'lineaX';
    let valActual = new Parser().getValue('-d lineaX asdasdasd', 2);
    expect(valActual).toEqual(valExpected);
});

test('isNumber should return the value of the command', () => {
    let valActual = new Parser().isNumber('56029');
    expect(valActual).toEqual(true);
    let valActual2 = new Parser().isNumber('56029swa');
    expect(valActual2).toEqual(false);
});
