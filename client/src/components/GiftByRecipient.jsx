import { Link } from 'react-router-dom'

const recipients = [
  {
    name: 'For her',
    href: '/gifts/for-her',
    image: 'https://static.lassana.com/cdn-cgi/image/width=500,quality=93,f=auto/product_images/prod-15410-177926100238241.jpg',
    bg: 'bg-amber-50',
  },
  {
    name: 'For Kids',
    href: '/gifts/for-kids',
    image: 'https://static.lassana.com/cdn-cgi/image/width=500,quality=93,f=auto/product_images/prod-809-1692784184249.jpg',
    bg: 'bg-orange-50',
  },
  {
    name: 'For Mom',
    href: '/gifts/for-mom',
    image: 'https://static.lassana.com/cdn-cgi/image/width=500,quality=93,f=auto/product_images/prod-13792-175164119672819.jpg',
    bg: 'bg-pink-50',
  },
  {
    name: 'For him',
    href: '/gifts/for-him',
    image: 'https://static.lassana.com/cdn-cgi/image/width=500,quality=93,f=auto/product_images/prod-15409-1779256870217170.jpg',
    bg: 'bg-blue-50',
  },
  {
    name: 'For Friends',
    href: '/gifts/for-friends',
    image: 'https://static.lassana.com/cdn-cgi/image/width=500,quality=93,f=auto/product_images/prod-8189-177028915812147.png',
    bg: 'bg-purple-50',
  },
  {
    name: 'For dad',
    href: '/gifts/for-dad',
    image: 'https://static.lassana.com/cdn-cgi/image/width=500,quality=93,f=auto/product_images/prod-15361-177773439740463.jpg',
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
