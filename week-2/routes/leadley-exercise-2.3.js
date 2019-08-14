/***********************************
; Title:  leadley-exercise-2.3.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:   14 August 2019
; Description: Routing example with express and node
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-2.3.js");
console.log(outputHeader);
console.log('');

// call the express module
var express = require("express");
// call the http node module
var http = require("http");
// save the express request handler function into a variable
var app = express();
// instead of use from the last assignment, we are using get now
// I think this is creating some sort of directory pointing
app.get("/",function(req,res){
  res.end("Welcome to the Home page");
});
// let's make some other directories
app.get("/about",function(req,res){
  res.end("Welcome to the About page");
});
app.get("/contact",function(req,res){
  res.end("Welcome to the Contact page");
});
app.get("/",function(req,res){
  res.end("Welcome Home");
});
// 404 error message when you get the 404 status code in the response (res) variable
// note that it is use, not get and it is only taking one function argument. Even though the function takes two arguments
app.use(function(req,res){
  res.statusCode=404;
  res.end("404! OH NO!!!!! Learn how to type");
});
// create a server, I chose 4040 instead of 8080, because I wanted to see if it would work. Spoiler: It worked
http.createServer(app).listen(4040);
