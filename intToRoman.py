class Solution(object):
    def intToRoman(self, num):
    
        def helper(number):
            if (number >= 1000):
                return ['M', 1000]
            elif(number >= 900 ):
                return ['CM', 900]
            elif(number >= 500):
                return ['D', 500]
            elif(number >= 400):
                return ['CD', 400]
            elif(number >= 100):
                return ['C', 100]
            elif(number >= 90):
                return ['XC', 90]
            elif(number >= 50):
                return ['L', 50]
            elif(number >= 40):
                return ['XL', 40]
            elif(number >= 10):
                return ['X', 10]
            elif(number >= 9):
                return ['IX', 9]
            elif(number >= 5):
                return ['V', 5]
            elif(number >= 4):
                return ['IV', 4]
            elif(number >= 1):
                return ['I', 1]
        
        str = ""
        while (num > 0):
            subtract = helper(num)
            str += subtract[0]
            num -= subtract[1]
        
        return str