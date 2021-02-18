/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

 // 分解子问题
 // 定义dp状态意义
 // dp 方程
var maxSubArray = function(nums) {
    for(let i = 1; i < nums.length; i++){
        nums[i] = nums[i-1] < 0 ? nums[i] : nums[i-1] + nums[i];
    }
    return Math.max.apply(null, nums);
};
// @lc code=end

