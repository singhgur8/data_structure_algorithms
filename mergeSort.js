// create a mergeSort function here
function mergeSort(arr) {
    if (arr.length === 0) return [];
    let merge = (arr1, arr2) => {
        let mergedArr = [];

        let sort = (index1, index2)=>{
            if (index1 > arr1.length-1 && index2 > arr2.length-1) return;
            else {
                let left = arr1[index1] || Infinity;
                let right = arr2[index2] || Infinity;
                
                if (left > right) {
                    mergedArr.push(right);
                    sort(index1, index2+1)
                } else {
                    mergedArr.push(left)
                    sort(index1 + 1, index2);
                }
            }
        }
        sort(0,0);

        return mergedArr
    }

    let splitMerge = (arr) => {
        if (arr.length === 1) return arr;
        let middle = Math.ceil(arr.length/2);
        let left = splitMerge(arr.slice(0,middle));
        let right = splitMerge(arr.slice(middle));
        return merge(left,right);
    }



    let result = splitMerge(arr);
    return result
}
