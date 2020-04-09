class Solution(object):
    def fourSumCount(self, A, B, C, D):
        """
        :type A: List[int]
        :type B: List[int]
        :type C: List[int]
        :type D: List[int]
        :rtype: int
        
        maybe i can do this in n2 time, maybe all AB combos and CD combos 
        then iterate over both at the same time, and add whichever is 0
        
        """
        count=0
        CD = []
        ABHashMap = {}
        for i in range(len(A)):
            for j in range(len(B)):
                AB = A[i] + B[j]
                if AB not in ABHashMap:
                    ABHashMap[AB] = 1
                else:
                    ABHashMap[AB] += 1
                
                CD.append(C[i]+D[j])
    
        for num in CD:
            diff = 0 - num
            if diff in ABHashMap:
                count += ABHashMap[diff]
        return count     