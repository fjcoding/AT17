export const LEFT = 0;
export const UP = 1;
export const RIGHT = 2;
export const DOWN = 3;

export class Pacman {
    constructor(posX, posY) {
        this.positionX = posX;
        this.positionY = posY;
        this.direction = RIGHT;
        this.edible = true;
        this.score = 0;
        this.initialPositionX = posX;
        this.initialPositionY = posY;
        this.life = 2;
    }

    setDirection(newDirection) {
        this.direction = newDirection;
    }

    getDirection() {
        return this.direction;
    }

    setPosition(posX, posY) {
        this.positionX = posX;
        this.positionY = posY;
    }

    changeEdible() {
        this.edible = !this.edible;
    }

    movePacman() {
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

    //  freeDirections(positionX, positionY, routeFree, direction) {
     freeDirections(map,routeFree) {
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
        if (this.positionY < (map.length-1) ) {
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
     * It returns a random direction from an array of directions that are free for pacman
     * @param positionX - The X position of the pacman.
     * @param positionY - The Y position of the pacman.
     * @param direction - The direction the pacman is currently moving in.
     * @returns the direction of the next movement of the pacman.
     */
    selectDirection(map) {
        let arrayDirections = this.freeDirections( map, 1);
        if (arrayDirections.length == 0) {
            arrayDirections = this.freeDirections(map, 2);
        }
        let newDireccion = arrayDirections[0];
        if (arrayDirections.length > 1) {
            let indexDirection = Math.floor(Math.random() * (1 + (arrayDirections.length - 1)));
            newDireccion = arrayDirections[indexDirection];
        }
        return newDireccion;
    }
}