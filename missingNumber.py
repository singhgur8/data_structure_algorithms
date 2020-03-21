class Solution(object):
    def missingNumber(self, nums):
#         iterate through the nums and map them
# then iterate upto the lenght of the nums + 1
# whatever misses is the one
        hashMap = {}
        for i in nums:
            hashMap[i] = True
        
        for idx in range(len(nums) + 1):
            if idx not in hashMap:
                return idx
        