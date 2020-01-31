
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumEvenGrandparent = function(root) {
    let sum = 0;

    let findGrandChildren = (node) => {
        //bfs, which ends on its own of ends when in depth three (grandchild of current node)
        let queue = [node]; let localDepth = 0;
        while (queue.length > 0) {
            localDepth++
            let sizeOfDepth = queue.length
            for (let i = 0; i < sizeOfDepth; i++) {
                let dequeue = queue.shift();
                if (localDepth === 3) { // don't need the children if we are already at depth 3 (grandchildren)
                    sum+= dequeue.val
                } else {
                    if (dequeue.left) queue.push(dequeue.left) // so that they're not null
                    if (dequeue.right) queue.push(dequeue.right)
                }
            }
        }
    }
    let recurse = (node) => {
        if ( node.val%2 === 0 ) {
            findGrandChildren(node)
        } else {
            recurse(node.left)
            recurse(node.right)
        }
    }
    recurse(root)
    return sum
};

module.exports = sumEvenGrandparent
