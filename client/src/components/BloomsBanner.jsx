import { Link } from 'react-router-dom'

function BloomsBanner() {
  return (
    <section className="py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/flowers" className="block rounded-xl overflow-hidden bg-gradient-to-r from-green-700 to-emerald-800 relative min-h-[200px] md:min-h-[280px]">
          <div className="grid md:grid-cols-2 items-center h-full">
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=600&q=80"
                alt="SuperMeal Blooms"
                className="w-full h-[280px] object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                Unleash the enchanting beauty of SuperMeal Blooms!
              </h2>
              <p className="text-green-100 text-sm md:text-base mb-5 leading-relaxed">
                Discover our world of freshness, fragrance, and enduring charm - carefully hand-picked for unmatched quality, vibrant colors and lustrous petals exude pure elegance.
              </p>
              <span className="inline-flex items-center gap-2 bg-white text-green-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-green-50 transition-colors">
                SHOP NOW <i className="fas fa-arrow-right text-xs"></i>
              </span>
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default BloomsBanner
