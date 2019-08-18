/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var map = {},
        i,
        j,
        other,
        len;
    for (i = 0, len = nums.length; i < len; i++) {
        other = target - nums[i];
        // 0 is Number
        if (map[other] || map[other] === 0) {
            j = map[other];
            break;
        }
        map[nums[i]] = i;
    }

    return [j, i];
};
