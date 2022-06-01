
export function printLimit(size) {
    var LimArray = Array(size).fill('-');
    console.log(...LimArray);
}
export function printGrid(ArrayM, lenght) {
    for (let i = 0; i < lenght; i++) {
        console.log(...ArrayM[i]);
    }
}