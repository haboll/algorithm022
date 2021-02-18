/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

 // dp
 // 分解子问题： dp[i] 当前点子数组最大值
// dp[i] 根据dp[i-1] 和dp[i] 算出来
var maxProduct = function(nums) {
    for(let i = 1; i < nums.length; i++){
        if(nums[i] == 0) continue;
        if(nums[i-1] * nums[i] > nums[i]){
            nums[i] = nums[i-1] * nums[i]
        }
    }
    return Math.max.apply(null, nums)
};
// @lc code=end

