const express = require('express');

const router = express.Router();


router.get('/',(req,resp,next)=>{
    console.log(req.body);
    resp.send( '<h1>Hello From Express js</h1>'
    )
});
module.exports = router;