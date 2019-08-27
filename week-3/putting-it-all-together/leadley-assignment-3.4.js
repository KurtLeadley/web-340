/***********************************
; Title:  leadley-assignment-3.4.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:   26 August 2019
; Description: Putting it all together
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-assignment-3.4.js");
console.log(outputHeader);
console.log('');
// call in our required libraries
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();

// set the views folder to "views"
app.set("views",path.resolve(__dirname,"views"));
// set our view enging to ejs
app.set("view engine","ejs");
// set the morgan logger option to short
app.use(logger("short"));
// use this directory root for calling css. __dirname references whatever directory the file it is being called in resides.
app.use(express.static(__dirname ));

// get home page
app.get("/", function(request, response) {
  // render the index ejs view
  response.render("index", {
      message: "home page",
      messageTwo: "content goes here"
  });
});

// get about page
app.get("/about", function(request, response) {
  // render the about ejs view
  response.render("about", {
      message: "about page",
      messageTwo: "content goes here"
  });
});

//get contact page
app.get("/contact", function(request, response) {
  // render the contact ejs view
  response.render("contact", {
      message: "contact page",
      messageTwo: "content goes here"
  })
});

// get product page
app.get("/products", function(request, response) {
 // render the products ejs view
  response.render("products", {
     message: "products page",
     messageTwo: "content goes here"
 });
});

// create a server, listen on port 8080
http.createServer(app).listen(8080, function() {
 console.log("Application started on port 8080.");
});
