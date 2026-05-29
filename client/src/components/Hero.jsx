import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const autoPlayRef = useRef()

  const slides = [
    {
      title: "Say It With Flowers",
      subtitle: "Handcrafted fresh floral arrangements designed to celebrate life's most beautiful moments. Order today for same-day express delivery.",
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=800&auto=format&fit=crop",
      cta: "Explore Flowers",
      link: "/flowers",
      bgGradient: "from-pink-100 via-rose-50 to-emerald-50"
    },
    {
      title: "Indulgent Gourmet Cakes",
      subtitle: "Freshly baked artisan gateaux, ribbon cakes, and cupcakes. Crafted by master pastry chefs to sweeten your celebrations.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=800&auto=format&fit=crop",
      cta: "Shop Cakes",
      link: "/cakes",
      bgGradient: "from-amber-100 via-orange-50 to-pink-50"
    },
    {
      title: "Farm Fresh Groceries",
      subtitle: "Enjoy premium fruits, vegetables, and household essentials sourced directly from local farmers and delivered in 24 hours.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=800&auto=format&fit=crop",
      cta: "Order Supermarket",
      link: "/supermarket",
      bgGradient: "from-emerald-100 via-teal-50 to-amber-50"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    autoPlayRef.current = nextSlide
  })

  useEffect(() => {
    const play = () => {
      autoPlayRef.current()
    }
    const interval = setInterval(play, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative overflow-hidden group">
      {/* Slider Wrapper */}
      <div className="relative min-h-[460px] md:min-h-[520px] w-full flex items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out flex items-center bg-gradient-to-r ${slide.bgGradient} ${
              index === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-95 pointer-events-none'
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full grid md:grid-cols-12 gap-8 items-center py-10">
              {/* Text Block */}
              <div className="md:col-span-6 space-y-6 text-left">
                <h1 className="text-4xl md:text-6xl font-heading font-black text-gray-900 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base text-gray-600 font-medium leading-relaxed max-w-xl">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-3 pt-2">
                  <Link 
                    to={slide.link} 
                    className="btn-premium bg-brand-green hover:bg-brand-green-hover text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg"
                  >
                    {slide.cta}
                  </Link>
                  <Link 
                    to="/daily-deals" 
                    className="btn-premium bg-white hover:bg-gray-50 text-brand-green border border-brand-green px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow"
                  >
                    View Deals
                  </Link>
                </div>
              </div>

              {/* Image Block */}
              <div className="md:col-span-6 flex justify-center items-center relative">
                <div className="relative w-full max-w-[420px] h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-lg border border-white/50 bg-white/20 backdrop-blur-xs flex items-center justify-center p-2">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover rounded-xl transition-all duration-700 hover:scale-105" 
                  />
                  
                  {/* Floating badge for delivery schedules */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-emerald-50 shadow-md text-left hidden sm:block">
                    <span className="text-[10px] text-brand-green font-black uppercase tracking-wider block">Express Slots</span>
                    <span className="text-xs text-gray-800 font-bold mt-0.5 block">Delivery available across Colombo within 3-4 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slider Left/Right Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none border border-gray-100"
      >
        <i className="fas fa-chevron-left text-sm"></i>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 w-10 h-10 rounded-full flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity focus:outline-none border border-gray-100"
      >
        <i className="fas fa-chevron-right text-sm"></i>
      </button>

      {/* Slider Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-brand-green w-7' : 'bg-gray-400/60 hover:bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </section>
  )
}

export default Hero

