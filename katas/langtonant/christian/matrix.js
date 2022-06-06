

export function make2DArray(size) {
    let arr = new Array(size);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(size);
        for (let j = 0; j < arr[i].length; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

export function printMatrix(grid) {
    for (let i = 0; i < grid.length; i++) {
        var auxiliar = '';
        for (let j = 0; j < grid[i].length; j++) {
            auxiliar += grid[i][j] + ' ';
        }
        console.log(auxiliar);
    }
}