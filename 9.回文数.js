/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let origin = String(x)
  for (let index = 0; index < origin.length; index++) {
    const start = origin[index];
    const last = origin[origin.length - index - 1];
    if (start != last) {
      return false
    }
  }
  return true
};
// @lc code=end

