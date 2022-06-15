export class Block {
    constructor(content) {
        this.content = content;
    }

    putDinamicBlocks(PosY, content) {
        if (this.CheckDimentionBoard(content)) {
            // entra con espacio minimo requerido
            let numberBlocks = Math.floor(content[0].length / 6);
            let posInitial = 2;

            for (let i = 0; i < numberBlocks; i++) {
                this.setBlock(posInitial, posInitial + 1, PosY);
                posInitial = posInitial + 6;
            }
        }

        return this.content;
    }
    /*
 X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
 X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
 X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
 X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
 X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
 X  X  i  i  X  X  X  X  i  i  X  X  X  X  X  X
 X  i  o  i  i  X  X  i  o  i  i  X  X  X  X  X
 X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X
 X  X  X  X  X  X  X  X  X  X  X  X  X  X  X  X

largo = 16
1er bloque = (16/2)= 8 luego 16/8 = 2, pos 1

2do bloque =


*/


    CheckDimentionBoard(content) {
        if (content.length > 10  && content[0].length > 7) {
            return true;
        } else {
            return false;
        }
    }


    setBlock(x1, x2, y) {
        this.content[y + 1][x1] = ' ━ ';
        this.content[y + 1][x2] = ' ━ ';
        this.content[y][x1] = ' ━ ';
        this.content[y][x2] = ' ━ ';
        this.content[y][x1 - 1] = ' ◢ ';
        this.content[y][x2 + 1] = ' ◣ ';
        return this.content;
    }
}