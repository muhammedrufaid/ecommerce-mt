// productController.js
const Product = require('../models/productModel');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate('user', 'username');
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createProduct = async (req, res) => {
  const { name, description, price, variants } = req.body;

  try {
    const product = await Product.create({
      name,
      description,
      price,
      variants,
      user: req.user._id // Logged-in user ID
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    Object.assign(product, req.body);
    await product.save();

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
};
