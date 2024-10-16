const { ListNode, createLinkedList } = require('./util')

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
  console.log(max)
  return max
}
lengthOfLongestSubstring('dvdf')
lengthOfLongestSubstring('abcabcbb')
lengthOfLongestSubstring('bbbbb')
lengthOfLongestSubstring('pwwkew')
lengthOfLongestSubstring(' ')