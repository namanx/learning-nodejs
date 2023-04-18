const fs = require("fs");
const path = require("path");

const p = path.join(
    path.dirname(process.mainModule.filename),
    "data",
    "products.json"
  );
const getProductFromfile = (cb) => {
   
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileContent));
    }
  });
};

module.exports = class Product {
  constructor(title,ImageUrl,description,price) {
    this.title = title;
    this.ImageUrl = ImageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    getProductFromfile((products) => {
  
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
    
  }

  static fetchAll(cb) {
    getProductFromfile(cb);
  }
};
