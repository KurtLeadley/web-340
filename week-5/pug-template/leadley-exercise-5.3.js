/***********************************
; Title:  leadley-assignment-5.3.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:   09 September 2019
; Description: if ejs example
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-5.3.js");
console.log(outputHeader);
console.log('');
// require our libraries, including pug this time.
var express = require("express");
var http = require("http");
var pug = require("pug");
var path = require("path");
// initialize express
var app = express();
// set our directory to look to
app.set("views", path.resolve(__dirname, "views"));
// use this directory for css
app.use(express.static(__dirname ));
// set our view engine to pug
app.set("view engine", "pug");
// when going to our localhost, render the index file
app.get("/", function(request, response) {
    response.render("index", {
        message: "Kurt's Pug Page!"
    });
});
// create a server on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
