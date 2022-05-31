import { Ant } from "./ant";
export class Cell {
    constructor() {
        this.positionX = 0;
        this.positionY = 0;
        this.color = "•";
        this.ant = null;
      
    }

    getPositionX(){
        return this.positionX;
    }
    getPositionY(){
        return this.positionY;
    }
    getColor(){
        return this.color;
    }
    setPositionX(positionX){
        this.positionX = positionX;
    }
    setPositionY(positionY){
        this.positionY = positionY;
    }
    setColor(color){
        this.color=color;
    }

    getAnt(){
        return this.ant;
    }

    changeAntCell(positionX,positionY){
        this.positionX = positionX;
        this.positionY = positionY;
    }

    changeCellColor(){
        if(this.color() =="."){
            this.setColor("#");
        }else{
            this.setColor(".")
        }
               
    }


    





    

    
}

