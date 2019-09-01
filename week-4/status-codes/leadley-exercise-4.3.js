/***********************************
; Title:  leadley-assignment-4.3.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:   31 August 2019
; Description: HTTP Codes
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-4.3.js");
console.log(outputHeader);
console.log('');
// call in our required libraries
var express = require("express");
var http = require("http");
var app = express();

// when going to localhost:3000/not-found, show this 404 error message
app.get("/not-found", function(request, response) {
    response.status(404);
    response.json({
        error: "404, this thing does not exist."
    })
});
// when going to localhost:3000/not-found, show this 200 error message
app.get("/ok", function(request, response) {
    response.status(200);
    response.json({
        message: "Status Code 200: OKAY DOKEY."
    })
});
// when going to localhost:3000/not-found, show this 501 error message
app.get("/not-implemented", function(request, response) {
    response.status(501);
    response.json({
        error: "501 and I should research what this means."
    })
});
// create a server on localhost:3000
http.createServer(app).listen(3000, function() {
   console.log("Application started on port 3000");
});