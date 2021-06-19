/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {
    let domp = new ListNode(0, head)
     let fast = domp
     let slow = domp
     let step = 0
     while(fast) {
         if (step === n + 1) {
             slow = slow.next
         } else {
            step += 1
         }
         fast = fast.next
     }
     if (slow.next) {
         slow.next = slow.next.next
     }
     return domp.next
};