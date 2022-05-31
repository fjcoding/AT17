import { Ant } from "./ant";
import { Cell } from "./cell";

export class TableAnt {
    constructor(size = 3) {
        // this.ant = new Ant();
        // this.cell = new Cell();
        // this.cellColor="•";
        this.table =  new Array(size);
    }

    rotate(){
        this.cell.ant.rotate(this.getColor());
    }

    advanceOneSquare(){

    }

    fillTable(){
        for(var i=0; i<this.table.length; i++) {

        }

    }

    addAnt(positionX,positionY){
        createCell = new Cell();
        createCell.setPositionX=positionX;
        createCell.setPositionY=positionY;
        this.table[positionX][positionY] = createCell;

    }


    



    

    
}