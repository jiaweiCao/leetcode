/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let cur1 = l1;
  let cur2 = l2;
  let result = new ListNode(0, null);
  let cur3 = result;
  let carry = 0;
  while (cur1 || cur2 || carry) {
    const val1 = cur1 ? cur1.val : 0;
    const val2 = cur2 ? cur2.val : 0;

    const sum = val1 + val2 + carry;
    if (sum >= 10) {
      cur3.val = sum % 10;
      carry = 1;
    } else {
      cur3.val = sum;
      carry = 0;
    }
    cur1 = cur1 && cur1.next;
    cur2 = cur2 && cur2.next;
    if (cur1 || cur2 || carry) {
      cur3.next = new ListNode(0, null);
    }
    cur3 = cur3.next;
  }
  return result;
};
