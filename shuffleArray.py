class Solution(object):
    from random import Random
    rand = Random()
    global rand
    
    def __init__(self, nums):
        """
        :type nums: List[int]
        """
        self.original = nums[:]
        self.val = nums
        

    def reset(self):
        """
        Resets the array to its original configuration and return it.
        :rtype: List[int]
        """
        self.val = self.original[:]
        return self.val
        

    def shuffle(self):
        """
        Returns a random shuffling of the array.
        :rtype: List[int]
        """
        options = len(self.val)
        global rand
        
        while(options > 0):
            randomNum = rand.randrange(options)
            temp = self.val[options-1]
            self.val[options-1] = self.val[randomNum]
            self.val[randomNum] = temp
            options -= 1
        return self.val


# Your Solution object will be instantiated and called as such:
# obj = Solution(nums)
# param_1 = obj.reset()
# param_2 = obj.shuffle()