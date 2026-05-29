import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  return (
    <div className="product-card bg-white border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden group relative">
      <div className="relative">
        {product.discount && (
          <div className="absolute top-0 right-0 z-10">
            <div className="w-0 h-0 border-t-[60px] border-t-red-500 border-l-[60px] border-l-transparent"></div>
            <span className="absolute top-1 right-0.5 text-white text-[9px] font-bold leading-tight text-center" style={{ transform: 'rotate(45deg)', transformOrigin: 'center' }}>
              {product.discount.replace(' OFF', '')}
              <br />Off
            </span>
          </div>
        )}
        {product.badge && !product.discount && (
          <div className="absolute top-0 right-0 z-10">
            <div className="w-0 h-0 border-t-[60px] border-t-orange-500 border-l-[60px] border-l-transparent"></div>
            <span className="absolute top-1.5 right-0 text-white text-[8px] font-bold leading-tight text-center" style={{ transform: 'rotate(45deg)', transformOrigin: 'center' }}>
              BEST
              <br />SELLER
            </span>
          </div>
        )}
        <Link to={`/product/${product._id || product.id}`} className="block aspect-square bg-white flex items-center justify-center p-4">
          <img src={product.image} alt={product.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300" />
        </Link>
      </div>
      <div className="px-3 pb-3 pt-2 border-t border-gray-50">
        <p className="text-[10px] text-gray-400 mb-0.5">Image Copyright @ SuperMeal.lk</p>
        <h3 className="text-xs font-semibold text-gray-800 line-clamp-2 mb-2 min-h-[2rem] uppercase">{product.name}</h3>
        <div className="flex flex-col">
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-xs">{formatPrice(product.originalPrice)}</span>
          )}
          <span className="text-green-700 font-bold text-sm">{formatPrice(product.price)}</span>
        </div>
      </div>
      <button className="add-to-cart-btn w-full bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-2.5 transition-all">
        <i className="fas fa-shopping-cart mr-1"></i> Add To Cart
      </button>
    </div>
  )
}

export default ProductCard
