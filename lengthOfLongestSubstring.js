var lengthOfLongestSubstring = function(s) {
    let longestCount = 0;
    let dict = {};

    let count = 0;
    for (let i = 0; i < s.length; i++) { // use index, store it as vlaue, once i find a duplicate, everything before that is gone,
        // so count shouldn't reset to 0, it should reset to the difference between the two indexes. 
        // however now, how do i know what to delete from my dictionary? 
        // i will know how many spaces to go back and delete from dictionary

        let char = s[i];
        //edge case for spaces - objects dont hold space as a key
        if (char === " ") char = 'space' 
        if (dict[char] !== undefined) { // if something exists
            // find where it did exist, and subtract the count so it only accounts for non dups
            let duplicateIndex = dict[char];
            let prevCount = count;
            count = i - duplicateIndex;

            // delete chars from dictionary that were from before the duplicat
            // prevCount - newCount is how many steps before the duplicate index we have to delete
            let charsToDel = Math.abs(prevCount-count)
            for (let j = duplicateIndex-charsToDel; j < duplicateIndex+1; j++) {
                let char = s[j];
                if (char === " ") char = 'space'
                delete dict[char];
            }

            // add current char in
            dict[char] = i;
            
        } else {
            dict[char] = i;
            count++
            longestCount = count > longestCount ? count : longestCount
        }  

    }

    return longestCount;
};

