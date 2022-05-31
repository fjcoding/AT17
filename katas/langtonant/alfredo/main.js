import { class1 } from './module1.js';

let cl = new class1();
cl.matriz_define();

let itera = process.argv[2];
console.log(itera);

while(itera-->=0)
{
   let antposi = cl.getAntPosition();
   let block = cl.getmatriz()[antposi[0]][antposi[1]];
   cl.waysmatriz(cl.getAntPosition());
   cl.printwaymatriz()
   cl.change_direction(block);
   cl.change_block();
   cl.change_positionAnt();
   console.log("");
}



