import { Ant } from '../ant.js';
import { TableAnt } from '../table.js';
const positionAntX=5;
const positionAntY=6;
const size = 10;
const stringTableLength=10*10+10;

let tableAnt = new TableAnt(10);
test('Table addAntTable function should add an Ant to the table)', () => {
    tableAnt.addAntTable(positionAntX,positionAntY);
    expect(tableAnt.table[positionAntX][positionAntY]).toMatchObject({ positionX:positionAntX,positionY:positionAntY});
});

test('Table addAntTable function should not add an Ant to the table)', () => {
    let table = new TableAnt(size);
    table.addAntTable(15,26);
    expect(table.table).not.toContain(new Ant);
    // expect(tableAnt.table[15][26]).toBeUndefined();
    expect(15).toBeGreaterThan(table.table.length-1);
    expect(26).toBeGreaterThan(table.table[0].length-1);
   
 
});

test('Table showTable function should display table)', () => {
    let tableAnt = new TableAnt(10);
    // console.log(tableAnt.showTable().length,10*21);
    expect(tableAnt.showTable().replace(/ /g, "").length).toEqual(stringTableLength);
 
});

test('Table createTable function should create matrix (size))', () => {
    let table = new TableAnt(10);
    expect(table.createTable().length).toEqual(10);
    expect(table.createTable()[9].length).toEqual(10);
    console.log(table.showTable().replace(/ /g, "").length);
    expect(table.showTable().replace(/ /g, "").length).toEqual(stringTableLength);
    // expect(table.showTable().replace(/ /g, "")).toContain(".");
 
});