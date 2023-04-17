const products = [];
exports.getAddProduct = (req, res, next) => {
    res.render('add-product',{pageTitle: 'Add Product',
     path :'/admin/add-product',
     activeAddProduct : true,
     formsCSS : true,
     productCSS : true
    });
  };

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title });
    console.log(products)
    res.redirect('/');
  };

const adminData = require('../routes/admin');
exports.getShopmethod = (req, res, next) => {
    res.render('shop',{prods : products,
      pageTitle : "Shop",
      path : '/',
      hasProduct : products.length > 0,
      activeShop : true,
      productCSS : true
    });
  };