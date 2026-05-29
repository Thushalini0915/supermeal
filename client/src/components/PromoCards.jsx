import { Link } from 'react-router-dom'

function PromoCards() {
  return (
    <section className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {/* Supermarket */}
          <Link to="/supermarket" className="relative rounded-2xl overflow-hidden min-h-[180px] bg-gradient-to-r from-teal-500 to-emerald-600 p-6 flex flex-col justify-between group hover:shadow-xl transition-shadow">
            <div>
              <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">Supermarket</span>
              <h3 className="text-white text-xl md:text-2xl font-black mt-1 leading-tight">Your One-Stop<br/>Online Supermarket</h3>
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 bg-white text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-emerald-50 transition-colors">
                ORDER NOW <i className="fas fa-arrow-right text-xs"></i>
              </span>
            </div>
          </Link>

          {/* Pharmacy */}
          <Link to="/pharmacy" className="relative rounded-2xl overflow-hidden min-h-[180px] bg-gradient-to-r from-indigo-500 to-purple-600 p-6 flex flex-col justify-between group hover:shadow-xl transition-shadow">
            <div>
              <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">Pharmacy</span>
              <h3 className="text-white text-xl md:text-2xl font-black mt-1 leading-tight">Delivering<br/>Health &amp; Happiness</h3>
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 bg-white text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-indigo-50 transition-colors">
                ORDER NOW <i className="fas fa-arrow-right text-xs"></i>
              </span>
            </div>
          </Link>

          {/* Daily Deals */}
          <Link to="/daily-deals" className="relative rounded-2xl overflow-hidden min-h-[180px] bg-gradient-to-r from-orange-500 to-red-500 p-6 flex flex-col justify-between group hover:shadow-xl transition-shadow">
            <div>
              <span className="text-white/80 text-xs font-semibold tracking-wider uppercase">Daily Deals</span>
              <h3 className="text-white text-xl md:text-2xl font-black mt-1 leading-tight">SuperMeal Daily<br/>Deals</h3>
              <p className="text-white/90 text-sm mt-1">Save up to 50% off</p>
            </div>
            <div className="mt-4">
              <span className="inline-flex items-center gap-2 bg-white text-red-600 px-4 py-2 rounded-full text-sm font-semibold group-hover:bg-red-50 transition-colors">
                ORDER NOW <i className="fas fa-arrow-right text-xs"></i>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PromoCards
