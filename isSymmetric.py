def isSymmetric(self, root):
        if not root:
            return True
        if (root.left == None and root.right == None):
            return True
        
        def DFS(left,right):
            if (left.val != right.val):
                return False
            
#             basically if theyre opposites, its bad
            if ((left.left == None and right.right != None) or (right.right == None and left.left != None)):
                return False
            elif (left.left != None and right.right != None):
                answer = DFS(left.left, right.right)
                if (answer == False):
                    return False
            
            if ((left.right == None and right.left != None) or (right.left == None and left.right != None)):
                return False
            elif (left.right != None and right.left != None):
                answer = DFS(left.right, right.left)
                if (answer == False):
                    return False
            
            return True
            
            
        if ((root.left == None and root.right != None) or (root.right == None and root.left != None)):
                return False
        else:
            return DFS(root.left,root.right)

            # this code could be alot simpler if I could figure out how to handle the edges better
            # meaning like whenever I try to find the property of None, it breaks but in js its not so