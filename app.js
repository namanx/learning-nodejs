const path = require('path');
const express = require("express");
const bodyParser = require("body-parser");
const app = express();


const adminRoutes = require("./routes/admin.js");
const shopRoutes = require('./routes/shop.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public'))); // for accessing the file system to serve files statically

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,resp,next)=>{
    resp.status(404).sendFile(path.join(__dirname,'views','page-not-found.html'));
});
app.listen(3000);
