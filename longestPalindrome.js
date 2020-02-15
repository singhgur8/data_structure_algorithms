// given a string find te biggest palindrome, which is a word spelled as the same thing forwards and backwards
var longestPalindrome = function(s) {
    let verifiedPals= {};
    let resultPal = "";

    let checkPalindrome = (str, front, back) => {
        // i am not mutating the string, so i am i checking for this. it might be better is i just keep slicing the string
        // else if i have to make a substring from the main string each time, it will be n*n/2 n^2 operations just here
        let substr = str.slice(front,back+1)
        if (verifiedPals[substr] !== undefined) return true;

        // base case, if front is equal to back or front is bigger than back (indexes)
        if (front === back ){
            return true; // becasue it will be the same char. odd chars
        } else if ( front > back ) {
            return true // means we have checked everything and did not return a false. even chars
        } else {
            if (str[front] !== str[back]) return false;
            else {
                let check = checkPalindrome(str, front+1, back-1);
                if (check) verifiedPals[str] = true; // flaw with this design is if it find a big palidrome first, it will store it
                // but subset palidromes will be unaccounted for and they will require full work when work is done.
                return check;
            }
        }
    }

    for (let i = 0; i < s.length; i++) {
        for(let j = 0; j < s.length; j++){
            let subString = s.slice(i,j+1);
            let isPal = checkPalindrome(subString, 0, subString.length-1);
            if (isPal && subString.length > resultPal.length) resultPal = subString;
        }
    }

    return resultPal;
};

// failing the time complexity.
