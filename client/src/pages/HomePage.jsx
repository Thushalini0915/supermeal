import Hero from '../components/Hero'
import CategoryBubbles from '../components/CategoryBubbles'
import PromoCards from '../components/PromoCards'
import ProductGrid from '../components/ProductGrid'
import GiftByRecipient from '../components/GiftByRecipient'
import BrandsSection from '../components/BrandsSection'
import BloomsBanner from '../components/BloomsBanner'
import PopularCategories from '../components/PopularCategories'
import FarmBanner from '../components/FarmBanner'
import TrustPropositions from '../components/TrustPropositions'
import Newsletter from '../components/Newsletter'
import { superDealsProducts, bestSellerProducts, newArrivalProducts, featuredProducts } from '../data/products'

function HomePage() {
  return (
    <>
      <Hero />
      <CategoryBubbles />
      <PromoCards />
      <ProductGrid title="SUPER DEALS" section="super-deals" fallbackData={superDealsProducts} />
      <GiftByRecipient />
      <BrandsSection />
      <ProductGrid title="BEST SELLERS" section="best-sellers" fallbackData={bestSellerProducts} />
      <BloomsBanner />
      <ProductGrid title="NEW ARRIVALS" section="new-arrivals" fallbackData={newArrivalProducts} />
      <PopularCategories />
      <ProductGrid title="FEATURED PRODUCTS" section="featured" fallbackData={featuredProducts} />
      <FarmBanner />
      <TrustPropositions />
      <Newsletter />
    </>
  )
}

export default HomePage
