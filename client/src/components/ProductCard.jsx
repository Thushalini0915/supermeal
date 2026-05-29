import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <div className="product-card bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <div className="relative">
        {product.discount && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10">
            {product.discount}
          </span>
        )}
        {product.badge && !product.discount && (
          <span className={`absolute top-2 left-2 ${product.badge === 'BEST SELLER' ? 'bg-orange-500' : 'bg-green-600'} text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10`}>
            {product.badge}
          </span>
        )}
        <Link to={`/product/${product._id || product.id}`} className="block aspect-square bg-gray-50 flex items-center justify-center p-3">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
        </Link>
      </div>
      <div className="p-3">
        <h3 className="text-xs md:text-sm font-semibold text-gray-800 line-clamp-2 mb-2 min-h-[2.5rem]">{product.name}</h3>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-green-700 font-bold text-sm">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-xs">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
        <button className="add-to-cart-btn w-full bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2 rounded-lg transition-all">
          <i className="fas fa-shopping-cart mr-1"></i> Add To Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
