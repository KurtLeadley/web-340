/***********************************
; Title:  leadley-assignment-5.2.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:   09 September 2019
; Description: if ejs example
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-5.2.js");
console.log(outputHeader);
console.log('');

// require express, http and path libraries
var express = require("express");
var http = require("http");
var path = require("path");

// instantiate express object
app = express();
// set our directory to views
app.set("views", path.resolve(__dirname, "views"));
// use this directory for css
app.use(express.static(__dirname ));
// set our template language as ejs
app.set("view engine", "ejs");
// a basic name array
var n = [
  "Mark",
  "Jen",
  "Mike",
  "Sue"
];
// when going to this url, get the index.ejs in the views folder. Set n to names.
app.get("/", function(request, response) {
    response.render("index", {
        names: n
    })
});
// create our server on port 3000
http.createServer(app).listen(3000, function() {
    console.log("Application started on port 3000!");
});
