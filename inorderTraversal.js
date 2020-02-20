var inorderTraversal = function(root) {
    if (root === null) return [];
    let result = [];
    //go all the way left until no more then return that value
    let traverse = function(node) {
        if (node.left === null) {
            result.push(node.val);
            if(node.right) traverse(node.right)
        } else {
            traverse(node.left);
            result.push(node.val);
            if (node.right) traverse(node.right)
        }   
    }
    traverse(root);
    return result;
};