import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import OfferCard from './OfferCard'
import { FiChevronRight } from 'react-icons/fi'

const OffersSection = ({ 
  title, 
  offers, 
  highlight = false, 
  categoryColor = "bg-primary-500",
  onWishlist,
  wishlist = []
}) => {
  const scrollRef = useRef(null)
  const navigate = useNavigate()
  
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' })
    }
  }

  const handleViewAll = () => {
    const category = title.toLowerCase().includes('grocery') 
      ? 'groceries'
      : title.toLowerCase().includes('pharmacy')
        ? 'pharmacy'
        : title.toLowerCase().includes('daily')
          ? 'home'
          : 'all'
    
    navigate(`/category/${category}`)
  }
  
  if (!offers || offers.length === 0) return null
  
  return (
    <section className="mb-6">
      <div className="flex items-center justify-between mb-3">
        <h2 className="section-title">{title}</h2>
        <button 
          className="flex items-center text-sm font-medium text-primary-600"
          onClick={handleViewAll}
        >
          View all <FiChevronRight className="ml-1" />
        </button>
      </div>
      
      <div 
        className="flex overflow-x-auto gap-3 pb-2 scrollbar-hide"
        ref={scrollRef}
      >
        {offers.map((offer, index) => (
          <OfferCard 
            key={offer.id} 
            offer={offer} 
            highlight={highlight && index === 0}
            categoryColor={categoryColor}
            onWishlist={onWishlist}
            isWishlisted={wishlist.some(item => item.id === offer.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default OffersSection