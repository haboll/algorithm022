/**
 * @param {number} n
 * @return {string[]}
 */


// 切题；还是属于递归 
// 解法1： 先要学会如何用递归生成各种结果
// 然后，再筛选合适的结果

// 审题可知， 生成的括号可以分成左括号，右括号， 所有合法结果中， 左括号的数量一定会大于右括号。
// 所以添加括号过程可以进行剪支
// 用2个参数来代表 左右括号的个数


// var generateParenthesis = function(n) {
//     const result = [];
//     helper("", n, n, result);
//     return result;
// };

// function helper(str, left, right, res){ 
//     // terminator
//     if(left == 0 && right == 0) {
//         res.push(str);
//         return;
//     }
//     //process
//     // 左括号没填完， 就随时可以填左括号
//     if(left > 0){
//         helper(str + "(", left - 1, right,   res);
//     }
//     // 只有左括号数大于右括号时， 才能填右括号
//     if(right > left) {
//         helper(str + ")", left, right - 1, res);
//     }
// }


//解法2： 能用递归，肯定就能用遍历来写

var generateParenthesis = function(n) {
    const res = [];
    const stack = [[0, 0, ""]];
    while(stack.length){
        const [left, right, str] = stack.pop();
        if(left == n && right == n ) {
            res.push(str);
        }
        if(right<left) {
            stack.push([left, right+1, str+")"]);
        }
        if(left < n){
            stack.push([left+1, right, str+"("]);
        }
    }
    return res;
}



