import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <div className="bg-gray-50 font-sans text-gray-800 antialiased min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/flowers" element={<CategoryPage />} />
          <Route path="/cakes" element={<CategoryPage />} />
          <Route path="/supermarket" element={<CategoryPage />} />
          <Route path="/pharmacy" element={<CategoryPage />} />
          <Route path="/hampers" element={<CategoryPage />} />
          <Route path="/gifts" element={<CategoryPage />} />
          <Route path="/daily-deals" element={<CategoryPage />} />
          <Route path="/products/:sectionName" element={<CategoryPage />} />
        </Routes>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App
