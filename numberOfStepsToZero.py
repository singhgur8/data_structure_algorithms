# warning: done in python3, while local machine is only running py 2
class Solution:
    def numberOfSteps (self, num: int) -> int:
        count = 0
        
        while num > 0:
            if (num%2 == 0):
                count = count + 1
                num = num/2
            else:
                num = num - 1
                count = count + 1

        
        return count