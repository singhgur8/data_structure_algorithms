/**
 * Definition for singly-linked list.
 function ListNode(val) {
     this.val = val;
     this.next = null;
 }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    function ListNode(val) {
        this.val = val;
        this.next = null;
    }

    let resultLL = undefined;
    let tail = null;
    let addLastCarryover = false;

    let recurse = function(p1,p2,carryover) {
        //base case
        if (p1 === null && p2 === null) {
            carryover === 1 ? addLastCarryover = true: null
            return
        }

        // if one list ends early
        if (p1 === null) p1 = new ListNode(0);
        if (p2 === null) p2 = new ListNode(0);

        var sum = p1.val + p2.val + carryover;
        if (sum >= 10) { 
            carryover = 1 
            sum = sum%10;
        } else carryover = 0;

        var node = new ListNode(sum);

        // if its the begining of the list
        if (resultLL === undefined) {
            resultLL = node;
            tail = node 
        } else {
            tail.next = node;
            tail = node
        }

        recurse(p1.next, p2.next, carryover)
    }

    recurse(l1,l2, 0)

    if (addLastCarryover === true) {
        var node = new ListNode(1);
        tail.next = node
    }

    return resultLL
};

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

