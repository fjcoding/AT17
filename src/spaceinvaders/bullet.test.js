import { Bullet } from './bullet.js';
/*
test('Probing if the bullet is setting up in the position (0,0)', () => {
    let expected = [[' | ', 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0] ];
    let matrixEmpty = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(0, 0, matrixEmpty);
    expect(bullet.setBullet(0, 0)).toStrictEqual(expected);
});


test('Probing if the bullet is setting up in the position (1,1)', () => {
    let expected = [[0, 0],
        [0, ' | '],
        [0, 0],
        [0, 0],
        [0, 0]];
    let matrixEmpty = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(1, 1, matrixEmpty);
    expect(bullet.setBullet(1, 1)).toStrictEqual(expected);
});

test('Probing if the bullet alien is setting up in the position (0,0)', () => {
    let expected = [[' | ', 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0] ];
    let matrixEmpty = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(0, 0, matrixEmpty);
    expect(bullet.setBulletAlien(0, 0)).toStrictEqual(expected);
});


test('Probing if the bullet alien is setting up in the position (1,1)', () => {
    let expected = [[0, 0],
        [0, ' | '],
        [0, 0],
        [0, 0],
        [0, 0]];
    let matrixEmpty = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(1, 1, matrixEmpty);
    expect(bullet.setBulletAlien(1, 1)).toStrictEqual(expected);
});

test('Probing if getPosx gets the position X+1 correctly', () => {
    let positionX = 1;
    let positionY = 1;
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(positionX, positionY, matrixEmpty);
    expect(bullet.getPosX()).toStrictEqual(2);
});

test('Probing if getPosx gets the position X+1 correctly', () => {
    let positionX = 2;
    let positionY = 1;
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(positionX, positionY, matrixEmpty);
    expect(bullet.getPosX()).toStrictEqual(3);
});

test('Probing if getPosx gets the position X+1 correctly', () => {
    let positionX = 0;
    let positionY = 1;
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(positionX, positionY, matrixEmpty);
    expect(bullet.getPosX()).toStrictEqual(1);
});


test('Test1 getPosx Alien to verify if the getter gets the position X+1 correctly', () => {
    let positionX = 1;
    let positionY = 1;
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(positionX, positionY, matrixEmpty);
    expect(bullet.getPosXAlien()).toStrictEqual(2);
});

test('Test2 getPosx to verify if the getter gets the position X+1 correctly', () => {
    let positionX = 2;
    let positionY = 1;
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(positionX, positionY, matrixEmpty);
    expect(bullet.getPosXAlien()).toStrictEqual(3);
});

test('Test3 getPosx to verify if the getter gets the position X+1 correctly', () => {
    let positionX = 0;
    let positionY = 1;
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(positionX, positionY, matrixEmpty);
    expect(bullet.getPosXAlien()).toStrictEqual(1);
});
*/

test('Probing if getPosY gets the position Y correctly', () => {
    let positionX = 1;
    let positionY = 1;
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(positionX, positionY, matrixEmpty);
    expect(bullet.getPosY()).toStrictEqual(1);
});

test('Probing if getPosY gets the position Y correctly', () => {
    let positionX = 1;
    let positionY = 0;
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(positionX, positionY, matrixEmpty);
    expect(bullet.getPosY()).toStrictEqual(0);
});

test('Probing if getPosY gets the position Y correctly', () => {
    let positionX = 1;
    let positionY = 2;
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let bullet = new Bullet(positionX, positionY, matrixEmpty);
    expect(bullet.getPosY()).toStrictEqual(2);
});