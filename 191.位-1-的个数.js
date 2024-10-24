/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function (n) {
  let len = 0
  let str = n.toString(2)
  for (let index = 0; index < str.length; index++) {
    if (str[index] == '1') {
      len++
    }
  }
  return len
};
// @lc code=end