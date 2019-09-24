/***********************************
; Title:  leadley-assignment-7.2.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:    September 23 2019
; Description: TDD in Action
***************************************************************/
// require and display my header
const header = require('../../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-7.2.js");
console.log(outputHeader);
console.log('');
// define a fruits string, pass it into getFruits array builder
var fruits = getFruits("apple,orange,kiwi");
// define and require assert
var assert = require("assert");
describe("String#split", function() {
    it("should return an array of fruits", function() {
        // use assert and isArray and split to test
        assert(Array.isArray(fruits));
    });
});
console.log(typeof fruits);
// the actual function to test
function getFruits(str) {
    return str.split(',');
}

