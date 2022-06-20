import { DOWN, LEFT } from './actor';
import { Map } from './map';
let matrix = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0]
];


const map = new Map(matrix);
test('The function changeValue has to change the value of a position on the map.', () => {
    map.changeValue(1, 1, 2);
    expect(map.getValue(1, 1)).toBe(2);
});

test('The function getValue has to return the value of a map position.', () => {
    expect(map.getValue(0, 0)).toBe(0);
});

test('The  checkContentsCell function change the value 1 in the pacman position  in 2.', () => {
    // let mapMain = mapPacman;
    let mapA = new Map(matrix);
    map.pacman.setPosition(0, 1);
    map.pacman.setDirection(DOWN);
    mapA.checkContentsCell(0, 1);
    expect(mapA.getValue(map.pacman.positionX, map.pacman.positionY)).toBe(2);
});

test('The  redrawMap function control the movements in this case ghost must eat the pacman.', () => {
    let expected = [
        [ 0, 1, 0 ],
        [ 2, 2, 1 ],
        [ 0, 1, 0 ]
    ];
    let mapA = new Map(matrix);
    mapA.pacman.setPosition(0, 1);
    mapA.pacman.setDirection(DOWN);
    mapA.blinky.setPosition(1, 2);
    mapA.blinky.setDirection(LEFT);
    mapA.pinky.setPosition(1, 2);
    mapA.pinky.setDirection(LEFT);
    mapA.inky.setPosition(1, 2);
    mapA.inky.setDirection(LEFT);
    mapA.clyde.setPosition(1, 2);
    mapA.clyde.setDirection(LEFT);
    let newMap = mapA.redrawMap();
    console.log(newMap);
    expect(newMap).toEqual(expected);
});

test('The  redrawMap function control for game over', () => {
    let expected = [
        [ 0, 1, 0 ],
        [ 2, 2, 1 ],
        [ 0, 1, 0 ]
    ];
    let mapA = new Map(matrix);
    mapA.pacman.setPosition(0, 1);
    mapA.pacman.setDirection(DOWN);
    mapA.blinky.setPosition(1, 2);
    mapA.blinky.setDirection(LEFT);
    mapA.pinky.setPosition(1, 2);
    mapA.pinky.setDirection(LEFT);
    mapA.inky.setPosition(1, 2);
    mapA.inky.setDirection(LEFT);
    mapA.clyde.setPosition(1, 2);
    mapA.clyde.setDirection(LEFT);
    mapA.pacman.setLife(0);
    let newMap = mapA.redrawMap();
    expect(newMap).toEqual(expected);
    expect(mapA.countGameOver).toBe(0);
});


