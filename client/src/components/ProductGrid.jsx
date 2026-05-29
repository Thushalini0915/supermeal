import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ProductCard from './ProductCard'

function ProductGrid({ title, section, fallbackData }) {
  const [products, setProducts] = useState(fallbackData || [])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        const res = await axios.get(`/api/products?section=${section}`)
        if (res.data && res.data.length > 0) {
          setProducts(res.data)
        }
      } catch (err) {
        // Fallback data is already set
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [section])

  return (
    <section className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">{title}</h2>
          <Link to={`/products/${section}`} className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center gap-1">
            View All <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {products.map((product) => (
            <ProductCard key={product.id || product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
