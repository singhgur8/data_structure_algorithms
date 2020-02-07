// Binary Search tree to Greatest Sum Tree
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var bstToGst = function(root) {

    let nodesSum = 0;
    let nodesList = [];
    // first DFS and get all of the node values, ordered from lowest to highest
    let recurse = (node, reconstruct) => {
        if (node.left) recurse(node.left, reconstruct) // if left exists go

        if (!reconstruct) nodesList.push(node.val); // otherwise add current
        else { // if in reconstruction mode then replace values
            let newValue = newValuesArr[count]
            node.val = newValue;
            count++
        }

        if (node.right) recurse(node.right, reconstruct) // then go right
    }
    recurse(root, false)

    // get the total
    for(let i = 0; i < nodesList.length; i++) nodesSum+= nodesList[i];

    // create an array of new values, also have an object of new values,
    let newValuesArr = []; // subtract value than the current value from the total = 
    // numbers bigger than the current
    for (let j = 0; j < nodesList.length; j++) {
        if (j === 0) newValuesArr.push(nodesSum) // edge case
        else {
            newValuesArr.push(newValuesArr[j-1] - nodesList[j-1]) 
        }
    }

    //DFS back through tree and replace values
    let count = 0; // this is to track where in the new Arr we are relative to the tree
    recurse(root, true)

    return root
};

// Input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
