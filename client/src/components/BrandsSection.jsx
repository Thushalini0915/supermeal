import { brands } from '../data/categories'

function BrandsSection() {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-center text-xl md:text-2xl font-black text-gray-900 mb-6">
          More than<span className="text-green-600">527+</span> Brands are available
        </h2>
        <div className="flex overflow-x-auto scrollbar-none gap-6 md:gap-8 items-center justify-center pb-2">
          {brands.map((url, index) => (
            <img key={index} src={url} alt="Brand" className="h-10 md:h-14 w-auto flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
