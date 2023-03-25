const http = require('http');


const server = http.createServer((req,resp)=>{
    
    console.log(req.url,req.method,req.headers);

    // responses
    resp.setHeader('Content-Type','text/html')
    resp.write('<html>')
    resp.write('<head><title>My first node Application</title></head>')
    resp.write('<body>Hello folks ! I am learning node js and this time I am going to do really well</body>')
    resp.write('</html>')
    resp.end();
})

server.listen(4000)