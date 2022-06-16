import { Pacman, UP } from './pacman.js';

export class Ghost extends Pacman {
    constructor(posX, posY) {
        super(posX, posY);
        this.direction = UP;
        this.edible = false;
    }

        /**
     * It returns a random direction from the array of free directions for the ghost
     * @param positionX - The x position of the ghost
     * @param positionY - The Y position of the ghost.
     * @param direction - The direction the ghost is currently moving in.
     * @returns the direction of the ghost.
     */
    getGhostRoute(map) {
        let arrayDirections = [].concat(super.freeDirections(map, 1), super.freeDirections(map, 2));
        let indexDirection = Math.floor(Math.random() * (1 + (arrayDirections.length - 1)));
        return arrayDirections[indexDirection];
    }
}