import { superDot } from './superdot.js'; 
test('setIcon return space if the superDot is eated', ()=>{
    let superdot = new superDot(3, 10);
    superdot.notEaten = Boolean(false);
    let actualValue = superdot.setIcon(3,10,'');
    let expectedValue = '   ';
    expect(expectedValue).toBe(actualValue);

});
  
  test('setIcon return the icon of the superDot if is not eated', () => {
    const expectedValues = [
        ' '+['\x1b[', 91, 'm', '\u2B24', '\x1b[', 39, 'm'].join('')+' ',
        ' '+['\x1b[', 92, 'm', '\u2B24', '\x1b[', 39, 'm'].join('')+' ',
        ' '+['\x1b[', 93, 'm', '\u2B24', '\x1b[', 39, 'm'].join('')+' ',
        ' '+['\x1b[', 94, 'm', '\u2B24', '\x1b[', 39, 'm'].join('')+' ',
        ' '+['\x1b[', 95, 'm', '\u2B24', '\x1b[', 39, 'm'].join('')+' ',
        ' '+['\x1b[', 96, 'm', '\u2B24', '\x1b[', 39, 'm'].join('')+' ',
        ' '+['\x1b[', 97, 'm', '\u2B24', '\x1b[', 39, 'm'].join('')+' ',
      ];
      let superdot = new superDot(3, 10);
      let actualValue = superdot.setIcon(3,10,'');
    expect(expectedValues).toContain(actualValue);
  });