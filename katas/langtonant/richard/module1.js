
export function Langtonant(DimensionSize, numberSteps) {
    console.log('The Area will be : '+DimensionSize+' X '+DimensionSize);
    console.log('Steps Number: '+numberSteps);
    var size = parseInt(DimensionSize);
    var myArray=new Array();
    for(let i=0;i<size;i++){
        myArray[i]=new Array();
        for(let j=0;j<size;j++){
            myArray[i][j]='O';
        }
    }

    // status ant
    var HeadDirection='left';
    var pos_x= (Math.floor(size/2))-1;
    var pos_y= (Math.floor(size/2))-1;
    console.log('X: '+pos_x+' - '+'Y: '+pos_y)


    for(let i=1;i<= parseInt(numberSteps);i++){

        
        //Code Ant
       if(VerifyBlack(myArray,pos_x,pos_y)){
            HeadDirection=ChangeDirection(HeadDirection,'black');
            myArray=ChangeColor(myArray,pos_x,pos_y);
        }
        else{
            HeadDirection=ChangeDirection(HeadDirection,'white');
            myArray=ChangeColor(myArray,pos_x,pos_y);
        }
        
        pos_x=changePositionX(pos_x,HeadDirection);
        pos_y=changePositionY(pos_y,HeadDirection);


        console.log("");
        console.log('Paso: '+i);
        MostrarLimite(size);
        mostrarMatriz(myArray,size);
        MostrarLimite(size);
        console.log('info ant: dir>'+HeadDirection +' _ '+'pos>['+pos_y+']['+pos_x+']');
        console.log("");
    }

function changePositionX(posX,direction){
switch (direction) {
    case 'up':
    return posX;
    break;
    case 'right':
        return posX+1;
    break;
    case 'down':
        return posX;
    break;
    case 'left':
        return posX-1;
    break;
}
}
function changePositionY(posY,direction){
    switch (direction) {
        case 'up':
        return posY-1;;
        break;
        case 'right':
            return posY;
        break;
        case 'down':
            return posY+1;
        break;
        case 'left':
            return posY;
        break;
    }

}
function ChangeColor(myArray,posX,PosY){
  
    if(myArray[PosY][posX]=='O'){
        myArray[PosY][posX]='#';
    }
    else{
        myArray[PosY][posX]='O';
    }
    return myArray;
}


function ChangeDirection(OldDir,color){
    if(color=='black'){
        switch(OldDir) {
            case 'up':
              return 'left';
              break;
            case 'right':
                return 'up';
              break;
              case 'down':
                return 'right';
              break;
              case 'left':
                return 'down';
                break;
          } 
    }
    else{
        if(color=='white'){
            switch(OldDir) {
                case 'up':
                  return 'right';
                  break;
                case 'right':
                    return 'down';
                  break;
                  case 'down':
                    return 'left';
                  break;
                  case 'left':
                    return 'up';
                    break;
              } 
    }

    }
}
function VerifyBlack(myArray,posX, PosY)
{
    if(myArray[PosY][posX]=='#')
    {
      return true;
    }
    else{
        return false;
    }
}    

}
function MostrarLimite(size){
    var LimArray= Array(size).fill('-');
    console.log(...LimArray);
}
function mostrarMatriz(ArrayM,lenght){
for (let i = 0; i < lenght; i++) {
        console.log(...ArrayM[i]);
}
}