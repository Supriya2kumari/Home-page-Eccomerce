import { useParams, useNavigate } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import OfferCard from './OfferCard'

const CategoryPage = ({ offers, onWishlist, wishlist, searchTerm }) => {
  const { category } = useParams()
  const navigate = useNavigate()

  const getCategoryOffers = () => {
    switch (category) {
      case 'groceries':
        return offers.groceryDeals
      case 'pharmacy':
        return offers.pharmacySpecials
      case 'electronics':
        return offers.topOffers.filter(o => o.title.toLowerCase().includes('electronics'))
      case 'fashion':
        return offers.topOffers.filter(o => o.title.toLowerCase().includes('clothing'))
      case 'home':
        return offers.dailyEssentials
      default:
        return []
    }
  }

  const categoryOffers = getCategoryOffers()
  const filteredOffers = searchTerm
    ? categoryOffers.filter(offer => 
        offer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        offer.retailer.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : categoryOffers

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="sticky top-0 bg-white shadow-sm px-4 py-3 flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="mr-3"
        >
          <FiArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold capitalize">{category} Offers</h1>
      </header>

      <main className="p-4">
        <div className="grid grid-cols-2 gap-4">
          {filteredOffers.map(offer => (
            <OfferCard
              key={offer.id}
              offer={offer}
              onWishlist={onWishlist}
              isWishlisted={wishlist.some(item => item.id === offer.id)}
              compact={true}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default CategoryPage