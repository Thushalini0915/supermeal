const mongoose = require('mongoose')
const dotenv = require('dotenv')
const Product = require('./models/Product')
const Category = require('./models/Category')

dotenv.config()

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/supermeal'

const categories = [
  { name: 'Flowers', icon: 'fas fa-seedling', bgColor: 'bg-amber-50', image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&q=80', slug: 'flowers' },
  { name: 'Cakes and Bakes', icon: 'fas fa-birthday-cake', bgColor: 'bg-pink-50', image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&q=80', slug: 'cakes-and-bakes' },
  { name: 'Supermarket', icon: 'fas fa-store', bgColor: 'bg-green-50', image: 'https://images.unsplash.com/photo-1587334206502-7b76f5054173?w=500&q=80', slug: 'supermarket' },
  { name: 'Pharmacy', icon: 'fas fa-pills', bgColor: 'bg-blue-50', image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500&q=80', slug: 'pharmacy' },
  { name: 'Fruit & Veggie', icon: 'fas fa-apple-whole', bgColor: 'bg-orange-50', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80', slug: 'fruit-veggie' },
  { name: 'Hampers', icon: 'fas fa-gift', bgColor: 'bg-purple-50', image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=500&q=80', slug: 'hampers' },
  { name: 'Chocolates & Cookies', icon: 'fas fa-cookie-bite', bgColor: 'bg-yellow-50', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80', slug: 'chocolates-cookies' },
  { name: 'Traditional Treats', icon: 'fas fa-candy-cane', bgColor: 'bg-red-50', image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?w=500&q=80', slug: 'traditional-treats' },
  { name: 'Gifts', icon: 'fas fa-gifts', bgColor: 'bg-indigo-50', image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80', slug: 'gifts' },
  { name: 'Toys', icon: 'fas fa-puzzle-piece', bgColor: 'bg-sky-50', image: 'https://images.unsplash.com/photo-1558961309-dbdf07c42734?w=500&q=80', slug: 'toys' },
  { name: 'Plants', icon: 'fas fa-leaf', bgColor: 'bg-emerald-50', image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&q=80', slug: 'plants' },
  { name: 'Perfumes', icon: 'fas fa-spray-can-sparkles', bgColor: 'bg-violet-50', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80', slug: 'perfumes' },
  { name: 'Gift Vouchers', icon: 'fas fa-ticket', bgColor: 'bg-teal-50', image: 'https://images.unsplash.com/photo-1610832958506-ee5633619144?w=500&q=80', slug: 'gift-vouchers' },
  { name: 'Jewelry', icon: 'fas fa-gem', bgColor: 'bg-rose-50', image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=500&q=80', slug: 'jewelry' },
  { name: 'Home & Living', icon: 'fas fa-couch', bgColor: 'bg-cyan-50', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&q=80', slug: 'home-living' },
  { name: 'Greeting Cards', icon: 'fas fa-envelope-open-text', bgColor: 'bg-lime-50', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80', slug: 'greeting-cards' },
  { name: 'Pirikara & Pooja Bhanda', icon: 'fas fa-om', bgColor: 'bg-fuchsia-50', image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&q=80', slug: 'pirikara-pooja-bhanda' },
]

const products = [
  // SUPER DEALS
  { name: 'THE PROMISE', price: 4037.50, originalPrice: 4750.00, discount: '15% OFF', badge: null, image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&q=80', category: 'flowers', section: 'super-deals' },
  { name: 'KHOMBA BABY COLOGNE FLORAL 50ML', price: 370.00, originalPrice: 435.00, discount: '15% OFF', badge: null, image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500&q=80', category: 'pharmacy', section: 'super-deals' },
  { name: 'KHOMBA BABY CREAM RATHMAL 100ML', price: 345.00, originalPrice: 406.00, discount: '15% OFF', badge: null, image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500&q=80', category: 'pharmacy', section: 'super-deals' },
  { name: 'ENCHANTED ROMANCE BUNDLE', price: 2990.00, originalPrice: 3517.00, discount: '15% OFF', badge: null, image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', category: 'gifts', section: 'super-deals' },
  { name: 'AIR FRAGRANCE VALUE PACK', price: 3950.00, originalPrice: 4650.00, discount: '15% OFF', badge: null, image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&q=80', category: 'gifts', section: 'super-deals' },
  { name: 'KHOMBA BODYWASH LEMONGRASS 250ML', price: 730.00, originalPrice: 860.00, discount: '15% OFF', badge: null, image: 'https://images.unsplash.com/photo-1550572017-edd951b55104?w=500&q=80', category: 'pharmacy', section: 'super-deals' },
  { name: 'RANI SHOWER CREAM SANDALWOOD 250ML', price: 730.00, originalPrice: 860.00, discount: '15% OFF', badge: null, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=500&q=80', category: 'pharmacy', section: 'super-deals' },
  { name: 'HER MAJESTY BODY MIST SILK MUSK 135ML', price: 1590.00, originalPrice: null, discount: null, badge: null, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80', category: 'perfumes', section: 'super-deals' },
  { name: 'HER MAJESTY BODY MIST FLORAL MISS 135ML', price: 1590.00, originalPrice: null, discount: null, badge: null, image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500&q=80', category: 'perfumes', section: 'super-deals' },
  { name: 'HER MAJESTY BODY MIST PINK BLUSH 135ML', price: 1590.00, originalPrice: null, discount: null, badge: null, image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500&q=80', category: 'perfumes', section: 'super-deals' },

  // BEST SELLERS
  { name: 'THE PROMISE', price: 4037.50, originalPrice: 4750.00, discount: '15% OFF', badge: null, image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&q=80', category: 'flowers', section: 'best-sellers' },
  { name: 'TO MY HERO', price: 4037.50, originalPrice: 4750.00, discount: '15% OFF', badge: null, image: 'https://images.unsplash.com/photo-1587334206502-7b76f5054173?w=500&q=80', category: 'flowers', section: 'best-sellers' },
  { name: 'SUNSET ROMANCE', price: 2450.00, originalPrice: 2580.00, discount: '5% OFF', badge: null, image: 'https://images.unsplash.com/photo-1596436889106-be35e843f974?w=500&q=80', category: 'flowers', section: 'best-sellers' },
  { name: 'CRIMSON RADIANCE', price: 2450.00, originalPrice: 2580.00, discount: '5% OFF', badge: null, image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=500&q=80', category: 'flowers', section: 'best-sellers' },
  { name: 'EXOTIC MIX FRUIT BASKET', price: 5250.00, originalPrice: null, discount: null, badge: 'BEST SELLER', image: 'https://images.unsplash.com/photo-1610832958506-ee5633619144?w=500&q=80', category: 'fruit', section: 'best-sellers' },
  { name: 'BERRY CHOCO JARDIN 1KG CHOCOLATE CAKE', price: 6250.00, originalPrice: null, discount: null, badge: 'BEST SELLER', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80', category: 'cakes', section: 'best-sellers' },
  { name: 'FOREVER IN BLOOM', price: 4250.00, originalPrice: null, discount: null, badge: null, image: 'https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=500&q=80', category: 'flowers', section: 'best-sellers' },
  { name: 'HEARTSTOPPER', price: 16450.00, originalPrice: null, discount: null, badge: 'BEST SELLER', image: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?w=500&q=80', category: 'flowers', section: 'best-sellers' },
  { name: 'LOVE AT FIRST SLICE CAKE 1KG', price: 6550.00, originalPrice: null, discount: null, badge: null, image: 'https://images.unsplash.com/photo-1535141192574-5d4897c13636?w=500&q=80', category: 'cakes', section: 'best-sellers' },
  { name: 'THANK YOU, MUM CAKE RIBBON CAKE', price: 5300.00, originalPrice: null, discount: null, badge: null, image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=500&q=80', category: 'cakes', section: 'best-sellers' },

  // NEW ARRIVALS
  { name: 'PROMATE ACADEMIC ESSENTIALS PACK', price: 7840.00, originalPrice: null, discount: null, badge: 'NEW', image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&q=80', category: 'gifts', section: 'new-arrivals' },
  { name: 'SOBAKO CORN PITTU FLOUR 400G', price: 645.00, originalPrice: null, discount: null, badge: 'NEW', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80', category: 'supermarket', section: 'new-arrivals' },
  { name: 'TURBO NITRO CLASSIC 250ML', price: 290.00, originalPrice: 320.00, discount: '9% OFF', badge: null, image: 'https://images.unsplash.com/photo-1610832958506-ee5633619144?w=500&q=80', category: 'supermarket', section: 'new-arrivals' },
  { name: 'SOBAKO SUWANDEL STRING HOPPER FLOUR 400G', price: 590.00, originalPrice: null, discount: null, badge: 'NEW', image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=500&q=80', category: 'supermarket', section: 'new-arrivals' },
  { name: 'KOTTUME KOCHCHI & CHICKEN 78G - ELLA STYLE', price: 135.00, originalPrice: null, discount: null, badge: 'NEW', image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500&q=80', category: 'supermarket', section: 'new-arrivals' },
  { name: 'CAILA BATH TOWEL 27"X54"', price: 3670.00, originalPrice: 4200.00, discount: '13% OFF', badge: null, image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', category: 'gifts', section: 'new-arrivals' },
  { name: 'KOTTUME KOREAN RAMEN CHICKEN MASALA 117G', price: 300.00, originalPrice: null, discount: null, badge: 'NEW', image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80', category: 'supermarket', section: 'new-arrivals' },
  { name: 'TURBO NITRO PREMIUM 250ML', price: 475.00, originalPrice: 530.00, discount: '10% OFF', badge: null, image: 'https://images.unsplash.com/photo-1610832958506-ee5633619144?w=500&q=80', category: 'supermarket', section: 'new-arrivals' },
  { name: 'KOTTUME NAI MIRIS & SEAFOOD 80G - MIRISSA STYLE', price: 135.00, originalPrice: null, discount: null, badge: 'NEW', image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=500&q=80', category: 'supermarket', section: 'new-arrivals' },
  { name: 'CAILA FACE TOWEL 20"X40"', price: 2220.00, originalPrice: 2550.00, discount: '13% OFF', badge: null, image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=500&q=80', category: 'gifts', section: 'new-arrivals' },

  // FEATURED
  { name: 'HEARTSTOPPER', price: 16450.00, originalPrice: null, discount: null, badge: 'BEST SELLER', image: 'https://images.unsplash.com/photo-1587334206502-7b76f5054173?w=500&q=80', category: 'flowers', section: 'featured' },
  { name: "Gentleman's Toast Chocolate Cake 1.6KG", price: 7950.00, originalPrice: null, discount: null, badge: null, image: 'https://images.unsplash.com/photo-1558961309-dbdf07c42734?w=500&q=80', category: 'cakes', section: 'featured' },
  { name: 'GRAND WELLNESS BLOSSOM BUNDLE', price: 9100.00, originalPrice: null, discount: null, badge: null, image: 'https://images.unsplash.com/photo-1481349518771-20055b2a7b24?w=500&q=80', category: 'gifts', section: 'featured' },
  { name: 'SEBASTIAN STRAWBERRY BAKED CHEESE CAKE', price: 7000.00, originalPrice: null, discount: null, badge: null, image: 'https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?w=500&q=80', category: 'cakes', section: 'featured' },
  { name: "RADIANT GLOW WOMEN'S DAY GIFT PACK", price: 10000.00, originalPrice: null, discount: null, badge: null, image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=500&q=80', category: 'gifts', section: 'featured' },
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
