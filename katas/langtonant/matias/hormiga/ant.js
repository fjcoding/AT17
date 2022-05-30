class Ant {
    constructor(x, y) {
      this.position = createVector(x, y);
      this.origPosition = this.position.copy();
      this.direction = 0;
    }
    
    turnLeft() {
      this.direction--;
      if (this.direction < 0) {
        this.direction = 3;
      }
    }
    
    turnRight() {
      this.direction++;
      if (this.direction > 3) {
              this.direction = 0;    
      }
    }
    
    moveForward() {
      if (this.direction === 0) {
        this.position.add(0, -1);
      } else if (this.direction === 1) {
        this.position.add(1, 0);
      } else if (this.direction === 2) {
        this.position.add(0, 1);
      } else if (this.direction === 3) {
        this.position.add(-1, 0);
      }
    }
    
    reset() {
      this.position = this.origPosition.copy();
        this.direction = 0;
    }
  }