/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 != 0) {
    return false
  }
  let strMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  }
  let res = []
  for (let i = 0; i < s.length; i++) {
    let item = s[i]
    if (strMap.hasOwnProperty(item)) {
      res.push(strMap[item])
    } else {
      if (item.length === 0 || res.pop() != item) {
        return false
      }
    }
  }

  return !res.length
};

// @lc code=end