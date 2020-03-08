def rotate(self, nums, k):
        k = k % len(nums)
        front = nums[len(nums)-k:]
        back = nums[0:len(nums)-k]
        res = front + back
        return res

arr = [1,2,3,4,5,6,7]
answer = rotate(rotate,nums=arr,k=3)
print(answer)