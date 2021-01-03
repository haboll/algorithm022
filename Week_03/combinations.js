/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    helper(n, k, [], result);
    return result;
};

var helper = function(n, k, arr, res){
    if(n<0){
        return ;
    }
    // terminator
    if(k == arr.length){
        res.push(arr);
        return;
    }
    // process

    //drill down 
    helper(n-1, k, [...arr], res);
    arr.push(n);
    helper(n-1, k, [...arr], res);
    //revesee
}