/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (var i = 0, iLength = nums.length - 1; i < iLength; i++) {
        for (var j = i + 1, jLength = nums.length; j < jLength; j++) {
            if (target === nums[i] + nums[j]) {
                return [i, j];
            }
        }
    }
};
