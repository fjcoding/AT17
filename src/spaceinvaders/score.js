export class Score {
    constructor(dimension) {
        this.arrayScore = ['S', 'C', 'O', 'R', 'E', ':', ' ', '0', '0', '0', '0', '0'];
        this.arraySpace = [];
        this.arrayLives = ['L', 'I', 'V', 'E', 'S', ':', ' ', 'X', ' ', 'X', ' ', 'X'];
        this.dimension = dimension;
        this.arraySpace = this.putSpaceScore(this.dimension);
    }

    initScore() {
        this.points = 0;
        this.lives = 3;
        return this.arraySpace;
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
        return printed + '\n';
    }

    updatePointsArray() {
        //code to update data on points array
    }

    updateLivesArray() {
        //Code to update data on lives array

    }
}