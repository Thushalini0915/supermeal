import { Link } from 'react-router-dom'

function FarmBanner() {
  return (
    <section className="py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4">
        <Link to="/supermarket" className="block rounded-xl overflow-hidden bg-gradient-to-r from-amber-500 to-orange-600 relative min-h-[200px] md:min-h-[280px]">
          <div className="grid md:grid-cols-2 items-center h-full">
            <div className="p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                From Farm to Doorstep in 24 Hours with Freshness Guaranteed!
              </h2>
              <p className="text-amber-100 text-sm md:text-base mb-5 leading-relaxed">
                Enjoy the finest produce straight from our very own farms, ensuring quality and convenience for a delightful experience at home!
              </p>
              <span className="inline-flex items-center gap-2 bg-white text-orange-700 px-5 py-2.5 rounded-full text-sm font-bold hover:bg-orange-50 transition-colors">
                SHOP NOW <i className="fas fa-arrow-right text-xs"></i>
              </span>
            </div>
            <div className="hidden md:flex justify-center p-8">
              <img
                src="https://static.lassana.com/cdn-cgi/image/width=600,quality=93,f=auto/product_images/prod-2627-1753858694069161.jpg"
                alt="Farm Fresh"
                className="max-h-[240px] object-contain rounded-lg"
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  )
}

export default FarmBanner
