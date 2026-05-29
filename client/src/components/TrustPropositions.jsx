function TrustPropositions() {
  const items = [
    { icon: 'fas fa-shipping-fast', title: 'ISLAND WIDE SHIPPING', desc: 'Reliable delivery starting from Rs. 200' },
    { icon: 'fas fa-credit-card', title: 'MULTIPLE PAYMENT OPTIONS', desc: 'Visa, MasterCard, Amex & Bank Transfer' },
    { icon: 'fas fa-shield-alt', title: 'SECURED PAYMENTS', desc: 'Fully encrypted and certified checkouts' },
    { icon: 'fas fa-store-alt', title: 'BRANCH NETWORK', desc: 'Island-wide branch coverage & pickup options' },
  ]

  return (
    <section className="py-10 md:py-12 bg-white border-t border-gray-100 font-sans">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div 
              key={item.title} 
              className="flex flex-col items-center text-center gap-3.5 group cursor-default"
            >
              {/* Outer icon container with hover scale/spin */}
              <div className="w-16 h-16 bg-brand-green-light rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xs">
                <i className={`${item.icon} text-brand-green text-2xl transition-transform duration-500 group-hover:rotate-6`}></i>
              </div>
              <div className="space-y-1">
                <h4 className="font-heading font-black text-xs md:text-sm text-gray-800 tracking-wider uppercase">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed max-w-[200px] mx-auto font-medium">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustPropositions

