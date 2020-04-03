class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        
        start at the last index, and every step i take back, is what the number should be or more
        once i find a matching number of my depth, i need to reset the depth count from this spot
        onwrds. if i reach the first index, and its the depth or more, then we are good
        """
        # start second from last
        depth = 1
        
        for idx in range(len(nums)-2,0,-1):
            if nums[idx] >= depth:
                depth = 1
            else:
                depth += 1
        
        if nums[0] >= depth or len(nums) == 1:
            return True
        return False