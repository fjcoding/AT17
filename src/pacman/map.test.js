import { Map } from './map.js';
import { RIGHT, LEFT, UP, DOWN } from './pacman.js';


test('This function proof the cornes in the map ', ()=>{
    let map = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    let mapProbe = new Map(map);
    expect(mapProbe.checkCorners(LEFT, 0, 2)).toBe(LEFT);

    map = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 1],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    mapProbe = new Map(map);
    expect(mapProbe.checkCorners(RIGHT, 3, 2)).toBe(RIGHT);

    map = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0]
    ];

    mapProbe = new Map(map);
    expect(mapProbe.checkCorners(DOWN, 2, 3)).toBe(DOWN);

    map = [
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
    ];

    mapProbe = new Map(map);
    expect(mapProbe.checkCorners(UP, 2, 1)).toBe(UP);
});