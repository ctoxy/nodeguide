
const Product = require('../models/product');
/* permet d'avoir le rendu de la page index */
exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    });
  });    
};

/* permet d'avoir le detail de tous les produit sur la page product de shop */
exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'all the PRODUCTS',
        path: '/products',
      });
    });    
};
/* permet d'avoir le detail d'un produit */
exports.getProduct = (req, res, next) => {
  const prodId = req.params.productId;
  Product.findById(prodId, product => {
    res.render('shop/product-detail', {
      product: product,
      pageTitle: product.title,
      path: '/products',
    }); 
    
  });
   
};

exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    pageTitle: 'Your Cart',
    path: '/cart',
  });
}

exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    pageTitle: 'Your Orders',
    path: '/orders',
  });
}

exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout',
  });
}