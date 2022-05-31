export class Ant {
    constructor() {
        this.direction = "N";
      
    }
    rotate(color="•"){
        switch(this.direction){
               case "N":direccion = (color=="•")?"E":"O"; break;
               case "S":direccion = (color=="•")?"O":"E"; break;
               case "E":direccion = (color=="•")?"N":"S"; break;
               case "O":direccion = (color=="•")?"S":"N"; break;
        }
    }
        
        

    





    

    
}

