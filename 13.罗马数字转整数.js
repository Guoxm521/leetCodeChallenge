/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let obj = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
  }
  let value = 0
  for (let index = 0; index < s.length; index++) {
    const item = obj[s[index]];
    if (index == 0) {
      value += item
    } else {
      let left = obj[s[index - 1]];
      if (left < item) {
        value -= left
        value -= left
      }
      value += item
    }
  }
  return value
};

// @lc code=end

