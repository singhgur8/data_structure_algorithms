/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let firstRowZero = false;
    let firstColZero = false;

    // edge case
    if (matrix[0][0] === 0){
        firstColZero = true;
        firstRowZero = true;
    }

    // Helper functions
    let setColZeros = (col) => {
        // means rows increment
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] = 0;
        }
    }

    let setRowZeros = (row) => {
        // means columns increment
        for (let i = 0; i < matrix[row].length; i++) {
            matrix[row][i] = 0;
        }
    }

    // iterate through inner matrix, find the zeros and mark the outter most row/col
    for (let row = 1; row < matrix.length; row++) {
        for (let col = 1; col < matrix[row].length; col++) {
           if (matrix[row][col] === 0) {
               if(matrix[0][col] !== 0) matrix[0][col] = null;
               if(matrix[row][0] !== 0) matrix[row][0] = null;
           } 
        }
    }

    // go through outter most col and row, and make it all zeros whereever there is null
    //first col
    for (let row = 1; row < matrix.length; row++) {
        if (matrix[row][0] === null) {
            setRowZeros(row)
        } else if (matrix[row][0] === 0) {
            firstColZero = true;
            setRowZeros(row)
        }
    }
    //first row
    for (let col = 1; col < matrix[0].length; col++) {
        if (matrix[0][col] === null) {
            setColZeros(col)
        } else if (matrix[0][col] === 0) {
            firstRowZero = true;
            setColZeros(col)
        }
    }

    // cover the outer most row and cols;
    if (firstColZero) setColZeros(0);
    if (firstRowZero) setRowZeros(0);

return matrix;
};
