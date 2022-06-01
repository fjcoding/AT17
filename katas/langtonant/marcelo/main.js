import { TableAnt } from './table.js';

var table = new TableAnt(10);
table.addAntTable(4,5);
table.moveAnt(100);
console.log(table.showTable());

