/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let left = 0;
    let right = nums.length-1;
    // 长度为1 || 数组没有旋转了
    if(nums.length <= 1 || nums[0] < nums[right]) return nums[0];
    while(left<=right){
        mid = left + Math.floor((right - left) / 2); 
        
        if(nums[mid+1] < nums[mid]) {
            return nums[mid+1];
        }
        if(nums[mid] > nums[mid+1]) {
            return nums[mid+1]
        }
        // 左侧最小值 小于 mid， 向后规约
        if(nums[left] < nums[mid]){
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return -1;
};