import { parser } from './parserModule.js';

export const schema = [
    {name : 'logging', alias : '-l', type : 'boolean', subtype : false, value : false},
    {name : 'port', alias : '-p', type : 'number', subtype : false, value : 0},
    {name : 'directory', alias : '-d', type : 'string', subtype : false, value : ''},
    {name : 'stringList', alias : '-g', type : 'object', subtype : 'string', value : ''},
    {name : 'numberList', alias : '-t', type : 'object', subtype : 'number', value : ''}
];

export let result = {
    logging : false,
    port : 0,
    directory : '',
    stringList : '',
    numberList : '',
    error : ''
};

// let probeArray = process.argv.slice(2,);
// for (let i = 0; i < probeArray.length; i++) {
//     if (probeArray[i].length == 2 && probeArray[i][0] == '-' && !Number(probeArray[i])) {
//         parser(schema, probeArray[i], probeArray[i + 1], result);
//     }
// }

let argsArray = process.argv[2];
argsArray = argsArray.split(' ');
for (let i = 0; i < argsArray.length; i++) {
    if (argsArray[i].length == 2 && argsArray[i][0] == '-' && !Number(argsArray[i])) {
        parser(schema, argsArray[i], argsArray[i + 1], result);
    }
}

console.log(result);