import { Link } from 'react-router-dom'

function BloomsBanner() {
  return (
    <section className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">SuperMeal Blooms</h2>
              <p className="text-green-100 text-lg mb-6">Fresh flowers delivered to your doorstep. Make every moment special with our handcrafted arrangements.</p>
              <Link to="/flowers" className="inline-flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full text-sm font-bold hover:bg-green-50 transition-colors">
                SHOP FLOWERS <i className="fas fa-arrow-right text-xs"></i>
              </Link>
            </div>
            <div className="hidden md:flex justify-center p-8">
              <img src="https://static.lassana.com/cdn-cgi/image/width=1920,quality=93,f=auto/banner_images/banner-1777972667933100.png" alt="SuperMeal Blooms" className="max-h-[250px] object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BloomsBanner
