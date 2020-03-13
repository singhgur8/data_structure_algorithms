def maxProfit(self, prices):
        minNum = float('inf')
        maxNum = 0
        for num in prices:
            if (num < minNum):
                minNum = num
            else:
                diff = num - minNum
                if (diff > maxNum):
                    maxNum = diff
        return maxNum