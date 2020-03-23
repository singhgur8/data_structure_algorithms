# created stacks using ques and ques using stacks

class que:
    def __init__(self):
        self.queue = []
    
    def enque(self,val):
        self.queue.append(val)
    
    def deque(self):
        if not self.isEmpty():  
            result = self.queue.pop(0)
            return result
        else: 
            return None
    
    def size(self):
        return len(self.queue)
    
    def isEmpty(self):
        if self.size() == 0:
            return True
        else: 
            return False
    
myQue = que()
# size
# check if its empty
print myQue.size() == 0
print myQue.isEmpty() == True


# add two items
# remove one item
myQue.enque(1)
myQue.enque(2)

print myQue.size() == 2
print myQue.isEmpty() == False

print myQue.deque() == 1
print myQue.size() == 1

class Stack:
    def __init__(self):
        self.queuePerm = que()
        self.queueTemp = que()
    
    def push(self,val):
        self.queuePerm.enque(val)
    
    def pop(self):
        length = self.queuePerm.size() - 1
        for i in range(length):
            temp = self.queuePerm.deque()
            self.queueTemp.enque(temp)
        
        result = self.queuePerm.deque()
        
        self.queuePerm = self.queueTemp
        self.queueTemp = que()
        
        return result
        

#  1 2 3 4 5 (que1)
# pop()
# deque
# 1 2 3 4
        
    
myStack = Stack()    
myStack.push(1)
myStack.push(2)
print myStack.pop() == 2
myStack.push(3)
print myStack.pop() == 3
print myStack.pop() == 1

class basicStack: 
    def __init__(self):
        self.stack = []
        
    def push(self, val):
        self.stack.append(val)
        
    def pop(self):
        return self.stack.pop()
        
    def size(self):
        return len(self.stack)
    
    def isEmpty(self):
        if self.size() == 0:
            return True
        else: 
            return False

    
class stackQue:
    def __init__(self):
        self.stackPerm = basicStack()
        self.stackTemp = basicStack()
        
    def enque(self, val):
        self.stackPerm.push(val)
        
        
    def deque(self):
        length = self.stackPerm.size()
        for idx in range(length):
            popped = self.stackPerm.pop()
            self.stackTemp.push(popped)
            
        deque = self.stackTemp.pop()
        
        for idx in range(length-1):
            popped = self.stackTemp.pop()
            self.stackPerm.push(popped)
        
        return deque
        
#         pop off everything
# then the last item the deque
# repop back into stack 1
# 1 2 3 4 == stack1
# 4 3 2 1 (last item is enque) stack 2
# 2 3 4
queue = stackQue()
queue.enque(1)
queue.enque(2)
queue.enque(3)
print queue.deque() == 1
print queue.deque() == 2
queue.enque(4)
queue.enque(5)
print queue.deque() == 3
queue.enque(6)
print queue.deque() == 4