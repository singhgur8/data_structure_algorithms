def spiral_copy(inputMatrix):
    '''
    this function outputs an array that is the spiral of the matrix
    '''
    if inputMatrix: 
        colLength = len(inputMatrix[0])
        rowLength = len(inputMatrix)
    else: 
        return []

    startRow = 0
    startCol = 0
    endRow = rowLength
    endCol = colLength

    result = []

    limit = rowLength * colLength

    while (len(result) < limit): 
        # Go right
        for col in range(startCol, endCol):
            result.append(inputMatrix[startRow][col])
        startRow += 1

        if (len(result) >= limit): break

        # Go Down
        for row in range(startRow, endRow):
            result.append(inputMatrix[row][endCol-1])
        endCol -= 1

        if (len(result) >= limit): break

        # Go Left
        for col in range(endCol-1, startCol-1, -1):
            result.append(inputMatrix[endRow-1][col])
        endRow -= 1

        if (len(result) >= limit): break

        # Go Up
        for row in range(endRow-1, startRow-1, -1):
            result.append(inputMatrix[row][startCol])
        startCol += 1

    return result


# Test cases
# Odd
inputMatrix  = [ 
                [1,    2,   3,  4,    5],
                [6,    7,   8,  9,   10],
                [11,  12,  13,  14,  15],
                [16,  17,  18,  19,  20] 
                ]
print (spiral_copy(inputMatrix) == [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12])

# Even
inputMatrix  = [ 
                [1,    2,   3,  4],
                [6,    7,   8,  9],
                [11,  12,  13,  14],
                [16,  17,  18,  19] 
                ]
print (spiral_copy(inputMatrix) == [1, 2, 3, 4, 9, 14,19,18,17,16,11,6,7,8,13,12])


# Edge Case
inputMatrix  = []
print (spiral_copy(inputMatrix) == [])


# Edge case - only row
inputMatrix  = [ 
                [1,    2,   3,  4],
                ]
print (spiral_copy(inputMatrix) == [1,    2,   3,  4])

# Edge case- only cols
inputMatrix  = [ 
                [1],
                [6],
                [11],
                [16] 
                ]
print (spiral_copy(inputMatrix) == [1, 6, 11, 16])