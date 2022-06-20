export const LEFT = 0;
export const UP = 1;
export const RIGHT = 2;
export const DOWN = 3;
export class Actor {
    constructor(posX, posY) {
        this.positionX = posX;
        /* It's a line break. */
        this.positionY = posY;
        this.direction = RIGHT;
        this.initialPositionX = posX;
        this.initialPositionY = posY;
        this.edible = true;
    }

    getPosX() {
        return this.positionX;
    }

    getPosY() {
        return this.positionY;
    }

    setDirection(newDirection) {
        this.direction = newDirection;
    }

    getInitialPositionX() {
        return this.initialPositionX;
    }

    getInitialPositionY() {
        return this.initialPositionY;
    }

    getDirection() {
        return this.direction;
    }

    setPosition(posX, posY) {
        this.positionX = posX;
        this.positionY = posY;
    }

    getEdible() {
        return this.edible;
    }

    changeEdible() {
        this.edible = !this.edible;
    }

    move() {
        switch (this.direction) {
        case LEFT:
            this.positionX--;
            break;
        case UP:
            this.positionY--;
            break;
        case RIGHT:
            this.positionX++;
            break;
        case DOWN:
            this.positionY++;
            break;
        }
    }

    eat(positionX, positionY) {
        if (positionX == this.positionX && positionY == this.positionY) {
            return true;
        } else {
            return false;
        }
    }

    resetToInitialPosition() {
        this.positionX = this.initialPositionX;
        this.positionY = this.initialPositionY;
    }

    /**
    * It returns an array of directions that are free to move to
    * @param positionX - The x coordinate of the current position.
    * @param positionY - The Y coordinate of the current position.
    * @param routeFree - The character that represents a free route.
    * @param direction - the direction the "actor" is currently facing.
    * @returns an array of directions that are free to move to.
    */
    listFreeDirections(map, routeFree) {
        let freeDirection = [];
        let oppositeDirection = this.oppositeDirection();
        if (this.positionX == (map[0].length - 1)) {
            freeDirection.push(RIGHT);
        } else if (map[this.positionY][this.positionX + 1] == routeFree && RIGHT !== oppositeDirection) {
            freeDirection.push(RIGHT);
        }
        if (this.positionY > 0) {
            if (map[this.positionY - 1][this.positionX] == routeFree && UP !== oppositeDirection) {
                freeDirection.push(UP);
            }
        }
        if (this.positionY < (map.length - 1)) {
            if (map[this.positionY + 1][this.positionX] == routeFree && DOWN !== oppositeDirection) {
                freeDirection.push(DOWN);
            }
        }
        if (this.positionX == 0) {
            freeDirection.push(LEFT);
        } else if (map[this.positionY][this.positionX - 1] == routeFree && LEFT !== oppositeDirection) {
            freeDirection.push(LEFT);
        }
        return freeDirection;
    }

    /**
     * If the direction is left, the opposite direction is right. If the direction is up, the opposite
     * direction is down. If the direction is down, the opposite direction is up
     * @param direction - The direction the "actor" is currently moving in.
     * @returns The opposite direction to the input direction.
     */
    oppositeDirection() {
        let oppositeDirection = LEFT;
        switch (this.direction) {
        case LEFT: oppositeDirection = RIGHT; break;
        case UP: oppositeDirection = DOWN; break;
        case DOWN: oppositeDirection = UP; break;
        }
        return oppositeDirection;
    }

    /**
     * It returns a random direction from the array of free directions
     * @param positionX - The x position of the actor.
     * @param positionY - The Y position of the actor.
     * @param direction - The direction the actor is currently moving in.
     * @returns the direction of the Actor.
     */
    selectFreeDirection(map) {
        let arrayDirections = [].concat(this.listFreeDirections(map, 1), this.listFreeDirections(map, 2));
        let indexDirection = Math.floor(Math.random() * (1 + (arrayDirections.length - 1)));
        this.setDirection(arrayDirections[indexDirection]);
    }

    checkLimitsMap(limitUpperAxisX, limitUpperAxisY) {
        if (this.positionX == limitUpperAxisX && this.positionY == limitUpperAxisY && this.getDirection() == RIGHT) {
            this.setPosition(0, limitUpperAxisY);
        } else if (this.positionX == 0 && this.positionY == limitUpperAxisY && this.getDirection() == LEFT) {
            this.setPosition(limitUpperAxisX, limitUpperAxisY);
        }
    }
}