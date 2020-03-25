class Solution(object):
    def isHappy(self, n):
        """
        :type n: int
        :rtype: bool
        """
        global memo
        memo = {}

        def helper(n):
            global memo
            if n not in memo:
                memo[n] = True
                casted = str(n)
                sum = 0
                for char in casted:
                    sum += int(char)**2
                if sum == 1:
                    return True
                else:
                    return helper(sum)
            else: 
                return False #cus we are cycling now
                
        return helper(n)