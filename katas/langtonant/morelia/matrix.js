export function generateMatrix(filas, columnas){
    var matriz = [];
    for(var i=0;i<filas;i++) {
        var fila=[];
        for(var j=0;j<columnas;j++) {
            fila.push(0);
        }
        matriz.push(fila);
    }
    return matriz;
}