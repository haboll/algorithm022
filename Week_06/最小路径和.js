/**
 * @param {number[][]} grid
 * @return {number}
 */
// dp
// 分解子问题
// dp 方程

var minPathSum = function(grid) {
    let m = grid.length; // 行
    let n = grid[0].length; // 列
    for(let i = 1; i < m; i++){
        grid[i][0] += grid[i-1][0];
    }
    for(let j = 1; j < n; j++){
        grid[0][j] += grid[0][j-1];
    }
    for(let i=1; i < m; i++ ) {
        for(let j=1; j < n; j++) {
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
        }
    }
    return grid[m-1][n-1];
};