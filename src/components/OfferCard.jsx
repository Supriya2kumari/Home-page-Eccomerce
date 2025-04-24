import { FiMapPin, FiHeart, FiClock } from 'react-icons/fi'

const OfferCard = ({ 
  offer, 
  categoryColor = "bg-primary-500",
  onWishlist,
  isWishlisted = false,
  compact = false
}) => {
  const formatDistance = (distance) => {
    if (distance < 1) {
      return `${(distance * 1000).toFixed(0)} m away`
    }
    return `${distance.toFixed(1)} km away`
  }
  
  const cardClasses = compact
    ? 'card relative w-full'
    : 'card relative min-w-[160px] max-w-[160px]'
    
  return (
    <div className={cardClasses}>
      <div className="relative">
        <img 
          src={offer.imageUrl} 
          alt={offer.title} 
          className="w-full h-32 object-cover rounded-t-lg"
        />
        
        <button 
          className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-sm hover:bg-neutral-50 transition-colors"
          onClick={() => onWishlist(offer)}
        >
          <FiHeart 
            className={`h-5 w-5 ${isWishlisted ? 'fill-error-500 text-error-500' : 'text-neutral-400'}`} 
          />
        </button>
        
        <div className={`absolute bottom-0 left-0 ${categoryColor} text-white text-xs px-2 py-1`}>
          {offer.discount}
        </div>
      </div>
      
      <div className="p-3">
        <h3 className="font-semibold text-sm mb-1 line-clamp-2 h-10">
          {offer.title}
        </h3>
        
        <div className="flex items-center mb-1">
          <span className="text-xs font-medium text-neutral-900">
            {offer.retailer.name}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="distance-badge">
            <FiMapPin className="w-3 h-3 mr-1 text-accent-500" />
            {formatDistance(offer.distance)}
          </div>
          
          {offer.expiresIn && (
            <div className="flex items-center text-xs text-neutral-500">
              <FiClock className="w-3 h-3 mr-1" />
              {offer.expiresIn}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default OfferCard