/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (!s.length) {
    return 0;
  }
  if (s.length === 1) {
    return 1;
  }
  let maxLength = 0;
  for (let i = 0, len = s.length; i < len; i++) {
    let map = {};
    let item = s[i];
    let maxMapLength = 0;
    while (map[item] === undefined) {
      maxMapLength++;
      map[item] = 1;
      i++;
      if (i < len) {
        item = s[i];
      } else {
        break;
      }
    }
    if (maxMapLength > maxLength) {
      maxLength = maxMapLength;
    }
    i--;
  }
  return maxLength;
};

module.exports = {
  lengthOfLongestSubstring
};
