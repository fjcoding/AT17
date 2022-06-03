import { FuncMatrix} from './functions';
import { ColorBox } from './functions';

test('FuncMatrix should return a matrix', () => {
const Size = 2;
const newmatrix = FuncMatrix(Size, Size);
expect(newmatrix).toBe[[0, 0], [0, 0]];
});

test('ColorBox function should return 0 (white) if its 1 (black)', () => {
    const testmatrix = new Array();
    testmatrix[0] = new Array();
    testmatrix[1] = new Array();
    testmatrix[0][0] = 0;
    testmatrix[0][1] = 1;
    testmatrix[1][0] = 0;
    testmatrix[1][1] = 1;

    const ColorBoxResult = ColorBox(testmatrix, 0, 1);
    expect(ColorBoxResult).toBe[[0, 0], [0, 1]];
    
});


