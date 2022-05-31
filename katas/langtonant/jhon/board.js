export class Board {
    constructor(sizeX,sizeY){
        
        const y = sizeY*1;
        const x = sizeX*1;
        console.log(x,y);
        this.board = new Array(x);
        this.orientation = 0;
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
        //this.printBoard();
        
    }
    printBoard(){
        
        console.clear();
        console.log(this.board.join('\n') + '\n\n');
    }
    // Inicio de las iteraciones para ir actualizando la hormiga
    langtonantFunction(posX, posY, moves){
        const steps = moves*1;
        if(steps > 0){
        var count = 0;
        while(count<steps){
           flag = true;
            moveFunction(posX, posY);
        }
        }else{
            console.log("Insert a valid number of steps");
        }
    }

    moveFunction(posX, posY){
        if(posX > 0 && posX < this.board.length){
            if(posY > 0 && posY < this.board.length){
                if(this.board[posX][posY] == 'X'){
                    this.turnRight();
                }else{
                    this.turnLeft();
                }
            }
        }
    }

}