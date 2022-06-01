export class Board {
    constructor(sizeX,sizeY){
        this.positionX = sizeX/2;
        this.positionY = sizeY/2;
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
            this.board[i][j] = ' ';
            }
        }
    }
    //aqui hubo un cambio
    printBoard(){
        
        console.clear();
        console.log(this.board.join('\n') + '\n\n');
    }
    // Inicio de las iteraciones para ir actualizando la matriz
    langtonantFunction(moves){
        const steps = moves*1;
        if(steps > 0){
        var count = 0;
        while(count<steps){
            var x = this.positionX;
            var y = this.positionY;
            console.log("-----------------------------------------");
            if(this.isPosValid(x, y)){
                if(this.isWhiteSlot(x, y)){
                    this.board[x][y] = '0';
                    this.turnRight();
                    this.updatePos();
                    this.printBoard();
                    count++;
                    
                }else{
                    this.board[x][y] = ' ';
                    this.turnLeft();                  
                    this.updatePos();
                    this.printBoard();
                    count++;
                }
            }
            else{
                this.setValidPos(x, y);
            }
        }
        }else{
            console.log("Insert a valid number of steps");
        }
    }

    isPosValid(posXin, posYin){
        var posX= posXin*1;
        var posY = posYin*1;
        var res = Boolean(false);
        if(posX >= 0 && posX < this.board.length){
            if(posY >= 0 && posY < this.board.length){
                res = Boolean(true);
            }
        }
        return res;
    }
    
    setValidPos(posXin, posYin){
        var posX= posXin*1;
        var posY = posYin*1;
        if(posX < 0){
            this.positionX = this.board.length-1;
        }else if(posX >= this.board.length){
            this.positionX = 0;
        }
        if(posY < 0){
            this.positionY = this.board.length-1;
        }else if(posY >= this.board.length){
            this.positionY = 0;
        }
    }

    isWhiteSlot(posXin, posYin){
        var posX = posXin*1;
        var posY = posYin*1;
        var res = Boolean(false);
        if(this.board[posX][posY] == ' '){
            res = Boolean(true);
        }
        return res;
    }

    setColor(posXin, posYin, color){
        var posX = posXin*1;
        var posY = posYin*1;
        this.board[posX][posY] = color;
    }

    turnLeft() {
        this.orientation--;
        if (this.orientation < 0) {
          this.orientation = 3;
        }
      }
      
    turnRight() {
        this.orientation++;
        if (this.orientation > 3) {
                this.orientation = 0;    
        }
      }
      
    updatePos() {
        if (this.orientation === 0) {
            this.positionX--;
        } else if (this.orientation === 1) {
            this.positionY++;
        } else if (this.orientation === 2) {
            this.positionX++;
        } else if (this.orientation === 3) {
            this.positionY--;
        }
    }

}