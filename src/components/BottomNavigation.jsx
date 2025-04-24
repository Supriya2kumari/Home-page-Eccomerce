import { useState } from 'react'
import { FiHome, FiGrid, FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi'
import { useNavigate, useLocation } from 'react-router-dom'

const BottomNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  const navItems = [
    { id: 'home', label: 'Home', icon: FiHome, path: '/' },
    { id: 'categories', label: 'Categories', icon: FiGrid, path: '/category/all' },
    { id: 'favorites', label: 'Favorites', icon: FiHeart, path: '/wishlist' },
    { id: 'cart', label: 'Cart', icon: FiShoppingCart, path: '/cart' },
    { id: 'account', label: 'Account', icon: FiUser, path: '/account' },
  ]
  
  const handleNavigation = (path) => {
    navigate(path)
  }
  
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-200 z-10">
      <div className="max-w-md mx-auto flex justify-between">
        {navItems.map(item => (
          <button 
            key={item.id}
            className={`flex flex-1 flex-col items-center py-2 px-1 ${
              location.pathname === item.path ? 'text-primary-600' : 'text-neutral-500'
            }`}
            onClick={() => handleNavigation(item.path)}
          >
            <item.icon className="h-6 w-6" />
            <span className="text-xs mt-1">{item.label}</span>
            
            {location.pathname === item.path && (
              <span className="absolute bottom-0 h-0.5 w-12 bg-primary-600"></span>
            )}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default BottomNavigation