import { superDot } from './superdot.js';

test('setPosition should update the pos in x,y of the super dot', ()=>{
    let superdot = new superDot(3, 10);
    superdot.setPosition(4, 15);
    let actualXValue = superdot.positionX;
    let expectedXValue = 4;
    expect(expectedXValue).toBe(actualXValue);
    let actualYValue = superdot.positionY;
    let expectedYValue = 15;
    expect(expectedYValue).toBe(actualYValue);
});

test('eaten should return true if the input pos is equals actual pos', ()=>{
    let superdot = new superDot(3, 10);
    let actualValue = superdot.eaten(3, 10);
    let expectedValue = Boolean(true);
    expect(expectedValue).toBe(actualValue);
});
test('eaten should return false if the input pos is not equals actual pos', ()=>{
    let superdot = new superDot(3, 10);
    let actualValue = superdot.eaten(4, 11);
    let expectedValue = Boolean(false);
    expect(expectedValue).toBe(actualValue);
});

test('setIcon return space if the superDot is eated', ()=>{
    let superdot = new superDot(3, 10);
    superdot.notEaten = Boolean(false);
    let actualValue = superdot.setIcon(3, 10, '');
    let expectedValue = '   ';
    expect(expectedValue).toBe(actualValue);
});

test('setIcon return the icon of the superDot if is not eated', () => {
    const expectedValues = [
        ' ' + ['\x1b[', 91, 'm', '\u2B24', '\x1b[', 39, 'm'].join('') + ' ',
        ' ' + ['\x1b[', 92, 'm', '\u2B24', '\x1b[', 39, 'm'].join('') + ' ',
        ' ' + ['\x1b[', 93, 'm', '\u2B24', '\x1b[', 39, 'm'].join('') + ' ',
        ' ' + ['\x1b[', 94, 'm', '\u2B24', '\x1b[', 39, 'm'].join('') + ' ',
        ' ' + ['\x1b[', 95, 'm', '\u2B24', '\x1b[', 39, 'm'].join('') + ' ',
        ' ' + ['\x1b[', 96, 'm', '\u2B24', '\x1b[', 39, 'm'].join('') + ' ',
        ' ' + ['\x1b[', 97, 'm', '\u2B24', '\x1b[', 39, 'm'].join('') + ' ',
    ];
    let superdot = new superDot(3, 10);
    let actualValue = superdot.setIcon(3, 10, '');
    expect(expectedValues).toContain(actualValue);
});

test('Colorize should return the super dot colorized', () => {
    const expectedValues = [
        ['\x1b[', 91, 'm', '\u2B24', '\x1b[', 39, 'm'].join(''),
        ['\x1b[', 92, 'm', '\u2B24', '\x1b[', 39, 'm'].join(''),
        ['\x1b[', 93, 'm', '\u2B24', '\x1b[', 39, 'm'].join(''),
        ['\x1b[', 94, 'm', '\u2B24', '\x1b[', 39, 'm'].join(''),
        ['\x1b[', 95, 'm', '\u2B24', '\x1b[', 39, 'm'].join(''),
        ['\x1b[', 96, 'm', '\u2B24', '\x1b[', 39, 'm'].join(''),
        ['\x1b[', 97, 'm', '\u2B24', '\x1b[', 39, 'm'].join(''),
    ];
    let superdot = new superDot(3, 10);
    let actualValue = superdot.colorize('\u2B24', 0);
    expect(expectedValues).toContain(actualValue);
    actualValue = superdot.colorize('\u2B24', 1);
    expect(expectedValues).toContain(actualValue);
    actualValue = superdot.colorize('\u2B24', 2);
    expect(expectedValues).toContain(actualValue);
    actualValue = superdot.colorize('\u2B24', 3);
    expect(expectedValues).toContain(actualValue);
    actualValue = superdot.colorize('\u2B24', 4);
    expect(expectedValues).toContain(actualValue);
    actualValue = superdot.colorize('\u2B24', 5);
    expect(expectedValues).toContain(actualValue);
    actualValue = superdot.colorize('\u2B24', 6);
    expect(expectedValues).toContain(actualValue);
});
