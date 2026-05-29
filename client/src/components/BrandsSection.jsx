import { brands } from '../data/categories'

function BrandsSection() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl md:text-3xl font-black text-gray-900 mb-6">
          More than <span className="text-green-600">527+</span> Brands are available
        </h2>
        <div className="flex overflow-x-auto scrollbar-none gap-6 items-center justify-center pb-2">
          {brands.map((url, index) => (
            <img key={index} src={url} alt="Brand" className="h-12 md:h-16 w-auto flex-shrink-0 grayscale hover:grayscale-0 transition-all" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
