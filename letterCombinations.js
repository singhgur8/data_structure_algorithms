var letterCombinations = function(digits) {
    if (digits === "") return [];
    let result = [];
    // create a dictionary
    let dict = {};
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
    
    for (let i = 2; i < 10; i++) {
        let numberOfChars = (i === 7 || i === 9) ? 4: 3;
        dict[i] = [];
        while( numberOfChars > 0) {
            let char = alphabet.shift();
            dict[i].push(char)
            numberOfChars--
        }
    }
    
    // create the DFS as i go
    let DFS = (str, depth) => {
        depth++
        
        // base case
        if (str.length === digits.length){
            return result.push(str)
        }
        
        let number = digits[depth-1];
        let chars = dict[number];
        
        for (let i = 0; i < chars.length; i++) {
            strCopy = str.slice();
            strCopy += chars[i]
            DFS(strCopy, depth)
        }
        
        
        depth--
    }
    
    DFS("",0)
    
    return result; 
};