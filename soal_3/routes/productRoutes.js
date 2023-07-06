const express = require('express');
const ProductController = require('../controllers/productController');

const router = express.Router();
const productController = new ProductController();

// Rute produk dan metodenya
router.get('/', productController.getAllProducts.bind(productController));
router.get('/:id', productController.getProductById.bind(productController));
router.post('/', productController.createProduct.bind(productController));
router.put('/:id', productController.updateProduct.bind(productController));
router.delete('/:id', productController.deleteProduct.bind(productController));

module.exports = router;
