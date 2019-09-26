/***********************************
; Title:  leadley-assignment-ems
; Author: Professor Krasso, Kurt Leadley
; Date:   15 September 2019
; Description: ems employee data model
***************************************************************/
// require and display my header
const header = require('../../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","employees.js");
console.log(outputHeader);
console.log('');
// require mongoose db
var mongoose = require("mongoose");
// use the mongo Schema method to create a Schema
var Schema = mongoose.Schema;
// define the structure of our schema
var employeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});
// define the employee model
var Employee = mongoose.model("Employee",employeeSchema);
// export the employee model to any file that calls it
module.exports = Employee;
