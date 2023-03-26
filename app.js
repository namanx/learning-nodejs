const http = require('http');


const server = http.createServer((req,resp)=>{
    
    console.log(req.url,req.method,req.headers);
    const url = req.url;
    if(url === '/'){
        resp.write('<html>');
        resp.write('<head><title>Enter the message</title></head>')
        resp.write('<body><form action="/message" method = "POST"><input type="text" name = "message"><button type="submit">Send</button></input></form></body>')
        resp.write('</html>');
        return resp.end();
    }
    // responses
    resp.setHeader('Content-Type','text/html')
    resp.write('<html>')
    resp.write('<head><title>My first node Application</title></head>')
    resp.write('<body>Hello folks ! I am learning node js and this time I am going to do really well</body>')
    resp.write('</html>')
    resp.end();
})

server.listen(4000)