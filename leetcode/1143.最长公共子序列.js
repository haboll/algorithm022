/*
 * @lc app=leetcode.cn id=1143 lang=javascript
 *
 * [1143] 最长公共子序列
 */

// @lc code=start
/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    if(text1 == "" || text2 == "") return 0;
    const m = text1.length;
    const n = text2.length;
    const dp = new Array(m+1).fill(0).map(item => new Array(n+1).fill(0));
    for(let i = m-1; i>= 0; i--){
        for(let j = n-1; j >= 0; j--){
            if(text1.charAt(i) === text2.charAt(j)){
                dp[i][j] = dp[i+1][j+1] + 1;
            } else {
                dp[i][j] = Math.max(dp[i+1][j], dp[i][j+1]);
            }
            
        }
    }
    return dp[0][0];
};
// @lc code=end

