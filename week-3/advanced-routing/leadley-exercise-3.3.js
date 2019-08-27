/***********************************
; Title:  leadley-assignment-3.3.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:   26 August 2019
; Description: Advanced routing
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-3.3.js");
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

// the product id parameter is passed through the url like so: localhost:8080/1234
app.get("/:productId",function(request,response){
  var productId = parseInt(request.params.productId,10);
  // use our index.ejs view file and pass in productId
  response.render("index",{
    productId:productId
  })
});
http.createServer(app).listen(8080, function(){
  console.log("application started on port 8080");
});
