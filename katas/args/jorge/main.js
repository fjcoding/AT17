import { textParserToArray } from './parseFunctions.js';

process.stdout.write('Type your arguments: ');

process.stdin.on('data', function(data) {
    let parser = new textParserToArray(data.toString().trim());
    console.log(parser.init());
    process.exit();
});
