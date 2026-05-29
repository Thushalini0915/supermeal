import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard'

const categoryTabs = [
  { name: 'Featured', key: 'featured' },
  { name: 'Flowers', key: 'flowers' },
  { name: 'Cakes', key: 'cakes' },
  { name: 'Supermarket', key: 'supermarket' },
]

function FeaturedProducts({ products }) {
  const [activeTab, setActiveTab] = useState('featured')

  const filteredProducts = activeTab === 'featured'
    ? products.slice(0, 5)
    : products.filter(p => p.category === activeTab).slice(0, 5)

  return (
    <section className="py-4 md:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl md:text-2xl font-black text-gray-900">
            <span className="text-green-600">FEATURED</span> PRODUCTS
          </h2>
        </div>
        <div className="flex gap-2 mb-4 overflow-x-auto scrollbar-none">
          {categoryTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-colors ${
                activeTab === tab.key
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab.name}
              {tab.key === 'supermarket' && <span className="ml-1 text-[10px] bg-orange-500 text-white px-1.5 py-0.5 rounded-full">New</span>}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id || product._id} product={product} />
          ))}
        </div>
        <div className="text-center mt-4">
          <Link to="/products/featured" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold text-sm">
            View All <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
