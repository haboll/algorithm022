/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const len = nums.length;
    if (len < 4) return [];
    nums = nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] === nums[i-1]) continue;
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            let head = j + 1;
            let tail = len - 1;
            while (tail > head) {
                const sum = nums[i] + nums[j] + nums[head] + nums[tail] - target;
                if (sum === 0) {
                    res.push([nums[i], nums[j], nums[head], nums[tail]]);
                    head++;
                    tail--;
                    while (tail > head && nums[head] === nums[head-1]) {
                        head++;
                    }
                    while (tail > head && nums[tail] === nums[tail+1]) {
                        tail--;
                    }
                } else {
                    sum > 0 ? tail-- : head++;
                }
            }
        }
    }
    return res;
};
// @lc code=end
