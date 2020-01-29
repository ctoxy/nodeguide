const path = require('path');

const express = require('express');


const shopController = require('../controllers/shop');
const router = express.Router();

/* page d acceuil index */
router.get('/', shopController.getIndex );
/* page listant tout les products shop.ejs*/
router.get('/products', shopController.getProduct );
/* page listant tout la cart cart.ejs*/
router.get('/cart', shopController.getCart );
/* page du checkout checkout.ejs*/
router.get('/checkout', shopController.getCheckout );

module.exports = router;
