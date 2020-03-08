class Solution(object):
    def removeDuplicates(self, nums):
        x = len(nums)-1
        i = 0
        while(i < x):
            if (nums[i] == nums[i+1]):
                del nums[i+1]
                x -= 1
            else:
                i += 1
        return len(nums)