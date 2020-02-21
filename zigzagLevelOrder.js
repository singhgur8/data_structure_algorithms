/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {
    if (root === null) return [];
    let output = [];
    let queue = [root];
    let goingForward = true;
    let breadthLvl = 0;

    while (queue.length > 0) {
        breadthLvl++
        goingForward = breadthLvl%2 === 1 ? true: false;
        queue = queue.reverse(); // should be O(N), total becuase i only flip each element once
        let itemsInQueue = queue.length;
        let currentLevel = [];
        for (let i = 0; i < itemsInQueue; i++ ){
            let dequeued = queue.shift();
            currentLevel.push(dequeued.val);
            if (goingForward) {
                if (dequeued.left) queue.push(dequeued.left);
                if (dequeued.right) queue.push(dequeued.right);
            } else { // when going from right to left, add the rights first
                if (dequeued.right) queue.push(dequeued.right);
                if (dequeued.left) queue.push(dequeued.left);
            }
        }
        output.push(currentLevel);
    }

    return output;
};
