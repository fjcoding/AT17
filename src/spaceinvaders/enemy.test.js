import { Alien } from './enemy.js';
test('Probing if the alien is move in  y --', () => {
    let expected = [
        [0, 0],
        [' A ', 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let matrixEmpty = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let alien = new Alien(1, 1, matrixEmpty);
    expect(alien.setAlien(false, true)).toStrictEqual(expected);
});


test('Probing if the alien is moving in x --', () => {
    let expected = [
        [0, 0],
        [0, 0],
        [' A ', 0],
        [0, 0],
        [0, 0] ];
    let matrixEmpty = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let alien = new Alien(3, 0, matrixEmpty);
    expect(alien.setAlien(false, false)).toStrictEqual(expected);
});

test('Probing if the alien is update to position add to y++', () => {
    let expected = [
        [0, 0],
        [0, ' A '],
        [0, 0],
        [0, 0],
        [0, 0] ];
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let alien = new Alien(1, 0, matrixEmpty);
    alien.moveAlien(true, true);
    expect(alien.content).toStrictEqual(expected);
});

test('Probing if the alien is update to position add to x--', () => {
    let expected = [
        [0, 0],
        [0, ' A '],
        [0, 0],
        [0, 0],
        [0, 0] ];
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let alien = new Alien(2, 1, matrixEmpty);
    alien.moveAlien(true, false);
    expect(alien.content).toStrictEqual(expected);
});


test('Test1 getPosx to verify if the getter gets the positionX correctly', () => {
    let positionX = 1;
    let positionY = 1;
    let matrixEmpty = [
        [0, 5],
        [0, 0],
        [0, 8],
        [0, 0],
        [0, 0]];

    let alien = new Alien(positionX, positionY, matrixEmpty);

    expect(alien.getPosX()).toStrictEqual(1);
});

test('Test2 getPosx to verify if it gets ther rigth position', () => {
    let positionX = 2;
    let positionY = 2;

    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];

    let alien = new Alien(positionX, positionY, matrixEmpty);

    expect(alien.getPosX()).toStrictEqual(2);
});

test('Test3 getPosx to verify if it gets ther rigth position', () => {
    let positionX = 55;
    let positionY = 2;

    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];

    let alien = new Alien(positionX, positionY, matrixEmpty);

    expect(alien.getPosX()).toStrictEqual(55);
});

test('Test1 getPosx to verify if the getter gets the positionY correctly', () => {
    let positionX = 1;
    let positionY = 1;
    let matrixEmpty = [
        [0, 5],
        [0, 0],
        [0, 8],
        [0, 0],
        [0, 0]];

    let alien = new Alien(positionX, positionY, matrixEmpty);

    expect(alien.getPosY()).toStrictEqual(1);
});

test('Test2 getPosx to verify if the getter gets the positionY correctly', () => {
    let positionX = 1;
    let positionY = 2;

    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];

    let alien = new Alien(positionX, positionY, matrixEmpty);

    expect(alien.getPosY()).toStrictEqual(2);
});

test('Test3 getPosx to verify if the getter gets the positionY correctly', () => {
    let positionX = 2;
    let positionY = 3;
    let matrixEmpty = [
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];

    let alien = new Alien(positionX, positionY, matrixEmpty);

    expect(alien.getPosY()).toStrictEqual(3);
});


test('Testing the function printAlien to put an alien in the position (3 , 1)', () => {
    let expected =
       [[0, 0],
           [0, 0],
           [0, 0],
           [' A ', 0],
           [0, 0] ];
    let matrixEmpty =
       [[0, 0],
           [0, 0],
           [0, 0],
           [0, 0],
           [0, 0]];
    let alien = new Alien(3, 0, matrixEmpty);
    expect(alien.printAlien(3, 1)).toStrictEqual(expected);
});
test('Testing the function printAlien to put an alien in the position (1, 0)', () => {
    let expected =
       [[0, 0],
           [' A ', 0],
           [0, 0],
           [0, 0],
           [0, 0] ];
    let matrixEmpty = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let alien = new Alien(1, 0, matrixEmpty);
    expect(alien.printAlien(1, 0)).toStrictEqual(expected);
});

test('Testing the function printAlien to put an alien in the position (3 , 1)', () => {
    let expected =
       [[0, 0],
           [0, 0],
           [0, 0],
           [0, ' A '],
           [0, 0] ];
    let matrixEmpty = [[0, 0],
        [0, 0],
        [0, 0],
        [0, 0],
        [0, 0]];
    let alien = new Alien(3, 1, matrixEmpty);
    expect(alien.printAlien(3, 1)).toStrictEqual(expected);
});


