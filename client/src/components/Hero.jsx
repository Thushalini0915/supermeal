function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-pink-50 via-white to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-center min-h-[300px] md:min-h-[400px] px-4 md:px-8">
          <div className="py-8 md:py-12">
            <h1 className="text-4xl md:text-[56px] font-black text-gray-900 leading-[1.1] mb-8">
              Your Time,<br/>Your Delivery.
            </h1>
            <div className="space-y-2.5">
              <div className="inline-flex flex-col bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full px-5 py-2 shadow-md">
                <span className="text-[11px] font-medium tracking-wide">ORDER BEFORE 4AM FOR</span>
                <span className="font-black text-sm md:text-base tracking-wide">MORNING DELIVERY (6AM - 12PM)</span>
              </div>
              <div className="block"></div>
              <div className="inline-flex flex-col bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full px-5 py-2 shadow-md">
                <span className="text-[11px] font-medium tracking-wide">ORDER BEFORE 11AM FOR</span>
                <span className="font-black text-sm md:text-base tracking-wide">AFTERNOON DELIVERY (12PM - 6PM)</span>
              </div>
              <div className="block"></div>
              <div className="inline-flex flex-col bg-gradient-to-r from-purple-400 to-pink-400 text-white rounded-full px-5 py-2 shadow-md">
                <span className="text-[11px] font-medium tracking-wide">ORDER BEFORE 4PM FOR</span>
                <span className="font-black text-sm md:text-base tracking-wide">EVENING DELIVERY (6PM - 10PM)</span>
              </div>
            </div>
            <p className="text-[11px] text-gray-400 mt-4">*VALID FOR COLOMBO DISTRICT, WATTALA &amp; KELANIYA.</p>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <img src="https://static.lassana.com/cdn-cgi/image/width=1920,quality=93,f=auto/banner_images/banner-1777972667933100.png" alt="Delivery" className="max-h-[380px] w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
