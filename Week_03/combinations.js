/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */



//  方法1， 递归


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

    //drill down    对当前数字选， 或者不选
    helper(n-1, k, [...arr], res); 
    arr.push(n);
    helper(n-1, k, [...arr], res);
    //revesee
}


//  方法2  回溯


var combine = function(n, k) {
    const res = [];
    if(n<=0 || k <= 0) return false;
    backTrack(n, k, [], res);
    return res;
};

var backTrack = function(n, k, arr, res){
    if(arr.length === k){
        res.push([...arr]);
    }

    while(n){
        arr.push(n);
        backTrack(n-1, k, arr, res);
        arr.pop();
        n--;
    }

}


