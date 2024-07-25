const express = require('express');
const { getCart, addToCart, updateCartItem, removeCartItem, clearCart } = require('../controllers/cartController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// Protect cart routes
router.use(requireAuth);

router.get('/', getCart);
router.post('/add', addToCart);
router.put('/update', updateCartItem);
router.delete('/remove/:itemId', removeCartItem);
router.delete('/clear', clearCart);

module.exports = router;
