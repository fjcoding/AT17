export var dir = 
{
    u:0,
    r:1,
    d:2,
    l:3,
};
export function colorbox(matrix, row, column) 
{
    if (matrix[row][column] == 0) {
        matrix[row][column] = 1;
    } else {
        matrix[row][column] = 0;
    }
}
export function movements(dir1, min, max) 
{
    var dir2;
    if (dir1 == dir.u) 
    {
        do 
        {
            dir2 = Math.floor(Math.random() * (max - min + 1)) + min;
        } 
        while (dir2 == 2);
    }
    if (dir1 == dir.r) 
    {
        do 
        {
            dir2 = Math.floor(Math.random() * (max - min + 1)) + min;
        } while (dir2 == 3);
    }
    if (dir1 == dir.d) 
    {
        do {
            dir2 = Math.floor(Math.random() * (max - min + 1)) + min;
        } 
        while (dir2 == 0);
    }
    if (dir1 == dir.l) 
    {
        do 
        {
            dir2 = Math.floor(Math.random() * (max - min + 1)) + min;
        } 
        while (dir2 == 1);
    }
    return dir2;
}
export function walk(x, y, dir, size) 
{
    var max = size - 1;
    if (dir == dir.u) 
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
    else if (dir == dir.r) 
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
    else if (dir == dir.d) 
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
    else if (dir == dir.l) 
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
