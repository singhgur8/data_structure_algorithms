class Solution(object):
    def eraseOverlapIntervals(self, intervals):
        if not intervals:
            return 0
        count = 0

        intervals.sort(key = lambda x: x[1])
        
        
        overLap = True
        while (overLap):
            if len(intervals) == 1:
                return count
            for idx in range(len(intervals)-1):
                if (intervals[idx][1] > intervals[idx+1][0]):
                    count += 1
                    if intervals[idx][0] < intervals[idx][0]:
                        del intervals[idx]
                    else: 
                        del intervals[idx+1]
                    break
                elif idx == len(intervals)-2:
                    overLap = False
        
        return count

    # only beats 5% of the people 
    # can be improved in the while loop section
    