class Solution(object):
    def trap(self, height):
        leftPass = []
        rightPass = []
        
        # go from left to right, and assume u add the most water that you can, based on the last 
#         tallest bar
        if not height:
            return 0
        
        leftTallest = height[0]
        for bar in height:
            leftTallest = max(leftTallest, bar)
            water = max(0, leftTallest-bar)
            leftPass.append(water)
            
        rightTallest = height[-1]
        for idx in range(len(height)-1,-1,-1):
            rightTallest = max(rightTallest,height[idx])
            water = max(0,rightTallest-height[idx])
            rightPass = [water] + rightPass
        
        totalArr = []
        for idx in range(len(rightPass)):
            totalArr.append(min(rightPass[idx], leftPass[idx]))
            
        return sum(totalArr)