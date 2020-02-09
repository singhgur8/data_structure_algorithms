/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    
    let resultWords = [];

    // create a helper function here, that is used to recusively find how many words we can use
    let findMaxWords = (currentLineInfo, index, maxChars, wordOptions) => {
        let {wordCount, charCount} = currentLineInfo

        let newCharCount = charCount + wordOptions[index].length
        let charCountWithSpaces = newCharCount + wordCount

        if (charCountWithSpaces < maxChars) {
            if (index+1 < wordOptions.length) {
                currentLineInfo.wordCount++ // wec can safely add the current word
                currentLineInfo.charCount += wordOptions[index].length
                return findMaxWords(currentLineInfo, index+1, maxChars, wordOptions) 
            } else return wordCount + 1 // this is if word count is less but theres no more word options
        } else if (charCountWithSpaces === maxChars) return wordCount + 1 // adding this word
        else return wordCount // can't add the current word
    }
    
    while (words.length>0) {
        let wordsOnThisLine = findMaxWords({wordCount: 0, charCount:0 }, 0, maxWidth, words)
        
        let lineArr = words.splice(0,wordsOnThisLine) // removes the words for current line from original arr

        // ADD SPACES
        if (words.length > 0) {
            // if its just one word, then below logic fails, so if one word, just buffer it with spaces
            if (lineArr.length === 1) {
                while (lineArr[0].length < maxWidth) {
                    lineArr[0] += " "
                }
                resultWords.push(lineArr[0])
            } else { // see how many spaces between each word, and how many on the left side have extra spaces
                // in the cases where it is not evenly dividable.
                let lineWordCount = lineArr.join("").length;
                let difference = maxWidth - lineWordCount;

                // now see remainder and how many times it divides evenly
                let numberOfSpaces = Math.floor(difference/(lineArr.length-1));
                let extraSpaces = difference%(lineArr.length-1);
    
                // add the extra spaces
                for (let j = 0; j < extraSpaces; j++) {
                    lineArr[j] = lineArr[j] + ' '
                }
    
                // Now join the rest using equal spaces
                let spaces = ""
                for (let k = 0; k < numberOfSpaces; k++) {
                    spaces += " "
                }
                let line = lineArr.join(spaces)
                resultWords.push(line)
            }
        } else {
            // edge case for Last line, that just needs to be left adjusted. and add one space between each of the words. 
            let lastLine = lineArr.join(" ")
            while (lastLine.length < maxWidth) {
                lastLine += " "
            }
            resultWords.push(lastLine)
        }
    }
    return resultWords;
};