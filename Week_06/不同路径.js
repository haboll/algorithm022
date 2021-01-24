/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 解法1： 动态规划
// 核心是递归方程： dp[j][i] = dp[j+1][i] + dp[j][i+1]; 从目标点往回算


// var uniquePaths = function(m, n) {
//     const dp = new Array(m).fill(0).map(item => new Array(n).fill(0));
//     console.log(dp);
//     for(let i = n-1; i>=0; i--) {
//         for(let j = m-1; j>=0; j--) {
//             if(i == n-1 || j == m -1 ){
//                 dp[j][i] = 1;
//             } else {
//                 dp[j][i] = dp[j+1][i] + dp[j][i+1];
//             }
//         }
//     }
//     return dp[0][0];
// };



// 解法2： 递归， 递归可能发生栈溢出
// 从出发点往目标算, 

var uniquePaths = function(m, n) {
    const obj = {};
    return helper(0, 0, m, n, obj)
}

var helper = function(i, j, m, n, obj) {
    if(i == m-1 || j == n-1){
        return 1;
    }
    if(obj[`${i}*${j+1}`]) {
        return obj[`${i}*${j+1}`]
    };
    let right =  helper(i, j+1, m, n, obj);
    let bottom = helper(i+1, j, m, n, obj);
    obj[`${i}*${j}`] = right + bottom;
    return right + bottom;
}


// 解法： 公式
// 从左上角到右下角的过程中，我们需要移动 m+n-2m+n−2 次，其中有 m-1m−1 次向下移动，n-1n−1 次向右移动。






const res = uniquePaths(3, 7);

console.log(res);