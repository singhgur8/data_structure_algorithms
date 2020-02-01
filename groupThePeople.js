/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let result = [];
    let groupsObj = {};

    for (let j = 0; j < groupSizes.length; j++) {
        if (groupsObj[groupSizes[j]]) {
            groupsObj[groupSizes[j]].push(j)
        } else {
            groupsObj[groupSizes[j]] = [j]
         }
    }

    // now iterate through the obj and create new arrays inside
    for (let key in groupsObj) {
        // iterate through the arrays of each
        while (groupsObj[key].length > 0) {
            var arr = groupsObj[key].splice(0,Number(key))
            result.push(arr)
        }
    }
    return result;
};

// examples: 
// Input: groupSizes = [3,3,3,3,3,1,3]
// Output: [[5],[0,1,2],[3,4,6]]
// Explanation: 
// Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].

// Input: groupSizes = [2,1,3,3,3,2]
// Output: [[1],[0,5],[2,3,4]]

// how would i write test cases for this, would I think of every possible combination?
// no i think there is a way to be smarter about it