import { Link } from 'react-router-dom'

function PromoCards() {
  const cards = [
    {
      title: "Fresh Produce",
      subtitle: "Straight from local fields to your basket",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=500&auto=format&fit=crop",
      link: "/supermarket",
      bgClass: "bg-brand-olive",
      tag: "100% ORGANIC"
    },
    {
      title: "Pharmacy & Wellness",
      subtitle: "Your essential prescriptions & healthcare needs",
      image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=500&auto=format&fit=crop",
      link: "/pharmacy",
      bgClass: "bg-brand-olive",
      tag: "CERTIFIED MEDICINES"
    }
  ]

  return (
    <section className="py-6 md:py-8 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow h-60 border border-gray-100 bg-white"
            >
              {/* Left Side Image */}
              <div className="sm:w-1/2 relative h-full">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
                <span className="absolute top-4 left-4 bg-brand-orange text-white font-heading font-bold text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                  {card.tag}
                </span>
              </div>
              
              {/* Right Side Olive Green Block */}
              <div className={`${card.bgClass} sm:w-1/2 p-6 md:p-8 flex flex-col justify-between text-left text-white`}>
                <div className="space-y-2">
                  <h3 className="font-heading font-black text-xl md:text-2xl tracking-tight leading-tight uppercase">
                    {card.title}
                  </h3>
                  <p className="text-gray-200 text-xs font-medium leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
                <div className="pt-4">
                  <Link 
                    to={card.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase bg-white/10 hover:bg-white text-white hover:text-brand-green border border-white/20 hover:border-transparent px-4 py-2.5 rounded-full transition-all"
                  >
                    <span>SHOP NOW</span>
                    <i className="fas fa-arrow-right text-[10px]"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PromoCards

