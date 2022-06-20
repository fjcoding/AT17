import { Fruit } from './fruit.js';
export class Cherry extends Fruit {
    constructor(map) {
        super(map);
        this.icon = '\uD83C\uDF52';
        this.points = 100;
    }
}