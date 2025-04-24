import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { FiSearch, FiMapPin, FiShoppingBag, FiBell, FiMenu } from 'react-icons/fi'
import debounce from 'lodash.debounce'

const Header = ({ userLocation, onSearch, activeCategory, setActiveCategory }) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const navigate = useNavigate()
  
  const debouncedSearch = useCallback(
    debounce((term) => {
      onSearch(term)
    }, 300),
    [onSearch]
  )

  const handleSearch = (e) => {
    debouncedSearch(e.target.value)
  }

  const categories = [
    { id: 'all', label: 'All Offers' },
    { id: 'groceries', label: 'Groceries' },
    { id: 'pharmacy', label: 'Pharmacy' },
    { id: 'electronics', label: 'Electronics' },
    { id: 'fashion', label: 'Fashion' },
    { id: 'home', label: 'Home' }
  ]

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId)
    navigate(`/category/${categoryId}`)
  }
  
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="px-4 pt-4 pb-2">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <button className="mr-3">
              <FiMenu className="h-6 w-6 text-neutral-700" />
            </button>
            <h1 className="text-xl font-bold text-primary-600">ShopNearby</h1>
          </div>
          
          <div className="flex items-center">
            <button className="p-2 relative">
              <FiBell className="h-6 w-6 text-neutral-700" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-accent-500 rounded-full"></span>
            </button>
            <button 
              className="p-2 relative"
              onClick={() => navigate('/wishlist')}
            >
              <FiShoppingBag className="h-6 w-6 text-neutral-700" />
              <span className="absolute top-1 right-1 h-5 w-5 bg-primary-500 rounded-full flex items-center justify-center text-xs text-white">3</span>
            </button>
          </div>
        </div>
        
        <div className="flex items-center mb-3">
          <FiMapPin className="h-5 w-5 text-accent-500 mr-1 flex-shrink-0" />
          <p className="text-sm font-medium truncate">
            {userLocation ? 
              `${userLocation.address}, ${userLocation.city}` : 
              'Finding your location...'}
          </p>
        </div>
        
        <div className={`relative bg-neutral-100 rounded-full flex items-center px-4 py-2 mb-2 ${isSearchFocused ? 'ring-2 ring-primary-500' : ''}`}>
          <FiSearch className="h-5 w-5 text-neutral-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search for stores, products, and offers..." 
            className="bg-transparent w-full text-sm outline-none"
            onChange={handleSearch}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
          />
        </div>
      </div>
      
      <div className="flex overflow-x-auto scrollbar-hide border-b border-neutral-200">
        {categories.map(category => (
          <button 
            key={category.id}
            className={`px-4 py-2 text-sm font-medium whitespace-nowrap ${
              activeCategory === category.id 
                ? 'text-primary-600 border-b-2 border-primary-500' 
                : 'text-neutral-600'
            }`}
            onClick={() => handleCategoryClick(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
    </header>
  )
}

export default Header