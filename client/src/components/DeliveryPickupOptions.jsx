import { Link } from 'react-router-dom'

function DeliveryPickupOptions() {
  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Same Day Delivery */}
          <div className="bg-brand-olive rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between text-left text-white shadow-sm hover:shadow-md transition-shadow gap-6">
            <div className="space-y-3 flex-1">
              <span className="text-[10px] bg-brand-orange text-white font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Order Today, Get It Today
              </span>
              <h3 className="font-heading font-black text-2xl uppercase tracking-tight leading-tight mt-2">
                SAME DAY DELIVERY
              </h3>
              <p className="text-gray-200 text-xs leading-relaxed max-w-sm">
                Get your flowers, cakes, and grocery essentials delivered to your doorstep within 3-4 hours across Colombo.
              </p>
              <div className="pt-2">
                <Link 
                  to="/flowers" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase bg-white text-brand-green hover:bg-gray-100 px-5 py-2.5 rounded-full transition-all shadow-sm"
                >
                  <span>ORDER NOW</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            </div>
            
            {/* Truck SVG Graphic */}
            <div className="w-28 h-28 flex-shrink-0 bg-white/10 rounded-2xl flex items-center justify-center p-3">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 40h32M8 20h28v20H8zM36 28h12l8 8v4H36z" />
                <circle cx="18" cy="44" r="5" fill="currentColor" />
                <circle cx="46" cy="44" r="5" fill="currentColor" />
                <path strokeLinecap="round" d="M52 36h4M12 26H6" />
              </svg>
            </div>
          </div>

          {/* Order Pickup */}
          <div className="bg-brand-olive rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between text-left text-white shadow-sm hover:shadow-md transition-shadow gap-6">
            <div className="space-y-3 flex-1">
              <span className="text-[10px] bg-brand-green-light text-brand-green font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                Safe & Convenient
              </span>
              <h3 className="font-heading font-black text-2xl uppercase tracking-tight leading-tight mt-2">
                ORDER PICKUP
              </h3>
              <p className="text-gray-200 text-xs leading-relaxed max-w-sm">
                Skip the delivery wait! Choose store pickup at checkout and collect your freshly prepared orders at our central branch.
              </p>
              <div className="pt-2">
                <Link 
                  to="/store-locations" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase bg-white text-brand-green hover:bg-gray-100 px-5 py-2.5 rounded-full transition-all shadow-sm"
                >
                  <span>FIND LOCATIONS</span>
                  <i className="fas fa-arrow-right text-[10px]"></i>
                </Link>
              </div>
            </div>
            
            {/* Store SVG Graphic */}
            <div className="w-28 h-28 flex-shrink-0 bg-white/10 rounded-2xl flex items-center justify-center p-3">
              <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white w-20 h-20">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 24h48M10 24v24h44V24M16 10h32l4 14H12z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M26 36h12v12H26z" />
                <circle cx="32" cy="18" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeliveryPickupOptions
