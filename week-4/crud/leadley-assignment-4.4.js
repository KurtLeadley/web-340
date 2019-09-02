/***********************************
; Title:  leadley-assignment-4.4.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:   02 September 2019
; Description: cURL
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-4.4.js");
console.log(outputHeader);
console.log('');

// require express and http libraries
var express = require('express');
var http = require('http');
// initialize express
var app = express();

// CRUD stands for Create Read Update Delete
// each HTTP method is one of these CRUD acronyms. They are:
//---------------
// CRUD  -  HTTP
//---------------
// Create - POST
// Read - GET
// Update - PUt
// Delete - Delete
//----------------
// the http methods through the express library are underline   express().get, express().put etc
// respond with a get message for the get http method
app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request.");
});
// respond with a put message for the put http method
app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request.");
});
// respond with a post message for the post http method
app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request");
});
// respond with a delete message for the delete http method
app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request");
});
// create our server on port 8080 and in a Windows command prompt use cURL to request these methods (page 95 has an example)
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
