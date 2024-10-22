/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let index
  for (index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (index == 0 && target < element) {
      break
    }
    if (element == target) {
      break
    }
    if (element > target) {
      break
    }
  }
  return index !== null ? index : nums.length

};
// @lc code=end

