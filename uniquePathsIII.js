// Input: [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
// Output: 2
// Explanation: We have the following two paths: 
// 1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
// 2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    // count how many zeros we need to step over
    let zeroGoal = totalPaths = counter = 0;
    let startPosition;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 0) zeroGoal++
            if (grid[i][j] === 1) startPosition = [i,j]
        }
    }

    // create a recusive function that will go up down left right
    let recurse = (position) => {
        let row, col;
        [ row , col ] = position
        if (grid[row][col] === -1) return;
        else if (grid[row][col] === 2){
            if (counter === zeroGoal) totalPaths++
            return
        }
        
        counter++ // counts how many zeros we have stepped on
        grid[row][col] = -1; // don't step here again. This will eventuall undo the start pos into a 0. but thats irrelevant

        // RECURSE unless off the grid
        if (row+1 <= grid.length - 1) {
            recurse([row+1, col])
        }
        if (row-1 >= 0) {
            recurse([row-1, col])
        }
         if (col+1 <= grid[0].length - 1) {
            recurse([row, col+1])
        }
        if (col-1 >= 0) {
            recurse([row, col-1])
        }

        // UNDO the grid back to 0 so we can step there again
        grid[row][col] = 0
        // UNDO counter too
        counter--
    }

    // turning start point into a zero, and adjusting for it. This way recurse function works for all non zeros
    zeroGoal++
    grid[startPosition[0]][startPosition[1]] = 0;

    recurse(startPosition);

    return totalPaths;
};