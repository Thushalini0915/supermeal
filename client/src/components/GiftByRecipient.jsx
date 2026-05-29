import { Link } from 'react-router-dom'

const recipients = [
  { name: 'FOR HER', bg: 'bg-pink-100', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-15410-177926100238241.jpg' },
  { name: 'FOR KIDS', bg: 'bg-yellow-100', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-809-1692784184249.jpg' },
  { name: 'FOR MOM', bg: 'bg-green-100', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-13792-175164119672819.jpg' },
  { name: 'FOR HIM', bg: 'bg-blue-50', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-15409-1779256870217170.jpg' },
  { name: 'FOR FRIENDS', bg: 'bg-purple-100', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-8189-177028915812147.png' },
  { name: 'FOR DAD', bg: 'bg-sky-100', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-15361-177773439740463.jpg' },
]

function GiftByRecipient() {
  return (
    <section className="py-6 md:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6">GIFT BY RECIPIENT</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {recipients.map((r) => (
            <Link key={r.name} to={`/gifts/${r.name.toLowerCase().replace(/ /g, '-')}`} className={`relative rounded-2xl overflow-hidden group h-48 md:h-64 ${r.bg}`}>
              <div className="absolute inset-0 p-5 flex flex-col justify-start z-10">
                <h3 className="text-xl md:text-2xl font-black text-gray-900">{r.name}</h3>
                <span className="flex items-center gap-2 text-sm font-semibold text-gray-700 mt-2">Shop Now <i className="fas fa-arrow-right text-xs"></i></span>
              </div>
              <img src={r.image} alt={r.name} className="absolute bottom-0 right-0 w-32 md:w-44 h-auto object-contain group-hover:scale-105 transition-transform" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GiftByRecipient
