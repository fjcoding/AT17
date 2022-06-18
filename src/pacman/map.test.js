import { Map } from './map';
let matrix = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
];


const map = new Map(matrix);
test('The function changeValue has to change the value of a position on the map.', ()=>{
    map.changeValue(1, 1, 2);
    expect(map.getValue(1, 1)).toBe(2);
});
test('The function getValue has to return the value of a map position.', ()=>{
    expect(map.getValue(0, 0)).toBe(0);
});

