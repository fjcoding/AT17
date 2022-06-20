import { Fruit } from './fruit.js';
export class Strawberry extends Fruit {
    constructor(map) {
        super(map);
        this.icon = '\uD83C\uDF53';
        this.points = 300;
    }
}