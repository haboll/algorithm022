var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    if(obstacleGrid[m-1][n-1] == 1 || obstacleGrid[0][0] == 1)return 0;
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for(let i = 0; i < n; i++){
        if(obstacleGrid[0][i] == 1) break;
        dp[0][i] = 1;
    }
    for(let j = 0; j < m; j++){
        if(obstacleGrid[j][0] == 1) break;
        dp[j][0] = 1;
    }
    for(let i = 1; i < m; i++ ) {
        for(let j = 1; j < n; j++){
            if(obstacleGrid[i][j] == 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    return dp[m-1][n-1];
};