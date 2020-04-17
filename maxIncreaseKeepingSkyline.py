class Solution(object):
    def maxIncreaseKeepingSkyline(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        brute force is to use another data struct, keep track of
        the highest in each row and each col, then each val can be raised
        to the lower of the highest
        """
        cols = []
        
        #holds the max in this index row
        rows = []
        
        for row in grid:
            maxRow = 0
            for col in row:
                maxRow = max(col, maxRow)
            rows.append(maxRow)
        
        for col in range(len(grid[0])):
            maxCol = 0
            for row in range(len(grid)):
                maxCol = max(maxCol, grid[row][col])
            cols.append(maxCol)
        
        totalSum = 0
        
        for row in range(len(grid)):
            for col in range(len(grid[row])):
                totalSum += max(0,min(rows[row],cols[col])-grid[row][col])
                
        return totalSum