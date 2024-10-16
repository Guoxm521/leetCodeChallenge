/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
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
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  let res = new ListNode()
  let cur = res;
  let add = 0
  while (l1 || l2) {
    let s = l1 ? l1.val : 0
    let e = l2 ? l2.val : 0
    let t = (s + e + add) % 10
    if (s + e + add >= 10) {
      add = 1
    } else {
      add = 0
    }
    cur = cur.next = new ListNode(t)
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (add) {
    cur = cur.next = new ListNode(1)
  }
  return res.next
};
// @lc code=end

