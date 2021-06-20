/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 
/**
 * 首刷
 * 思路:将所有链表存入map，key - val 一一对应
 */
 var mergeKLists = function(lists) {
    const dump = new ListNode(0, null)
    let dumpCur = dump
    const listMap = new Map()
    lists.forEach((item, i) => {
        listMap.set(i, item)
    })
       const allkeys = [...listMap.keys()]
    while (!allkeys.every((key) => !listMap.get(key))) {
        let minCur = new ListNode(Infinity, null)
        let minKey = ''
        for (let i =0; i < allkeys.length; i++) {
            const cur = listMap.get(allkeys[i])
            if (cur !== null && minCur.val > cur.val) {
               minCur = cur
               minKey = allkeys[i]
            }
        }
        listMap.set(minKey, minCur.next)
        dumpCur.next = minCur
        dumpCur = dumpCur.next
    }
    return dump.next
};