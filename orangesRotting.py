class Solution(object):
    def orangesRotting(self, grid):
        """
        :type grid: List[List[int]]
        :rtype: int
        i need to do bfs and turn all of the 1's to 2's and each lvl of bfs
         means i increase a minute
         how do i know it is done though? I think i need to keep count of fresh 
         oranges and turned oranges
        """
        que = []
        
        total = 0
        for row in range(len(grid)):
            for col in range(len(grid[row])):
                if grid[row][col] == 1:
                    total += 1
                elif grid[row][col] == 2:
                    que.append([row,col])
        mins = 0
        newRotten = 0
        
        if total == 0:
            return 0
        
        while que:
            mins += 1
            length = len(que)
            
            for i in range(length):
                curr = que.pop(0)
                row,col = curr[0],curr[1]
                
                #up down left right
                if row-1 > -1 and grid[row-1][col] == 1:
                    que.append([row-1,col])
                    newRotten += 1
                    grid[row-1][col] = 2
                
                if row+1 < len(grid) and grid[row+1][col] == 1:
                    que.append([row+1, col])
                    newRotten += 1
                    grid[row+1][col] = 2
                    
                if col-1 > -1 and grid[row][col-1] == 1:
                    que.append([row,col-1])
                    newRotten += 1
                    grid[row][col-1] = 2
                
                if col+1 < len(grid[0]) and grid[row][col+1] == 1:
                    que.append([row, col+1])
                    newRotten += 1
                    grid[row][col+1] = 2
                
        # print grid, newRotten            
                
                
        if newRotten == total:
            return mins-1
        else:
            return -1