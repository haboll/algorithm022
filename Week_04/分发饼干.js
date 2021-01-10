/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

// 贪心， 只要从小到大一一匹配， 就能满足最多
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */

// 贪心， 只要从小到大一一匹配， 就能满足最多

var findContentChildren = function(g, s) {
    g = g.sort(function(a, b){
        return a - b;
    });
    s = s.sort(function(a, b){
        return a - b;
    });
    let count = 0;
    for(let i = 0;i < s.length && count < g.length; i++){
        if(g[count] <= s[i]) {
            count++;
        }
    }
    return count;
};

const g = [1,2,5,4,3];
const s = [5,1,3,2,4];

const res = findContentChildren(g, s);

console.log(res)
