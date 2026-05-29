import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="py-8 md:py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-xl md:text-2xl font-black text-gray-900 mb-3">SUBSCRIBE TO US</h3>
          <p className="text-gray-500 text-sm mb-6 leading-relaxed">
            We're ready to work together to get your products delivered on time. Subscribe to our newsletters to receive SuperMeal.lk emails and be the first to know about exclusive offers, promotions, and more.
          </p>
          <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-l-md text-sm outline-none focus:border-green-600"
              required
            />
            <button type="submit" className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-r-md font-bold text-sm transition-colors whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
