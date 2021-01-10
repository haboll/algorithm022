/**
 * @param {number} n
 * @return {number}
 */

// 切题， 
// 1. 0-9最多10个数， n > 10 肯定有一个重复， 无意义。 
// n = 0; 10^n = 1; 只有0一个数。 

//  转换问题， 0-9 共10个数， 放在n个格子， 不能重复放， 可以不用放满， 有多少种放法

// 解法： 暴力, 回溯, 动态规划

// 暴力解法

// var countNumbersWithUniqueDigits = function(n) {
//     if(n===0)return 1;
//     n = n > 10 ? 10 : n;
//     const m = Math.pow(10, n);
//     let res = 0;
//     for(let i = 0; i < m; i++) {
//         let str = i.toString();
//         console.log(str, )
//         if([...new Set([...str])].length === str.length) {
//             res++;
//         }
//     }
//     return res;
// };

// 回溯

var countNumbersWithUniqueDigits = function(n) {
    if(n===0)return 1;
    n = n > 10 ? 10 : n;
    let res = 0;
    const m = 10;
    let used = new Array(m).fill(false);
    while(n){
        helper(0, n, m, used);
        n--;
    }
    function helper(len, n, m, used) {
        if(m<0)return
        if(len == n) {
            res++;
            return
        }
        for(let i = 0; i< m; i++){
            if(used[i]){
                continue;
            }
            used[i] = true;
            helper(len+1, n , m-1, used);
            used[i] = false;
        }
    }
    return res;
};