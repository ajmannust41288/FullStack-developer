// var http = require('http'); // 1 - Import Node.js core module

// var server = http.createServer(function (req, res) {   // 2 - creating server

//     //handle incomming requests here..
//     res.writeHead('This is me ajman khan wazir')

// });

// server.listen(5000); //3 - listen for any incoming requests

// console.log('Node.js web server at port 5000 is running..')
//====================================================================example http

var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
    if (req.url == '/') { //check the URL of the current request
        
        // set response header
        res.writeHead(200, { 'Content-Type': 'text/html' }); 
        
        // set response content    
        res.write('<html><body><p>This is home Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/student") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is student Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/admin") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is admin Page.</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/staff") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is staff Page. please follow this page for more updates</p></body></html>');
        res.end();
    
    }
    else if (req.url == "/manager") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h2>This is manager Page.</h2><br> <p> please follow this page for more info </p></body></html>');
        res.end();
    
    }
    else if (req.url == "/manager/sale") {
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><h2>This is sale account Page.</h2><br> <p> please follow this page for more info </p></body></html>');
        res.end();
    
    }
    else
        res.end('Invalid Request!');

});

server.listen(5000); //6 - listen for any incoming requests

console.log('Node.js web server at port 5000 is running..')