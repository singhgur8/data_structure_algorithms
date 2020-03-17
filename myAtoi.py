class Solution(object):
    def myAtoi(self, str):
        startPoint = -1
        idx = 0
        number = 0
        while (startPoint == -1 and idx < len(str)):
            if (str[idx] != " "):
                startPoint = idx
            else:
                idx += 1
        
        if (idx >= len(str)):
            return number
        
        isNeg = 1
        if (str[idx] == '-'):
            isNeg = -1
            startPoint += 1
        elif(str[idx] == '+'):
            startPoint += 1
        
        if (startPoint >= len(str)):
            return number
        
        if (str[startPoint].isdigit()):
            end = False
            digits = 0
            while(end == False and startPoint+digits < len(str)):
                if (str[startPoint + digits].isdigit()):
                    integar = int(str[startPoint + digits])
                    number *= 10
                    number += integar
                    digits += 1
                else:
                    end = True
                    
        if (number*isNeg > -2147483648):
            if(number*isNeg >= 2147483648):
                return 2147483647
            return number*isNeg
        else:
            return -2147483648