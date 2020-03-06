var searchRange = function(nums, target) {
    let range = [-1,-1]
    
    let binarySearch = (left,right,goal, arr) => {
        if (left > right) return -1
        let middle = Math.floor((right + left)/2);
        if (arr[middle] === goal) return middle;
        else if (goal > arr[middle]) return binarySearch(middle+1,right,goal,arr);
        else return binarySearch(left,middle-1,goal,arr)
    }
    
   let findRightBoundary = (pos, arr, goal) => {
       if (arr[pos+1] === goal) {
           range[1] = pos + 1;
           findRightBoundary(pos+1, arr, goal)
       }
   }
   
   let findLeftBoundary = (pos, arr, goal) => {
       if (arr[pos-1] === goal) {
           range[0] = pos - 1;
           findLeftBoundary(pos-1, arr, goal)
       }
   }
    
    let targLoc = binarySearch(0,nums.length-1, target, nums);
    if (targLoc === -1) return range;
    else {
        range = [targLoc, targLoc];
        findRightBoundary(targLoc, nums,target);
        findLeftBoundary(targLoc, nums, target);
    }
    
    return range;
};