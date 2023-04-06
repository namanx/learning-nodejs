const express = require('express');

const router = express.Router();

router.get('/add-product',(req,resp,next) =>{
    resp.send(
        '<form action="/product" method ="POST"><input type="text" name = "title"><button type ="submit">Add Product</button></form>'
        );
});

router.use('/product',(req,resp,next)=>{
    console.log(req.body);
    resp.redirect('/');
});

module.exports = router;