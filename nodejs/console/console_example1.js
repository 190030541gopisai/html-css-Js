console.log('hello world');

/*
Node.js web-based Example
A node.js web application contains the following three parts:

Import required modules: The "require" directive is used to load a Node.js module.
Create server: You have to establish a server which will listen to client's request similar to Apache HTTP Server.
Read request and return response: Server created in the second step will read HTTP request made by client which can be a browser or console and return the response.
*/
/*
How to create node.js web applications

Follow these steps:

Import required module: The first step is to use ?require? directive to load http module and store returned HTTP instance into http variable. For example:
var http = require("http");  
*/
var http=require('http');

/*
Create server: In the second step, you have to use created http instance and call http.createServer() method to create server instance and then bind it at port 8081 using listen method associated with server instance. Pass it a function with request and response parameters and write the sample implementation to return "Hello World". For example:
http.createServer(function (request, response) {  
   // Send the HTTP header   
   // HTTP Status: 200 : OK  
   // Content Type: text/plain  
   response.writeHead(200, {'Content-Type': 'text/plain'});  
   // Send the response body as "Hello World"  
   response.end('Hello World\n');  
}).listen(8081);  
// Console will print the message  
console.log('Server running at http://127.0.0.1:8081/');  
*/

//parameter to createServer ------>  RequestListener(req: IncomingMessage, res: ServerResponse): void
http.createServer(function(req,res){
    // Send the HTTP header   
   // HTTP Status: 200 : OK   404:file not found 400 for error
   // Content Type: text/plain 

    res.writeHead(200,{'Content-type':'text/plain'});
    //   // Send the response body as "Hello World"  
  // response.end('Hello World\n');   or see below
  res.write('Hello world namaste');
  res.end();

}).listen(8081);

console.log('Server Running at http://127.0.0.1:8081/');

//Now, if you make any changes in the "main.js" file, you need to again run the "node main.js" command.

//Make a request to Node.js server:

//Open http://127.0.0.1:8081/ in any browser. You will see the following result