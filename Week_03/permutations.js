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