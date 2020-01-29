/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * Input: root = [1,2,3,4,5,null,6,7,null,null,null,null,8]
 * Output: 15
 * 
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {

    let queue = []
   
    // helper function to help BFS and add sum   
    const checkNode = (node) => {
        node.left !== null ? queue.push(node.left): null
        node.right !== null ? queue.push(node.right): null
        sum += node.val
    }
   
    queue.push(root);
    let depth = 0; 
   
    while (queue.length > 0) {
       var sum = 0;
       depth++
       let queueLength = queue.length
       for (var i = 0; i < queueLength; i++) {
           var dequeue = queue.shift();
           checkNode(dequeue)
       }
    }   
    return sum || 0
   };
