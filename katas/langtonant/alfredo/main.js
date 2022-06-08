import { langtonant } from './langtonant.js';

let cl = new langtonant();

let steps = process.argv[2];
console.log(steps);

while (steps-- >= 0) {
    let block = cl.getMatrix()[cl.getPosiX()][cl.getPosiY()];
    cl.setWayAnt(cl.getPosiX(), cl.getPosiY());
    cl.printWaymatrix();
    cl.changeDirection(block);
    cl.changeColorBlock();
    cl.changePositionAnt();
    console.log('');
}