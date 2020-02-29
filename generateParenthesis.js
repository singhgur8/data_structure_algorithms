// built using a tree approach
var generateParenthesis = function(n) {
    let result = [];
    let buildStr = (str, leftCount, rightCount) => {
        if (leftCount === n && rightCount === n) return result.push(str);
        if (leftCount+1 <= n) buildStr(str+'(', leftCount+1, rightCount)
        if (rightCount+1 <= leftCount) buildStr(str+')', leftCount, rightCount+1)
    }
    buildStr("", 0, 0)
    return result;
};