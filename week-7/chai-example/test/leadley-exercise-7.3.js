/***********************************
; Title:  leadley-assignment-7.3.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:    September 23 2019
; Description: TDD in Action with Chai
***************************************************************/
// require and display my header
const header = require('../../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-7.3.js");
console.log(outputHeader);
console.log('');
// find our leadley-fruits.js file and require it
var fruits = require("../leadley-fruits");
// using chai for testing
var chai = require("chai");
//define our chai assert
var assert = chai.assert;
describe("fruits", function() {
    it("should return an array of fruits", function() {
        var f = fruits('Apple,Orange,Mango');
        // use assert and isArray on our fruits function
        assert(Array.isArray(f));
    });
});
