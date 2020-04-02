class Solution(object):
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        options: 
        A: iterate through all the contents, but time complexity is O(n*m)
        B: search the row that is within range until it crosses the target.
        """
        if not matrix:
            return False
        if not matrix[0]:
            return False
        
        row = 0
        
        while (matrix[row][0] <= target):
            
            col = 0
            
            while (matrix[row][col] <= target):
                if matrix[row][col] == target:
                    return True
                if col+1 < len(matrix[0]):
                    col += 1
                else: 
                    break
            if row+1 < len(matrix): 
                row += 1
            else:
                break

        return False