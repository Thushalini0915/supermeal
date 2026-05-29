import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 antialiased min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
