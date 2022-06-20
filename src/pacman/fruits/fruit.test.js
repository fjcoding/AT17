import { Fruit } from './fruit.js';
import { Pacman } from '../pacman.js';


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