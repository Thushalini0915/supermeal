const express = require('express')
const router = express.Router()
const Product = require('../models/Product')

// GET /api/products - Get all products or filter by section/category
router.get('/', async (req, res) => {
  try {
    const { section, category, limit } = req.query
    const filter = {}
    if (section) filter.section = section
    if (category) filter.category = category

    const products = await Product.find(filter)
      .limit(parseInt(limit) || 0)
      .sort({ createdAt: -1 })

    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET /api/products/:id - Get single product
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ message: 'Product not found' })
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// POST /api/products - Create a product
router.post('/', async (req, res) => {
  try {
    const product = new Product(req.body)
    const saved = await product.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// PUT /api/products/:id - Update a product
router.put('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!product) return res.status(404).json({ message: 'Product not found' })
    res.json(product)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

// DELETE /api/products/:id - Delete a product
router.delete('/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id)
    if (!product) return res.status(404).json({ message: 'Product not found' })
    res.json({ message: 'Product deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

module.exports = router
