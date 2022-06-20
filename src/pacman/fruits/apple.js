import { Fruit } from './fruit.js';
export class Apple extends Fruit {
    constructor(map) {
        super(map);
        this.icon = '\x1b[93m\uD83C\uDF4E\x1b[39m';
        this.points = 700;
    }
}