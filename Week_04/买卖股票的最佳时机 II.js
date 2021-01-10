/**
 * @param {number[]} prices
 * @return {number}
 */

// 贪心， 只要后一天的大于前一天， 就买卖则是
var maxProfit = function(prices) {
    let res = 0;
    prices.reduce(function(prev, next) {
        if(next > prev){
            res += next - prev;
        }
        return next;
    }, Infinity);
    return res;
};