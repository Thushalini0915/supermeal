import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

function CategoryBubbles() {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-none gap-3 md:gap-5 pb-2 justify-start md:justify-center">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              className="category-bubble flex flex-col items-center gap-2 group flex-shrink-0 w-20 md:w-24"
            >
              <div className="w-18 h-18 md:w-22 md:h-22 rounded-full bg-gray-50 flex items-center justify-center overflow-hidden border-2 border-gray-100 group-hover:border-green-400 group-hover:shadow-md transition-all" style={{ width: '80px', height: '80px' }}>
                <img src={cat.image} alt={cat.name} className="w-14 h-14 md:w-16 md:h-16 object-contain" />
              </div>
              <span className="text-[11px] md:text-xs font-semibold text-gray-700 text-center leading-tight">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryBubbles
