/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let len = digits.length
  let add = 1
  for (let i = len - 1; i >= 0; i--) {
    let tem = digits[i] + add
    if (tem > 9) {
      add = 1
    } else {
      add = 0
    }
    digits[i] = (tem) % 10
  }
  if (add) {
    digits.unshift(add)
  }
  return digits
};
// @lc code=end

