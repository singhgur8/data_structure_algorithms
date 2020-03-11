def validateStackSequences(self, pushed, popped):
#         create a bool, and a third array
# pop if possible, otherwise we push, and we cn only pop once push runs out
# once its out cant return anything, then return false
        valid = True
        helperArr = []
        global helperArr
        
        def recurse(pushIndex,popIndex):
            a = len(pushed)
            b = len(popped)
            if (pushIndex >= a and popIndex >= b):
                return len(helperArr) == 0
                global helperArr         
                
            
# also issue is if i try to get values from popped[greater than possible it breaks]
# try to pop, otherwise push, and increment whichever we use
            potentialPop = None
            if (len(helperArr) > 0):
                potentialPop = helperArr[len(helperArr)-1]
                
            if (popIndex < len(popped)):  
                if (potentialPop == popped[popIndex]):
                    helperArr.pop()
                    return recurse(pushIndex, popIndex+1)
            
            if (pushIndex < len(pushed)):
                helperArr.append(pushed[pushIndex])
                return recurse (pushIndex+1, popIndex)
                
#                 it should be bale to pop or push, otherwise its false
            return False
        return recurse(0,0)