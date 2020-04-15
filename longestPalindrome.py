class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        if len(s) == 0:
            return ""
        elif len(s) == 1:
            return s
        elif len(s) == 2:
            if s[0] == s[1]:
                return s
            else: return s[0]
        
        
        mid = int((len(s)-1)/2) # should round down
        idx = mid
        
        global largestPalin
        global length
        largestPalin = s[0]
        length = 1
        
        
        def helper (start, end, s):
            global largestPalin
            global length
            rightStart = len(s)-1-end
            rightEnd = len(s)-1-start
            
            
            validPalin = True
            while(validPalin):
                if s[start] == s[end]:
                    size = end-start + 1
                    if size > length:
                        largestPalin = s[start:end+1]
                        length = size
                    if start -1 >= 0:
                        start -= 1
                    else: break
                    if end + 1 <= len(s)-1:
                        end += 1
                    else: break
                else:
                    validPalin = False
                    
            # mirror and test the other half as well
            validPalin = True
            start,end = rightStart, rightEnd
            while(validPalin):
                if s[start] == s[end]:
                    size = end-start + 1
                    if size > length:
                        largestPalin = s[start:end+1]
                        length = size
                    if start -1 >= 0:
                        start -= 1
                    else: break
                    if end + 1 <= len(s)-1:
                        end += 1
                    else: break
                else:
                    validPalin = False
                
        
        while (idx > -1):
                    
            start,end = idx,idx
            helper(start,end,s)
            
            start,end = idx,idx+1
            if (s[start] == s[end] or s[-start-1] == s[-end-1]):
                 helper(start,end,s)
                               
            idx -= 1
            if start*2+2 < length:
                    break

            
        return largestPalin
        