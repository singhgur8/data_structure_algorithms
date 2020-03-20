class Solution(object):
    def findKthLargest(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: int
        """
        # nums.sort(reverse = True)
        # return nums[k-1]
        
        return heapq.nlargest(k, nums)[-1]

# two ways of doing it , O(NlogN) and O(NlogK)