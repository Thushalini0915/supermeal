import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* SuperMeal Group */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">SuperMeal Group</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors">About SuperMeal</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Other Services</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Info</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/sitemap" className="hover:text-white transition-colors">Site Map</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/supermarket" className="hover:text-white transition-colors">Supermarket</Link></li>
              <li><Link to="/flowers" className="hover:text-white transition-colors">Flowers</Link></li>
              <li><Link to="/cakes" className="hover:text-white transition-colors">Cakes & Bakes</Link></li>
              <li><Link to="/pharmacy" className="hover:text-white transition-colors">Pharmacy</Link></li>
            </ul>
          </div>

          {/* Our Ventures */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Our Ventures</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/plantations" className="hover:text-white transition-colors">Our Plantations</Link></li>
              <li><Link to="/agri" className="hover:text-white transition-colors">Agri Innovation</Link></li>
              <li><Link to="/bakery" className="hover:text-white transition-colors">Our Bakery</Link></li>
              <li><Link to="/retail" className="hover:text-white transition-colors">Retail Network</Link></li>
            </ul>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Colombo Head Office</h4>
            <div className="text-sm space-y-1">
              <p>SuperMeal.lk (Pvt) Ltd</p>
              <p>279C, Nawala Road,</p>
              <p>Nawala, Rajagiriya</p>
              <p className="mt-3">Email: info@supermeal.lk</p>
              <p>Hotline: 011 2001122</p>
            </div>
          </div>

          {/* Keep In Touch */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Keep In Touch</h4>
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <i className="fab fa-youtube text-sm"></i>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-700 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Payment & Copyright Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400 mr-2">PAYMENTS</span>
              <i className="fab fa-cc-visa text-2xl text-gray-500"></i>
              <i className="fab fa-cc-mastercard text-2xl text-gray-500"></i>
              <i className="fab fa-cc-amex text-2xl text-gray-500"></i>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <Link to="/terms" className="hover:text-white transition-colors uppercase tracking-wide">Terms & Conditions</Link>
              <span className="text-gray-600">|</span>
              <Link to="/privacy" className="hover:text-white transition-colors uppercase tracking-wide">Privacy Policy</Link>
            </div>
            <p className="text-xs text-gray-500">&copy; {currentYear} SuperMeal.lk (Pvt) Ltd. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
