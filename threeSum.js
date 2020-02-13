var threeSum = function(nums) {
    let result = [];
    nums = nums.sort((a,b) => {
        return a-b
    })
    
    let dict = {};
    let solutionsDict = {}
    
    for (number of nums) {
        if (dict[number]) dict[number]++
        else dict[number] = 1;
    }

    
    for (let i = 0; i < nums.length; i++){
        // only test from negative to 0. because testing positive numbers will be redudant at this point
        if (nums[i] > 0) break;
        // skip duplicates, since we checked them already. 
        if (nums[i] === nums[i-1]) {
            dict[nums[i]]--;
            continue
        }

        dict[nums[i]]--;
        for (let j = i+1; j < nums.length; j++) {
            dict[nums[j]]--;
            let thirdNum = 0-nums[i]-nums[j];
            if (dict[thirdNum] >= 1) {
                let soln = [nums[i], nums[j], thirdNum];
             
                let stringSoln = JSON.stringify(soln);
                if (!solutionsDict[stringSoln]) {
                    result.push(soln);
                    solutionsDict[stringSoln] = true;
                }
               
            }
        }
        // add back the numbers we removed
        for (let k = i+1; k < nums.length; k++) {
            dict[nums[k]]++
        }
    
    }

    
    return result;   
};

// This code is still too slow!
// time complexity is O(n^2) for this code
// https://leetcode.com/submissions/detail/302874951/testcase/
// 3000 elements in the arr
// it needs to be able to handle this many cases