# this was done in python3 while my local machine is only running python2
class Solution:
    def decompressRLElist(self, nums: List[int]) -> List[int]:
        result = []
        length = len(nums)
        for i in range(0,length,2):
            temp = [nums[i+1]] * nums[i]
            result.extend(temp)
        return result    
