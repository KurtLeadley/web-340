/***********************************
; Title:  leadley-assignment-4.2.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:   31 August 2019
; Description: JSON API
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-4.2.js");
console.log(outputHeader);
console.log('');

// call in our required libraries
var express = require("express");
var http = require("http");
var logger = require("morgan");
var app = express();

// set a directory
app.use(express.static(__dirname + '/'));
// when going to this url, return this json 
app.get("/bands", function (request, response) {
    response.json(
        {
            "band-one" : {
                name: "Devin Townsend Project",
                location: "Canada",
                style: "Anything"
            },
            "band-two" : {
                name: "Tool",
                location: "Somewhere",
                style: "Prog"
            }
        }
    );
});
// make a server on port 3000
http.createServer(app).listen(3000, function() {
console.log("Application started on port 3000");

});