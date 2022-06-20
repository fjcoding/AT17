import { Game } from './game.js';

let playerGame = new Game();

function run() {
    playerGame.startGame();
}
console.clear();
setInterval(run, 500);
