import { FiArrowLeft } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import OfferCard from './OfferCard'

const WishlistPage = ({ wishlist, onWishlist }) => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-neutral-50">
      <header className="sticky top-0 bg-white shadow-sm px-4 py-3 flex items-center">
        <button 
          onClick={() => navigate(-1)}
          className="mr-3"
        >
          <FiArrowLeft className="h-6 w-6" />
        </button>
        <h1 className="text-xl font-bold">My Wishlist</h1>
      </header>

      <main className="p-4">
        {wishlist.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-neutral-600">No items in wishlist</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {wishlist.map(offer => (
              <OfferCard
                key={offer.id}
                offer={offer}
                onWishlist={onWishlist}
                isWishlisted={true}
                compact={true}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default WishlistPage