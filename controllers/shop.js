const Product = require('../models/product');
const Cart = require('../models/cart')

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
      products : product,
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
  Product.findById(prodID,(product) =>{
    Cart.addProduct(prodID,product.price)
  })
  res.redirect('/cart');
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