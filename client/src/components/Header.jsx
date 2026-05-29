import { useState } from 'react'
import { Link } from 'react-router-dom'
import { dropdownCategories } from '../data/categories'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [deliveryModalOpen, setDeliveryModalOpen] = useState(false)
  const [deliveryCity, setDeliveryCity] = useState('Colombo 07')
  const [deliveryDate, setDeliveryDate] = useState('Today')
  const [tempCity, setTempCity] = useState('Colombo 07')
  const [tempDate, setTempDate] = useState('Today')

  const handleDeliverySubmit = (e) => {
    e.preventDefault()
    setDeliveryCity(tempCity)
    setDeliveryDate(tempDate)
    setDeliveryModalOpen(false)
  }

  const citiesList = [
    'Colombo 01 - 15', 'Colombo 07', 'Nawala', 'Rajagiriya', 'Nugegoda', 
    'Wattala', 'Kelaniya', 'Dehiwala', 'Mount Lavinia', 'Battaramulla', 
    'Kandy', 'Galle', 'Negombo', 'Kurunegala', 'Gampaha'
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm font-sans">
      {/* Top Header Info Bar */}
      <div className="bg-gray-50 border-b border-gray-100 py-1.5 px-4 text-xs text-gray-600 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <i className="fas fa-phone-alt text-brand-green"></i> 
              Call Center Hotline: <a href="tel:94112001122" className="font-bold text-gray-800 hover:text-brand-green">011 2001122</a>
            </span>
            <span className="text-gray-300">|</span>
            <span className="flex items-center gap-1">
              <i className="far fa-clock text-brand-green"></i> 24/7 Customer Support
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-500">Sri Lanka's Most Trusted Online Gifting & Grocery Platform</span>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-1.5 cursor-pointer hover:text-brand-green">
              <img src="https://flagcdn.com/w20/lk.png" alt="LK" className="w-4 h-auto rounded-sm" />
              <span>LKR (Rs.)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between gap-4">
        {/* Mobile menu trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-600 hover:text-brand-green text-xl p-1 focus:outline-none"
        >
          <i className={mobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </button>

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 flex items-center">
          <img src="/supermeal-logo.jpeg" alt="SuperMeal.lk" className="h-10 md:h-12 w-auto rounded-md shadow-sm" />
          <span className="ml-2.5 font-heading text-xl md:text-2xl font-black tracking-tight text-brand-green hidden sm:inline-block">
            Super<span className="text-orange-500">Meal</span>
          </span>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-lg mx-2 lg:mx-4">
          <div className="flex w-full rounded-full overflow-hidden border border-gray-300 focus-within:border-brand-green focus-within:ring-1 focus-within:ring-brand-green transition-all shadow-sm">
            <input 
              type="text" 
              placeholder="Search for cakes, flowers, fresh produce..." 
              className="flex-1 px-5 py-2 text-sm outline-none bg-white" 
            />
            <button className="bg-brand-green hover:bg-brand-green-hover text-white px-6 transition-colors flex items-center justify-center">
              <i className="fas fa-search text-sm"></i>
            </button>
          </div>
        </div>

        {/* Delivery Selector Widget */}
        <div 
          onClick={() => setDeliveryModalOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-brand-green-light hover:bg-emerald-100/70 border border-emerald-100 rounded-full cursor-pointer transition-colors max-w-[200px] md:max-w-xs"
        >
          <i className="fas fa-truck text-brand-green text-sm md:text-base animate-pulse"></i>
          <div className="flex flex-col text-left overflow-hidden">
            <span className="text-[9px] uppercase tracking-wider text-brand-green font-bold leading-none">Deliver To</span>
            <span className="text-xs font-bold text-gray-800 truncate leading-tight mt-0.5">{deliveryCity} ({deliveryDate})</span>
          </div>
          <i className="fas fa-chevron-down text-brand-green text-[10px] ml-1 flex-shrink-0"></i>
        </div>

        {/* Action icons (Wishlist, Account, Cart) */}
        <div className="flex items-center gap-3 md:gap-5 flex-shrink-0">
          <Link to="/account" className="hidden sm:flex flex-col items-center text-gray-600 hover:text-brand-green transition-colors">
            <i className="far fa-user text-lg md:text-xl"></i>
            <span className="text-[10px] font-semibold mt-0.5">Account</span>
          </Link>
          <Link to="/wishlist" className="relative flex flex-col items-center text-gray-600 hover:text-brand-green transition-colors">
            <i className="far fa-heart text-lg md:text-xl"></i>
            <span className="absolute -top-1.5 -right-2 bg-brand-pink text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            <span className="text-[10px] font-semibold mt-0.5">Wishlist</span>
          </Link>
          <Link to="/cart" className="relative flex flex-col items-center text-gray-600 hover:text-brand-green transition-colors">
            <i className="fas fa-shopping-basket text-lg md:text-xl"></i>
            <span className="absolute -top-1.5 -right-2 bg-brand-orange text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">0</span>
            <span className="text-[10px] font-semibold mt-0.5">Cart</span>
          </Link>
        </div>
      </div>

      {/* Mobile Search - Visible on Mobile screens only */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex w-full rounded-full overflow-hidden border border-gray-300 shadow-sm">
          <input 
            type="text" 
            placeholder="Search for flowers, gifts, meals..." 
            className="flex-1 px-4 py-2 text-sm outline-none" 
          />
          <button className="bg-brand-green text-white px-5 flex items-center justify-center">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>

      {/* Mega Menu Navigation Bar */}
      <nav className="bg-brand-green border-b border-emerald-900 hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center overflow-x-auto scrollbar-none gap-2 py-0.5">
              {/* Categories Hover Trigger */}
              <div className="relative group">
                <button className="flex items-center gap-2 bg-emerald-950 text-white px-5 py-3.5 text-sm font-bold transition-colors font-heading tracking-wide">
                  <i className="fas fa-th-large"></i>
                  CATEGORIES
                  <i className="fas fa-chevron-down text-[10px] ml-1"></i>
                </button>
                <div className="absolute left-0 top-full bg-white shadow-xl rounded-b-lg w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-t-2 border-brand-green">
                  <div className="py-1">
                    {dropdownCategories.map((cat) => (
                      <Link 
                        key={cat.name} 
                        to={`/category/${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} 
                        className="flex items-center gap-3 px-5 py-2.5 hover:bg-brand-green-light text-sm text-gray-700 font-semibold transition-colors"
                      >
                        <i className={`${cat.icon} text-brand-green w-5 text-center`}></i> 
                        <span>{cat.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Nav Links */}
              <Link to="/flowers" className="text-white hover:bg-brand-green-hover px-4 py-3.5 text-xs font-bold tracking-wide uppercase transition-colors whitespace-nowrap">Flowers</Link>
              <Link to="/cakes" className="text-white hover:bg-brand-green-hover px-4 py-3.5 text-xs font-bold tracking-wide uppercase transition-colors whitespace-nowrap">Cakes & Bakes</Link>
              <Link to="/supermarket" className="text-white hover:bg-brand-green-hover px-4 py-3.5 text-xs font-bold tracking-wide uppercase transition-colors whitespace-nowrap">Supermarket</Link>
              <Link to="/pharmacy" className="text-white hover:bg-brand-green-hover px-4 py-3.5 text-xs font-bold tracking-wide uppercase transition-colors whitespace-nowrap">Pharmacy</Link>
              <Link to="/hampers" className="text-white hover:bg-brand-green-hover px-4 py-3.5 text-xs font-bold tracking-wide uppercase transition-colors whitespace-nowrap">Hampers</Link>
              <Link to="/gifts" className="text-white hover:bg-brand-green-hover px-4 py-3.5 text-xs font-bold tracking-wide uppercase transition-colors whitespace-nowrap">Gifts</Link>
              <Link to="/daily-deals" className="text-white hover:bg-brand-green-hover px-4 py-3.5 text-xs font-bold tracking-wide uppercase transition-colors whitespace-nowrap text-orange-400">Daily Deals</Link>
            </div>
            
            <Link to="/order-status" className="bg-white hover:bg-gray-100 text-brand-green px-5 py-1.5 text-xs font-bold tracking-wide rounded-full shadow-sm transition-all uppercase flex items-center gap-1.5">
              <i className="fas fa-info-circle"></i> Order Status
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)}></div>
          <div className="relative w-4/5 max-w-xs bg-white h-full shadow-2xl flex flex-col z-50 animate-slide-in">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-brand-green text-white">
              <span className="font-heading font-black text-lg">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-1 text-lg">
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto py-2">
              <div className="px-4 py-2 border-b border-gray-100 bg-gray-50">
                <div onClick={() => { setDeliveryModalOpen(true); setMobileMenuOpen(false); }} className="flex items-center gap-2 cursor-pointer py-1">
                  <i className="fas fa-truck text-brand-green"></i>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-gray-500 font-medium leading-none">Deliver To</span>
                    <span className="text-xs font-bold text-gray-800 leading-tight mt-0.5">{deliveryCity} ({deliveryDate})</span>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 text-gray-800">Home</Link>
                <Link to="/flowers" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 text-gray-800">Flowers</Link>
                <Link to="/cakes" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 text-gray-800">Cakes & Bakes</Link>
                <Link to="/supermarket" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 text-gray-800">Supermarket</Link>
                <Link to="/pharmacy" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 text-gray-800">Pharmacy</Link>
                <Link to="/hampers" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 text-gray-800">Hampers</Link>
                <Link to="/gifts" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 text-gray-800">Gifts</Link>
                <Link to="/daily-deals" onClick={() => setMobileMenuOpen(false)} className="block px-5 py-2.5 text-sm font-semibold hover:bg-gray-50 text-orange-600">Daily Deals</Link>
              </div>
              <div className="border-t border-gray-100 pt-2 mt-2 px-5 text-xs text-gray-500 space-y-3">
                <div className="flex items-center gap-2"><i className="fas fa-phone-alt text-brand-green"></i> 011 2001122</div>
                <div className="flex items-center gap-2"><i className="far fa-envelope text-brand-green"></i> info@supermeal.lk</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delivery Scheduler Modal */}
      {deliveryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-xs" onClick={() => setDeliveryModalOpen(false)}></div>
          <div className="bg-white rounded-2xl max-w-md w-full shadow-2xl p-6 relative z-10 border border-gray-100 animate-scale-up font-sans">
            <button 
              onClick={() => setDeliveryModalOpen(false)} 
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
            >
              <i className="fas fa-times text-lg"></i>
            </button>
            <h3 className="font-heading text-lg font-bold text-gray-900 flex items-center gap-2 mb-4">
              <i className="fas fa-map-marker-alt text-brand-green"></i>
              Configure Delivery Schedule
            </h3>
            <form onSubmit={handleDeliverySubmit} className="space-y-4">
              {/* City Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Delivery City / Area</label>
                <select 
                  value={tempCity}
                  onChange={(e) => setTempCity(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm bg-white outline-none focus:border-brand-green"
                >
                  {citiesList.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Delivery Date</label>
                <div className="grid grid-cols-3 gap-2">
                  {['Today', 'Tomorrow', 'Day After'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setTempDate(d)}
                      className={`py-2 px-3 text-xs font-bold rounded-lg border transition-colors ${
                        tempDate === d 
                          ? 'border-brand-green bg-brand-green-light text-brand-green' 
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  className="w-full bg-brand-green hover:bg-brand-green-hover text-white text-sm font-bold py-3 rounded-lg shadow-sm hover:shadow transition-all uppercase"
                >
                  Apply Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header

