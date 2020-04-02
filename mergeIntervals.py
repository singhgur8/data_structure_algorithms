class Solution(object):
    def merge(self, intervals):
        """
        :type intervals: List[List[int]]
        :rtype: List[List[int]]
        """
        intervals.sort(key= lambda x: x[0])
        idx = 0
        while (idx < len(intervals)-1):
            nextEl = intervals[idx+1]
            currEl = intervals[idx]
            
            if currEl[1] >= nextEl[0]:
                currEl[1] = max(currEl[1], nextEl[1])
                del intervals[idx+1]
            else: 
                idx += 1
            
        return intervals