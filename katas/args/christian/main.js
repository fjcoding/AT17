import { Parser } from './parserClass.js';

process.stdout.write('Enter the arguments to parser: ');

process.stdin.on('data', function(data) {
    let parser = new Parser(data.toString().trim());
    console.log(parser.init());
    process.exit();
});
