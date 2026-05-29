# SuperMeal.lk - MERN Stack E-Commerce Application

A full-stack e-commerce web application built with the **MERN stack** (MongoDB, Express.js, React, Node.js). Features a pixel-perfect homepage inspired by Lassana.com with SuperMeal.lk branding.

## Tech Stack

- **Frontend:** React 18 + Vite + Tailwind CSS v4 + React Router v6
- **Backend:** Express.js + Node.js
- **Database:** MongoDB + Mongoose
- **Icons:** FontAwesome v6
- **Fonts:** Google Fonts (Inter)

## Project Structure

```
supermeal/
├── client/               # React frontend (Vite)
│   ├── public/           # Static assets (logo, favicon)
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Page components
│   │   ├── data/         # Fallback data (products, categories)
│   │   ├── context/      # React Context (cart, auth)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css     # Tailwind imports + custom styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── server/               # Express backend
│   ├── config/           # Database config
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── index.js          # Server entry point
│   ├── seed.js           # Database seeder
│   └── package.json
├── package.json          # Root package.json (concurrently)
└── index.html            # Original static HTML (reference)
```

## Getting Started

### Prerequisites

- Node.js v18+
- MongoDB (local or Atlas)

### Installation

```bash
# Install all dependencies (root + client + server)
npm run install-all

# Seed the database with sample products and categories
npm run seed
```

### Development

```bash
# Run both frontend and backend concurrently
npm run dev
```

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | Health check |
| GET | `/api/products` | Get all products |
| GET | `/api/products?section=super-deals` | Filter by section |
| GET | `/api/products?category=flowers` | Filter by category |
| GET | `/api/products/:id` | Get single product |
| POST | `/api/products` | Create product |
| PUT | `/api/products/:id` | Update product |
| DELETE | `/api/products/:id` | Delete product |
| GET | `/api/categories` | Get all categories |
| GET | `/api/categories/:slug` | Get category by slug |
| POST | `/api/categories` | Create category |

### Environment Variables

Create a `.env` file in the `server/` directory:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/supermeal
```

### Build for Production

```bash
npm run build
```

## Features

- Sticky header with search, categories dropdown, cart badge
- Hero banner with delivery schedule
- Quick category navigation bubbles
- Multi-promo banner cards (Supermarket, Pharmacy, Daily Deals)
- Product grids: Super Deals, Best Sellers, New Arrivals, Featured
- Gift by Recipient section
- 527+ Brands carousel
- Popular Categories visual grid
- Trust propositions (shipping, payments, security)
- Newsletter subscription
- Responsive footer with social links
- Mobile-first responsive design
- MongoDB-backed product catalog with REST API
