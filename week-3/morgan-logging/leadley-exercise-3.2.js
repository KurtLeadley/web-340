/***********************************
; Title:  leadley-assignment-3.2.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:   25 August 2019
; Description: Logging with Dexter Morgan, oh...I get it now
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-3.2.js");
console.log(outputHeader);
console.log('');
// bring in external libraries
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();
// look at the views directory for the view file
app.set("views", path.resolve(__dirname,"views"));
// use the ejs view engine
app.set("view engine","ejs");
app.use(logger("short"));
// use this directory for css
app.use(express.static(__dirname ));
// listen to anything with a slash
app.get("/",function(request,response) {
  response.render("index", {
    message:"Dexter Morgan became a lumberjack and is good at logging"
  });
});
// create a server and listen to port 4040
http.createServer(app).listen(4040,function(){
  console.log("Application started on port 4040");
});
