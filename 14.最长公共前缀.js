/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 1) {
    return strs[0]
  }
  let res = '';
  for (var j = 0; j < strs[0].length; j++) {
    for (var i = 1; i < strs.length; i++) {
      if (strs[i][j] != strs[0][j]) return res
    }
    res += strs[0][j];
  }
  return res;

};
// @lc code=end

