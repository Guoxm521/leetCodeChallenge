const { ListNode, createLinkedList } = require('./util')

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let res = new ListNode()
  let cur = res
  while (list1 != null && list2 != null) {
    if (list1.val > list2.val) {
      cur.next = list2;
      list2 = list2.next
    } else {
      cur.next = list1;
      list1 = list1.next
    }
    cur = cur.next
  }
  res.next = list1 === null ? list2 : list1;
  return res.next
};


let list1 = createLinkedList([1, 2, 4])
let list2 = createLinkedList([1, 3, 4])



mergeTwoLists(list1, list2)