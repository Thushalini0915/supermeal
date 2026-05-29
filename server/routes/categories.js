const express = require('express')
const router = express.Router()
const Category = require('../models/Category')

// GET /api/categories - Get all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find({ isActive: true }).sort({ name: 1 })
    res.json(categories)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// GET /api/categories/:slug - Get category by slug
router.get('/:slug', async (req, res) => {
  try {
    const category = await Category.findOne({ slug: req.params.slug })
    if (!category) return res.status(404).json({ message: 'Category not found' })
    res.json(category)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

// POST /api/categories - Create a category
router.post('/', async (req, res) => {
  try {
    const category = new Category(req.body)
    const saved = await category.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router
