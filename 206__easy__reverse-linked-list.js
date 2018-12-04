/**

    Reverse a singly linked list.

    Example:

    Input: 1->2->3->4->5->NULL
    Output: 5->4->3->2->1->NULL

    Follow up:
    A linked list can be reversed either iteratively or recursively. Could you implement both?

 */
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
/**
 *
 * O(n) time
 * O(1) space
 * Runtime: 56 ms, faster than 100.00%
 */
var reverseList = function(head) {
    let prev = null;
    while (head !== null) {
        let next = head.next; // hold next node
        head.next = prev; // reverse this and next (next -> curr)
        prev = head; // head is the prev of next now
        head = next; // move to next node (continue reverse)
    }
    return prev;
};
/**
 *
 * O(n) time
 * O(n) space
 * Runtime: 56 ms, faster than 100.00%
 */
var reverseList = function(head) {
    if (!head) return null; // end of linked list
    if (head.next === null) return head; // last node in linked list

    let newHead = reverseList(head.next); // find the head of reversed linked list

    head.next.next = head; // reverse (next -> curr)
    head.next = null; // curr next should be none

    return newHead;
};
