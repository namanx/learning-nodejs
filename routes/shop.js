const path = require('path');

const express = require('express');

const router = express.Router();

const RootDir = require('../util/path');

router.get('/',(req,resp,next)=>{
    console.log(req.body);
    resp.sendFile(path.join(RootDir,'views','shop.html'));
});
module.exports = router;