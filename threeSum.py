class Solution(object):
    def threeSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[List[int]]
        
        
        """
        
        result = []
        
        if len(nums) < 3:
            return []
        
        nums.sort()
        options = {}
        duplicates = {}
        
        for i in range(len(nums)):
            if nums[i] not in options:
                options[nums[i]] = [i]
            else:
                options[nums[i]].append(i)
        
        
        for i in range(len(nums)):
            if nums[i] > 0:
                break 
            elif nums[i] == 0 and str([0,0,0]) in duplicates:
                continue
            for j in range(i+1,len(nums)):
                if nums[i] == 0 and str([0,0,0]) in duplicates:
                    continue
                twoSum = -(nums[i] + nums[j])
                if twoSum in options:
                    arr = options[twoSum]
                    for k in range(len(arr)):
                        res = [nums[i],nums[j],nums[arr[k]]]
                        if arr[k] > j and str(res) not in duplicates:
                            result.append(res)
                            duplicates[str(res)] = True
        return result