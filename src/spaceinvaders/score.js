export class Score {
    constructor() {
        this.arrayScore = ['S', 'C', 'O', 'R', 'E', ':', ' ', '0', '0', '0', '0', '0'];

        this.arrayLives = ['L', 'I', 'V', 'E', 'S', ':', ' ', 'X', ' ', 'X', ' ', 'X'];

        this.arraySpace = [];
    }

    initScore(dimension) {
        this.points = 0;

        this.lives = 3;

        this.dimension = dimension;
    }

    getPoints() {
        return this.points;
    }

    setPoints(points) {
        this.points = points;

        return this.getPoints;
    }

    printScore() {

        //codigo para imprimir el score

    }

    updatePointsArray() {

        //codigo para actualizar el array de core

    }

    updateLivesArray() {

        //codigo para actualizar el array de vida

    }
}