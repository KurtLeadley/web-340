/***********************************
; Title:  leadley-assignment-ems
; Author: Professor Krasso, Kurt Leadley
; Date:   25 September 2019
; Description: ems application node.js, routes, libraries
; use, set, db handler
***************************************************************/
// require and display my header
const header = require('../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","app.js");
console.log(outputHeader);
console.log('');
/////////////////////////////////////////////////////////////
////////////// External Dependencies ////////////////////////
/////////////////////////////////////////////////////////////
// require external libraries
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var csrf = require("csurf");
var mongoose = require("mongoose");
var Employee = require("./models/employees");
//////////////////////////////////////////////////////
/////////////// Initialize Express ///////////////////
//////////////////////////////////////////////////////
var app = express();
///////////////////////////////////////////////////////////
/////////////////// Use and Set (settings) ////////////////
///////////////////////////////////////////////////////////
// set our views path using the path library
app.set("views", path.resolve(__dirname, "views"));
// set our view engine to ejs
app.set("view engine", "ejs");
// user the short logger from the morgan library
app.use(logger("short"));
// protect against xss using helmet
app.use(helmet.xssFilter());
// protect against CSRF with CSURF
var csrfProtection = csrf({cookie: true});
// parse the body
app.use(bodyParser.urlencoded({
  extended: true
}));
// use the cookieParser
app.use(cookieParser());
// use the CSurf protection
app.use(csrfProtection);
// request a token
app.use(function(request, response, next) {
  // create a cookie token
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
});
// use this directory for css
app.use(express.static(__dirname ));
//////////////////////////////////////////////////////////
///////////// Mongoose db setup //////////////////////////
//////////////////////////////////////////////////////////
// this is our connection string from compass, replaced test with ems to connect to the ems db
var mongoDB = "mongodb+srv://kurt:ANYR8katgBlcqDLd@buwebdev-cluster-1-klsvt.mongodb.net/ems";
// actually connect to mongoose with the mongoDB string
mongoose.connect(mongoDB, {
    useMongoClient: true
});
// promise the world to mongoose
mongoose.Promise = global.Promise;
// save the connection to db
var db = mongoose.connection;
// now we can use connection methods with less chaining here
db.on('error',console.error.bind(console, "Mongoose Connection Error:"));
db.once('open', function() {
    console.log('Connected to db');
});
/////////////////////////////////////////////////
/////////////// routing /////////////////////////
/////////////////////////////////////////////////
// root of site
app.get("/", function (request, response) {
    response.render("index", {
        title: "EMS | Home",
        message: "XSS Prevention enabled"
    });
});
// load the list.ejs file when navigating to it
app.get("/list.ejs", function(request, response) {
  // make sure whatever in whatever.find is the name of the model
  Employee.find({}, function(error, employees) {
    if (error) throw error;
    // after you find the Employee model in your mongoose db, send it over
    // to list.ejs as employee.
    response.render("list.ejs", {
        title: "Employee List",
        employees: employees
    });
  });
});
// load the list.ejs file when navigating to it, but add the query argument from the selected name in list.ejs
app.get("/view.ejs/:queryName", function(request, response) {
  const queryName = request.params['queryName'];
  // look for the lastName of the name you clicked on in our mongo db
  Employee.find({'lastName': queryName}, function(error, employees) {
    if (error) throw error;
    // after you find the Employee in your mongoose db, send it over
    // to view.ejs
    response.render("view.ejs", {
        title: "Employee View",
        employees: employees
    });
  });
});
// load the new.ejs file when navigating to it
app.get("/new.ejs", function (request, response) {
  response.render("new", {
      title: "EMS | Entry",
      message: "New Employee Entry Page"
  });
});
//////////////////////////////////////////////////////////////////
// this if the form posting code for our employee entry //////////
//////////////////////////////////////////////////////////////////
// right after you hit submit for the action called "/process"
app.post("/process", function(request, response) {
  if ((!request.body.txtFirstName) || (!request.body.txtLastName)) {
    response.status(400).send("Entries must have a full name");
    return;
  }
  // get the request's form data
  var employeeFirstName = request.body.txtFirstName;
  var employeeLastName = request.body.txtLastName;
  console.log(employeeFirstName +' '+ employeeLastName);
  // make an employee model
  var employee = new Employee({
    firstName : employeeFirstName,
    lastName : employeeLastName
  });
  // save it. todo: learn what save comes from
  employee.save(function(error){
    if(error) throw error;
    console.log(employee + " saved successfully");
  });
  // if it all works, send the browser to our employee list
  response.redirect("/list.ejs");
});
/////////////////////////////////////////////////////////////////////
/////////////////// Create our Server  //////////////////////////////
/////////////////////////////////////////////////////////////////////
// create our server on port 8080
http.createServer(app).listen(8080, function() {
    console.log("Application started on port 8080!");
});
