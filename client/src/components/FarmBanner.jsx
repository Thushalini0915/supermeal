import { Link } from 'react-router-dom'

function FarmBanner() {
  return (
    <section className="py-6 md:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-brand-green-light rounded-3xl overflow-hidden border border-emerald-100/50 shadow-xs relative">
          <div className="grid md:grid-cols-12 items-center gap-6 p-8 md:p-12">
            {/* Left Copy Block */}
            <div className="md:col-span-7 space-y-5 text-left z-10">
              <span className="text-[10px] bg-brand-green text-white font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                Freshness Guaranteed
              </span>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-green leading-tight uppercase">
                From Farm to Doorstep <br />
                <span className="text-orange-500">In 24 Hours!</span>
              </h2>
              <p className="text-emerald-900/80 text-sm font-medium leading-relaxed max-w-lg">
                Enjoy the finest organic produce straight from our local fields. Carefully harvested and fast-tracked to your kitchen to secure peak flavor, nutrition, and quality.
              </p>
              <div className="pt-2">
                <Link 
                  to="/supermarket" 
                  className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-hover text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
                >
                  <span>SHOP FRESH PRODUCE</span>
                  <i className="fas fa-arrow-right text-xs"></i>
                </Link>
              </div>
            </div>

            {/* Right Graphic Block */}
            <div className="hidden md:flex md:col-span-5 justify-center items-center relative">
              {/* Custom Delivery Vector Graphic */}
              <div className="w-64 h-64 relative bg-white/40 rounded-full flex items-center justify-center p-6 border border-white/60">
                <svg viewBox="0 0 64 64" className="w-48 h-48 text-brand-green" fill="none" stroke="currentColor" strokeWidth="2.5">
                  {/* Delivery Basket */}
                  <rect x="16" y="32" width="32" height="18" rx="2" fill="#fff" stroke="currentColor" />
                  <path d="M22 32c0-8 6-12 10-12s10 4 10 12" strokeLinecap="round" />
                  {/* Fresh Veggies sticking out */}
                  <path d="M22 24c0-2-2-4-2-4s4-1 4 4" fill="#1b4d3e" stroke="currentColor" />
                  <path d="M28 22c0-3 3-5 3-5s1 3-3 5" fill="#f0ad4e" stroke="currentColor" />
                  <path d="M34 25c1-2 3-3 3-3s0 4-3 3" fill="#d9534f" stroke="currentColor" />
                  <path d="M40 23c2-1 4-2 4-2s-1 4-4 2" fill="#1b4d3e" stroke="currentColor" />
                  {/* Handle lines */}
                  <line x1="20" y1="41" x2="44" y2="41" strokeLinecap="round" />
                  {/* Sparkles / Freshness accents */}
                  <path d="M12 14l2 2m-2 0l2-2" strokeLinecap="round" />
                  <path d="M52 16l2 2m-2 0l2-2" strokeLinecap="round" />
                  <circle cx="50" cy="28" r="2" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FarmBanner

