function TrustPropositions() {
  const items = [
    { icon: 'fas fa-truck', title: 'ISLAND WIDE SHIPPING', desc: 'Delivery starts from Rs. 200' },
    { icon: 'fas fa-credit-card', title: 'MULTIPLE PAYMENT OPTIONS', desc: 'Credit/Debit Cards, Bank Transfer' },
    { icon: 'fas fa-shield-halved', title: 'SECURED PAYMENTS', desc: 'Commercial Bank, Sampath Bank' },
    { icon: 'fas fa-store', title: 'BRANCH NETWORK', desc: 'Island Wide Coverage' },
  ]

  return (
    <section className="py-8 md:py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-3">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center">
                <i className={`${item.icon} text-green-600 text-xl`}></i>
              </div>
              <div>
                <h4 className="font-bold text-sm text-gray-800">{item.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustPropositions
