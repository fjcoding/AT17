export function generateMatrix(rows, columns) 
{
    var matrix = [];
    for (var i = 0;i < rows;i++) 
    {
        var row = [];
        for (var j = 0;j < columns;j++) 
        {
            row.push(0);
        }
        matrix.push(row);
    }
    return matrix;
} 