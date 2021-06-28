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
    const map = {};
    let mapLength = 0;
    for (let j = i; j < len; j++) {
      const str = s[j];
      if (map[str] === undefined) {
        map[str] = str;
        mapLength++;
      } else {
        break;
      }
    }
    if (mapLength > maxLength) {
      maxLength = mapLength;
    }
  }
  return maxLength;
};

module.exports = {
  lengthOfLongestSubstring
};
