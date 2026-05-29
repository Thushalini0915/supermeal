import { brands } from '../data/categories'

function BrandsSection() {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-black text-gray-900 mb-6">
          More than<span className="text-green-600">527+</span> Brands are available
        </h2>
        <div className="flex overflow-x-auto scrollbar-none gap-4 md:gap-6 items-center justify-center pb-2 px-4">
          {brands.map((brandName, index) => (
            <div key={index} className="px-5 py-2 md:py-3 bg-gray-50 border border-gray-100 text-gray-400 font-bold uppercase rounded-lg text-sm md:text-base tracking-wider hover:bg-gray-100 hover:text-green-700 hover:border-green-200 transition-all select-none whitespace-nowrap shadow-xs">
              {brandName}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
