const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Product = require('./models/Product')
const Category = require('./models/Category')

dotenv.config()

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/supermeal'

const categories = [
  { name: 'Flowers', icon: 'fas fa-seedling', bgColor: 'bg-amber-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1714987625037.png', slug: 'flowers' },
  { name: 'Cakes and Bakes', icon: 'fas fa-birthday-cake', bgColor: 'bg-pink-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1705663688238.png', slug: 'cakes-and-bakes' },
  { name: 'Supermarket', icon: 'fas fa-store', bgColor: 'bg-green-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1705664187085.png', slug: 'supermarket' },
  { name: 'Pharmacy', icon: 'fas fa-pills', bgColor: 'bg-blue-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1705908431460.png', slug: 'pharmacy' },
  { name: 'Fruit & Veggie', icon: 'fas fa-apple-whole', bgColor: 'bg-orange-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1705664565820.png', slug: 'fruit-veggie' },
  { name: 'Hampers', icon: 'fas fa-gift', bgColor: 'bg-purple-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1776404427611197.png', slug: 'hampers' },
  { name: 'Chocolates & Cookies', icon: 'fas fa-cookie-bite', bgColor: 'bg-yellow-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1705664676640.png', slug: 'chocolates-cookies' },
  { name: 'Traditional Treats', icon: 'fas fa-candy-cane', bgColor: 'bg-red-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1705664763765.png', slug: 'traditional-treats' },
  { name: 'Gifts', icon: 'fas fa-gifts', bgColor: 'bg-indigo-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1705664830234.png', slug: 'gifts' },
  { name: 'Toys', icon: 'fas fa-puzzle-piece', bgColor: 'bg-sky-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1714992107455.png', slug: 'toys' },
  { name: 'Plants', icon: 'fas fa-leaf', bgColor: 'bg-emerald-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1714992107455.png', slug: 'plants' },
  { name: 'Perfumes', icon: 'fas fa-spray-can-sparkles', bgColor: 'bg-violet-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1705665244283.png', slug: 'perfumes' },
  { name: 'Gift Vouchers', icon: 'fas fa-ticket', bgColor: 'bg-teal-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1714992287792.png', slug: 'gift-vouchers' },
  { name: 'Jewelry', icon: 'fas fa-gem', bgColor: 'bg-rose-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1714993007577.png', slug: 'jewelry' },
  { name: 'Home & Living', icon: 'fas fa-couch', bgColor: 'bg-cyan-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1714993257527.png', slug: 'home-living' },
  { name: 'Greeting Cards', icon: 'fas fa-envelope-open-text', bgColor: 'bg-lime-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1714993371523.png', slug: 'greeting-cards' },
  { name: 'Pirikara & Pooja Bhanda', icon: 'fas fa-om', bgColor: 'bg-fuchsia-50', image: 'https://static.lassana.com/cdn-cgi/image/width=100,quality=93,f=auto/category_images/cat-1714993456783.png', slug: 'pirikara-pooja-bhanda' },
]

const products = [
  // SUPER DEALS
  { name: 'THE PROMISE', price: 4037.50, originalPrice: 4750.00, discount: '15% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-15410-177926100238241.jpg', category: 'flowers', section: 'super-deals' },
  { name: 'KHOMBA BABY COLOGNE FLORAL 50ML', price: 370.00, originalPrice: 435.00, discount: '15% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-5554-1739958489088195.png', category: 'pharmacy', section: 'super-deals' },
  { name: 'KHOMBA BABY CREAM RATHMAL 100ML', price: 345.00, originalPrice: 406.00, discount: '15% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-5557-1694168497317.jpg', category: 'pharmacy', section: 'super-deals' },
  { name: 'ENCHANTED ROMANCE BUNDLE', price: 2990.00, originalPrice: 3517.00, discount: '15% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-12439-1740397899173155.png', category: 'gifts', section: 'super-deals' },
  { name: 'AIR FRAGRANCE VALUE PACK', price: 3950.00, originalPrice: 4650.00, discount: '15% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14756-177170610571576.png', category: 'gifts', section: 'super-deals' },
  { name: 'KHOMBA BODYWASH LEMONGRASS 250ML', price: 730.00, originalPrice: 860.00, discount: '15% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-5556-1694168371610.jpg', category: 'pharmacy', section: 'super-deals' },
  { name: 'RANI SHOWER CREAM SANDALWOOD 250ML', price: 730.00, originalPrice: 860.00, discount: '15% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-6244-1694254043839.jpg', category: 'pharmacy', section: 'super-deals' },
  { name: 'HER MAJESTY BODY MIST SILK MUSK 135ML', price: 1590.00, originalPrice: null, discount: null, badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14756-17721541407289.png', category: 'perfumes', section: 'super-deals' },
  { name: 'HER MAJESTY BODY MIST FLORAL MISS 135ML', price: 1590.00, originalPrice: null, discount: null, badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14756-177215414072810.png', category: 'perfumes', section: 'super-deals' },
  { name: 'HER MAJESTY BODY MIST PINK BLUSH 135ML', price: 1590.00, originalPrice: null, discount: null, badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14756-177215414072811.png', category: 'perfumes', section: 'super-deals' },

  // BEST SELLERS
  { name: 'THE PROMISE', price: 4037.50, originalPrice: 4750.00, discount: '15% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-15410-177926100238241.jpg', category: 'flowers', section: 'best-sellers' },
  { name: 'TO MY HERO', price: 4037.50, originalPrice: 4750.00, discount: '15% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-15409-1779256870217170.jpg', category: 'flowers', section: 'best-sellers' },
  { name: 'SUNSET ROMANCE', price: 2450.00, originalPrice: 2580.00, discount: '5% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-13792-175164119672819.jpg', category: 'flowers', section: 'best-sellers' },
  { name: 'CRIMSON RADIANCE', price: 2450.00, originalPrice: 2580.00, discount: '5% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-13125-177788901651936.png', category: 'flowers', section: 'best-sellers' },
  { name: 'EXOTIC MIX FRUIT BASKET', price: 5250.00, originalPrice: null, discount: null, badge: 'BEST SELLER', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-2627-1753858694069161.jpg', category: 'fruit', section: 'best-sellers' },
  { name: 'BERRY CHOCO JARDIN 1KG CHOCOLATE CAKE', price: 6250.00, originalPrice: null, discount: null, badge: 'BEST SELLER', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-3282-175368012283654.png', category: 'cakes', section: 'best-sellers' },
  { name: 'FOREVER IN BLOOM', price: 4250.00, originalPrice: null, discount: null, badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-15361-177773439740463.jpg', category: 'flowers', section: 'best-sellers' },
  { name: 'HEARTSTOPPER', price: 16450.00, originalPrice: null, discount: null, badge: 'BEST SELLER', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-13125-177788901651936.png', category: 'flowers', section: 'best-sellers' },
  { name: 'LOVE AT FIRST SLICE CAKE 1KG', price: 6550.00, originalPrice: null, discount: null, badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-3282-175368012283654.png', category: 'cakes', section: 'best-sellers' },
  { name: 'THANK YOU, MUM CAKE RIBBON CAKE', price: 5300.00, originalPrice: null, discount: null, badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-3282-175368012283654.png', category: 'cakes', section: 'best-sellers' },

  // NEW ARRIVALS
  { name: 'PROMATE ACADEMIC ESSENTIALS PACK', price: 7840.00, originalPrice: null, discount: null, badge: 'NEW', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14938-177908987994547.jpg', category: 'gifts', section: 'new-arrivals' },
  { name: 'SOBAKO CORN PITTU FLOUR 400G', price: 645.00, originalPrice: null, discount: null, badge: 'NEW', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14957-1779442625803180.png', category: 'supermarket', section: 'new-arrivals' },
  { name: 'TURBO NITRO CLASSIC 250ML', price: 290.00, originalPrice: 320.00, discount: '9% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14948-177931447218260.png', category: 'supermarket', section: 'new-arrivals' },
  { name: 'SOBAKO SUWANDEL STRING HOPPER FLOUR 400G', price: 590.00, originalPrice: null, discount: null, badge: 'NEW', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14957-177944262580310.png', category: 'supermarket', section: 'new-arrivals' },
  { name: 'KOTTUME KOCHCHI & CHICKEN 78G - ELLA STYLE', price: 135.00, originalPrice: null, discount: null, badge: 'NEW', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14641-1763618824940152.png', category: 'supermarket', section: 'new-arrivals' },
  { name: 'CAILA BATH TOWEL 27"X54"', price: 3670.00, originalPrice: 4200.00, discount: '13% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14330-176310233962320.png', category: 'gifts', section: 'new-arrivals' },
  { name: 'KOTTUME KOREAN RAMEN CHICKEN MASALA 117G', price: 300.00, originalPrice: null, discount: null, badge: 'NEW', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14641-1763618824940152.png', category: 'supermarket', section: 'new-arrivals' },
  { name: 'TURBO NITRO PREMIUM 250ML', price: 475.00, originalPrice: 530.00, discount: '10% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14948-177931447218260.png', category: 'supermarket', section: 'new-arrivals' },
  { name: 'KOTTUME NAI MIRIS & SEAFOOD 80G - MIRISSA STYLE', price: 135.00, originalPrice: null, discount: null, badge: 'NEW', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14641-1763618824940152.png', category: 'supermarket', section: 'new-arrivals' },
  { name: 'CAILA FACE TOWEL 20"X40"', price: 2220.00, originalPrice: 2550.00, discount: '13% OFF', badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-14330-176310233962320.png', category: 'gifts', section: 'new-arrivals' },

  // FEATURED
  { name: 'HEARTSTOPPER', price: 16450.00, originalPrice: null, discount: null, badge: 'BEST SELLER', image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-13125-177788901651936.png', category: 'flowers', section: 'featured' },
  { name: "Gentleman's Toast Chocolate Cake 1.6KG", price: 7950.00, originalPrice: null, discount: null, badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-809-1692784184249.jpg', category: 'cakes', section: 'featured' },
  { name: 'GRAND WELLNESS BLOSSOM BUNDLE', price: 9100.00, originalPrice: null, discount: null, badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-8189-177028915812147.png', category: 'gifts', section: 'featured' },
  { name: 'SEBASTIAN STRAWBERRY BAKED CHEESE CAKE', price: 7000.00, originalPrice: null, discount: null, badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-3282-175368012283654.png', category: 'cakes', section: 'featured' },
  { name: "RADIANT GLOW WOMEN'S DAY GIFT PACK", price: 10000.00, originalPrice: null, discount: null, badge: null, image: 'https://static.lassana.com/cdn-cgi/image/width=350,quality=93,f=auto/product_images/prod-8189-177028915812147.png', category: 'gifts', section: 'featured' },
]

async function seed() {
  try {
    await mongoose.connect(MONGO_URI)
    console.log('Connected to MongoDB')

    // Clear existing data
    await Product.deleteMany({})
    await Category.deleteMany({})
    console.log('Cleared existing data')

    // Seed categories
    await Category.insertMany(categories)
    console.log(`Seeded ${categories.length} categories`)

    // Seed products
    await Product.insertMany(products)
    console.log(`Seeded ${products.length} products`)

    console.log('Seeding complete!')
    process.exit(0)
  } catch (error) {
    console.error('Seeding error:', error)
    process.exit(1)
  }
}

seed()
