/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function(head) {
    if (head === null) return null;
    let evenHead = null;

    let recurse = function(node, count) {
        // basically if second number exists, its the head of evens
        if (evenHead === null && node.next !== null) evenHead = node.next; 

        // base case. end of the list. should work for odd => null AND odd => even => null
        let theEnd = node.next === null || node.next.next === null
        if (count%2 !== 0 && theEnd) {
            node.next = evenHead;
            return;
        }

        // point this, regardless of what it is to the next of next
        // save the current next so we can recurse to it
        let nextNode = node.next;
        node.next = node.next.next;

        recurse(nextNode, count+1)
    }

    recurse(head, 1);

    return head;
};