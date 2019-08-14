/***********************************
; Title:  leadley-exercise-2.2.js
; Author: Evan M Hahn  (page 33,34)
; Modified by: Kurt Leadley
; Date:   13 August 2019
; Description: Setting up Express and npm introduction
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-2.2.js");
console.log(outputHeader);
console.log('');

// steps to set up express
// 1. Create a barebones package.json file (pg.33 Express book)
// 2. place the package.json in a directory where you you want to work
// 3. Open up a terminal and navigate to that folder. Make sure that node is installed.
// 4. In this case, node is installed in a parent directory called bu-webdev
// 5. npm should come with node
// 6. type  npm install express --save (--save is what saves it to your json.package file pg.33)
// 7. If express installs correctly, you should get some nice messages in the terminal and your package.json
//    file should add express to the dependencies property
// 8. Congrats, you installed Express using npm. Let's try it out now.

// require express and save to a variable named as itself. This is common practice in node and was mentioned in an earlier chapter. Where, I don't know
var express = require("express");
// require http, this is a built in node module (not from express)
var http = require("http");
// make an express callback function request handler thingy called app
// app returns as function(req, res, next) { … } at this point.. This will serve as your request handler
var app = express();
console.log(app);
// this next part is like some voodoo magic I don't yet get.
app.use(function(request,response) {
  console.log("In comes a request to: "+ request.url);
  response.end("Hello World");
});
// make a nice little server for your highly sophisticated node app, using the built in http node module
// pass in your app request handler function to createServer if you want to see things.
http.createServer(app).listen(8080);
// click Allow access when your OS freak outs
// everyime you refresh the browser, request.url sees a request
