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
var detectCycle = function (head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      break
    }
  }
  if (!fast || !fast.next) {
    return null
  }
  fast = head
  while (fast !== slow) {
    slow = slow.next
    fast = fast.next
  }
  return fast
};