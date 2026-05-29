const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number, default: null },
  discount: { type: String, default: null },
  badge: { type: String, default: null },
  image: { type: String, required: true },
  category: { type: String, required: true },
  section: { type: String, required: true, enum: ['super-deals', 'best-sellers', 'new-arrivals', 'featured'] },
  description: { type: String, default: '' },
  inStock: { type: Boolean, default: true },
}, { timestamps: true })

module.exports = mongoose.model('Product', productSchema)
