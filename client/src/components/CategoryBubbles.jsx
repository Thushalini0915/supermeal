import { Link } from 'react-router-dom'
import { categories } from '../data/categories'

function CategoryBubbles() {
  return (
    <section className="py-8 md:py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto scrollbar-none gap-4 md:gap-6 pb-2 justify-start md:justify-center">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/category/${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              className="category-bubble flex flex-col items-center gap-2 group flex-shrink-0 w-20 md:w-24"
            >
              <div className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${cat.bgColor} flex items-center justify-center overflow-hidden shadow-sm group-hover:shadow-md transition-shadow`}>
                <img src={cat.image} alt={cat.name} className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              </div>
              <span className="text-xs md:text-sm font-semibold text-gray-700 text-center">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryBubbles
