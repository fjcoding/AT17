import { Score } from './score.js';

test('The function that put a space between score array and lives array', () => {
    let arrayExpected = ['   ', '   ', '   ', '   '];
    let dimensionTest = 10;
    let spaceArrayTest = new Score(dimensionTest);

    spaceArrayTest.putSpaceScore(dimensionTest);

    expect(spaceArrayTest.arraySpace).toStrictEqual(arrayExpected);
});

test('The function that put a space between score array and lives array', () => {
    let arrayExpected = ['   ', '   ', '   ', '   '];
    let dimensionTest = 10;
    let scoreTest = new Score(dimensionTest);

    scoreTest.putSpaceScore(dimensionTest);

    expect(scoreTest.arraySpace).toStrictEqual(arrayExpected);
});

test('The function to obtain the points of score', () => {
    let dimensionTest = 10;
    let scoreTest = new Score(dimensionTest);

    scoreTest.points = 200;
    let result = scoreTest.getPoints();

    expect(result).toBe(200);
});

test('The function to set the points to score', () => {
    let pointsTest = 300;
    let dimensionTest = 10;
    let scoreTest = new Score(dimensionTest);

    scoreTest.setPoints(pointsTest);
    let result = scoreTest.getPoints();

    expect(result).toBe(pointsTest);
});

test('The function to obtain array of lives', () => {
    let dimensionTest = 10;
    let scoreTest = new Score(dimensionTest);

    let result = scoreTest.getLives();

    expect(result).toBe(3);
});

test('The function to print all the chain for score', () => {
    let chainTest = '  SCORE: 00000   LIVES: X X' + '\n';
    let dimensionTest = 9;
    let scoreTest = new Score(dimensionTest);

    let result = scoreTest.printScore();

    expect(result).toBe(chainTest);
});

test('The function Update Points from game to score class', () => {
    let chainTest = '  SCORE: 00000LIVES: X  ' + '\n';
    let dimensionTest = 8;
    let scoreTest = new Score(dimensionTest);
    scoreTest.deleteLives();
    let result = scoreTest.printScore();

    expect(result).toBe(chainTest);
});

