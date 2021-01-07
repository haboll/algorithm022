/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = [];
    helper(nums, [], res);
    return res;
};

var helper = function(nums, arr, res) {
    if(!nums.length){
        res.push(arr);
        return;
    }
    let len = nums.length;
    while(len){
        const num = nums.splice(len-1, 1);
        helper([...nums], arr.concat([num]), res);
        nums.splice(len-1, 0, num);
        len--;
    }
}

const arr = [1, 2, 3];

const res = permute(arr);

console.log(res);


// 方法2 回溯


// 回溯
var permute = function(nums) {
    const res = [];
    if(nums.length === 0){
        return res;
    }
    const used = new Array(nums.length).fill(false);
    dfs(nums, [], used, res);
    return res;
};

var dfs = function(nums, arr, used, res) {
    if(arr.length === nums.length ) {
        res.push([...arr]);
        return 
    }
    for(let i = 0; i < nums.length; i++) {
        if(used[i]) {
            continue;
        }
        arr.push(nums[i]);
        used[i] = true;
        dfs(nums, arr, used, res);
        arr.pop();
        used[i] = false;
    }
}