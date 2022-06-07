import { parser } from './parserModule.js';
const schema = [
    {name : 'logging', alias : '-l', type : 'boolean', subtype : false, value : false},
    {name : 'port', alias : '-p', type : 'number', subtype : false, value : 0},
    {name : 'directory', alias : '-d', type : 'string', subtype : false, value : ''},
    {name : 'stringList', alias : '-g', type : 'object', subtype : 'string', value : ''},
    {name : 'numberList', alias : '-t', type : 'object', subtype : 'number', value : ''}
];

let result = {
    logging : false,
    port : 0,
    directory : '',
    stringList : '',
    numberList : '',
    error : ''
};

export let expectedResult = {
    logging : true,
    port : 0,
    directory : '',
    stringList : '',
    numberList : '',
    error : ''
};

test('the parser function return the object that corresponde with the args -l -d directory/arg -t 1,-2,3,4', () => {
    parser(schema, '-l', true, result);
    expect(result).toEqual(expectedResult);
});