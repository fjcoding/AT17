import readline from 'readline';
import { Stage } from './stage.js';
import { Score } from './score.js';

export class Game{
    constructor(){
    let rows = 30;
    let columns = 22;
    this.stageBoard=new Stage(rows, columns);
    this.scoreGame = new Score(columns);
    }
    initgame(){
        
        this.stageBoard.initBoard(' . ');
        this.stageBoard.putBorder();
    }
    printGame(){
        readline.cursorTo(process.stdout, 0, 0);
        process.stdout.write(this.scoreGame.printScore());
        process.stdout.write(this.stageBoard.print());
    }
}