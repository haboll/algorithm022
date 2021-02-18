/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let ans = 0;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1) {
                ans++;
                dfs(i, j, m, n, grid);
            }
        }
    }
    return ans;
};

var dfs = function(i, j, m, n, grid) {
    if(i < 0 || j < 0 || i>= m || j >= n || grid[i][j] == 0){
        return
    }
    grid[i][j] = 0;
    dfs(i-1, j, m , n, grid);
    dfs(i, j+1, m , n, grid);
    dfs(i+1, j, m , n, grid);
    dfs(i, j-1, m , n, grid);
}
// @lc code=end

