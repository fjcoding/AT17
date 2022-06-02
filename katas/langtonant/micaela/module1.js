//Create a function to generate a Matrix

export function FuncMatrix(rows, columns) 
{
    var matrix = [];
    for (var i = 0;
        i < rows;
        i++) 
    {
        var row = [];
        for (var j = 0;
            j < columns;
            j++) 
        {
            row.push(0);
        }
            matrix.push(row);
    }
    return matrix;
}

//Create a function to change color to black or white
//0 is white, 1 is black

export function ColorBox(matrix, row, column) 
{
    if (matrix[row][column] == 1) 
    {
        matrix[row][column] = 0;
    }
    else 
    {
        matrix[row][column] = 1;
    }
}

// Create a variable with cardinal points
export var dir =
{
    north:0,
    east:1,
    south:2,
    west:3,
};

//Creat a function to express the ant movements
export function movements(dir1, min, max) 
{
    var dir2;
    if (dir1 == dir.north) 
    {
        do 
        {
            dir2 = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        while (dir2 == 2);
    }
    if (dir1 == dir.east) 
    {
        do 
        {
            dir2 = Math.floor(Math.random() * (max - min + 1)) + min;
        } 
        while (dir2 == 3);
    }
    if (dir1 == dir.south) 
    {
        do 
        {
            dir2 = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        while (dir2 == 0);
    }
    if (dir1 == dir.west) 
    {
        do 
        {
            dir2 = Math.floor(Math.random() * (max - min + 1)) + min;
        }
        while (dir2 == 1);
    }
    return dir2;
}


export function walk(x, y, direction, size) 
{
    var max = size - 1;
    if (direction == dir.north) 
    {
        if (x == 0) 
        {
            x = max;
        } 
        else 
        {
            x -= 1;
        }
    } 
        else if (direction == dir.east) 
    {
        if (y == max) 
        {
            y = 0;
        } 
        else 
        {
            y += 1;
        }
    } 
    else if (direction == dir.south) 
    {
        if (x == max) 
        {
            x = 0;
        } 
        else 
        {
            x += 1;
        }
    } 
    else if (direction == dir.west) 
    {
        if (y == 0) 
        {
            y = max;
        }
        else 
        {
            y -= 1;
        }
    }
    return [x, y];
}

