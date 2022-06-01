
import { ShowMatrix } from "./module1.js";
import { positionX } from "./module2.js";
import { positionY } from "./module2.js";
import { setupNewDirection } from "./module3.js";
import { ChekingColorBlack } from "./modulo5.js";
import { ChangeToBlackOrWhite } from "./module4.js";



export function Ant(Area, Steps)


 {
    console.log('Matrix showed is ' + Area + ' * '+Area);
    console.log('Number of steps: '+Steps);


    let extension = parseInt(Area);
    let Picture=new Array();


    for(let i=0;i<extension;i++)
    {
        Picture[i]=new Array();
        for(let j=0;j<extension;j++)
        {
            Picture[i][j]='.';
        }
    }


 
    let direction='left';
    let positionx= (Math.floor(extension/2))-1;
    let positiony= (Math.floor(extension/2))-1;
    


    for(let i=1;i<= parseInt(Steps);i++){

       if(ChekingColorBlack(Picture,positionx,positiony))
       {
            direction=setupNewDirection(direction,'black');
           
            Picture=ChangeToBlackOrWhite(Picture,positionx,positiony);
        }
        else
        {
            direction=setupNewDirection(direction,'white');
           
            Picture=ChangeToBlackOrWhite(Picture,positionx,positiony) ;
        }

        positionx=positionX(positionx,direction);
        
        positiony=positionY(positiony,direction);


        
        console.log('Step: '+i);
        
    ShowMatrix(Picture,extension);
        
        
    }
  

}

