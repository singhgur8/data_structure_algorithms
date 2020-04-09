class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        constraint to do it without division
        Input:  [1,2,3,4]
        Output: [24,12,8,6]
        """
        left, right = [], []
        
        for idx in range(len(nums)):
            if idx == 0:
                left += [1]
            else: 
                left += [nums[idx-1]*left[idx-1]]
        
        for idx in range(len(nums)-1,-1,-1):
            if idx == len(nums)-1:
                right += [1]
            else:
                right = [right[0]*nums[idx+1]] + right
        
        result =[]
        for idx in range(len(left)):
            result.append(left[idx]*right[idx])
        return result