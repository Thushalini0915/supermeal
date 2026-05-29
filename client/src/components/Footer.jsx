import { Link } from 'react-router-dom'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200/70 text-gray-600 font-sans">
      {/* Upper Footer Links */}
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {/* SuperMeal Group */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-heading font-black text-xs md:text-sm uppercase tracking-wider">
              SuperMeal Group
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-semibold">
              <li><Link to="/about" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Blog</Link></li>
              <li><Link to="/store-locations" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Store Locations</Link></li>
              <li><Link to="/franchising" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Franchising</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-heading font-black text-xs md:text-sm uppercase tracking-wider">
              Info
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-semibold">
              <li><Link to="/delivery-info" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Delivery Information</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Terms & Conditions</Link></li>
              <li><Link to="/returns" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Returns & Refunds</Link></li>
              <li><Link to="/faq" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">FAQ</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-heading font-black text-xs md:text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-semibold">
              <li><Link to="/flowers" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Flowers</Link></li>
              <li><Link to="/cakes" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Cakes</Link></li>
              <li><Link to="/supermarket" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Supermarket</Link></li>
              <li><Link to="/pharmacy" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Pharmacy</Link></li>
              <li><Link to="/daily-deals" className="hover:text-brand-green transition-colors text-gray-500 hover:underline decoration-brand-green">Daily Deals</Link></li>
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="space-y-4">
            <h4 className="text-gray-900 font-heading font-black text-xs md:text-sm uppercase tracking-wider">
              Keep In Touch
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm font-semibold text-gray-500">
              <li className="flex items-center gap-2">
                <i className="fas fa-phone-alt text-brand-green"></i> 
                <span>011 2001122</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="far fa-envelope text-brand-green"></i> 
                <span>info@supermeal.lk</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-brand-green"></i> 
                <span>Colombo, Sri Lanka</span>
              </li>
            </ul>
            
            {/* Branded Social Circles */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-9 h-9 border border-brand-green text-brand-green rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-all shadow-xs"><i className="fab fa-facebook-f text-sm"></i></a>
              <a href="#" className="w-9 h-9 border border-brand-green text-brand-green rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-all shadow-xs"><i className="fab fa-instagram text-sm"></i></a>
              <a href="#" className="w-9 h-9 border border-brand-green text-brand-green rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-all shadow-xs"><i className="fab fa-twitter text-sm"></i></a>
              <a href="#" className="w-9 h-9 border border-brand-green text-brand-green rounded-full flex items-center justify-center hover:bg-brand-green hover:text-white transition-all shadow-xs"><i className="fab fa-youtube text-sm"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Payments Bar */}
      <div className="border-t border-gray-200/60 bg-gray-100/50 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-xs font-semibold text-gray-500">
            <Link to="/privacy" className="hover:text-brand-green transition-colors">Privacy Policy</Link>
            <span className="text-gray-300">|</span>
            <Link to="/terms" className="hover:text-brand-green transition-colors">Terms of Use</Link>
            <span className="text-gray-300">|</span>
            <Link to="/sitemap" className="hover:text-brand-green transition-colors">Sitemap</Link>
          </div>
          
          {/* Payment Method Badges */}
          <div className="flex items-center gap-3 text-2xl text-gray-400">
            <i className="fab fa-cc-visa hover:text-gray-600 transition-colors" title="Visa"></i>
            <i className="fab fa-cc-mastercard hover:text-gray-600 transition-colors" title="Mastercard"></i>
            <i className="fab fa-cc-amex hover:text-gray-600 transition-colors" title="American Express"></i>
            <i className="fab fa-cc-discover hover:text-gray-600 transition-colors" title="Discover"></i>
          </div>
          
          <p className="text-xs font-semibold text-gray-500">
            &copy; {currentYear} SuperMeal.lk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

