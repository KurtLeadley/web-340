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

// require the node.js http library
var http = require("http");

// callback function...res is the result
function processRequest(req, res) {

var body = "Hello darkness my old friend";
    // get length of body
    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}
// create a server using the http node library
var s = http.createServer(processRequest);
// find it on localhost8080
s.listen(8080);