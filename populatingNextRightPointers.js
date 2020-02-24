/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if (root === null) return null;
    let queue = [root];
    
    while (queue.length > 0) {
        let levelSize = queue.length;
        
        for (let i = 0; i < levelSize; i++) {
            let dequeue = queue.shift();
            if (dequeue.left !== null) queue.push(dequeue.left);
            if (dequeue.right !== null) queue.push(dequeue.right);
            
            if (i === levelSize -1) dequeue.next = null;
            else dequeue.next = queue[0];
        }
    }
    
    
    return root;
};