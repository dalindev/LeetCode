/**

  Given a linked list, swap every two adjacent nodes and return its head.
  You may not modify the values in the list's nodes, only nodes itself may be changed.

  Example:
    Given 1->2->3->4, you should return the list as 2->1->4->3.

 */

/**
 *
 * O(n) time
 * O(1) space
 *
 * 25m
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  let hd = new ListNode();
  hd = head.next;

  while (head && head.next) {
    let h1 = head;
    let h2 = head.next;
    let h3 = head.next.next;
    head.next.next = head;
    if (h3 && h3.next) {
      head.next = h3.next;
    } else {
      head.next = h3;
    }
    head = h3;
  }
  return hd;
};