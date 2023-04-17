const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
    res.render('add-product',{pageTitle: 'Add Product',
     path :'/admin/add-product',
     activeAddProduct : true,
     formsCSS : true,
     productCSS : true
    });
  };

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    console.log(product)
    res.redirect('/');
  };

exports.getShopmethod = (req, res, next) => {
  const products = Product.fetchAll();
    res.render('shop',{prods : products,
      pageTitle : "Shop",
      path : '/',
      hasProduct : products.length > 0,
      activeShop : true,
      productCSS : true
    });
  };
