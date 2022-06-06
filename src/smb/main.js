import readline from 'readline';
import { Screen } from './screen.js';

/*const sprites = [
    'M..............................',
    '.M.............................',
    '..M............................',
    '...M...........................',
    '....M..........................',
    '.....M.........................',
    '......M........................',
    '.......M.......................',
    '........M......................',
    '.........M.....................',
    '..........M....................',
    '...........M...................',
];
let index = 0;*/

function run() {
    readline.cursorTo(process.stdout, 0, 0);
    const screen = new Screen(50, 50);
    process.stdout.write(screen.print());
    //index = index == 11 ? 0 : index + 1;
}

console.clear();
setInterval(run, 300);