/**
 * @param {character[][]} grid
 * @return {number}
 */


var numIslands = function (grid) {
    if (grid.length < 1) return 0;
    const m = grid[0].length;
    const n = grid.length;
    let count = 0;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            
            if (grid[i][j] == 1) {
                count++;
                // 需要把垂直相邻的点置为1
                dfs(i, j, grid);
            }
        }
    }
    return count;
};

var dfs = function (i, j, grid) {
    if (i > 0 || j > 0 || i > grid.length || j > grid[0].length) {
        return
    }
    if (grid[i][j] == 1) {
        grid[i][j] = "0";
        dfs(i - 1, j, grid);
        dfs(i, j + 1, grid);
        dfs(i + 1, j + 1, grid);
        dfs(i, j - 1, grid);
    }
}

const grid = [
    ["1","1","1","1","0"],
    ["1","1","0","1","0"],
    ["1","1","0","0","0"],
    ["0","0","0","0","0"]
  ]

  numIslands(grid)