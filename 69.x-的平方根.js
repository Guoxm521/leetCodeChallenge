/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根 
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let left = 0, right = Math.min(x + 1, 46341);
  while (left + 1 < right) {
    let m = Math.floor((left + right) / 2);
    if (m * m <= x) {
      left = m;
    } else {
      right = m;
    }
  }
  return left;
};
// @lc code=end

