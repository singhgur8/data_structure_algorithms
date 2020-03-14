class MinStack(object):

    def __init__(self):
        """
        initialize your data structure here.
        """
        self.minStack = [float('inf')]
        self.stack = []
        

    def push(self, x):
        """
        :type x: int
        :rtype: None
        """
        self.stack.append(x)
        if (x <= self.minStack[-1]):
            self.minStack.append(x)
        

    def pop(self):
        """
        :rtype: None
        """
        last = self.stack.pop()
        if (self.minStack[-1] == last):
            del self.minStack[-1]
        
        return last
    

    def top(self):
        """
        :rtype: int
        """
        return self.stack[-1]
        

    def getMin(self):
        """
        :rtype: int
        """
        return 0 if (self.minStack[-1] == float('inf')) else self.minStack[-1]
        


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()

# create another stack of mins, and if this matches the element we popping the pop this too
# means we will need to have a min? no it will just be last el in the stack
# 