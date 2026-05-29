import { Link } from 'react-router-dom'

const popularCategories = [
  { name: 'Flowers', gradient: 'from-pink-400 to-red-500' },
  { name: 'Cakes', gradient: 'from-amber-400 to-orange-500' },
  { name: 'Fresh Produce', gradient: 'from-green-400 to-emerald-600' },
  { name: 'Pharmacy', gradient: 'from-blue-400 to-indigo-500' },
]

function PopularCategories() {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">POPULAR CATEGORIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {popularCategories.map((cat) => (
            <Link key={cat.name} to={`/category/${cat.name.toLowerCase().replace(/ /g, '-')}`} className="relative rounded-2xl overflow-hidden h-40 md:h-52 group">
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient}`}></div>
              <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
                <h3 className="text-xl font-bold">{cat.name}</h3>
                <span className="flex items-center gap-1 text-sm mt-1">SHOP NOW <i className="fas fa-arrow-right text-xs"></i></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularCategories
