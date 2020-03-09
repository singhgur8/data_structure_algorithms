def isValidBST(self, root): 
        if (root == None):
            return True

        biggest = float('-inf')
        global biggest
        answer = True
        global answer
        
        def preorderSearch(node):
            global biggest
            global answer
            if (answer == False):
                return False #should stop from things running on too much

            if (node.left != None):
                preorderSearch(node.left) 
            if (node.val <= biggest):
                answer = False
            else: 
                biggest= node.val

            if (node.right != None):
                preorderSearch(node.right)
        preorderSearch(root)
        return answer 

        # this is actually using Inorder traversal