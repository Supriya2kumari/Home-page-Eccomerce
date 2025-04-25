export const mockUserLocation = () => {
  const baseLat = 37.7749
  const baseLng = -122.4194
  
  const latVariation = (Math.random() - 0.5) * 0.05
  const lngVariation = (Math.random() - 0.5) * 0.05
  
  return {
    lat: baseLat + latVariation,
    lng: baseLng + lngVariation,
    address: "123 HSR Layout",
    city: "Bengaluru"
  }
}

export const calculateDistance = (point1, point2) => {
  if (!point1 || !point2) return 999 
  
  const R = 6371 
  const dLat = deg2rad(point2.lat - point1.lat)
  const dLon = deg2rad(point2.lng - point1.lng)
  
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(point1.lat)) * Math.cos(deg2rad(point2.lat)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2)
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  const distance = R * c 
  
  return distance
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}

export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'))
      return
    }
    
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          address: "Current location",
          city: ""
        })
      },
      (error) => {
        reject(error)
      }
    )
  })
}

export const getNearbyRetailers = (userLocation, retailers, maxDistance = 10) => {
  if (!userLocation || !retailers) return []
  
  return retailers
    .map(retailer => {
      const distance = calculateDistance(userLocation, retailer.location)
      return { ...retailer, distance }
    })
    .filter(retailer => retailer.distance <= maxDistance)
    .sort((a, b) => a.distance - b.distance)
}