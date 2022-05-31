// clases y funciones
export var Direccion ={
    UP:0,
    RIGHT:1,
    DOWN:2,
    LEFT:3,
}
export function changeColor(matriz,fila,columna) {
    if (matriz[fila][columna]==0) {
        matriz[fila][columna]=1;
    } else {
        matriz[fila][columna]=0;
    }
}
export function next_direction() {

}
