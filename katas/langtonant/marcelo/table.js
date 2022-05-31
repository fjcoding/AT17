import { Ant } from "./ant";
import { Cell } from "./cell";

export class TableAnt {
    constructor(size = 3) {
        this.ant = new Ant();
        this.table =  new Array(size);
    }

    rotate(){
        this.cell.ant.rotate(this.getColor());
    }

    addAntTable(positionX,positionY){
        if(positionX < 3 && positionY < 3){
            createCell = new Cell();
            createCell.setPositionX=positionX;
            createCell.setPositionY=positionY;
            createCell.setAnt(this.ant);
            this.table[positionX][positionY] = createCell;
        }
    }
    
    showTable(){
        tableString = "";
        for(var i=0; i<this.table.length; i++) {
            for(var j = 0; j<this.table; j++){
                tableString +=this.table.cell.getColor()+' ';
            }
            tableString+="\n";
        }
        console.log(tableString)
    }

    
}