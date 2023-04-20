const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop')

const router = express.Router();

router.get('/', shopController.getIndexPage);

router.get('/product-list',shopController.getShopmethod);

router.get('/products/:productID',shopController.getProductID);

router.get('/orders',shopController.getOrders);

router.get('/cart',shopController.getCart);

router.get('/checkout',shopController.getCheckout);
module.exports = router;
