import { Link } from 'react-router-dom'

const popularCategories = [
  {
    name: 'Flowers',
    href: '/flowers',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&q=80',
    gradient: 'from-pink-600/80 to-red-500/80',
  },
  {
    name: 'Cakes',
    href: '/cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
    gradient: 'from-amber-600/80 to-orange-500/80',
  },
  {
    name: 'Fresh Produce',
    href: '/supermarket/fresh',
    image: 'https://images.unsplash.com/photo-1610832958506-ee5633619144?w=400&q=80',
    gradient: 'from-green-600/80 to-emerald-500/80',
  },
  {
    name: 'Pharmacy',
    href: '/pharmacy',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&q=80',
    gradient: 'from-blue-600/80 to-indigo-500/80',
  },
]

function PopularCategories() {
  return (
    <section className="py-4 md:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-black text-gray-900 mb-4">POPULAR CATEGORIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {popularCategories.map((cat) => (
            <Link key={cat.name} to={cat.href} className="relative rounded-xl overflow-hidden h-40 md:h-52 group">
              <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient}`}></div>
              <div className="absolute inset-0 p-4 md:p-5 flex flex-col justify-end text-white z-10">
                <h3 className="text-lg md:text-xl font-bold">{cat.name}</h3>
                <span className="flex items-center gap-1 text-sm mt-1 font-semibold">
                  SHOP NOW <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PopularCategories
