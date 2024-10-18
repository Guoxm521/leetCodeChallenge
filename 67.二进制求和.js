/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aIndex = a.length - 1, bIndex = b.length - 1, num = "", carry = 0;
  while (aIndex >= 0 || bIndex >= 0 || carry == 1) {
    const temp = carry + (a[aIndex] == "1" ? 1 : 0) + (b[bIndex] == "1" ? 1 : 0);
    carry = temp > 1 ? 1 : 0;
    num = temp % 2 + num;
    aIndex--;
    bIndex--;
  };
  return num
};
// @lc code=end
