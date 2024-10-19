/*
 * @lc app=leetcode.cn id=165 lang=javascript
 *
 * [165] 比较版本号
 */

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
    let v1_list = version1.split('.')
    let v2_list = version2.split('.')
    let maxLen = v1_list.length > v2_list.length ? v1_list.length : v2_list.length
    for (let i = 0; i < maxLen; i++) {
        const num1 = v1_list[i] ? v1_list[i] - '0' : 0
        const num2 = v2_list[i] ? v2_list[i] - '0' : 0
        if (num1 > num2) return 1
        if (num1 < num2) return -1
    }
    return 0
};
// @lc code=end
