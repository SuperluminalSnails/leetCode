# 题目描述

给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例:

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]

```

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/two-sum
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


# 解题思路

## 暴力求解

总有一组组合可以得到答案，时间复杂度O(n^2)

```javascript
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
```

## 用map缓存已经遍历的数据

- 总和减去当前遍历值得到另一个元素值
- 将遍历的元素值缓存到map上，以值为key,以索引为value

```javascript
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

```