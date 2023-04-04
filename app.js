const http = require('http');
const express = require('express');
const app = express();

app.use((req,resp,next) =>{
    console.log("In the middleware !");
    next(); // Allows the request to continue to the next middleware in line
});

app.use((req,resp,next) =>{
    console.log("In another middleware !");
    resp.send('<h1>Hello from Express js</h1>');
});

const server = http.createServer(app);

server.listen(3000);
