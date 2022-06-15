import { Pacman, RIGHT, LEFT, UP, DOWN } from './pacman.js';

test('the function setdirection change the direction property for a Pacman object', () => {
    let pacman = new Pacman (2, 29);
    pacman.setDirection(LEFT);
    expect(pacman.getDirection()).toBe(LEFT);
});

test('the function setPosition change the positionx and positiony property for a Pacman object', () => {
    let pacman = new Pacman (2, 29);
    pacman.setPosition (5, 10);
    expect(pacman.positionX).toBe(5);
    expect(pacman.positionY).toBe(10);
});

test('the function getdirection return the direction property for a Pacman object', () => {
    let pacman = new Pacman (2, 29);
    expect(pacman.getDirection()).toBe(RIGHT);
});

test('the function movePacman decrease by one the positionX property for a Pacman object when the direction is LEFT', () => {
    let pacman = new Pacman (2, 29);
    pacman.setDirection(LEFT);
    pacman.movePacman();
    expect(pacman.positionX).toBe(1);
});

test('the function movePacman increase by one the positionX property for a Pacman object when the direction is RIGHT', () => {
    let pacman = new Pacman (2, 29);
    pacman.setDirection(RIGHT);
    pacman.movePacman();
    expect(pacman.positionX).toBe(3);
});

test('the function movePacman decrease by one the positionY property for a Pacman object when the direction is UP', () => {
    let pacman = new Pacman (2, 26);
    pacman.setDirection(UP);
    pacman.movePacman();
    expect(pacman.positionY).toBe(25);
});

test('the function movePacman increase by one the positionY property for a Pacman object when the direction is DOWN', () => {
    let pacman = new Pacman (2, 26);
    pacman.setDirection(DOWN);
    pacman.movePacman();
    expect(pacman.positionY).toBe(27);
});

test('the function change edible change the property true to false and false to true', () => {
    let pacman = new Pacman (2, 26);
    pacman.changeEdible();
    expect(pacman.edible).toBe(false);
    pacman.changeEdible();
    expect(pacman.edible).toBe(true);
});

test('the function eat return true if the recieve position is the same that the pacman position', () => {
    let pacman = new Pacman (2, 26);
    expect(pacman.eat(2, 26)).toBe(true);
});

test('the function eat return false if the recieve position is not the same that the pacman position', () => {
    let pacman = new Pacman (4, 15);
    expect(pacman.eat(2, 26)).toBe(false);
});

test('the function resetPosition change the pacman position to its initial position', () => {
    let pacman = new Pacman (2, 26);
    pacman.setPosition(4, 15);
    pacman.resetToInitialPosition();
    expect(pacman.positionX).toBe(2);
    expect(pacman.positionY).toBe(26);
});