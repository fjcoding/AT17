import { Fruit } from "./fruit.js";
export class Orange extends Fruit {
    constructor(map) {
        super(map);
        this.icon='\uD83C\uDF4A';
        this.points=500;
    }
}