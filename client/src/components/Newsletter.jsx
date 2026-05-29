import { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <section className="py-8 md:py-10 bg-green-700">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-2">Subscribe To Our Newsletter</h3>
        <p className="text-green-200 text-sm mb-6">Get the latest updates on new products and upcoming sales</p>
        <form onSubmit={handleSubmit} className="flex max-w-md mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-l-lg text-sm outline-none"
            required
          />
          <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-lg font-semibold text-sm transition-colors whitespace-nowrap">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
