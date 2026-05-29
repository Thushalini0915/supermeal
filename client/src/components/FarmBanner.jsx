import { Link } from 'react-router-dom'

function FarmBanner() {
  return (
    <section className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Farm to Doorstep</h2>
              <p className="text-amber-100 text-lg mb-6">Fresh fruits, vegetables, and organic produce delivered straight from the farm to your home.</p>
              <Link to="/supermarket" className="inline-flex items-center gap-2 bg-white text-orange-700 px-6 py-3 rounded-full text-sm font-bold hover:bg-orange-50 transition-colors">
                SHOP NOW <i className="fas fa-arrow-right text-xs"></i>
              </Link>
            </div>
            <div className="hidden md:flex justify-center p-8">
              <div className="text-center">
                <i className="fas fa-truck text-white text-8xl opacity-30"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FarmBanner
