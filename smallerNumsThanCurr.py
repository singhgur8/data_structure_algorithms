class Solution(object):
    def smallerNumbersThanCurrent(self, nums):
        result = []
        hashMap = {}
        copy = nums[:]
        copy.sort()

        for idx in range(len(copy)):
            if copy[idx] not in hashMap:
                hashMap[copy[idx]] = idx
        
        for num in nums:
            result.append(hashMap[num])
                
        return result