function solution(A) {
// give array A, find the first posistive integar greater than zero that is not in A.
    let dict = {};
    for (let i = 0; i < A.length; i++) {
        dict[A[i]] = true;
    }
    
    for (let i =1; i < A.length+2; i++) {
        if(dict[i]=== undefined) return i
    }
    
    
}