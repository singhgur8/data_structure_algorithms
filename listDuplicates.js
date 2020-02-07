// list of numbers
// if any number appears twice then return true else false.

//  I: just the list of numbers
//  O: boolenan true or false;
//  C: 
//  E: empty arr means false

let appearsMoreThanOnce = (arr) => {
    let cache = {}
    for ( let i = 0; i < arr.length; i++) {
        if (cache[arr[i]] !== undefined) return true
        else {
            cache[arr[i]] = null;
        }
    }
    return false;
}

//duplicates within k space, input arr of numbers and second arg k
// if any number appears twice within k index differences then return true else false

let hasDuplicateWithinK = (arr, k) => {
    // create a cache
    let cache = {};
    // create queue assume it exists
    let queue = [];

    // iterate through the arr,
    for ( let i = 0; i < arr.length; i++) {
        if (cache[arr[i]] !== undefined) return true

        cache[arr[i]] = null;
        queue.push(arr[i]);
        if (queue.length > k) {
            let deletedEl = queue.shift();
            delete cache[deletedEl]
        }
    }
    return false;
}

// space O(k)
// time O(N)

// This is called sliding window!