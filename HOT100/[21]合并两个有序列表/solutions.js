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
 var mergeTwoLists = function(l1, l2) {
     let cur1 = l1
     let cur2 = l2
     const dumb = new ListNode(0, null)
     let cur = dumb
     while (cur1 || cur2) {
         if (cur1 && cur2) {
             if (cur1.val < cur2.val) {
                cur.next = cur1
                cur1 = cur1.next
             } else {
                cur.next = cur2
                cur2 = cur2.next
             }
         } else if(cur1) {
            cur.next = cur1
            cur1 = cur1.next
         } else if (cur2) {
            cur.next = cur2
            cur2 = cur2.next
         }
         cur = cur.next
     }
     return dumb.next
};