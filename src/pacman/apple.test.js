import { Apple } from './apple.js';
import { Pacman } from './pacman.js';


test('The function setPosition change the positionx and positiony property for an Apple object', ()=>{
    let apple = new Apple (3, 10);
    apple.setPosition(5, 18);
    expect (apple.positionX).toBe(5);
    expect (apple.positionY).toBe(18);
});

test('The function getPositionX return the positionX for an Apple object', ()=>{
    let apple = new Apple (3, 10);
    expect (apple.getPositionX()).toBe(3);
});
test('The function getPositionY return the positionY for an Apple object', ()=>{
    let apple = new Apple (3, 10);
    expect (apple.getPositionY()).toBe(10);
});
test('The function eaten returns true if Pacman positionX and positionY is the same as the Apple object', ()=>{
    let apple = new Apple (3, 10);
    let pacman = new Pacman(3, 10);
    expect (apple.eaten(pacman.positionX, pacman.positionY)).toBe(true);
});
test('The function eaten returns false if Pacman positionX and positionY is not the same as the Apple object', ()=>{
    let apple = new Apple (3, 10);
    let pacman = new Pacman(3, 15);
    expect (apple.eaten(pacman.positionX, pacman.positionY)).toBe(false);
});

test('setIcon return the icon of the apple or space if the icon is eated', ()=>{
    let apple = new Apple (3, 10);
    let actualValue = apple.setIcon(3, 10, '');
    let expectedValue = ' ' + '\x1b[93m\uD83C\uDF4E\x1b[39m';
    expect(expectedValue).toBe(actualValue);
    apple.notEaten = Boolean(false);
    actualValue = apple.setIcon(3, 10, '');
    expectedValue = '   ';
    expect(expectedValue).toBe(actualValue);
});