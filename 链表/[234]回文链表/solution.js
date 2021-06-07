/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

/**
 * 首刷
 * @思路: 复制到数组中，然后用数组回文做
 */

var isPalindrome = function (head) {
  let listArr = [];
  while (head) {
    listArr.push(head.val);
    head = head.next;
  }
  for (let i = 0; i < listArr.length; i++) {
    if (i < listArr.length - 1 - i) {
      if (listArr[i] !== listArr[listArr.length - 1 - i]) {
        return false;
      }
    } else {
      return true;
    }
  }
};
