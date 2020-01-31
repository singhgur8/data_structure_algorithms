const {binaryTreeUnordered}  = require('../treeGenerator')
const sumOfNodeWithEvenValuedGrandParent = require('../sumOfNodeWithEvenValuedGrandParent')
const util = require('util')
const { assert, expect, should } = require('chai'); 

// create a tree root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]  I could make a function that lets me turn arrays into trees
// Output: 18

describe("Sum of nodes with even valued grand parents", ()=>{
    it("this is just a sampleeee", () => {
        expect(1+1).to.equal(2)
    })
    
    it("Input from LeetCode, [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]", ()=>{
        const treeObj = binaryTreeUnordered([6,7,8,2,7,1,3,9,null,1,4,null,null,null,5])
        // console.log(util.inspect(treeObj, false, null, true)) // Allows me to verify the whole object in node.
        expect(sumOfNodeWithEvenValuedGrandParent(treeObj)).to.equal(18)
    })
})