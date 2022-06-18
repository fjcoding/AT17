export class Score {
    constructor() {
        this.arrayScore = ['S', 'C', 'O', 'R', 'E', ':', ' ', '0', '0', '0', '0', '0'];
        this.arraySpace = [];
        this.arrayLives = ['L', 'I', 'V', 'E', 'S', ':', ' ', 'X', ' ', 'X', ' ', 'X'];
    }

    initScore(dimension) {
        this.points = 0;
        this.lives = 3;
        this.arraySpace = this.putSpaceScore(dimension);
    }

    putSpaceScore(dimension) {
        for (let size = 0; size <= dimension - (this.arrayScore.length + this.arrayLives.length); size++) {
            this.arraySpace.push(' ');
        }
        return this.arraySpace;
    }       
    
    getPoints() {
        return this.points;
    }

    setPoints(points) {
        this.points = points;

        return this.points;
    }

    printScore() {
        let printed = '';
        for (let i = 0; i < this.arrayScore.length; i++) {
            printed += this.arrayScore[i];
        }
        for (let i = 0; i < this.arraySpace.length; i++) {
            printed += this.arraySpace[i];
        }
        for (let i = 0; i < this.arrayLives.length; i++) {
            printed += this.arrayLives[i];
        }
        return printed;
    }

    updatePointsArray() {
        //codigo para actualizar el array de core
    }

    updateLivesArray() {
        //codigo para actualizar el array de vida

        //codigo para imprimir el score

    }

    updatePointsArray() {

        //codigo para actualizar el array de core

    }

}