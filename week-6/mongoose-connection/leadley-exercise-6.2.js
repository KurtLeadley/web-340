/***********************************
; Title:  leadley-assignment-6.2.js
; Author: Professor Krasso
; Modified by: Kurt Leadley
; Date:    September 14 2019
; Description: Mongoose , mongo db connection
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-6.2.js");
console.log(outputHeader);
console.log('');
// load in our libraries, including mongoose
var express = require('express');
var logger = require('morgan');
var mongoose = require('mongoose');
var http = require('http');

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

// start express
var app = express();
// have morgan look at the dev error logs
app.use(logger('dev'));

// create a server
http.createServer(app).listen(3000, function() {
    console.log("Application started and listening on port 3000");
})