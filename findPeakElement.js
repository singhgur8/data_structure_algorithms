var findPeakElement = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i-1] === undefined) nums[i-1] = -Infinity
        if (nums[i+1] === undefined) nums[i+1] = -Infinity
        if (nums[i] > nums[i-1] && nums[i] > nums[i+1]) return i
    }   
};