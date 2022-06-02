import { FuncMatrix, Movements } from './functions';
import { ColorBox } from './functions';
import { Movements } from './functions.js';
import { Walk } from './functions';

test('FuncMatrix should return a matrix')
const Size = 2;
const newmatrix = FuncMatrix(Size, Size);
expect(newmatrix).toBe[[0, 0], [0, 0]];

test('ColorBox function should return 0 (white) if its 1 (black)'), () => 
{
    const testmatrix = new Array();
    testmatrix[0] = new Array();
    testmatrix[1] = new Array();
    testmatrix[0][0] = 1;
    testmatrix[0][1] = 1;
    testmatrix[1][0] = 1;
    testmatrix[1][1] = 1;

    const ColorBoxrResult = ColorBox(testmatrix, 0, 0); 
    expect(ColorBoxrResult[0][0]).toBe(0);
};

import dir from '/.functions'

test ('Movements should return the ant movements');
{   dir1=1;
    min=0;
    max=3;
    dir=dir.south
    const Movement = Movements(dir, min, max);
    expect(Movement[dir,min,max]).toBe(?);
}

test ()

