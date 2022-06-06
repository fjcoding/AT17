import readline from 'readline';
import { Screen } from './screen.js';

let posX = 0;
let posY = 0;

function run() {
    readline.cursorTo(process.stdout, 0, 0);
    const screen = new Screen(50, 100);
    screen.set(posX, posY, 'M');
    process.stdout.write(screen.print());
    posX = posX == 49 ? 0 : posX + 1;
    posY = posY == 99 ? 0 : posY + 1;
}

console.clear();
setInterval(run, 500);