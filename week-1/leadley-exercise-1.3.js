/***********************************
; Title:  leadley-exercise-1.3.js
; Author: Kurt Leadley, Richard Krasso
; Date:   11 August 2019
; Description: Node Js introduction using the url library
***************************************************************/
// require and display my header
const header = require('../leadley-header.js');
var outputHeader = header.display("Kurt","Leadley","leadley-exercise-1.3.js");
console.log(outputHeader);
console.log('');
// import the url library
var url = require("url");

// use the parse function from the url library
var parsedURL = url.parse("https://www.espn.com//profile?name=leadley");

// log the protocol, host and query values from the parsed url
console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);