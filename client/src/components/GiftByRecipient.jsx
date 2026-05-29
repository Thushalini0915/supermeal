import { Link } from 'react-router-dom'

const recipients = [
  {
    name: 'For her',
    href: '/gifts/for-her',
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=300&q=80',
    bg: 'bg-amber-50',
  },
  {
    name: 'For Kids',
    href: '/gifts/for-kids',
    image: 'https://images.unsplash.com/photo-1515488042361-404e9250afef?w=300&q=80',
    bg: 'bg-orange-50',
  },
  {
    name: 'For Mom',
    href: '/gifts/for-mom',
    image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=300&q=80',
    bg: 'bg-pink-50',
  },
  {
    name: 'For him',
    href: '/gifts/for-him',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=300&q=80',
    bg: 'bg-blue-50',
  },
  {
    name: 'For Friends',
    href: '/gifts/for-friends',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300&q=80',
    bg: 'bg-purple-50',
  },
  {
    name: 'For dad',
    href: '/gifts/for-dad',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=300&q=80',
    bg: 'bg-sky-50',
  },
]

function GiftByRecipient() {
  return (
    <section className="py-4 md:py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {recipients.map((r) => (
            <Link
              key={r.name}
              to={r.href}
              className={`relative rounded-xl overflow-hidden group h-44 md:h-56 ${r.bg} flex`}
            >
              <div className="relative z-10 p-4 md:p-5 flex flex-col justify-start">
                <h3 className="text-lg md:text-xl font-black text-gray-900 uppercase">{r.name}</h3>
                <span className="flex items-center gap-2 text-sm font-semibold text-gray-700 mt-1">
                  Shop Now <i className="fas fa-arrow-right text-xs"></i>
                </span>
              </div>
              <img
                src={r.image}
                alt={r.name}
                className="absolute bottom-0 right-0 w-28 md:w-40 h-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GiftByRecipient
