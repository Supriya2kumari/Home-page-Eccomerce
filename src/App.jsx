import { useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import OffersSection from './components/OffersSection'
import BottomNavigation from './components/BottomNavigation'
import WishlistPage from './components/WishlistPage'
import CategoryPage from './components/CategoryPage'
import {topOffers, groceryDeals, pharmacySpecials, dailyEssentials} from './data/offerData'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [wishlist, setWishlist] = useState([])

  const toggleWishlist = (offer) => {
    setWishlist(prev => {
      const isInWishlist = prev.some(item => item.id === offer.id)
      return isInWishlist ? prev.filter(item => item.id !== offer.id) : [...prev, offer]
    })
  }

  const filterOffersBySearch = (offers) => {
    if (!searchTerm) return offers
    const term = searchTerm.toLowerCase()
    return offers.filter(offer => 
      offer.title.toLowerCase().includes(term) ||
      offer.retailer.name.toLowerCase().includes(term)
    )
  }

  const HomePage = () => (
    <>
      <Header 
        onSearch={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      <main className="px-4 pt-4 pb-20">
        {activeCategory === 'all' && (
          <OffersSection 
            title="Top Offers Near You" 
            offers={filterOffersBySearch(topOffers)} 
            highlight={true}
            onWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}

        {(activeCategory === 'all' || activeCategory === 'groceries') && (
          <OffersSection 
            title="Grocery Deals" 
            offers={filterOffersBySearch(groceryDeals)} 
            categoryColor="bg-success-500"
            onWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}

        {(activeCategory === 'all' || activeCategory === 'pharmacy') && (
          <OffersSection 
            title="Pharmacy Specials" 
            offers={filterOffersBySearch(pharmacySpecials)}
            categoryColor="bg-secondary-500"
            onWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}

        {(activeCategory === 'all' || activeCategory === 'daily') && (
          <OffersSection 
            title="Daily Essentials" 
            offers={filterOffersBySearch(dailyEssentials)}
            categoryColor="bg-accent-500"
            onWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}
      </main>

      <BottomNavigation />
    </>
  )

  return (
    <Router>
      <div className="max-w-md mx-auto bg-neutral-50 min-h-screen pb-16">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/wishlist" 
            element={
              <WishlistPage 
                wishlist={wishlist} 
                onWishlist={toggleWishlist}
              />
            } 
          />
          <Route 
            path="/category/:category" 
            element={
              <CategoryPage 
                offers={{
                  topOffers,
                  groceryDeals,
                  pharmacySpecials,
                  dailyEssentials
                }}
                onWishlist={toggleWishlist}
                wishlist={wishlist}
                searchTerm={searchTerm}
              />
            } 
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App