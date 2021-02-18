/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj = Object.create(null);
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(obj[num] > -1) {
            return [obj[num], i];
        } else {
            obj[target - num] = i;
        }
    }
};
// @lc code=end

