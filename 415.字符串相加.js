/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let maxLength = num1.length > num2.length ? num1.length : num2.length
  num1 = num1.padStart(maxLength, '0')
  num2 = num2.padStart(maxLength, '0')
  let index = maxLength - 1, num = "", carry = 0;
  while (index >= 0) {
    const temp = Number(num1[index]) + Number(num2[index]) + carry
    carry = Math.floor(temp / 10)
    num = String(temp % 10) + num
    index--
  }
  if (carry > 0) {
    num = carry + num
  }
  return num
};
// @lc code=end
