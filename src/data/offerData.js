// export const topOffers = [
//   {
//     id: 1,
//     title: "50% Off on Fresh Produce Weekend Sale",
//     discount: "50% OFF",
//     imageUrl: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
//     retailer: {
//       id: 1,
//       name: "FreshMart",
//       location: { lat: 37.7896, lng: -122.3913, address: "123 Market St", city: "Bengaluru" }
//     },
//     expiresIn: "2 days",
//     category: "groceries"
//   },
//   {
//     id: 2,
//     title: "Buy 1 Get 1 Free on All Dairy Products",
//     discount: "BOGO",
//     imageUrl: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg",
//     retailer: {
//       id: 2,
//       name: "GroceryWorld",
//       location: { lat: 37.7949, lng: -122.4094, address: "456 Main St", city: "Bengaluru" }
//     },
//     expiresIn: "3 days",
//     category: "groceries"
//   },
//   {
//     id: 3,
//     title: "30% Off on Electronics - Weekend Flash Sale",
//     discount: "30% OFF",
//     imageUrl: "https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg",
//     retailer: {
//       id: 3,
//       name: "ElectroHub",
//       location: { lat: 37.7835, lng: -122.4167, address: "789 Tech Blvd", city: "Bengaluru" }
//     },
//     expiresIn: "1 day",
//     category: "electronics"
//   },
//   {
//     id: 4,
//     title: "20% Off All Household Cleaning Products",
//     discount: "20% OFF",
//     imageUrl: "https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg",
//     retailer: {
//       id: 4,
//       name: "HomeMart",
//       location: { lat: 37.7694, lng: -122.4862, address: "321 Home Ave", city: "Bengaluru" }
//     },
//     expiresIn: "5 days",
//     category: "home"
//   },
//   {
//     id: 5,
//     title: "40% Off on Winter Clothing Collection",
//     discount: "40% OFF",
//     imageUrl: "https://images.pexels.com/photos/6347547/pexels-photo-6347547.jpeg",
//     retailer: {
//       id: 5,
//       name: "FashionStop",
//       location: { lat: 37.7879, lng: -122.4074, address: "555 Style St", city: "Bengaluru" }
//     },
//     expiresIn: "7 days",
//     category: "fashion"
//   },
//   {
//     id: 6,
//     title: "25% Off First Order with New User Code",
//     discount: "25% OFF",
//     imageUrl: "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg",
//     retailer: {
//       id: 6,
//       name: "QuickMart",
//       location: { lat: 37.7790, lng: -122.4160, address: "888 Quick Rd", city: "Bengaluru" }
//     },
//     expiresIn: "Ongoing",
//     category: "groceries"
//   }
// ];


export const topOffers = [
  {
    id: 1,
    title: "50% Off on Fresh Produce Weekend Sale",
    discount: "50% OFF",
    imageUrl: "https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg",
    retailer: {
      id: 1,
      name: "FreshMart",
      location: {address: "123 Market St", city: "Bengaluru" }
    },
    distance: 0.5,
    expiresIn: "2 days",
    category: "groceries"
  },
  {
    id: 2,
    title: "Buy 1 Get 1 Free on All Dairy Products",
    discount: "BOGO",
    imageUrl: "https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg",
    retailer: {
      id: 2,
      name: "GroceryWorld",
      location: {address: "456 Main St", city: "Bengaluru" }
    },
    distance: 1.1,
    expiresIn: "3 days",
    category: "groceries"
  },
  {
    id: 3,
    title: "30% Off on Electronics - Weekend Flash Sale",
    discount: "30% OFF",
    imageUrl: "https://images.pexels.com/photos/1841841/pexels-photo-1841841.jpeg",
    retailer: {
      id: 3,
      name: "ElectroHub",
      location: {address: "789 Tech Blvd", city: "Bengaluru" }
    },
    distance: 3.3,
    expiresIn: "1 day",
    category: "electronics"
  },
  {
    id: 4,
    title: "20% Off All Household Cleaning Products",
    discount: "20% OFF",
    imageUrl: "https://images.pexels.com/photos/4239009/pexels-photo-4239009.jpeg",
    retailer: {
      id: 4,
      name: "HomeMart",
      location: {address: "321 Home Ave", city: "Bengaluru" }
    },
    distance: 1.3,
    expiresIn: "5 days",
    category: "home"
  },
  {
    id: 5,
    title: "40% Off on Winter Clothing Collection",
    discount: "40% OFF",
    imageUrl: "https://images.pexels.com/photos/6347547/pexels-photo-6347547.jpeg",
    retailer: {
      id: 5,
      name: "FashionStop",
      location: {address: "555 Style St", city: "Bengaluru" }
    },
    distance: 2.9,
    expiresIn: "7 days",
    category: "fashion"
  },
  {
    id: 6,
    title: "25% Off First Order with New User Code",
    discount: "25% OFF",
    imageUrl: "https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg",
    retailer: {
      id: 6,
      name: "QuickMart",
      location: {address: "888 Quick Rd", city: "Bengaluru" }
    },
    distance: 2.3,
    expiresIn: "Ongoing",
    category: "groceries"
  }
];

export const groceryDeals = [
  {
    id: 7,
    title: "Fresh Fruits Bundle - 35% Off",
    discount: "35% OFF",
    imageUrl: "https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg",
    retailer: {
      id: 1,
      name: "FreshMart",
      location: {address: "123 Market St", city: "Bengaluru" }
    },
    distance: 2.3,
    expiresIn: "3 days",
    category: "groceries"
  },
  {
    id: 8,
    title: "Organic Vegetables Box - 25% Off",
    discount: "25% OFF",
    imageUrl: "https://images.pexels.com/photos/1367242/pexels-photo-1367242.jpeg",
    retailer: {
      id: 2,
      name: "GroceryWorld",
      location: {address: "456 Main St", city: "Bengaluru" }
    },
    distance: 1.3,
    expiresIn: "2 days",
    category: "groceries"
  },
  {
    id: 9,
    title: "Premium Coffee Beans - 20% Off",
    discount: "20% OFF",
    imageUrl: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
    retailer: {
      id: 7,
      name: "CoffeeCorner",
      location: {address: "101 Bean St", city: "Bengaluru" }
    },
    distance: 2.5,
    expiresIn: "5 days",
    category: "groceries"
  }
];

export const pharmacySpecials = [
  {
    id: 10,
    title: "Multivitamin Supplements - Buy 1 Get 1 50% Off",
    discount: "B1G1 50%",
    imageUrl: "https://images.pexels.com/photos/163944/pexels-photo-163944.jpeg",
    retailer: {
      id: 10,
      name: "HealthPharm",
      location: {address: "444 Health Rd", city: "Bengaluru" }
    },
    distance: 0.3,
    expiresIn: "6 days",
    category: "pharmacy"
  },
  {
    id: 11,
    title: "Skin Care Bundle - 40% Off All Items",
    discount: "40% OFF",
    imageUrl: "https://images.pexels.com/photos/3735149/pexels-photo-3735149.jpeg",
    retailer: {
      id: 11,
      name: "BeautyPharm",
      location: {address: "555 Beauty Blvd", city: "Bengaluru" }
    },
    distance: 1.6,
    expiresIn: "3 days",
    category: "pharmacy"
  },
  {
    id: 12,
    title: "First Aid Essentials Kit - 25% Off",
    discount: "25% OFF",
    imageUrl: "https://images.pexels.com/photos/4021769/pexels-photo-4021769.jpeg",
    retailer: {
      id: 10,
      name: "HealthPharm",
      location: {address: "444 Health Rd", city: "Bengaluru" }
    },
    distance: 2.1,
    expiresIn: "5 days",
    category: "pharmacy"
  }
];

export const dailyEssentials = [
  {
    id: 13,
    title: "Laundry Detergent & Fabric Softener Bundle - 30% Off",
    discount: "30% OFF",
    imageUrl: "https://images.pexels.com/photos/4239131/pexels-photo-4239131.jpeg",
    retailer: {
      id: 4,
      name: "HomeMart",
      location: {address: "321 Home Ave", city: "Bengaluru" }
    },
    distance: 2.7,
    expiresIn: "5 days",
    category: "home"
  },
  {
    id: 14,
    title: "Kitchen Cleaning Set - 25% Off",
    discount: "25% OFF",
    imageUrl: "https://images.pexels.com/photos/4239899/pexels-photo-4239899.jpeg",
    retailer: {
      id: 6,
      name: "QuickMart",
      location: {address: "888 Quick Rd", city: "Bengaluru" }
    },
    distance: 1.9,
    expiresIn: "4 days",
    category: "home"
  },
  {
    id: 15,
    title: "Bath & Body Essentials - Buy 3 Pay for 2",
    discount: "3 for 2",
    imageUrl: "https://images.pexels.com/photos/3997990/pexels-photo-3997990.jpeg",
    retailer: {
      id: 11,
      name: "BeautyPharm",
      location: {address: "555 Beauty Blvd", city: "Bengaluru" }
    },
    distance: 2.6,
    expiresIn: "6 days",
    category: "home"
  }
];