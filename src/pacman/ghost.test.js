import {Ghost} from './ghost.js';
import {Pacman} from './pacman.js';

test('The function attack, attack the pacman', ()=>{
    let gost = new Ghost(3, 1);
    gost.setPosition(1, 1);
    let pacman = new Pacman(1, 2);
    pacman.setPosition(1, 1);
    gost.attack(pacman);
    expect(pacman.getLife()).toBe(1);
    expect(pacman.getInitialPositionX()).toBe(1);
    expect(pacman.getInitialPositionY()).toBe(2);
    expect(gost.getInitialPositionX()).toBe(3);
    expect(gost.getInitialPositionY()).toBe(1);
});


test('The function checkAttack check if you can attack the pacman', ()=>{
    let gost = new Ghost(3, 1);
    gost.setPosition(1, 1);
    let pacman = new Pacman(1, 2);
    pacman.setPosition(1, 1);
    gost.checkAttack(pacman);
    expect(pacman.getLife()).toBe(1);
    expect(pacman.getInitialPositionY()).toBe(2);
    expect(gost.getInitialPositionX()).toBe(3);
    expect(gost.getInitialPositionY()).toBe(1);
});