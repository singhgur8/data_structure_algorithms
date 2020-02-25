// kth smallest element in a BST
var kthSmallest = function(root, k) {
    if (root === null) return null;
    let count = 0;
    let result = 0;
    
    let inOrder = (node) => {
        if (node.left !== null) inOrder(node.left)
            
        // count the current node if left is null    
        count++    
        if (count === k) return result = node.val;
        
        if (node.right !== null) inOrder(node.right)   
             
    }
    
    inOrder(root)
    return result;
};