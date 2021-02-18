/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length; // 行
    const n = obstacleGrid[0].length; // 列
    // 开始或者结束为0
    if(obstacleGrid[m-1][n-1] == 1 || obstacleGrid[0][0] == 1) return 0;
    const dp = new Array(m+1).fill(0).map(item => new Array(n+1).fill(0));
    dp[m-1][n-1] = 1;
    for(let i = m-1; i >= 0; i--) {
        for(let j = n-1; j >= 0; j--){
            if(obstacleGrid[i][j] == 0){
                dp[i][j] += dp[i+1][j] + dp[i][j+1]; 
            }
        }
    }
    return dp[0][0];
};
// @lc code=end

