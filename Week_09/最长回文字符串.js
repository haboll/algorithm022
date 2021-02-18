


var longestPalindrome = function (s) {
    const len = s.length;
    if (len == 1) return s;
    const dp = new Array(len).fill(0).map(() => new Array(len).fill(false));
    let start = 0;
    let maxLen = 0;
    for (let i = len-1; i >= 0; i--) {
        for (let j = i; j < len; j++) {
            dp[i][j] = s.charAt(i) === s.charAt(j) && (j - i < 2 || dp[i+1][j-1]);
            if(dp[i][j]) {
                let currenLen = j - i + 1;
                if (currenLen > maxLen) {
                    maxLen = currenLen;
                    start = i;
                }
            }
        }
    }
    return s.slice(start, start + maxLen);
};

