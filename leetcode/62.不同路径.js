/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    // m: 列
    // n: 行
    const dp = new Array(m).fill(0).map(item => new Array(n).fill(0));
    for(let i = m-1; i >= 0; i--){
        dp[i][n-1] = 1;
       
    }
    for(let j = n-1; j >= 0; j--){
        dp[m-1][j] = 1;
    }

    for(let i = m-2; i >= 0; i--){
        for(let j = n-2; j >= 0; j--){
            dp[i][j] = dp[i][j+1] + dp[i+1][j];
        }
    }
    return dp[0][0];
};

uniquePaths(3, 7)
// @lc code=end

