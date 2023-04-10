const path = require('path');
const express = require('express');

const router = express.Router();

const RootDir = require('../util/path');

router.get('/add-product',(req,resp,next) =>{
    // resp.send(
    //     '<form action="/admin/add-product" method ="POST"><input type="text" name = "title"><button type ="submit">Add Product</button></form>'
    //     );
    resp.sendFile(path.join(RootDir,'views','add-product.html'))
});

router.post('/add-product',(req,resp,next)=>{
    console.log(req.body);
    resp.redirect('/');
});

module.exports = router;