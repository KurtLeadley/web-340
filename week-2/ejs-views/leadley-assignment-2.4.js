/***********************************
; Title:  leadley-assignment-2.4.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:   17 August 2019
; Description: Routing example with express and node
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-2.3.js");
console.log(outputHeader);
console.log('');

// let's get express and also the built in node modules http and path
var express = require("express");
var http = require("http");
var path = require("path");
// time to save our express library object to something better named
var app = express();

//use the path module from node to point to our views folder and set that path
// name the path to views "views" (first argument)
//.set() explained here:
//https://stackoverflow.com/questions/25229129/what-app-set-function-does-express-js/25229147
app.set("views", path.resolve(__dirname,"views"));
// use this directory root for calling css. __dirname references whatever directory the file it is being called in resides.
app.use(express.static(__dirname ));
console.log(__dirname);
// set our view engine to ejs (Embedded JS)
app.set("view engine", "ejs");

// todo: find out what exactly is going on here
// getting a root directory ?
app.get("/", function(req,res) {
  // render a view and send the rendered HTML string to the client
  // https://stackoverflow.com/questions/21843840/what-does-res-render-do-and-what-does-the-html-file-look-like
  res.render("index", {
    firstName : "Kurt",
    lastName : "Leadley",
    address : "America"
  });
});

// create a server and getting fancy with an extra argument added to listen
http.createServer(app).listen(8080,function() {
  console.log("EJS-Views app started on port 8080");
})


