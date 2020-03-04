var permute = function(nums) {
    let result = [];
    
    let traverse = (options, perm) => {
        if (options.length === 0) {
            result.push(perm)
            return 
        }
        
        for (let i = 0; i < options.length; i++) {
            let element = options[i];
            let permBuild = perm.concat([element])
            let optionsCopy = options.slice();
            optionsCopy.splice(i,1); // delete the one we use going into the next one
            traverse(optionsCopy, permBuild)
        }
    }
    
    traverse(nums, []);
    
    return result;
};

// created copies of the permutation and options so I did not have to rebuild them after using stuff