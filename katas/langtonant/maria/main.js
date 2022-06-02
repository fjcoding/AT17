import {Grid} from './antolangt.js';
import {Ant} from './antolangt.js';
//import {ant} from './module.js';
let grid1= new Grid(10,5);
grid1.cargar();
grid1.imprimir();

let ant1=new Ant (1,2,"s",grid1);
ant1.mover(2);
