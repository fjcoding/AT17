export class Block {
    constructor(positionX1,positionX2, PositionY, content) {
        this.posX1=positionX1;
        this.posX2=positionX2;
        this.posY=PositionY;
        this.content = content;
    }

    setBlock(x1,x2, y) {  
        this.content[y+1][x1] = ' ━ ';
        this.content[y+1][x2] = ' ━ ';
        this.content[y][x1] = ' ━ ';
        this.content[y][x2] = ' ━ ';
        this.content[y+1][x1-1]=' ◢ ';
        this.content[y+1][x2+1]=' ◣ ';
        return this.content;
    }

}