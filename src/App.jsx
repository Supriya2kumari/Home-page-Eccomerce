import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import OffersSection from './components/OffersSection'
import BottomNavigation from './components/BottomNavigation'
import WishlistPage from './components/WishlistPage'
import CategoryPage from './components/CategoryPage'
import { mockUserLocation, calculateDistance } from './utils/locationUtils'
import { 
  topOffers, 
  groceryDeals, 
  pharmacySpecials, 
  dailyEssentials 
} from './data/offerData'

function App() {
  const [userLocation, setUserLocation] = useState(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [wishlist, setWishlist] = useState([])
  const [nearbyOffers, setNearbyOffers] = useState({
    topOffers: [],
    groceryDeals: [],
    pharmacySpecials: [],
    dailyEssentials: []
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      const location = mockUserLocation()
      setUserLocation(location)
      setLoading(false)
      
      const calculateOffersWithDistance = (offers) => {
        return offers.map(offer => ({
          ...offer,
          distance: calculateDistance(location, offer.retailer.location)
        })).sort((a, b) => a.distance - b.distance)
      }
      
      setNearbyOffers({
        topOffers: calculateOffersWithDistance(topOffers),
        groceryDeals: calculateOffersWithDistance(groceryDeals),
        pharmacySpecials: calculateOffersWithDistance(pharmacySpecials),
        dailyEssentials: calculateOffersWithDistance(dailyEssentials)
      })
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  const toggleWishlist = (offer) => {
    setWishlist(prev => {
      const isInWishlist = prev.some(item => item.id === offer.id)
      if (isInWishlist) {
        return prev.filter(item => item.id !== offer.id)
      }
      return [...prev, offer]
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

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
      </div>
    )
  }

  const HomePage = () => (
    <>
      <Header 
        userLocation={userLocation}
        onSearch={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      <main className="px-4 pt-4 pb-20">
        {activeCategory === 'all' && (
          <OffersSection 
            title="Top Offers Near You" 
            offers={filterOffersBySearch(nearbyOffers.topOffers)} 
            highlight={true}
            onWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}
        
        {(activeCategory === 'all' || activeCategory === 'groceries') && (
          <OffersSection 
            title="Grocery Deals" 
            offers={filterOffersBySearch(nearbyOffers.groceryDeals)} 
            categoryColor="bg-success-500"
            onWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}
        
        {(activeCategory === 'all' || activeCategory === 'pharmacy') && (
          <OffersSection 
            title="Pharmacy Specials" 
            offers={filterOffersBySearch(nearbyOffers.pharmacySpecials)}
            categoryColor="bg-secondary-500"
            onWishlist={toggleWishlist}
            wishlist={wishlist}
          />
        )}
        
        {(activeCategory === 'all' || activeCategory === 'daily') && (
          <OffersSection 
            title="Daily Essentials" 
            offers={filterOffersBySearch(nearbyOffers.dailyEssentials)}
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
                offers={nearbyOffers}
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