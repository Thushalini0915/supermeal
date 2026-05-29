import { useState } from 'react'
import { Link } from 'react-router-dom'
import { dropdownCategories } from '../data/categories'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Header Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/supermeal-logo.jpeg" alt="SuperMeal.lk" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* Search Bar */}
        <div className="hidden sm:flex flex-1 max-w-2xl mx-4">
          <div className="flex w-full rounded-lg overflow-hidden border border-gray-300 focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600">
            <input type="text" placeholder="Search for anything..." className="flex-1 px-4 py-2.5 text-sm outline-none bg-white" />
            <button className="bg-green-600 hover:bg-green-700 text-white px-5 transition-colors">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
          <div className="hidden lg:flex flex-col items-end">
            <span className="text-xs text-gray-500">Happiness Hotline</span>
            <a href="tel:94112001122" className="text-lg font-bold text-gray-800 hover:text-green-700">011 2001122</a>
          </div>
          <Link to="/account" className="flex flex-col items-center text-gray-600 hover:text-green-700 transition-colors">
            <i className="fas fa-user text-xl"></i>
            <span className="text-[10px] mt-0.5">Account</span>
          </Link>
          <Link to="/cart" className="relative flex flex-col items-center text-gray-600 hover:text-green-700 transition-colors">
            <i className="fas fa-shopping-cart text-xl"></i>
            <span className="absolute -top-1.5 -right-2 bg-orange-500 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
            <span className="text-[10px] mt-0.5">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="sm:hidden px-4 pb-3">
        <div className="flex w-full rounded-lg overflow-hidden border border-gray-300">
          <input type="text" placeholder="Search for anything..." className="flex-1 px-4 py-2 text-sm outline-none" />
          <button className="bg-green-600 text-white px-4"><i className="fas fa-search"></i></button>
        </div>
      </div>

      {/* Mega Menu Navigation Bar */}
      <nav className="bg-green-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center overflow-x-auto scrollbar-none gap-1">
            {/* Categories Dropdown */}
            <div className="relative group flex-shrink-0">
              <button className="flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white px-4 py-3 text-sm font-semibold transition-colors rounded-t-md">
                <i className="fas fa-th-large"></i>
                Categories
                <i className="fas fa-chevron-down text-xs"></i>
              </button>
              <div className="absolute left-0 top-full bg-white shadow-xl rounded-b-lg w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {dropdownCategories.map((cat) => (
                    <Link key={cat.name} to={`/category/${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} className="flex items-center gap-3 px-4 py-2.5 hover:bg-green-50 text-sm text-gray-700">
                      <i className={`${cat.icon} text-green-600 w-5`}></i> {cat.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Nav Links */}
            <Link to="/eid-gifts" className="flex-shrink-0 text-white hover:bg-green-800 px-3 py-3 text-sm font-semibold transition-colors whitespace-nowrap">EID GIFT COLLECTION</Link>
            <Link to="/flowers" className="flex-shrink-0 text-white hover:bg-green-800 px-3 py-3 text-sm font-medium transition-colors whitespace-nowrap">Flowers</Link>
            <Link to="/cakes" className="flex-shrink-0 text-white hover:bg-green-800 px-3 py-3 text-sm font-medium transition-colors whitespace-nowrap">Cakes And Bakes</Link>
            <Link to="/supermarket" className="flex-shrink-0 text-white hover:bg-green-800 px-3 py-3 text-sm font-medium transition-colors whitespace-nowrap">Supermarket</Link>
            <Link to="/pharmacy" className="flex-shrink-0 text-white hover:bg-green-800 px-3 py-3 text-sm font-medium transition-colors whitespace-nowrap">Pharmacy</Link>
            <Link to="/money-delivery" className="flex-shrink-0 text-white hover:bg-green-800 px-3 py-3 text-sm font-medium transition-colors whitespace-nowrap">Money Delivery</Link>
            <Link to="/daily-deals" className="flex-shrink-0 text-white hover:bg-green-800 px-3 py-3 text-sm font-medium transition-colors whitespace-nowrap">Daily Deals</Link>
            <Link to="/order-status" className="flex-shrink-0 bg-white text-green-700 hover:bg-green-50 px-4 py-2 text-sm font-semibold rounded-full ml-auto whitespace-nowrap">Order Status</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
