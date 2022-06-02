import { ant } from './module1.js';
import { createBiMatrix } from './module1.js';
import { right } from './module1.js';
import { left } from './module1.js';
import { move } from './module1.js';
import { langtonant } from './module1.js';

test('createBiMatrix create a bidimensional array fill with 0', () => {
    const arrayExpected = [0, 0, 0, 0, 0];
    var arrayObtained = createBiMatrix(5);
    expect(arrayObtained.length).toBe(5);
    expect(arrayObtained[0].length).toBe(5);
    expect(arrayObtained[0]).toEqual(expect.arrayContaining(arrayExpected));
});

test('right function increase the ant direction in one', () => {
    var antprobe = new ant();
    const directionbefore = antprobe.direction = 2;
    right(antprobe);
    expect(antprobe.direction).toBe(directionbefore + 1);
});

test('left function decrease the ant direction in one', () => {
    var antprobe = new ant();
    const directionbefore = antprobe.direction = 2;
    left(antprobe);
    expect(antprobe.direction).toBe(directionbefore - 1);
});

test('move function increase and decrease the attribute fila adn attribute colmuna', () => {
    var antprobe = new ant();
    antprobe.direction = 0;
    const intialFila = antprobe.fila = 2;
    const initialColumna = antprobe.columna = 2;
    for (var i = 0; i < 4; i++) {
        move (antprobe);
        antprobe.direction++;
    }
    expect(antprobe.fila).toBe(intialFila);
    expect(antprobe.columna).toBe(initialColumna);
});

test('langtonant function move the ant to the expected position', () => {
    var antprobe = new ant();
    const expectedFila = 6;
    const expectedColumna = 5;
    langtonant(antprobe, 11, 5);
    expect(antprobe.fila).toBe(expectedFila);
    expect(antprobe.columna).toBe(expectedColumna);
});
