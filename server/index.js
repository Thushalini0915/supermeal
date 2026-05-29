const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const productRoutes = require('./routes/products')
const categoryRoutes = require('./routes/categories')

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

// Middleware
app.use(cors())
app.use(express.json())

// Connect to MongoDB
connectDB()

// Routes
app.use('/api/products', productRoutes)
app.use('/api/categories', categoryRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'SuperMeal.lk API is running' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
