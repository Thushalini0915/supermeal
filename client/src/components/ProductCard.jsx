import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
  }

  // Calculate discount percentage or format discount text
  const discountText = product.discount || (product.originalPrice && product.price 
    ? `${Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF`
    : null)

  return (
    <div className="product-card bg-white rounded-2xl border border-gray-100 shadow-xs hover:border-brand-green hover:shadow-md transition-all duration-300 overflow-hidden group flex flex-col justify-between p-3.5 relative">
      <div>
        {/* Badge Indicators */}
        <div className="absolute top-3.5 left-3.5 z-10 flex flex-col gap-1">
          {discountText && (
            <span className="bg-brand-pink text-white text-[9px] font-black px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wider">
              {discountText}
            </span>
          )}
          {product.badge && !discountText && (
            <span className={`text-white text-[9px] font-black px-2.5 py-1 rounded-md shadow-xs uppercase tracking-wider ${
              product.badge === 'BEST SELLER' ? 'bg-brand-orange' : 'bg-brand-green'
            }`}>
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Image Link */}
        <Link 
          to={`/product/${product._id || product.id}`} 
          className="block aspect-square bg-gray-50/50 rounded-xl overflow-hidden mb-3.5 p-4 flex items-center justify-center border border-gray-50"
        >
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-106" 
          />
        </Link>

        {/* Product Title */}
        <h3 className="text-xs md:text-sm font-heading font-bold text-gray-800 text-center line-clamp-2 mb-2 min-h-[2.5rem] px-1 hover:text-brand-green transition-colors">
          <Link to={`/product/${product._id || product.id}`}>{product.name}</Link>
        </h3>
      </div>

      {/* Pricing and Action Button */}
      <div className="space-y-3.5 mt-auto">
        <div className="flex flex-col items-center justify-center gap-0.5">
          <span className="text-brand-green font-black text-sm md:text-base">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-gray-400 line-through text-xs font-semibold">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
        
        <button className="w-full border-1.5 border-brand-green text-brand-green hover:bg-brand-green hover:text-white text-xs font-bold py-2 px-3 rounded-full transition-all duration-300 flex items-center justify-center gap-1.5 shadow-xs font-heading">
          <i className="fas fa-shopping-basket text-[10px]"></i>
          <span>ADD TO CART</span>
        </button>
      </div>
    </div>
  )
}

export default ProductCard

