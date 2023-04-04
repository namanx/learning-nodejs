const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended : false}));
app.use('/add-product',(req,resp,next) =>{
    resp.send('<form action="/product" method ="POST"><input type="text" name = "title"><button type ="submit">Add Product</button></form>');
});

app.use('/product',(req,resp,next)=>{
    console.log(req.body);
    resp.redirect('/');
});

app.use('/',(req,resp,next) =>{
    resp.send('<h1>Hello from Express js</h1>');
});


app.listen(3000);
