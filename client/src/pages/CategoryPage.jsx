import { useState, useEffect, useMemo } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import { dropdownCategories } from '../data/categories'
import { 
  superDealsProducts, 
  bestSellerProducts, 
  newArrivalProducts, 
  featuredProducts 
} from '../data/products'

// Combined local products for fallback
const localAllProducts = [
  ...superDealsProducts,
  ...bestSellerProducts,
  ...newArrivalProducts,
  ...featuredProducts
]

// Mapping of category names to their cover banner image from Unsplash
const categoryBanners = {
  flowers: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop',
  cakes: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=1200&auto=format&fit=crop',
  supermarket: 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop',
  pharmacy: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=1200&auto=format&fit=crop',
  hampers: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop',
  gifts: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop',
  perfumes: 'https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1200&auto=format&fit=crop',
  plants: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1200&auto=format&fit=crop',
  'super-deals': 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop',
  'best-sellers': 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop',
  'new-arrivals': 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1200&auto=format&fit=crop',
  featured: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1200&auto=format&fit=crop'
}

function CategoryPage({ categoryOverride, sectionOverride }) {
  const { categoryName, sectionName } = useParams()
  const location = useLocation()
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [priceRange, setPriceRange] = useState(25000)
  const [sortBy, setSortBy] = useState('featured')
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

  // Resolve category/section search keys from router variables or overrides
  const resolvedCategory = useMemo(() => {
    if (categoryOverride) return categoryOverride
    if (categoryName) {
      // Map friendly URLs to products.js category tags
      const norm = categoryName.toLowerCase()
      if (norm.includes('flowers')) return 'flowers'
      if (norm.includes('cake')) return 'cakes'
      if (norm.includes('supermarket') || norm.includes('grocery')) return 'supermarket'
      if (norm.includes('pharmacy')) return 'pharmacy'
      if (norm.includes('hamper')) return 'hampers'
      if (norm.includes('gift')) return 'gifts'
      if (norm.includes('perfume')) return 'perfumes'
      if (norm.includes('plant')) return 'plants'
      if (norm.includes('fruit')) return 'fruit'
      return norm
    }
    // Infer from pathname (e.g. /flowers, /cakes)
    const path = location.pathname.toLowerCase()
    if (path.includes('/flowers')) return 'flowers'
    if (path.includes('/cakes')) return 'cakes'
    if (path.includes('/supermarket')) return 'supermarket'
    if (path.includes('/pharmacy')) return 'pharmacy'
    if (path.includes('/hampers')) return 'hampers'
    if (path.includes('/gifts')) return 'gifts'
    return null
  }, [categoryName, categoryOverride, location.pathname])

  const resolvedSection = useMemo(() => {
    if (sectionOverride) return sectionOverride
    if (sectionName) return sectionName
    const path = location.pathname.toLowerCase()
    if (path.includes('/daily-deals')) return 'super-deals'
    return null
  }, [sectionName, sectionOverride, location.pathname])

  // Get display title
  const displayTitle = useMemo(() => {
    if (resolvedSection) {
      return resolvedSection.replace(/-/g, ' ').toUpperCase()
    }
    if (resolvedCategory) {
      if (resolvedCategory === 'cakes') return 'CAKES & BAKES'
      return resolvedCategory.toUpperCase()
    }
    return 'PRODUCT CATALOG'
  }, [resolvedCategory, resolvedSection])

  // Fetch products
  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        let url = '/api/products'
        if (resolvedSection) {
          url += `?section=${resolvedSection}`
        } else if (resolvedCategory) {
          url += `?category=${resolvedCategory}`
        }
        
        const res = await axios.get(url)
        if (res.data && res.data.length > 0) {
          setProducts(res.data)
        } else {
          // Use client fallback filter
          filterFallbackData()
        }
      } catch (err) {
        filterFallbackData()
      } finally {
        setLoading(false)
      }
    }

    const filterFallbackData = () => {
      let filtered = [...localAllProducts]
      if (resolvedSection) {
        // Fallback filter by ID prefix or general rules
        if (resolvedSection === 'super-deals') {
          filtered = superDealsProducts
        } else if (resolvedSection === 'best-sellers') {
          filtered = bestSellerProducts
        } else if (resolvedSection === 'new-arrivals') {
          filtered = newArrivalProducts
        } else {
          filtered = featuredProducts
        }
      } else if (resolvedCategory) {
        filtered = localAllProducts.filter(p => {
          const cat = p.category ? p.category.toLowerCase() : ''
          return cat === resolvedCategory || 
                 (resolvedCategory === 'cakes' && cat.includes('cake')) ||
                 (resolvedCategory === 'flowers' && cat.includes('flower'))
        })
      }
      
      // De-duplicate items by id
      const unique = []
      const seen = new Set()
      for (const item of filtered) {
        const key = item.id || item._id
        if (!seen.has(key)) {
          seen.add(key)
          unique.push(item)
        }
      }
      setProducts(unique)
    }

    loadProducts()
    // Scroll to top on page change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [resolvedCategory, resolvedSection])

  // Process sorting and pricing filters
  const processedProducts = useMemo(() => {
    let result = products.filter(p => p.price <= priceRange)

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    } else if (sortBy === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    }
    return result
  }, [products, priceRange, sortBy])

  // Get cover image
  const coverImage = useMemo(() => {
    const key = resolvedSection || resolvedCategory || 'default'
    return categoryBanners[key] || categoryBanners['default']
  }, [resolvedCategory, resolvedSection])

  return (
    <div className="bg-gray-50 min-h-screen pb-12 font-sans">
      {/* Cover Banner */}
      <div className="relative h-48 md:h-64 bg-gray-900 overflow-hidden">
        <img 
          src={coverImage} 
          alt={displayTitle} 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 md:p-10">
          <div className="max-w-7xl mx-auto w-full text-left">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-xs font-semibold text-gray-300 mb-2 uppercase tracking-wider">
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <i className="fas fa-chevron-right text-[8px] text-gray-400"></i>
              <span className="text-brand-orange">{displayTitle}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
              {displayTitle}
            </h1>
          </div>
        </div>
      </div>

      {/* Main Catalog Body */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar Filter Widget (Desktop) */}
          <aside className="w-full lg:w-1/4 flex-shrink-0 hidden lg:block">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-28 space-y-6 text-left">
              {/* Category Quick Links */}
              <div>
                <h3 className="font-heading font-black text-sm uppercase text-gray-900 tracking-wider border-b border-gray-100 pb-3 mb-3 flex items-center gap-2">
                  <i className="fas fa-list text-brand-green text-xs"></i>
                  Gifting Categories
                </h3>
                <div className="flex flex-col gap-1.5">
                  {dropdownCategories.slice(0, 10).map((cat) => {
                    const normCat = cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')
                    const isActive = resolvedCategory === normCat || (normCat.includes('cake') && resolvedCategory === 'cakes')
                    return (
                      <Link
                        key={cat.name}
                        to={`/category/${normCat}`}
                        className={`text-xs font-bold py-2 px-3 rounded-lg flex items-center gap-2 transition-colors ${
                          isActive 
                            ? 'bg-brand-green-light text-brand-green' 
                            : 'text-gray-600 hover:bg-gray-50 hover:text-brand-green'
                        }`}
                      >
                        <i className={`${cat.icon} w-4 text-center`}></i>
                        <span>{cat.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-heading font-black text-sm uppercase text-gray-900 tracking-wider border-b border-gray-100 pb-3 mb-3 flex items-center justify-between">
                  <span>Price Range</span>
                  <span className="text-brand-green font-bold text-xs">Max: Rs. {priceRange.toLocaleString()}</span>
                </h3>
                <input 
                  type="range" 
                  min="200" 
                  max="25000" 
                  step="200"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-brand-green cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 font-bold mt-1">
                  <span>Rs. 200</span>
                  <span>Rs. 25,000</span>
                </div>
              </div>

              {/* Sorting Filter */}
              <div>
                <h3 className="font-heading font-black text-sm uppercase text-gray-900 tracking-wider border-b border-gray-100 pb-3 mb-3">
                  Sort By
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full border border-gray-200 rounded-lg p-2.5 text-xs bg-white outline-none font-semibold text-gray-700 focus:border-brand-green cursor-pointer"
                >
                  <option value="featured">Featured / Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Main Grid View */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between bg-white px-4 py-3.5 rounded-2xl shadow-sm border border-gray-100 mb-6 gap-4">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                Showing {processedProducts.length} {processedProducts.length === 1 ? 'Product' : 'Products'}
              </span>
              
              <div className="flex items-center gap-2">
                {/* Mobile Filter Button */}
                <button 
                  onClick={() => setMobileFiltersOpen(true)}
                  className="lg:hidden flex items-center gap-1.5 border border-gray-200 text-gray-700 px-4 py-2 rounded-xl text-xs font-bold hover:bg-gray-50"
                >
                  <i className="fas fa-sliders-h"></i> Filters
                </button>

                {/* Sort Option (Desktop/Mobile inline) */}
                <div className="flex items-center gap-2">
                  <span className="hidden sm:inline text-xs font-bold text-gray-400">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="border border-gray-200 rounded-lg py-1.5 px-3 text-xs bg-white outline-none font-bold text-gray-700 focus:border-brand-green cursor-pointer"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="name">Name: A to Z</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Catalog Grid */}
            {loading ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <div key={n} className="bg-white rounded-2xl p-4 border border-gray-100 shadow-sm animate-pulse h-80 flex flex-col justify-between">
                    <div className="bg-gray-100 rounded-xl aspect-square w-full"></div>
                    <div className="h-4 bg-gray-100 rounded w-3/4 mt-4"></div>
                    <div className="h-4 bg-gray-100 rounded w-1/2 mt-2"></div>
                    <div className="h-8 bg-gray-100 rounded w-full mt-4"></div>
                  </div>
                ))}
              </div>
            ) : processedProducts.length > 0 ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
                {processedProducts.map((product) => (
                  <ProductCard key={product.id || product._id} product={product} />
                ))}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-white rounded-2xl p-12 text-center shadow-sm border border-gray-100 max-w-lg mx-auto mt-8">
                <div className="w-20 h-20 rounded-full bg-emerald-50 text-brand-green flex items-center justify-center mx-auto mb-5 text-3xl">
                  <i className="fas fa-shopping-basket"></i>
                </div>
                <h3 className="text-lg font-black text-gray-900 mb-2 uppercase">No Products Found</h3>
                <p className="text-gray-500 text-xs font-semibold leading-relaxed mb-6">
                  We couldn't find any products in this price range. Try expanding your price filter or browse another gifting category.
                </p>
                <button 
                  onClick={() => { setPriceRange(25000); setSortBy('featured'); }}
                  className="bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold py-3 px-6 rounded-full shadow-sm hover:shadow transition-all uppercase tracking-wider"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Mobile Filters Drawer Modal */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-xs" onClick={() => setMobileFiltersOpen(false)}></div>
          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl flex flex-col z-50 animate-slide-in text-left">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-brand-green text-white">
              <span className="font-heading font-black text-sm uppercase tracking-wider">Filters</span>
              <button onClick={() => setMobileFiltersOpen(false)} className="text-white p-1 text-lg">
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-5 space-y-6">
              {/* Category Quick Links */}
              <div>
                <h3 className="font-heading font-black text-xs uppercase text-gray-900 tracking-wider border-b border-gray-100 pb-2.5 mb-2.5">
                  Gifting Categories
                </h3>
                <div className="flex flex-col gap-1">
                  {dropdownCategories.map((cat) => {
                    const normCat = cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')
                    const isActive = resolvedCategory === normCat || (normCat.includes('cake') && resolvedCategory === 'cakes')
                    return (
                      <Link
                        key={cat.name}
                        to={`/category/${normCat}`}
                        onClick={() => setMobileFiltersOpen(false)}
                        className={`text-xs font-bold py-2 px-3 rounded-lg flex items-center gap-2 transition-colors ${
                          isActive 
                            ? 'bg-brand-green-light text-brand-green' 
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <i className={`${cat.icon} w-4 text-center`}></i>
                        <span>{cat.name}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h3 className="font-heading font-black text-xs uppercase text-gray-900 tracking-wider border-b border-gray-100 pb-2.5 mb-2.5 flex items-center justify-between">
                  <span>Price Range</span>
                  <span className="text-brand-green font-bold">Max: Rs. {priceRange}</span>
                </h3>
                <input 
                  type="range" 
                  min="200" 
                  max="25000" 
                  step="200"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full accent-brand-green cursor-pointer"
                />
                <div className="flex justify-between text-[9px] text-gray-400 font-bold mt-1">
                  <span>Rs. 200</span>
                  <span>Rs. 25,000</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CategoryPage
