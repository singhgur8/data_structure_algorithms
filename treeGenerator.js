// This file will generate trees so that I can run tests more easily and to have to create trees manually.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

module.exports = {
    binaryTreeUnordered: (arr) => {
        var nodesObject = {};
        let childIndex = (index) => {
            // first step is to find how many nulls upto this point
            var nullCount = 0;
            for (let j = 0; j < index; j++) {
                if (arr[j] === null) {
                    nullCount++
                }
            }
            // the first childsIndex wil be the number *2 + 1 - null*2
            return index*2+1-nullCount*2
        }

        for ( var i = arr.length-1; i > -1; i--) {
            if (arr[i] === null) {
                nodesObject[i] = null
            } else {
                var node = new TreeNode(arr[i]);
                nodesObject[i] = node;
                // check if it has children 
                var firstChild = childIndex(i)
                if (firstChild < arr.length-1) {
                    nodesObject[i].left = nodesObject[firstChild];
                    nodesObject[i].right = nodesObject[firstChild+1] || null
                }
            }
        }        
        return nodesObject[0]
    }
}