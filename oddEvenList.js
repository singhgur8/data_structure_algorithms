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
    let evenHead = head.next;

    let recurse = function(node, count) {
        let theEnd = node.next === null || node.next.next === null
        if (count%2 !== 0 && theEnd) {
            node.next = evenHead;
            return;
        }

        let nextNode = node.next;
        node.next = node.next.next;

        recurse(nextNode, count+1)
    }

    recurse(head, 1);

    return head;
};