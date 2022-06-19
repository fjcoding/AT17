export class Score {
    constructor(dimension) {
        this.arrayScore = ['S', 'C', 'O', 'R', 'E', ':', ' ', '0', '0', '0', '0', '0'];
        this.arraySpace = [];
        this.arrayLives = ['L', 'I', 'V', 'E', 'S', ':', ' ', 'X', ' ', 'X'];
        this.dimension = dimension;
        this.arraySpace = this.putSpaceScore(this.dimension);
        this.points = 0;
        this.lives = 3;
    }


    putSpaceScore(dimension) {
        console.log(dimension - (this.arrayScore.length + this.arrayLives.length));
        for (let size = 0; size < (dimension) - (4 + 4); size++) {
            this.arraySpace.push('   ');
        }
        return this.arraySpace;
    }

    getPoints() {
        return this.points;
    }

    setPoints(points) {
        this.points = points;
        this.updatePointsArray(points);
    }

    deleteLives() {
        this.lives = this.lives - 1;
        this.updateLivesArray();
    }

    getLives() {
        return this.lives;
    }

    printScore() {
        let printed = '  ';
        for (let i = 0; i < this.arrayScore.length; i++) {
            printed += this.arrayScore[i];
        }
        for (let i = 0; i < this.arraySpace.length; i++) {
            printed += this.arraySpace[i];
        }
        for (let i = 0; i < this.arrayLives.length; i++) {
            printed += this.arrayLives[i];
        }
        return printed + '\n';
    }

    updatePointsArray(points) {
        let pos = this.arrayScore.length - 1;

        const newPoints = points + '';
        for (let i = newPoints.length - 1; i >= 0; i--) {
            this.arrayScore[pos] = newPoints[i] + '';
            pos = pos - 1;
        }
    }

    updateLivesArray() {
        for (let i = this.arrayLives.length - 1; i >= 0; i--) {
            if (this.arrayLives[i] == 'X') {
                this.arrayLives[i] = ' ';
                i = -1;
            }
        }
    }
}