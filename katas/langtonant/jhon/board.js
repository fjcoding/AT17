export class Board {
    constructor(sizeX,sizeY){
        
        const y = sizeY*1;
        const x = sizeX*1;
        console.log(x,y);
        this.board = new Array(x);
        //console.log(this.board.length, "   su tamaño es ?");
        this.createBoard(x,y);
    }
    
    createBoard(sizeX , sizeY){
        const x = sizeX*1;
        const y = sizeY*1;
        for (var i = 0; i < x; i++) {
        this.board[i] = new Array(y);
        }
        this.fillboard(x,y);
    }
    fillboard(sizeX ,sizeY){
        const x = sizeX*1;
        const y = sizeY*1;
        for(var i = 0;i<x;i++){
            for(var j = 0;j<y;j++){
            this.board[i][j] = 'X';
            }
        }
        this.printBoard();
        //console.clear();
        
    }
    printBoard(){
        
        console.clear();
        console.log(this.board.join('\n') + '\n\n');
    }
}