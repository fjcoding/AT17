import { Pacman} from './pacman.js';
import { RIGHT, LEFT, UP, DOWN } from './actor.js';

test('the function setdirection change the direction property for a Pacman object', () => {
    let pacman = new Pacman (2, 29);
    pacman.setDirection(LEFT);
    expect(pacman.direction).toBe(LEFT);
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
    pacman.direction = LEFT;
    pacman.movePacman();
    expect(pacman.positionX).toBe(1);
});

test('the function movePacman increase by one the positionX property for a Pacman object when the direction is RIGHT', () => {
    let pacman = new Pacman (2, 29);
    pacman.direction = RIGHT;
    pacman.movePacman();
    expect(pacman.positionX).toBe(3);
});

test('the function movePacman decrease by one the positionY property for a Pacman object when the direction is UP', () => {
    let pacman = new Pacman (2, 26);
    pacman.direction = UP;
    pacman.movePacman();
    expect(pacman.positionY).toBe(25);
});

test('the function movePacman increase by one the positionY property for a Pacman object when the direction is DOWN', () => {
    let pacman = new Pacman (2, 26);
    pacman.direction = DOWN;
    pacman.movePacman();
    expect(pacman.positionY).toBe(27);
});