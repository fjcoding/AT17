import {Grid} from './antolangt.js';
import {Ant} from './antolangt.js';
//import {ant} from './module.js';
let grid1 = new Grid(10, 5);
grid1.load();
console.log("Grid")
grid1.print();
let ant1 = new Ant (1, 2, 's', grid1);
ant1.move(2);
