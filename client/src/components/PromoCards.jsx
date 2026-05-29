import { Link } from 'react-router-dom'

const promos = [
  {
    href: '/money-delivery',
    image: 'https://static.lassana.com/cdn-cgi/image/width=600,quality=93,f=auto/banner_images/banner-1777987011653100.jpg',
    alt: 'Gift Money Delivery',
  },
  {
    href: '/supermarket',
    image: 'https://static.lassana.com/cdn-cgi/image/width=600,quality=93,f=auto/banner_images/banner-17662605605841100.png',
    alt: 'Free Delivery',
  },
  {
    href: '/pharmacy',
    image: 'https://static.lassana.com/cdn-cgi/image/width=600,quality=93,f=auto/banner_images/banner-17753527694441100.jpg',
    alt: 'Pharmacy & Health',
  },
]

function PromoCards() {
  return (
    <section className="py-4 md:py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-3 md:gap-4">
          {promos.map((promo) => (
            <Link key={promo.alt} to={promo.href} className="block rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img src={promo.image} alt={promo.alt} className="w-full h-auto object-cover" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromoCards
