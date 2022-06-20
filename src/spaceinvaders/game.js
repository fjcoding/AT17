import readline from 'readline';
import { Stage } from './stage.js';
import { Score } from './score.js';
import { Block } from './block.js';

const rows = 34;
const columns = 22;
const CharacterBoard = '   ';
const levelPositionBlocks = 3;
export class Game {
    constructor() {
        this.stageBoard = new Stage(rows, columns);
        this.scoreGame = new Score(columns);
        this.blockGame = new Block(this.stageBoard.getBoard());
    }

    initgame() {
        this.stageBoard.initBoard(CharacterBoard);
        this.stageBoard.putBorder();
        this.blockGame.putDinamicBlocks(levelPositionBlocks, this.stageBoard.getBoard());
    }

    printGame() {
        readline.cursorTo(process.stdout, 0, 0);
        process.stdout.write(this.scoreGame.printScore());
        process.stdout.write(this.stageBoard.print());
    }
}