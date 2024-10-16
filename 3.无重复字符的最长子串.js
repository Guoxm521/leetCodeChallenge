/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 1) {
    return s.length
  }
  let cur = ''
  let max = 0
  for (let i = 0; i < s.length; i++) {
    const item = s[i];
    if (cur.indexOf(item) !== -1) {
      cur = cur.slice(cur.indexOf(item) + 1)
    }
    cur += item
    max = cur.length > max ? cur.length : max
  }
  return max
};
// @lc code=end

