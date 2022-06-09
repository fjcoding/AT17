export class Player {
    constructor(x, y, content, element) {
        this.x = x;
        this.y = y;
        this.content = content;
        this.element = element;
        this.setPlayer(content, element);
    }

    setPlayer(content, element) {
        content[this.y][this.x] = element;
    }
}