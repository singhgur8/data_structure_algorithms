/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = [];
    let dict = {};

    for (let str of strs) {
        let sortedStr = str.split("").sort().join("")
        if (!dict[sortedStr]) {
            dict[sortedStr] = [str]
        } else dict[sortedStr].push(str)
    }

    for (let key in dict) {
        result.push(dict[key])
    }
    return result;
};
