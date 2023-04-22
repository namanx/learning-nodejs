const Product = require('../models/product');


exports.getIndexPage = (req,res,next)=>{
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
}


exports.getShopmethod = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/product-list'
    });
  });
};

exports.getProductID = (req,res,next) =>{
  const prodId = req.params.productID;
  Product.findById(prodId,product=>{
    res.render('shop/product-detail',{
      product : product,
      pageTitle : product.title,
      path : '/product-list'
    })
  })
  
};


exports.getCart = (req,res,next)=>{
  res.render('shop/cart',{
    path : '/cart',
    pageTitle : 'My Cart'
  });
}

exports.postCart = (req,res,next)=>{
  const prodID = req.body.productID;
  res.render('shop/cart',{
    pageTitle : 'My Cart',
    path:'/cart',
    productID : prodID
  });
  console.log(prodID);
  res.redirect('/');
}


exports.getOrders = (req,res,next)=>{
  res.render('shop/orders',{
    path : '/orders',
    pageTitle : 'Orders'
  });
};

exports.getCheckout = (req,resp,next)=>{
  res.render('shop/checkout',{
    path : '/checkout',
    pageTitle : 'Checkout'
  });
}