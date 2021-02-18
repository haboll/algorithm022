/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    if(nums.length < 3) return [];
    nums = nums.sort((a,b) => a-b);
    const res = [];
    for(let i = 0; i < nums.length; i++){
        if(i>0 && nums[i] === nums[i-1])continue;
        if(nums[i] > 0) break;
        let head = i + 1;
        let tail = nums.length - 1;
        while(tail > head){
            const sum = nums[i] + nums[head] + nums[tail];
            if(sum === 0){
                res.push([nums[i], nums[head], nums[tail]]);
                head++;
                tail--;
                while(tail > head && nums[head] === nums[head-1]){
                    head++;
                }
                while(tail > head && nums[tail] === nums[tail+1]){
                    tail--;
                }
            } else {
                sum > 0 ? tail-- : head++;
            }
        }
        // const obj = Object.create(null);
        // for(let j = i + 1; j < nums.length; j++ ){
        //     const num = nums[j];
        //     const sum = nums[i] + nums[j];
        //     if(obj[num] > -1) {
        //         res.push([nums[i], nums[obj[num]], num]);
        //         obj[num] = -2;
        //     } else if(obj[num] != -2) {
        //         obj[0 - sum] = j;
        //     }
        // }
    }
    return res;
};

// var arr = [-1,0,1,2,-1,-4,-1,-2,1,1,1,1,1,1,1];
// const res = threeSum(arr);
// @lc code=end

