import { existInSchema } from './existModule.js';
const schema = [
    {name : 'logging', alias : '-l', type : 'boolean', subtype : false, value : false},
    {name : 'port', alias : '-p', type : 'number', subtype : false, value : 0},
    {name : 'directory', alias : '-d', type : 'string', subtype : false, value : ''},
    {name : 'stringList', alias : '-g', type : 'object', subtype : 'string', value : ''},
    {name : 'numberList', alias : '-t', type : 'object', subtype : 'number', value : ''}
];

const expectObject = {name : 'logging', alias : '-l', type : 'boolean', subtype : false, value : false};

test('the existInSchema return the object that corresponde with the alias', () => {
    expect(existInSchema(schema, '-l')).toEqual(expectObject);
});

test('the existInSchema return undefined when use a wrong alias', () => {
    expect(existInSchema(schema, '-w')).toBe(undefined);
});