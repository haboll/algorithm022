/*
 * @lc app=leetcode.cn id=980 lang=javascript
 *
 * [980] 不同路径 III
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

 // 回溯， dfs
var uniquePathsIII = function(grid) {
    const m = grid.length;
    const n = grid[0].length;
    let num = 0;
    let startI = 0;
    let startJ = 0;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            const val = grid[i][j];
            if(val === 0){
                num++;
            } else if(val === 1){
                startI = i;
                startJ = j;
            }
        }
    }
    const res = {
        val: 0
    };
    dfs(grid, m, n, startI, startJ, num+1, res);
    return res.val;
};

var dfs = function(grid, m, n, si, sj, num, res){
    if(si < 0 || si > m-1 || sj < 0 || sj > n-1) return;
    const val =  grid[si][sj];
    if(val == -1) return;
    // teminator
    if( val == 2) {
        if(num == 0){
            res.val++;
        }
        return;
    }
    //process
    // drill down
    grid[si][sj] = -1;
    dfs(grid, m, n, si+1, sj, num-1, res);
    dfs(grid, m, n, si, sj+1, num-1, res);
    dfs(grid, m, n, si-1, sj, num-1, res);
    dfs(grid, m, n, si, sj-1, num-1, res);
    grid[si][sj] = 0;
    
    // reverse


}

// const grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]];
// uniquePathsIII(grid);
// @lc code=end

