const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };
  
  exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const ImageUrl = req.body.ImageUrl;
    const price = req.body.price;
    const description = req.body.description;
    const product = new Product(title,ImageUrl,description,price);
    product.save();
    res.redirect('/');
  };

  exports.getProducts = (req, res, next) => {
    Product.fetchAll((product)=>{
      res.render('admin/products', {
        pageTitle: 'Admin Products',
        path: '/admin/products',
        prods : product,
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      })
    });
   
  };