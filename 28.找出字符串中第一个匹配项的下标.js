/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 找出字符串中第一个匹配项的下标
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let h = haystack.length
  let n = needle.length
  if (n > h) {
    return -1
  }
  let start = 0
  let needStart = 0
  while (start < h && needStart < n) {
    if (haystack[start + needStart] === needle[needStart]) {
      needStart++
    } else {
      start++
      needStart = 0
    }
  }
  return needStart == n ? start : -1
};
// @lc code=end