const express = require('express');
const { getProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

router.use(requireAuth);

router.get('/', getProducts);
router.post('/', createProduct);
router.put('/:id', updateProduct); // Use path parameter for update
router.delete('/:id', deleteProduct); // Use path parameter for delete

module.exports = router;