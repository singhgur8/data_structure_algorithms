var numIslands = function(grid) {
    let islandCount = 0;
    
    // helper function
    // visits all the spots that arent water and that arent already visited
    let helper = function(row, col) {
        grid[row][col] = '2'; // visited
        
        // step on any ones and call this function
        if (col+1 <= grid[0].length-1){
            if (grid[row][col+1] === '1') helper(row,col+1);
        }
            
        if (col > 0) {
            if (grid[row][col-1] === '1') helper(row,col-1);
        }
       
        if (row+1 <= grid.length-1) {
            if (grid[row+1][col] === '1') helper(row+1,col);
        }
        
        if (row > 0) {
            if (grid[row-1][col] === '1') helper(row-1,col);
        }

    }
    
    // iterate through the matrix, where ever there is land
        // if i see a one, increment the island count and call helper on this
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === '1') {
                islandCount++;
                helper(row,col);
            }
        }
    }
    
    
    
    return islandCount
};