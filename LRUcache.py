# Least Recently Used Cache
# this is a design question that will have two methods, a get and a put
# goal is to design this is in both O(1) capacity
# Goal: hashmap and doubly linkedlist

class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
        self.prev = None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    
    def addNode(self,node):
        if (self.head == None):
            self.head = node
            self.tail = node
        else:
            self.tail.next = node
            node.prev = self.tail
            self.tail = node

    def delNode(self,nodePointer):
        if nodePointer == None:
            temp = self.head.val
            self.head = self.head.next
            return temp

        prev = nodePointer.prev
        nodeNext = nodePointer.next

        if (nodePointer != self.head):
            prev.next = nodeNext
        else: 
            self.head = self.head.next

        if (nodePointer != self.tail):
            nodeNext.prev = prev
        else:
            self.tail = prev
        # might be able to do it in one step using pythonic way [nodePointer.prev.next, nodePointer.next.prev] = [b,a]

        # need to make sure it works if its only capacity of 1, head and tails need to be accounted for -- CURRENT issues here
        # almost works perfect

class LRUcache:
    def __init__(self, capacity):
        # create hashMap, which will store the key, and the a list of the value and its node in LL
        self.count = capacity
        self.hashMap = {}
        self.list = LinkedList()

    def getVal(self,key):
        # what happens when this is already at the top of the list? -- will it work
        if key not in self.hashMap:
            return None
        val = self.hashMap[key][0]
        node = self.hashMap[key][1]

        if node != self.list.tail:
            self.list.delNode(node) #this should remove from wherever it is and add it to
            self.list.addNode(node) #the end of the list

        return val

    def putVal(self,key,value):
        # create node and pass to the LL add node
        # add it to the hashMap
        # if the count is maxed out then we would need to delete something
        # also for now, assume that all keys will be unique, otherwise I need to add more logic HERE
        newNode = Node(key) #major watchout, the linkedlist is actaully store the keys from hashmap as values in nodes
        self.hashMap[key] = [value, newNode]
        self.list.addNode(newNode)
        count = self.getCount()
        if count == 0:
            # remove the head
            oldestKey = self.list.delNode(None)
            del self.hashMap[oldestKey]
        else:
            self.decreaseCount()
        
    
    def getCount(self):
        return self.count

    def decreaseCount(self):
        self.count -= 1


cache = LRUcache(3)
print(cache.getVal(3) == None)

cache.putVal('hello', 'world')
print(cache.getVal('hello') == 'world') # tested that it can insert and retrieve

cache.putVal(5, 'workkk')
cache.putVal('cool', 'job')
cache.getVal('hello') # this should have gone to the end and the 5 should be head, meaning its gone if we add one more
cache.putVal('test', 'hello should be gone')

print(cache.getVal(5) == None) # ensures that 5 is gone if 4 things are added
# print(cache.getVal('hello') == 'world')

