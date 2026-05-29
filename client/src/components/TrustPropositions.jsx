function TrustPropositions() {
  const items = [
    { icon: 'fas fa-shipping-fast', title: 'SHIPPING', desc: 'Delivery Starts from Rs. 200' },
    { icon: 'fas fa-credit-card', title: 'MULTIPLE PAYMENT OPTIONS', desc: 'Credit/Debit Cards, Bank Transfer & Cash Deposit available' },
    { icon: 'fas fa-shield-halved', title: 'SECURED PAYMENTS', desc: 'Payments are secured by Commercial Bank, Sampath Bank & Nations Trust Bank' },
    { icon: 'fas fa-store-alt', title: 'BRANCH NETWORK', desc: 'Colombo 07, Nawala, Panadura, Negombo, Kandy, Jaffna' },
  ]

  return (
    <section className="py-8 md:py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center">
                <i className={`${item.icon} text-green-600 text-2xl`}></i>
              </div>
              <div>
                <h4 className="font-bold text-xs md:text-sm text-gray-800 uppercase">{item.title}</h4>
                <p className="text-[11px] md:text-xs text-gray-500 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustPropositions
