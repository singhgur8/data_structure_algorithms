/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
* }
*/
/**
* @param {ListNode} l1
* @param {ListNode} l2
* @return {ListNode}
*/    


var mergeTwoLists = function(l1, l2) {
    
    var currentNode, resultList;

    // edge case: if either is null
    if (l1 === null) {
        return l2
    } else if (l2 === null) {
        return l1
    }

    // assigning current node, and pointers 1 and 2
    if (l1.val <= l2.val) {
        currentNode = l1;
        resultList = l1;
        var p1 = l1.next;
        var p2 = l2
    } else {
        currentNode = l2;
        resultList = l2;
        var p1 = l1;
        var p2 = l2.next;
    }

    var recurse = function(pointer1,pointer2){
     // base case, we reach the end of the the linked list
     if (pointer1 === null) {
        currentNode.next = pointer2;
        return;
     } else if (pointer2 === null ) {
        currentNode.next = pointer1;
        return;
     } else if (pointer1.val <= pointer2.val) {
         currentNode.next = pointer1;
         currentNode = pointer1;
         pointer1 = currentNode.next
         recurse(pointer1, pointer2)
     } else { //pointer 2 node is smaller
        currentNode.next = pointer2;
        currentNode = pointer2;
        pointer2 = currentNode.next
        recurse(pointer1, pointer2)
     }
         
    }
 
    
    recurse(p1,p2)
    return resultList
 };