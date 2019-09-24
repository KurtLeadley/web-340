/***********************************
; Title:  leadley-assignment-ems
; Author: Professor Krasso, Kurt Leadley
; Date:   15 September 2019
; Description: ems application node.js handler
***************************************************************/
// require and display my header
const header = require('../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","app.js");
console.log(outputHeader);
console.log('');

////////////// Import /////////////////////////

// require external libraries
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var app = express();
var mongoose = require("mongoose");
var Employee = require("./models/employees");

/////////////////// Settings //////////////////////////

// set our views path using the path library
app.set("views", path.resolve(__dirname, "views"));
// set our view engine to ejs
app.set("view engine", "ejs");
// user the short logger from the morgan library
app.use(logger("short"));
// use this directory for css
app.use(express.static(__dirname ));
// when going to the root, load the index page with a title of home page


///////////// Mongoose db setup //////////////////////////

// this is our connection string from compass, replaced test with ems to connect to the ems db
var mongoDB = "mongodb+srv://kurt:ANYR8katgBlcqDLd@buwebdev-cluster-1-klsvt.mongodb.net/ems";
// actually connect to mongoose with the mongoDB string
mongoose.connect(mongoDB, {
    useMongoClient: true
});

mongoose.Promise = global.Promise;
// save the connection to db
var db = mongoose.connection;

// now we can use connection methods with less chaining here, like these error messages
db.on('error',console.error.bind(console, "Mongoose Connection Error:"));
db.once('open', function() {
    console.log('Connected to db');
});
///////////////// Create a employee ///////////////
var employee = new Employee({
  firstName:"Bob",
  lastName:"Stevens"
});
/////////////// routing /////////////////////////
app.get("/", function (request, response) {
    response.render("index", {
        title: "EMS | Home"
    });
});
// load the list.ejs file when navigating to
app.get("/list.ejs", function (request, response) {
  response.render("list", {
      title: "EMS | Listing",
      employee: employee
  });
});
// load the new.ejs file when navigating to
app.get("/new.ejs", function (request, response) {
  response.render("new", {
      title: "EMS | Entry"
  });
});
// load the view.ejs file when navigating to
app.get("/view.ejs", function (request, response) {
  response.render("view", {
      title: "EMS | View"
  });
});
// create our server on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
