var subsets = function(nums) {
    let result = [[]];
    
    let treeDS = {};
    
    for (let i = 0; i < nums.length; i++) treeDS[nums[i]] = nums.slice(i+1)
    
    let recurse = (num, subSet) => {
        result.push(subSet)
        if (treeDS[num].length === 0 ) return;
        let arr = treeDS[num];
        for (let i = 0; i < arr.length; i++) {
            let subSetNew = subSet.concat([arr[i]])
            recurse(arr[i], subSetNew)
        }
        
    }
    
    for (let i = 0; i < nums.length; i++) {
        recurse(nums[i], [nums[i]])
    }
    
    return result;
};