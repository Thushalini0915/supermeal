function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-pink-100 via-green-50 to-pink-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 items-center min-h-[350px] md:min-h-[420px] px-4 md:px-8">
          <div className="py-8 md:py-12">
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
              Your Time,<br/>Your Delivery.
            </h1>
            <div className="space-y-3">
              <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-5 py-2 text-sm font-semibold shadow-md">
                <span className="font-normal">ORDER BEFORE 4AM FOR</span><br/>
                <span className="font-bold text-base">MORNING DELIVERY (6AM - 12PM)</span>
              </div>
              <div className="block"></div>
              <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-5 py-2 text-sm font-semibold shadow-md">
                <span className="font-normal">ORDER BEFORE 11AM FOR</span><br/>
                <span className="font-bold text-base">AFTERNOON DELIVERY (12PM - 6PM)</span>
              </div>
              <div className="block"></div>
              <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full px-5 py-2 text-sm font-semibold shadow-md">
                <span className="font-normal">ORDER BEFORE 4PM FOR</span><br/>
                <span className="font-bold text-base">EVENING DELIVERY (6PM - 10PM)</span>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-4">*VALID FOR COLOMBO DISTRICT, WATTALA &amp; KELANIYA.</p>
          </div>
          <div className="hidden md:flex justify-center items-center">
            <img src="https://static.lassana.com/cdn-cgi/image/width=1920,quality=93,f=auto/banner_images/banner-1777972667933100.png" alt="Delivery" className="max-h-[400px] w-full object-contain" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
