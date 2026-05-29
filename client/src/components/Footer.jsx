import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* SuperMeal Group */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">SuperMeal Group</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/store-locations" className="hover:text-white transition-colors">Store Locations</Link></li>
              <li><Link to="/franchising" className="hover:text-white transition-colors">Franchising</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Info</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/delivery-info" className="hover:text-white transition-colors">Delivery Information</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/flowers" className="hover:text-white transition-colors">Flowers</Link></li>
              <li><Link to="/cakes" className="hover:text-white transition-colors">Cakes</Link></li>
              <li><Link to="/supermarket" className="hover:text-white transition-colors">Supermarket</Link></li>
              <li><Link to="/pharmacy" className="hover:text-white transition-colors">Pharmacy</Link></li>
              <li><Link to="/daily-deals" className="hover:text-white transition-colors">Daily Deals</Link></li>
            </ul>
          </div>

          {/* Our Ventures */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><i className="fas fa-phone text-xs text-green-500"></i> 011 2001122</li>
              <li className="flex items-center gap-2"><i className="fas fa-envelope text-xs text-green-500"></i> info@supermeal.lk</li>
              <li className="flex items-center gap-2"><i className="fas fa-map-marker-alt text-xs text-green-500"></i> Colombo, Sri Lanka</li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><i className="fab fa-facebook-f text-sm"></i></a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><i className="fab fa-instagram text-sm"></i></a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><i className="fab fa-twitter text-sm"></i></a>
              <a href="#" className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"><i className="fab fa-youtube text-sm"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-gray-600">|</span>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="text-gray-600">|</span>
            <Link to="/sitemap" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
          <div className="flex items-center gap-3">
            <i className="fab fa-cc-visa text-2xl text-gray-500"></i>
            <i className="fab fa-cc-mastercard text-2xl text-gray-500"></i>
            <i className="fab fa-cc-amex text-2xl text-gray-500"></i>
          </div>
          <p className="text-xs text-gray-500">&copy; {currentYear} SuperMeal.lk. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
