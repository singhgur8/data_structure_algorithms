var sortColors = function(nums) {
    let frontIndex = 0;
    let endIndex = nums.length-1;
    
    for (let i = 0; i < nums.length; i++) {
        // this needs to stop if it has already swapped the ends, it shouldnt do it again
        // so if i is bigger than end index, then break out of this for loop
        if (i > endIndex) break; // can use return too
        
        if (nums[i] === 0) {
            if (i === frontIndex) {
                frontIndex++
                continue
            };
            let temp = nums[frontIndex];
            nums[frontIndex] = nums[i];
            nums[i] = temp;
            frontIndex++
        } else if (nums[i] === 2) {
            if (i === endIndex) {
                endIndex--
                continue;
            }
            let temp = nums[endIndex];
            nums[endIndex] = nums[i];
            nums[i] = temp;
            endIndex--
            if (temp === 0 || temp === 2) i--
        }
    }
    
};

// done in one pass and in place. 
// basic concept, send all the 2's to the end, and all the 0's to the front
// edge cases, stop forloop if my end's have already been setp and i am past the last swappable position for 2's
// edge case, if i swap and get a 2, or 0 in return, then i need to revisit this spot to send it to its right spt
// also don't swap if things are in the right spot already. ^ otherwise above line of logic trips