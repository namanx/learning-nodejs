
const fs = require('fs');
const requestHandler = (req,resp)=>{
    
    
        console.log(req.url,req.method,req.headers);
        const url = req.url;
        const method = req.method;
        if(url === '/'){
            resp.write('<html>');
            resp.write('<head><title>Enter the message</title></head>')
            resp.write('<body><form action="/message" method = "POST"><input type="text" name = "message"><button type="submit">Send</button></input></form></body>')
            resp.write('</html>');
            return resp.end();
        }
        if(url === '/message'){
            const body = [];
            req.on('data',(chunck)=>{
                console.log(chunck);
                body.push(chunck);
            });
            req.on('end',()=>{
                const ParsedBody = Buffer.concat(body).toString();
                const message = ParsedBody.split('=')[1];
                fs.writeFile('message.txt',message.replaceAll('+',' '),(err)=>{
                    console.log(err);
                });
            });
            
            resp.statusCode = 302
            resp.setHeader('Location','/');
            return resp.end();
        }
        // responses
        resp.setHeader('Content-Type','text/html')
        resp.write('<html>')
        resp.write('<head><title>My first node Application</title></head>')
        resp.write('<body>Hello folks ! I am learning node js and this time I am going to do really well</body>')
        resp.write('</html>')
        resp.end();
    }


module.exports = requestHandler;