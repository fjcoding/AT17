import { colorbox } from './module1.js';

if (matrix[row][column] == 0) 
{
    matrix[row][column] = 1;
} 
else 
{
    matrix[row][column] = 0;
}

test('class1 func1 should return 1', () => {
    const class1Inst = new class1();
    expect(class1Inst.func1()).toBe(1);
}); 
