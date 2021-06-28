/* eslint-disable no-undef */
const { lengthOfLongestSubstring } = require('./../souce/index');
const assert = require('assert');

it('should return 3', function () {
  const s = 'abcabcbb';
  assert.equal(lengthOfLongestSubstring(s), 3);
});

it('should return 1', function () {
  const s = 'bbbbb';
  assert.equal(lengthOfLongestSubstring(s), 1);
});

it('should return 3', function () {
  const s = 'pwwkew';
  assert.equal(lengthOfLongestSubstring(s), 3);
});

it('should return 0', function () {
  const s = '';
  assert.equal(lengthOfLongestSubstring(s), 0);
});
