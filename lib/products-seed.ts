export interface Product {
  id: number;
  title: string;
  price: number;
  mrp: number;
  rating: number;
  rating_count: number;
  image_url: string;
  images: string[];
  badge: string;
  category: string;
  brand: string;
  highlights: string;
  specs: Record<string, string>;
  description: string;
  stock: number;
}

export const products: Product[] = [
  {
    "id": 1,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 2900.7,
    "mrp": 3615.8,
    "rating": 4.4,
    "rating_count": 5383,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Amazon Launchpad",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 90
  },
  {
    "id": 2,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 2448.6,
    "mrp": 3613.8,
    "rating": 4.1,
    "rating_count": 7037,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Amazon Launchpad",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 24
  },
  {
    "id": 3,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 1242.8,
    "mrp": 1822.9,
    "rating": 4.9,
    "rating_count": 5275,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Amazon Launchpad",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 154
  },
  {
    "id": 4,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 4215.1,
    "mrp": 5507.1,
    "rating": 4.2,
    "rating_count": 8408,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Amazon Launchpad",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 57
  },
  {
    "id": 5,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 1820.5,
    "mrp": 2422.4,
    "rating": 4.7,
    "rating_count": 9654,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Amazon Launchpad",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 78
  },
  {
    "id": 6,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 4187.9,
    "mrp": 6552.3,
    "rating": 4.8,
    "rating_count": 9940,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Amazon Launchpad",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 153
  },
  {
    "id": 7,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 4147.1,
    "mrp": 4572.8,
    "rating": 4.1,
    "rating_count": 638,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Amazon Launchpad",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 103
  },
  {
    "id": 8,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 2970.9,
    "mrp": 4732,
    "rating": 4.5,
    "rating_count": 10033,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Amazon Launchpad",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 122
  },
  {
    "id": 9,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 3214.6,
    "mrp": 3566,
    "rating": 4.1,
    "rating_count": 3584,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Amazon Launchpad",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 75
  },
  {
    "id": 10,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 2905,
    "mrp": 4614.3,
    "rating": 4.1,
    "rating_count": 4040,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Amazon Launchpad",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 133
  },
  {
    "id": 11,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 3099.1,
    "mrp": 3992.9,
    "rating": 4.2,
    "rating_count": 8419,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Amazon Launchpad",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 89
  },
  {
    "id": 12,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 375.6,
    "mrp": 529.8,
    "rating": 4.9,
    "rating_count": 285,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Amazon Launchpad",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 51
  },
  {
    "id": 13,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 4841.8,
    "mrp": 6774.8,
    "rating": 4.3,
    "rating_count": 5112,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Amazon Launchpad",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 52
  },
  {
    "id": 14,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 532,
    "mrp": 617.2,
    "rating": 4.8,
    "rating_count": 6972,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Amazon Launchpad",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 49
  },
  {
    "id": 15,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 978,
    "mrp": 1393.5,
    "rating": 4.5,
    "rating_count": 2446,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Amazon Launchpad",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 148
  },
  {
    "id": 16,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 4761.2,
    "mrp": 7028.2,
    "rating": 4.2,
    "rating_count": 2936,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Amazon Launchpad",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 48
  },
  {
    "id": 17,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 424.3,
    "mrp": 474.8,
    "rating": 4,
    "rating_count": 4861,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Amazon Launchpad",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 49
  },
  {
    "id": 18,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 1272.1,
    "mrp": 1821.9,
    "rating": 4.7,
    "rating_count": 4855,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Amazon Launchpad",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 24
  },
  {
    "id": 19,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 2844.2,
    "mrp": 3750.6,
    "rating": 4.9,
    "rating_count": 6499,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Amazon Launchpad",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 36
  },
  {
    "id": 20,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 1017.6,
    "mrp": 1269.4,
    "rating": 4.1,
    "rating_count": 5263,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Amazon Launchpad",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Amazon Launchpad department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 15
  },
  {
    "id": 21,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 1568.3,
    "mrp": 2405.8,
    "rating": 4.1,
    "rating_count": 5963,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Amazon Renewed",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 53
  },
  {
    "id": 22,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 3808.2,
    "mrp": 4937.8,
    "rating": 4.4,
    "rating_count": 2424,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Amazon Renewed",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 40
  },
  {
    "id": 23,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 2739.6,
    "mrp": 3820.7,
    "rating": 4.7,
    "rating_count": 2522,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Amazon Renewed",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 136
  },
  {
    "id": 24,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 1671.7,
    "mrp": 2577,
    "rating": 4.6,
    "rating_count": 2448,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Amazon Renewed",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 117
  },
  {
    "id": 25,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 3882.5,
    "mrp": 5308.4,
    "rating": 4.1,
    "rating_count": 4442,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Amazon Renewed",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 13
  },
  {
    "id": 26,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 1288.6,
    "mrp": 1896.7,
    "rating": 4,
    "rating_count": 1561,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Amazon Renewed",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 104
  },
  {
    "id": 27,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 2026.4,
    "mrp": 2641,
    "rating": 4.7,
    "rating_count": 2495,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Amazon Renewed",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 79
  },
  {
    "id": 28,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 3991.2,
    "mrp": 4895.6,
    "rating": 4,
    "rating_count": 1403,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Amazon Renewed",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 148
  },
  {
    "id": 29,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 2832.2,
    "mrp": 3690.8,
    "rating": 4.8,
    "rating_count": 7277,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Amazon Renewed",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 25
  },
  {
    "id": 30,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 4307.5,
    "mrp": 5329.2,
    "rating": 4.4,
    "rating_count": 200,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Amazon Renewed",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 135
  },
  {
    "id": 31,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 2498.3,
    "mrp": 3283.3,
    "rating": 4.4,
    "rating_count": 9674,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Amazon Renewed",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 64
  },
  {
    "id": 32,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 1381.7,
    "mrp": 1812.8,
    "rating": 4.1,
    "rating_count": 9684,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Amazon Renewed",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 59
  },
  {
    "id": 33,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 2158.8,
    "mrp": 3202.1,
    "rating": 4.8,
    "rating_count": 5572,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Amazon Renewed",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 73
  },
  {
    "id": 34,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 3401.3,
    "mrp": 4506.4,
    "rating": 4.5,
    "rating_count": 1764,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Amazon Renewed",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 154
  },
  {
    "id": 35,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 364.6,
    "mrp": 445,
    "rating": 4.5,
    "rating_count": 8853,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Amazon Renewed",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 104
  },
  {
    "id": 36,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 3227.9,
    "mrp": 3753.6,
    "rating": 4.2,
    "rating_count": 2535,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Amazon Renewed",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 101
  },
  {
    "id": 37,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 4928.2,
    "mrp": 7451.2,
    "rating": 4.1,
    "rating_count": 6609,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Amazon Renewed",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 142
  },
  {
    "id": 38,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 2691.2,
    "mrp": 3075.4,
    "rating": 4.6,
    "rating_count": 7090,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Amazon Renewed",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 122
  },
  {
    "id": 39,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 4140.1,
    "mrp": 4928.7,
    "rating": 4.7,
    "rating_count": 4048,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Amazon Renewed",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 84
  },
  {
    "id": 40,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 520.4,
    "mrp": 596.5,
    "rating": 4.1,
    "rating_count": 1728,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Amazon Renewed",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Amazon Renewed department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 129
  },
  {
    "id": 41,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 610.6,
    "mrp": 829.2,
    "rating": 4.3,
    "rating_count": 1216,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Apps & Games",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 126
  },
  {
    "id": 42,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 1194.5,
    "mrp": 1685.5,
    "rating": 4.7,
    "rating_count": 1460,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Apps & Games",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 13
  },
  {
    "id": 43,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 1601.1,
    "mrp": 2552.1,
    "rating": 4.1,
    "rating_count": 2157,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Apps & Games",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 28
  },
  {
    "id": 44,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 4417.1,
    "mrp": 5180,
    "rating": 4.8,
    "rating_count": 3851,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Apps & Games",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 35
  },
  {
    "id": 45,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 1526.1,
    "mrp": 1856.3,
    "rating": 4.5,
    "rating_count": 9365,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Apps & Games",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 35
  },
  {
    "id": 46,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 5026,
    "mrp": 7471.9,
    "rating": 4.5,
    "rating_count": 3114,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Apps & Games",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 85
  },
  {
    "id": 47,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 4737.2,
    "mrp": 6282.1,
    "rating": 4.1,
    "rating_count": 7344,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Apps & Games",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 13
  },
  {
    "id": 48,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 4444.9,
    "mrp": 6801.9,
    "rating": 4.1,
    "rating_count": 5871,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Apps & Games",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 15
  },
  {
    "id": 49,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 5014.8,
    "mrp": 7059.8,
    "rating": 4.2,
    "rating_count": 4926,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Apps & Games",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 143
  },
  {
    "id": 50,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 3068.3,
    "mrp": 4481.6,
    "rating": 4,
    "rating_count": 1878,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Apps & Games",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 19
  },
  {
    "id": 51,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 1877.6,
    "mrp": 2564.4,
    "rating": 4.4,
    "rating_count": 8123,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Apps & Games",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 142
  },
  {
    "id": 52,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 3925,
    "mrp": 5413.9,
    "rating": 4.1,
    "rating_count": 7084,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Apps & Games",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 78
  },
  {
    "id": 53,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 2851.6,
    "mrp": 3961.9,
    "rating": 4.4,
    "rating_count": 828,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Apps & Games",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 84
  },
  {
    "id": 54,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 3996.3,
    "mrp": 5794.1,
    "rating": 4.4,
    "rating_count": 5640,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Apps & Games",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 129
  },
  {
    "id": 55,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 2272.3,
    "mrp": 2525.8,
    "rating": 4.7,
    "rating_count": 8515,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Apps & Games",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 22
  },
  {
    "id": 56,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 2605.1,
    "mrp": 2910.7,
    "rating": 4.4,
    "rating_count": 2323,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Apps & Games",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 47
  },
  {
    "id": 57,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 2600.7,
    "mrp": 4121.8,
    "rating": 4.8,
    "rating_count": 8811,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Apps & Games",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 57
  },
  {
    "id": 58,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 2619.9,
    "mrp": 4073,
    "rating": 4.4,
    "rating_count": 8593,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Apps & Games",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 37
  },
  {
    "id": 59,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 1425.7,
    "mrp": 1922.6,
    "rating": 4.8,
    "rating_count": 6999,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Apps & Games",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 78
  },
  {
    "id": 60,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 1933.5,
    "mrp": 3041.4,
    "rating": 4.5,
    "rating_count": 8647,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Apps & Games",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Apps & Games department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 25
  },
  {
    "id": 61,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 3583.1,
    "mrp": 4956.1,
    "rating": 4.6,
    "rating_count": 9820,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Baby Products",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 77
  },
  {
    "id": 62,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 2195.7,
    "mrp": 3394.1,
    "rating": 4.8,
    "rating_count": 8827,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Baby Products",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 67
  },
  {
    "id": 63,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 2836.9,
    "mrp": 3553.8,
    "rating": 4.3,
    "rating_count": 4913,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Baby Products",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 10
  },
  {
    "id": 64,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 1139.4,
    "mrp": 1547.9,
    "rating": 4.3,
    "rating_count": 9496,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Baby Products",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 32
  },
  {
    "id": 65,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 1785.3,
    "mrp": 2549.2,
    "rating": 4.4,
    "rating_count": 6941,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Baby Products",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 104
  },
  {
    "id": 66,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 2761.4,
    "mrp": 4353.6,
    "rating": 4.7,
    "rating_count": 6207,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Baby Products",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 154
  },
  {
    "id": 67,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 1191.5,
    "mrp": 1423.8,
    "rating": 4.5,
    "rating_count": 1143,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Baby Products",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 63
  },
  {
    "id": 68,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 755.9,
    "mrp": 1125.5,
    "rating": 4.3,
    "rating_count": 7467,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Baby Products",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 17
  },
  {
    "id": 69,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 3606.3,
    "mrp": 4121.2,
    "rating": 4.1,
    "rating_count": 3466,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Baby Products",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 136
  },
  {
    "id": 70,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 2749.1,
    "mrp": 3532.9,
    "rating": 4.7,
    "rating_count": 8307,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Baby Products",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 121
  },
  {
    "id": 71,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 2114,
    "mrp": 2959.2,
    "rating": 4.3,
    "rating_count": 5904,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Baby Products",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 124
  },
  {
    "id": 72,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 5024.7,
    "mrp": 5679.4,
    "rating": 4.2,
    "rating_count": 3794,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Baby Products",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 21
  },
  {
    "id": 73,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 2083.3,
    "mrp": 3126.6,
    "rating": 4.7,
    "rating_count": 8367,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Baby Products",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 140
  },
  {
    "id": 74,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 1134.4,
    "mrp": 1349.3,
    "rating": 4.7,
    "rating_count": 5984,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Baby Products",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 34
  },
  {
    "id": 75,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 1312,
    "mrp": 1886.9,
    "rating": 4.3,
    "rating_count": 236,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Baby Products",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 26
  },
  {
    "id": 76,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 2903.4,
    "mrp": 4099.6,
    "rating": 4.7,
    "rating_count": 8289,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Baby Products",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 62
  },
  {
    "id": 77,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 2498.9,
    "mrp": 3369.3,
    "rating": 4.7,
    "rating_count": 1860,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Baby Products",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 122
  },
  {
    "id": 78,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 4723.2,
    "mrp": 5862.9,
    "rating": 4.8,
    "rating_count": 4555,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Baby Products",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 125
  },
  {
    "id": 79,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 4851.1,
    "mrp": 6905.6,
    "rating": 4.8,
    "rating_count": 8847,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Baby Products",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 8
  },
  {
    "id": 80,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 669.8,
    "mrp": 760.6,
    "rating": 4.1,
    "rating_count": 231,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Baby Products",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Baby Products department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 64
  },
  {
    "id": 81,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 3540.4,
    "mrp": 4210.9,
    "rating": 4.8,
    "rating_count": 10003,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Bags, Wallets and Luggage",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 47
  },
  {
    "id": 82,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 1056.3,
    "mrp": 1647.3,
    "rating": 4.1,
    "rating_count": 7458,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Bags, Wallets and Luggage",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 67
  },
  {
    "id": 83,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 4702.9,
    "mrp": 7370.3,
    "rating": 4.5,
    "rating_count": 10012,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Bags, Wallets and Luggage",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 37
  },
  {
    "id": 84,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 3710.1,
    "mrp": 5372.1,
    "rating": 4.3,
    "rating_count": 2359,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Bags, Wallets and Luggage",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 145
  },
  {
    "id": 85,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 4532.7,
    "mrp": 5899.8,
    "rating": 4.7,
    "rating_count": 6996,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Bags, Wallets and Luggage",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 39
  },
  {
    "id": 86,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 481.8,
    "mrp": 711.3,
    "rating": 4.4,
    "rating_count": 7295,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Bags, Wallets and Luggage",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 95
  },
  {
    "id": 87,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 362.4,
    "mrp": 493.2,
    "rating": 4.7,
    "rating_count": 4104,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Bags, Wallets and Luggage",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 17
  },
  {
    "id": 88,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 3005.9,
    "mrp": 4180.7,
    "rating": 4,
    "rating_count": 2281,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Bags, Wallets and Luggage",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 69
  },
  {
    "id": 89,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 1795.1,
    "mrp": 2040.7,
    "rating": 4.3,
    "rating_count": 5698,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Bags, Wallets and Luggage",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 71
  },
  {
    "id": 90,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 4273.4,
    "mrp": 6029,
    "rating": 4.4,
    "rating_count": 8819,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Bags, Wallets and Luggage",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 56
  },
  {
    "id": 91,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 2196.6,
    "mrp": 2420.7,
    "rating": 4.7,
    "rating_count": 5864,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Bags, Wallets and Luggage",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 118
  },
  {
    "id": 92,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 3039.3,
    "mrp": 4006.7,
    "rating": 4.6,
    "rating_count": 4006,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Bags, Wallets and Luggage",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 140
  },
  {
    "id": 93,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 3469.6,
    "mrp": 4706.4,
    "rating": 4.4,
    "rating_count": 9778,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Bags, Wallets and Luggage",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 49
  },
  {
    "id": 94,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 1752.2,
    "mrp": 1979,
    "rating": 4.2,
    "rating_count": 4654,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Bags, Wallets and Luggage",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 142
  },
  {
    "id": 95,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 1893.9,
    "mrp": 2568.4,
    "rating": 4.5,
    "rating_count": 7248,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Bags, Wallets and Luggage",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 78
  },
  {
    "id": 96,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 909.7,
    "mrp": 1396.8,
    "rating": 4,
    "rating_count": 5327,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Bags, Wallets and Luggage",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 47
  },
  {
    "id": 97,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 1968.2,
    "mrp": 2882.2,
    "rating": 4.6,
    "rating_count": 6044,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Bags, Wallets and Luggage",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 47
  },
  {
    "id": 98,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 3736.5,
    "mrp": 4886.7,
    "rating": 4.2,
    "rating_count": 4380,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Bags, Wallets and Luggage",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 59
  },
  {
    "id": 99,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 551.6,
    "mrp": 767.9,
    "rating": 4.5,
    "rating_count": 1833,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Bags, Wallets and Luggage",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 37
  },
  {
    "id": 100,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 3170.2,
    "mrp": 4656.6,
    "rating": 4,
    "rating_count": 8835,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Bags, Wallets and Luggage",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Bags, Wallets and Luggage department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 137
  },
  {
    "id": 101,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 1737.2,
    "mrp": 2395.4,
    "rating": 4.7,
    "rating_count": 7074,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Beauty",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 21
  },
  {
    "id": 102,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 1502.7,
    "mrp": 1719.1,
    "rating": 4.3,
    "rating_count": 4684,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Beauty",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 109
  },
  {
    "id": 103,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 936.8,
    "mrp": 1205.4,
    "rating": 4.9,
    "rating_count": 2453,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Beauty",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 24
  },
  {
    "id": 104,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 4330.4,
    "mrp": 6310,
    "rating": 4.1,
    "rating_count": 4208,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Beauty",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 151
  },
  {
    "id": 105,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 4672.3,
    "mrp": 6137.4,
    "rating": 4.6,
    "rating_count": 3905,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Beauty",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 131
  },
  {
    "id": 106,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 3832.1,
    "mrp": 4731.4,
    "rating": 4.1,
    "rating_count": 6100,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Beauty",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 135
  },
  {
    "id": 107,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 3916.5,
    "mrp": 6183.6,
    "rating": 4.4,
    "rating_count": 5177,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Beauty",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 74
  },
  {
    "id": 108,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 3664.3,
    "mrp": 5071.9,
    "rating": 4.3,
    "rating_count": 6904,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Beauty",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 61
  },
  {
    "id": 109,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 4378.9,
    "mrp": 5494.5,
    "rating": 4.4,
    "rating_count": 9888,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Beauty",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 14
  },
  {
    "id": 110,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 2950.2,
    "mrp": 3690.9,
    "rating": 4.9,
    "rating_count": 6732,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Beauty",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 23
  },
  {
    "id": 111,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 4164.4,
    "mrp": 5642.3,
    "rating": 4,
    "rating_count": 347,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Beauty",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 125
  },
  {
    "id": 112,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 2309.4,
    "mrp": 3081.8,
    "rating": 4.8,
    "rating_count": 3294,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Beauty",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 17
  },
  {
    "id": 113,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 4354.2,
    "mrp": 6509.1,
    "rating": 4.8,
    "rating_count": 5796,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Beauty",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 102
  },
  {
    "id": 114,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 2380.6,
    "mrp": 3424,
    "rating": 4.5,
    "rating_count": 8460,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Beauty",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 88
  },
  {
    "id": 115,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 2193.2,
    "mrp": 3119.2,
    "rating": 4.2,
    "rating_count": 5927,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Beauty",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 47
  },
  {
    "id": 116,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 3355,
    "mrp": 4528.8,
    "rating": 4.5,
    "rating_count": 4564,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Beauty",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 13
  },
  {
    "id": 117,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 4283.9,
    "mrp": 5100.7,
    "rating": 4.4,
    "rating_count": 7246,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Beauty",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 101
  },
  {
    "id": 118,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 2598.1,
    "mrp": 3457.8,
    "rating": 4.6,
    "rating_count": 8274,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Beauty",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 107
  },
  {
    "id": 119,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 1953.7,
    "mrp": 2468.4,
    "rating": 4.5,
    "rating_count": 760,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Beauty",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 37
  },
  {
    "id": 120,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 4197.4,
    "mrp": 4778.3,
    "rating": 4.8,
    "rating_count": 9917,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Beauty",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Beauty department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 131
  },
  {
    "id": 121,
    "title": "Penguin Chronicles of Narnia Fantasy Book | Bestseller Model 1 | High Quality Performance",
    "price": 513.9,
    "mrp": 713.7,
    "rating": 4.1,
    "rating_count": 9067,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Books",
    "brand": "Penguin",
    "highlights": "Penguin Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Penguin Custom Author Value 1-0",
      "Format": "Penguin Custom Format Value 1-1",
      "Pages": "Penguin Custom Pages Value 1-2",
      "Publisher": "Penguin Custom Publisher Value 1-3",
      "Language": "Penguin Custom Language Value 1-4"
    },
    "description": "This is a premium Penguin product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 31
  },
  {
    "id": 122,
    "title": "Bloomsbury A Game of Thrones Novel | Bestseller Model 2 | High Quality Performance",
    "price": 850.2,
    "mrp": 1346,
    "rating": 4.6,
    "rating_count": 4524,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Books",
    "brand": "Bloomsbury",
    "highlights": "Bloomsbury Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Bloomsbury Custom Author Value 2-0",
      "Format": "Bloomsbury Custom Format Value 2-1",
      "Pages": "Bloomsbury Custom Pages Value 2-2",
      "Publisher": "Bloomsbury Custom Publisher Value 2-3",
      "Language": "Bloomsbury Custom Language Value 2-4"
    },
    "description": "This is a premium Bloomsbury product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 25
  },
  {
    "id": 123,
    "title": "Scholastic Secret of Life Memoir | Bestseller Model 3 | High Quality Performance",
    "price": 908.5,
    "mrp": 1334,
    "rating": 4.6,
    "rating_count": 5970,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Books",
    "brand": "Scholastic",
    "highlights": "Scholastic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Scholastic Custom Author Value 3-0",
      "Format": "Scholastic Custom Format Value 3-1",
      "Pages": "Scholastic Custom Pages Value 3-2",
      "Publisher": "Scholastic Custom Publisher Value 3-3",
      "Language": "Scholastic Custom Language Value 3-4"
    },
    "description": "This is a premium Scholastic product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 152
  },
  {
    "id": 124,
    "title": "Simon & Schuster Journey to the Unknown Destination | Bestseller Model 4 | High Quality Performance",
    "price": 850.3,
    "mrp": 1263,
    "rating": 4.2,
    "rating_count": 8267,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Books",
    "brand": "Simon & Schuster",
    "highlights": "Simon & Schuster Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Simon & Schuster Custom Author Value 4-0",
      "Format": "Simon & Schuster Custom Format Value 4-1",
      "Pages": "Simon & Schuster Custom Pages Value 4-2",
      "Publisher": "Simon & Schuster Custom Publisher Value 4-3",
      "Language": "Simon & Schuster Custom Language Value 4-4"
    },
    "description": "This is a premium Simon & Schuster product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 115
  },
  {
    "id": 125,
    "title": "HarperCollins The Great Gatsby Novel | Bestseller Model 5 | High Quality Performance",
    "price": 1395.6,
    "mrp": 1726.2,
    "rating": 4.2,
    "rating_count": 9826,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Books",
    "brand": "HarperCollins",
    "highlights": "HarperCollins Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "HarperCollins Custom Author Value 5-0",
      "Format": "HarperCollins Custom Format Value 5-1",
      "Pages": "HarperCollins Custom Pages Value 5-2",
      "Publisher": "HarperCollins Custom Publisher Value 5-3",
      "Language": "HarperCollins Custom Language Value 5-4"
    },
    "description": "This is a premium HarperCollins product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 90
  },
  {
    "id": 126,
    "title": "Penguin Chronicles of Narnia Fantasy Book | Bestseller Model 6 | High Quality Performance",
    "price": 2824.3,
    "mrp": 4300.3,
    "rating": 4.6,
    "rating_count": 5714,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Books",
    "brand": "Penguin",
    "highlights": "Penguin Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Penguin Custom Author Value 6-0",
      "Format": "Penguin Custom Format Value 6-1",
      "Pages": "Penguin Custom Pages Value 6-2",
      "Publisher": "Penguin Custom Publisher Value 6-3",
      "Language": "Penguin Custom Language Value 6-4"
    },
    "description": "This is a premium Penguin product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 154
  },
  {
    "id": 127,
    "title": "Bloomsbury A Game of Thrones Novel | Bestseller Model 7 | High Quality Performance",
    "price": 4281,
    "mrp": 4824.6,
    "rating": 4.2,
    "rating_count": 5250,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Books",
    "brand": "Bloomsbury",
    "highlights": "Bloomsbury Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Bloomsbury Custom Author Value 7-0",
      "Format": "Bloomsbury Custom Format Value 7-1",
      "Pages": "Bloomsbury Custom Pages Value 7-2",
      "Publisher": "Bloomsbury Custom Publisher Value 7-3",
      "Language": "Bloomsbury Custom Language Value 7-4"
    },
    "description": "This is a premium Bloomsbury product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 130
  },
  {
    "id": 128,
    "title": "Scholastic Secret of Life Memoir | Bestseller Model 8 | High Quality Performance",
    "price": 2511.4,
    "mrp": 3685.2,
    "rating": 4.8,
    "rating_count": 9834,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Books",
    "brand": "Scholastic",
    "highlights": "Scholastic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Scholastic Custom Author Value 8-0",
      "Format": "Scholastic Custom Format Value 8-1",
      "Pages": "Scholastic Custom Pages Value 8-2",
      "Publisher": "Scholastic Custom Publisher Value 8-3",
      "Language": "Scholastic Custom Language Value 8-4"
    },
    "description": "This is a premium Scholastic product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 100
  },
  {
    "id": 129,
    "title": "Simon & Schuster Journey to the Unknown Destination | Bestseller Model 9 | High Quality Performance",
    "price": 2270.8,
    "mrp": 2638.1,
    "rating": 4.7,
    "rating_count": 2001,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Books",
    "brand": "Simon & Schuster",
    "highlights": "Simon & Schuster Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Simon & Schuster Custom Author Value 9-0",
      "Format": "Simon & Schuster Custom Format Value 9-1",
      "Pages": "Simon & Schuster Custom Pages Value 9-2",
      "Publisher": "Simon & Schuster Custom Publisher Value 9-3",
      "Language": "Simon & Schuster Custom Language Value 9-4"
    },
    "description": "This is a premium Simon & Schuster product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 8
  },
  {
    "id": 130,
    "title": "HarperCollins The Great Gatsby Novel | Bestseller Model 10 | High Quality Performance",
    "price": 3041.1,
    "mrp": 4472.7,
    "rating": 4.1,
    "rating_count": 2557,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Books",
    "brand": "HarperCollins",
    "highlights": "HarperCollins Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "HarperCollins Custom Author Value 10-0",
      "Format": "HarperCollins Custom Format Value 10-1",
      "Pages": "HarperCollins Custom Pages Value 10-2",
      "Publisher": "HarperCollins Custom Publisher Value 10-3",
      "Language": "HarperCollins Custom Language Value 10-4"
    },
    "description": "This is a premium HarperCollins product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 136
  },
  {
    "id": 131,
    "title": "Penguin Chronicles of Narnia Fantasy Book | Bestseller Model 11 | High Quality Performance",
    "price": 4886.2,
    "mrp": 7563.3,
    "rating": 4.6,
    "rating_count": 8513,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Books",
    "brand": "Penguin",
    "highlights": "Penguin Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Penguin Custom Author Value 11-0",
      "Format": "Penguin Custom Format Value 11-1",
      "Pages": "Penguin Custom Pages Value 11-2",
      "Publisher": "Penguin Custom Publisher Value 11-3",
      "Language": "Penguin Custom Language Value 11-4"
    },
    "description": "This is a premium Penguin product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 153
  },
  {
    "id": 132,
    "title": "Bloomsbury A Game of Thrones Novel | Bestseller Model 12 | High Quality Performance",
    "price": 2397.2,
    "mrp": 3690.1,
    "rating": 4.1,
    "rating_count": 6791,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Books",
    "brand": "Bloomsbury",
    "highlights": "Bloomsbury Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Bloomsbury Custom Author Value 12-0",
      "Format": "Bloomsbury Custom Format Value 12-1",
      "Pages": "Bloomsbury Custom Pages Value 12-2",
      "Publisher": "Bloomsbury Custom Publisher Value 12-3",
      "Language": "Bloomsbury Custom Language Value 12-4"
    },
    "description": "This is a premium Bloomsbury product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 52
  },
  {
    "id": 133,
    "title": "Scholastic Secret of Life Memoir | Bestseller Model 13 | High Quality Performance",
    "price": 1063,
    "mrp": 1619.8,
    "rating": 4.1,
    "rating_count": 8269,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Books",
    "brand": "Scholastic",
    "highlights": "Scholastic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Scholastic Custom Author Value 13-0",
      "Format": "Scholastic Custom Format Value 13-1",
      "Pages": "Scholastic Custom Pages Value 13-2",
      "Publisher": "Scholastic Custom Publisher Value 13-3",
      "Language": "Scholastic Custom Language Value 13-4"
    },
    "description": "This is a premium Scholastic product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 113
  },
  {
    "id": 134,
    "title": "Simon & Schuster Journey to the Unknown Destination | Bestseller Model 14 | High Quality Performance",
    "price": 3503.7,
    "mrp": 4992.2,
    "rating": 4,
    "rating_count": 5017,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Books",
    "brand": "Simon & Schuster",
    "highlights": "Simon & Schuster Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Simon & Schuster Custom Author Value 14-0",
      "Format": "Simon & Schuster Custom Format Value 14-1",
      "Pages": "Simon & Schuster Custom Pages Value 14-2",
      "Publisher": "Simon & Schuster Custom Publisher Value 14-3",
      "Language": "Simon & Schuster Custom Language Value 14-4"
    },
    "description": "This is a premium Simon & Schuster product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 150
  },
  {
    "id": 135,
    "title": "HarperCollins The Great Gatsby Novel | Bestseller Model 15 | High Quality Performance",
    "price": 485.6,
    "mrp": 572.7,
    "rating": 4.7,
    "rating_count": 1638,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Books",
    "brand": "HarperCollins",
    "highlights": "HarperCollins Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "HarperCollins Custom Author Value 15-0",
      "Format": "HarperCollins Custom Format Value 15-1",
      "Pages": "HarperCollins Custom Pages Value 15-2",
      "Publisher": "HarperCollins Custom Publisher Value 15-3",
      "Language": "HarperCollins Custom Language Value 15-4"
    },
    "description": "This is a premium HarperCollins product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 75
  },
  {
    "id": 136,
    "title": "Penguin Chronicles of Narnia Fantasy Book | Bestseller Model 16 | High Quality Performance",
    "price": 3172.4,
    "mrp": 4620,
    "rating": 4.2,
    "rating_count": 2069,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Books",
    "brand": "Penguin",
    "highlights": "Penguin Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Penguin Custom Author Value 16-0",
      "Format": "Penguin Custom Format Value 16-1",
      "Pages": "Penguin Custom Pages Value 16-2",
      "Publisher": "Penguin Custom Publisher Value 16-3",
      "Language": "Penguin Custom Language Value 16-4"
    },
    "description": "This is a premium Penguin product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 75
  },
  {
    "id": 137,
    "title": "Bloomsbury A Game of Thrones Novel | Bestseller Model 17 | High Quality Performance",
    "price": 5087.3,
    "mrp": 7201.7,
    "rating": 4.6,
    "rating_count": 8392,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Books",
    "brand": "Bloomsbury",
    "highlights": "Bloomsbury Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Bloomsbury Custom Author Value 17-0",
      "Format": "Bloomsbury Custom Format Value 17-1",
      "Pages": "Bloomsbury Custom Pages Value 17-2",
      "Publisher": "Bloomsbury Custom Publisher Value 17-3",
      "Language": "Bloomsbury Custom Language Value 17-4"
    },
    "description": "This is a premium Bloomsbury product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 7
  },
  {
    "id": 138,
    "title": "Scholastic Secret of Life Memoir | Bestseller Model 18 | High Quality Performance",
    "price": 3827.9,
    "mrp": 4692.1,
    "rating": 4.8,
    "rating_count": 4350,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Books",
    "brand": "Scholastic",
    "highlights": "Scholastic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Scholastic Custom Author Value 18-0",
      "Format": "Scholastic Custom Format Value 18-1",
      "Pages": "Scholastic Custom Pages Value 18-2",
      "Publisher": "Scholastic Custom Publisher Value 18-3",
      "Language": "Scholastic Custom Language Value 18-4"
    },
    "description": "This is a premium Scholastic product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 56
  },
  {
    "id": 139,
    "title": "Simon & Schuster Journey to the Unknown Destination | Bestseller Model 19 | High Quality Performance",
    "price": 2949,
    "mrp": 3457.3,
    "rating": 4.6,
    "rating_count": 9563,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Books",
    "brand": "Simon & Schuster",
    "highlights": "Simon & Schuster Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "Simon & Schuster Custom Author Value 19-0",
      "Format": "Simon & Schuster Custom Format Value 19-1",
      "Pages": "Simon & Schuster Custom Pages Value 19-2",
      "Publisher": "Simon & Schuster Custom Publisher Value 19-3",
      "Language": "Simon & Schuster Custom Language Value 19-4"
    },
    "description": "This is a premium Simon & Schuster product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 153
  },
  {
    "id": 140,
    "title": "HarperCollins The Great Gatsby Novel | Bestseller Model 20 | High Quality Performance",
    "price": 2617.8,
    "mrp": 3321.4,
    "rating": 4.9,
    "rating_count": 2920,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Books",
    "brand": "HarperCollins",
    "highlights": "HarperCollins Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Author": "HarperCollins Custom Author Value 20-0",
      "Format": "HarperCollins Custom Format Value 20-1",
      "Pages": "HarperCollins Custom Pages Value 20-2",
      "Publisher": "HarperCollins Custom Publisher Value 20-3",
      "Language": "HarperCollins Custom Language Value 20-4"
    },
    "description": "This is a premium HarperCollins product in the Books department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 125
  },
  {
    "id": 141,
    "title": "Steelbird Tubeless Tyre | Bestseller Model 1 | High Quality Performance",
    "price": 2031.4,
    "mrp": 2703,
    "rating": 4.8,
    "rating_count": 4465,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#1",
    "category": "Car & Motorbike",
    "brand": "Steelbird",
    "highlights": "Steelbird Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Steelbird Custom Weight Value 1-0",
      "Material": "Steelbird Custom Material Value 1-1",
      "Size": "Steelbird Custom Size Value 1-2",
      "Fit Type": "Steelbird Custom Fit Type Value 1-3",
      "Color": "Steelbird Custom Color Value 1-4"
    },
    "description": "This is a premium Steelbird product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 51
  },
  {
    "id": 142,
    "title": "Motul Synthetic Engine Oil | Bestseller Model 2 | High Quality Performance",
    "price": 864.5,
    "mrp": 1304.3,
    "rating": 4,
    "rating_count": 9508,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#2",
    "category": "Car & Motorbike",
    "brand": "Motul",
    "highlights": "Motul Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Motul Custom Weight Value 2-0",
      "Material": "Motul Custom Material Value 2-1",
      "Size": "Motul Custom Size Value 2-2",
      "Fit Type": "Motul Custom Fit Type Value 2-3",
      "Color": "Motul Custom Color Value 2-4"
    },
    "description": "This is a premium Motul product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 8
  },
  {
    "id": 143,
    "title": "Michelin Heavy Duty Car Cover | Bestseller Model 3 | High Quality Performance",
    "price": 5106.1,
    "mrp": 7255,
    "rating": 4.1,
    "rating_count": 5948,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#3",
    "category": "Car & Motorbike",
    "brand": "Michelin",
    "highlights": "Michelin Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Michelin Custom Weight Value 3-0",
      "Material": "Michelin Custom Material Value 3-1",
      "Size": "Michelin Custom Size Value 3-2",
      "Fit Type": "Michelin Custom Fit Type Value 3-3",
      "Color": "Michelin Custom Color Value 3-4"
    },
    "description": "This is a premium Michelin product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 132
  },
  {
    "id": 144,
    "title": "Bosch Waterproof Spark Plug | Bestseller Model 4 | High Quality Performance",
    "price": 3770.3,
    "mrp": 5349.6,
    "rating": 4.4,
    "rating_count": 9547,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#4",
    "category": "Car & Motorbike",
    "brand": "Bosch",
    "highlights": "Bosch Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Bosch Custom Weight Value 4-0",
      "Material": "Bosch Custom Material Value 4-1",
      "Size": "Bosch Custom Size Value 4-2",
      "Fit Type": "Bosch Custom Fit Type Value 4-3",
      "Color": "Bosch Custom Color Value 4-4"
    },
    "description": "This is a premium Bosch product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 78
  },
  {
    "id": 145,
    "title": "Royal Enfield Full Face Helmet | Bestseller Model 5 | High Quality Performance",
    "price": 662.5,
    "mrp": 880.6,
    "rating": 4.6,
    "rating_count": 7502,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#5",
    "category": "Car & Motorbike",
    "brand": "Royal Enfield",
    "highlights": "Royal Enfield Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Royal Enfield Custom Weight Value 5-0",
      "Material": "Royal Enfield Custom Material Value 5-1",
      "Size": "Royal Enfield Custom Size Value 5-2",
      "Fit Type": "Royal Enfield Custom Fit Type Value 5-3",
      "Color": "Royal Enfield Custom Color Value 5-4"
    },
    "description": "This is a premium Royal Enfield product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 76
  },
  {
    "id": 146,
    "title": "Vega Tubeless Tyre | Bestseller Model 6 | High Quality Performance",
    "price": 1535.7,
    "mrp": 2025.1,
    "rating": 4.3,
    "rating_count": 1587,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#6",
    "category": "Car & Motorbike",
    "brand": "Vega",
    "highlights": "Vega Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Vega Custom Weight Value 6-0",
      "Material": "Vega Custom Material Value 6-1",
      "Size": "Vega Custom Size Value 6-2",
      "Fit Type": "Vega Custom Fit Type Value 6-3",
      "Color": "Vega Custom Color Value 6-4"
    },
    "description": "This is a premium Vega product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 142
  },
  {
    "id": 147,
    "title": "Steelbird Synthetic Engine Oil | Bestseller Model 7 | High Quality Performance",
    "price": 792.8,
    "mrp": 1006.6,
    "rating": 4.8,
    "rating_count": 446,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#7",
    "category": "Car & Motorbike",
    "brand": "Steelbird",
    "highlights": "Steelbird Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Steelbird Custom Weight Value 7-0",
      "Material": "Steelbird Custom Material Value 7-1",
      "Size": "Steelbird Custom Size Value 7-2",
      "Fit Type": "Steelbird Custom Fit Type Value 7-3",
      "Color": "Steelbird Custom Color Value 7-4"
    },
    "description": "This is a premium Steelbird product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 81
  },
  {
    "id": 148,
    "title": "Motul Heavy Duty Car Cover | Bestseller Model 8 | High Quality Performance",
    "price": 3424,
    "mrp": 4446.6,
    "rating": 4.6,
    "rating_count": 9061,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#8",
    "category": "Car & Motorbike",
    "brand": "Motul",
    "highlights": "Motul Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Motul Custom Weight Value 8-0",
      "Material": "Motul Custom Material Value 8-1",
      "Size": "Motul Custom Size Value 8-2",
      "Fit Type": "Motul Custom Fit Type Value 8-3",
      "Color": "Motul Custom Color Value 8-4"
    },
    "description": "This is a premium Motul product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 98
  },
  {
    "id": 149,
    "title": "Michelin Waterproof Spark Plug | Bestseller Model 9 | High Quality Performance",
    "price": 2946.6,
    "mrp": 4078.2,
    "rating": 4.8,
    "rating_count": 1432,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#9",
    "category": "Car & Motorbike",
    "brand": "Michelin",
    "highlights": "Michelin Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Michelin Custom Weight Value 9-0",
      "Material": "Michelin Custom Material Value 9-1",
      "Size": "Michelin Custom Size Value 9-2",
      "Fit Type": "Michelin Custom Fit Type Value 9-3",
      "Color": "Michelin Custom Color Value 9-4"
    },
    "description": "This is a premium Michelin product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 144
  },
  {
    "id": 150,
    "title": "Bosch Full Face Helmet | Bestseller Model 10 | High Quality Performance",
    "price": 2968.8,
    "mrp": 4504.3,
    "rating": 4.1,
    "rating_count": 5009,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#10",
    "category": "Car & Motorbike",
    "brand": "Bosch",
    "highlights": "Bosch Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Bosch Custom Weight Value 10-0",
      "Material": "Bosch Custom Material Value 10-1",
      "Size": "Bosch Custom Size Value 10-2",
      "Fit Type": "Bosch Custom Fit Type Value 10-3",
      "Color": "Bosch Custom Color Value 10-4"
    },
    "description": "This is a premium Bosch product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 124
  },
  {
    "id": 151,
    "title": "Royal Enfield Tubeless Tyre | Bestseller Model 11 | High Quality Performance",
    "price": 2218.4,
    "mrp": 3055.5,
    "rating": 4.2,
    "rating_count": 5229,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#11",
    "category": "Car & Motorbike",
    "brand": "Royal Enfield",
    "highlights": "Royal Enfield Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Royal Enfield Custom Weight Value 11-0",
      "Material": "Royal Enfield Custom Material Value 11-1",
      "Size": "Royal Enfield Custom Size Value 11-2",
      "Fit Type": "Royal Enfield Custom Fit Type Value 11-3",
      "Color": "Royal Enfield Custom Color Value 11-4"
    },
    "description": "This is a premium Royal Enfield product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 54
  },
  {
    "id": 152,
    "title": "Vega Synthetic Engine Oil | Bestseller Model 12 | High Quality Performance",
    "price": 3818,
    "mrp": 5018.1,
    "rating": 4.1,
    "rating_count": 3504,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#12",
    "category": "Car & Motorbike",
    "brand": "Vega",
    "highlights": "Vega Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Vega Custom Weight Value 12-0",
      "Material": "Vega Custom Material Value 12-1",
      "Size": "Vega Custom Size Value 12-2",
      "Fit Type": "Vega Custom Fit Type Value 12-3",
      "Color": "Vega Custom Color Value 12-4"
    },
    "description": "This is a premium Vega product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 144
  },
  {
    "id": 153,
    "title": "Steelbird Heavy Duty Car Cover | Bestseller Model 13 | High Quality Performance",
    "price": 3292.4,
    "mrp": 5126.6,
    "rating": 4.8,
    "rating_count": 3566,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#13",
    "category": "Car & Motorbike",
    "brand": "Steelbird",
    "highlights": "Steelbird Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Steelbird Custom Weight Value 13-0",
      "Material": "Steelbird Custom Material Value 13-1",
      "Size": "Steelbird Custom Size Value 13-2",
      "Fit Type": "Steelbird Custom Fit Type Value 13-3",
      "Color": "Steelbird Custom Color Value 13-4"
    },
    "description": "This is a premium Steelbird product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 39
  },
  {
    "id": 154,
    "title": "Motul Waterproof Spark Plug | Bestseller Model 14 | High Quality Performance",
    "price": 4116.2,
    "mrp": 5415.5,
    "rating": 4.6,
    "rating_count": 1211,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#14",
    "category": "Car & Motorbike",
    "brand": "Motul",
    "highlights": "Motul Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Motul Custom Weight Value 14-0",
      "Material": "Motul Custom Material Value 14-1",
      "Size": "Motul Custom Size Value 14-2",
      "Fit Type": "Motul Custom Fit Type Value 14-3",
      "Color": "Motul Custom Color Value 14-4"
    },
    "description": "This is a premium Motul product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 7
  },
  {
    "id": 155,
    "title": "Michelin Full Face Helmet | Bestseller Model 15 | High Quality Performance",
    "price": 4542.1,
    "mrp": 6076.3,
    "rating": 4.1,
    "rating_count": 1591,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#15",
    "category": "Car & Motorbike",
    "brand": "Michelin",
    "highlights": "Michelin Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Michelin Custom Weight Value 15-0",
      "Material": "Michelin Custom Material Value 15-1",
      "Size": "Michelin Custom Size Value 15-2",
      "Fit Type": "Michelin Custom Fit Type Value 15-3",
      "Color": "Michelin Custom Color Value 15-4"
    },
    "description": "This is a premium Michelin product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 115
  },
  {
    "id": 156,
    "title": "Bosch Tubeless Tyre | Bestseller Model 16 | High Quality Performance",
    "price": 4221.6,
    "mrp": 6360.5,
    "rating": 4.1,
    "rating_count": 3129,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#16",
    "category": "Car & Motorbike",
    "brand": "Bosch",
    "highlights": "Bosch Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Bosch Custom Weight Value 16-0",
      "Material": "Bosch Custom Material Value 16-1",
      "Size": "Bosch Custom Size Value 16-2",
      "Fit Type": "Bosch Custom Fit Type Value 16-3",
      "Color": "Bosch Custom Color Value 16-4"
    },
    "description": "This is a premium Bosch product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 51
  },
  {
    "id": 157,
    "title": "Royal Enfield Synthetic Engine Oil | Bestseller Model 17 | High Quality Performance",
    "price": 2543.8,
    "mrp": 2878,
    "rating": 4.7,
    "rating_count": 723,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#17",
    "category": "Car & Motorbike",
    "brand": "Royal Enfield",
    "highlights": "Royal Enfield Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Royal Enfield Custom Weight Value 17-0",
      "Material": "Royal Enfield Custom Material Value 17-1",
      "Size": "Royal Enfield Custom Size Value 17-2",
      "Fit Type": "Royal Enfield Custom Fit Type Value 17-3",
      "Color": "Royal Enfield Custom Color Value 17-4"
    },
    "description": "This is a premium Royal Enfield product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 98
  },
  {
    "id": 158,
    "title": "Vega Heavy Duty Car Cover | Bestseller Model 18 | High Quality Performance",
    "price": 3197.4,
    "mrp": 4863.4,
    "rating": 4.7,
    "rating_count": 8320,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#18",
    "category": "Car & Motorbike",
    "brand": "Vega",
    "highlights": "Vega Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Vega Custom Weight Value 18-0",
      "Material": "Vega Custom Material Value 18-1",
      "Size": "Vega Custom Size Value 18-2",
      "Fit Type": "Vega Custom Fit Type Value 18-3",
      "Color": "Vega Custom Color Value 18-4"
    },
    "description": "This is a premium Vega product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 46
  },
  {
    "id": 159,
    "title": "Steelbird Waterproof Spark Plug | Bestseller Model 19 | High Quality Performance",
    "price": 3867.2,
    "mrp": 5004.2,
    "rating": 4.5,
    "rating_count": 5841,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#19",
    "category": "Car & Motorbike",
    "brand": "Steelbird",
    "highlights": "Steelbird Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Steelbird Custom Weight Value 19-0",
      "Material": "Steelbird Custom Material Value 19-1",
      "Size": "Steelbird Custom Size Value 19-2",
      "Fit Type": "Steelbird Custom Fit Type Value 19-3",
      "Color": "Steelbird Custom Color Value 19-4"
    },
    "description": "This is a premium Steelbird product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 76
  },
  {
    "id": 160,
    "title": "Motul Full Face Helmet | Bestseller Model 20 | High Quality Performance",
    "price": 2704.5,
    "mrp": 4131.8,
    "rating": 4,
    "rating_count": 4680,
    "image_url": "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71TfK6WMv+L._AC_UL480_FMwebp_QL65_.jpg"
    ],
    "badge": "#20",
    "category": "Car & Motorbike",
    "brand": "Motul",
    "highlights": "Motul Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Weight": "Motul Custom Weight Value 20-0",
      "Material": "Motul Custom Material Value 20-1",
      "Size": "Motul Custom Size Value 20-2",
      "Fit Type": "Motul Custom Fit Type Value 20-3",
      "Color": "Motul Custom Color Value 20-4"
    },
    "description": "This is a premium Motul product in the Car & Motorbike department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 63
  },
  {
    "id": 161,
    "title": "Allen Solly Cotton Blend Jeans | Bestseller Model 1 | High Quality Performance",
    "price": 309.4,
    "mrp": 416.6,
    "rating": 4.6,
    "rating_count": 9849,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#1",
    "category": "Clothing & Accessories",
    "brand": "Allen Solly",
    "highlights": "Allen Solly Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Allen Solly Custom Fit Value 1-0",
      "Fabric": "Allen Solly Custom Fabric Value 1-1",
      "Wash Care": "Allen Solly Custom Wash Care Value 1-2",
      "Style": "Allen Solly Custom Style Value 1-3",
      "Color": "Allen Solly Custom Color Value 1-4"
    },
    "description": "This is a premium Allen Solly product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 101
  },
  {
    "id": 162,
    "title": "Puma Casual Jacket | Bestseller Model 2 | High Quality Performance",
    "price": 4501.6,
    "mrp": 5770.4,
    "rating": 4.6,
    "rating_count": 2537,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#2",
    "category": "Clothing & Accessories",
    "brand": "Puma",
    "highlights": "Puma Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Puma Custom Fit Value 2-0",
      "Fabric": "Puma Custom Fabric Value 2-1",
      "Wash Care": "Puma Custom Wash Care Value 2-2",
      "Style": "Puma Custom Style Value 2-3",
      "Color": "Puma Custom Color Value 2-4"
    },
    "description": "This is a premium Puma product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 80
  },
  {
    "id": 163,
    "title": "Adidas Printed Sneakers | Bestseller Model 3 | High Quality Performance",
    "price": 2772,
    "mrp": 4247.1,
    "rating": 4.7,
    "rating_count": 6438,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#3",
    "category": "Clothing & Accessories",
    "brand": "Adidas",
    "highlights": "Adidas Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Adidas Custom Fit Value 3-0",
      "Fabric": "Adidas Custom Fabric Value 3-1",
      "Wash Care": "Adidas Custom Wash Care Value 3-2",
      "Style": "Adidas Custom Style Value 3-3",
      "Color": "Adidas Custom Color Value 3-4"
    },
    "description": "This is a premium Adidas product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 150
  },
  {
    "id": 164,
    "title": "Peter England Athletic Chinos | Bestseller Model 4 | High Quality Performance",
    "price": 4388.1,
    "mrp": 5501.9,
    "rating": 4.5,
    "rating_count": 4855,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#4",
    "category": "Clothing & Accessories",
    "brand": "Peter England",
    "highlights": "Peter England Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Peter England Custom Fit Value 4-0",
      "Fabric": "Peter England Custom Fabric Value 4-1",
      "Wash Care": "Peter England Custom Wash Care Value 4-2",
      "Style": "Peter England Custom Style Value 4-3",
      "Color": "Peter England Custom Color Value 4-4"
    },
    "description": "This is a premium Peter England product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 84
  },
  {
    "id": 165,
    "title": "U.S. Polo Assn. Slim Fit T-Shirt | Bestseller Model 5 | High Quality Performance",
    "price": 1253.1,
    "mrp": 1679.8,
    "rating": 4.6,
    "rating_count": 5721,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#5",
    "category": "Clothing & Accessories",
    "brand": "U.S. Polo Assn.",
    "highlights": "U.S. Polo Assn. Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "U.S. Polo Assn. Custom Fit Value 5-0",
      "Fabric": "U.S. Polo Assn. Custom Fabric Value 5-1",
      "Wash Care": "U.S. Polo Assn. Custom Wash Care Value 5-2",
      "Style": "U.S. Polo Assn. Custom Style Value 5-3",
      "Color": "U.S. Polo Assn. Custom Color Value 5-4"
    },
    "description": "This is a premium U.S. Polo Assn. product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 71
  },
  {
    "id": 166,
    "title": "Levi's Cotton Blend Jeans | Bestseller Model 6 | High Quality Performance",
    "price": 2990.5,
    "mrp": 4594.1,
    "rating": 4.2,
    "rating_count": 6605,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#6",
    "category": "Clothing & Accessories",
    "brand": "Levi's",
    "highlights": "Levi's Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Levi's Custom Fit Value 6-0",
      "Fabric": "Levi's Custom Fabric Value 6-1",
      "Wash Care": "Levi's Custom Wash Care Value 6-2",
      "Style": "Levi's Custom Style Value 6-3",
      "Color": "Levi's Custom Color Value 6-4"
    },
    "description": "This is a premium Levi's product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 140
  },
  {
    "id": 167,
    "title": "Allen Solly Casual Jacket | Bestseller Model 7 | High Quality Performance",
    "price": 3768.9,
    "mrp": 4648.4,
    "rating": 4.8,
    "rating_count": 5885,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#7",
    "category": "Clothing & Accessories",
    "brand": "Allen Solly",
    "highlights": "Allen Solly Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Allen Solly Custom Fit Value 7-0",
      "Fabric": "Allen Solly Custom Fabric Value 7-1",
      "Wash Care": "Allen Solly Custom Wash Care Value 7-2",
      "Style": "Allen Solly Custom Style Value 7-3",
      "Color": "Allen Solly Custom Color Value 7-4"
    },
    "description": "This is a premium Allen Solly product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 38
  },
  {
    "id": 168,
    "title": "Puma Printed Sneakers | Bestseller Model 8 | High Quality Performance",
    "price": 4876.1,
    "mrp": 5746.5,
    "rating": 4.4,
    "rating_count": 9640,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#8",
    "category": "Clothing & Accessories",
    "brand": "Puma",
    "highlights": "Puma Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Puma Custom Fit Value 8-0",
      "Fabric": "Puma Custom Fabric Value 8-1",
      "Wash Care": "Puma Custom Wash Care Value 8-2",
      "Style": "Puma Custom Style Value 8-3",
      "Color": "Puma Custom Color Value 8-4"
    },
    "description": "This is a premium Puma product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 153
  },
  {
    "id": 169,
    "title": "Adidas Athletic Chinos | Bestseller Model 9 | High Quality Performance",
    "price": 206.2,
    "mrp": 253.1,
    "rating": 4.8,
    "rating_count": 6167,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#9",
    "category": "Clothing & Accessories",
    "brand": "Adidas",
    "highlights": "Adidas Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Adidas Custom Fit Value 9-0",
      "Fabric": "Adidas Custom Fabric Value 9-1",
      "Wash Care": "Adidas Custom Wash Care Value 9-2",
      "Style": "Adidas Custom Style Value 9-3",
      "Color": "Adidas Custom Color Value 9-4"
    },
    "description": "This is a premium Adidas product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 8
  },
  {
    "id": 170,
    "title": "Peter England Slim Fit T-Shirt | Bestseller Model 10 | High Quality Performance",
    "price": 3564.1,
    "mrp": 4399.4,
    "rating": 4.5,
    "rating_count": 3981,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#10",
    "category": "Clothing & Accessories",
    "brand": "Peter England",
    "highlights": "Peter England Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Peter England Custom Fit Value 10-0",
      "Fabric": "Peter England Custom Fabric Value 10-1",
      "Wash Care": "Peter England Custom Wash Care Value 10-2",
      "Style": "Peter England Custom Style Value 10-3",
      "Color": "Peter England Custom Color Value 10-4"
    },
    "description": "This is a premium Peter England product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 102
  },
  {
    "id": 171,
    "title": "U.S. Polo Assn. Cotton Blend Jeans | Bestseller Model 11 | High Quality Performance",
    "price": 3539.7,
    "mrp": 5126.8,
    "rating": 4.4,
    "rating_count": 838,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#11",
    "category": "Clothing & Accessories",
    "brand": "U.S. Polo Assn.",
    "highlights": "U.S. Polo Assn. Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "U.S. Polo Assn. Custom Fit Value 11-0",
      "Fabric": "U.S. Polo Assn. Custom Fabric Value 11-1",
      "Wash Care": "U.S. Polo Assn. Custom Wash Care Value 11-2",
      "Style": "U.S. Polo Assn. Custom Style Value 11-3",
      "Color": "U.S. Polo Assn. Custom Color Value 11-4"
    },
    "description": "This is a premium U.S. Polo Assn. product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 41
  },
  {
    "id": 172,
    "title": "Levi's Casual Jacket | Bestseller Model 12 | High Quality Performance",
    "price": 4952.8,
    "mrp": 6734.9,
    "rating": 4.1,
    "rating_count": 3996,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#12",
    "category": "Clothing & Accessories",
    "brand": "Levi's",
    "highlights": "Levi's Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Levi's Custom Fit Value 12-0",
      "Fabric": "Levi's Custom Fabric Value 12-1",
      "Wash Care": "Levi's Custom Wash Care Value 12-2",
      "Style": "Levi's Custom Style Value 12-3",
      "Color": "Levi's Custom Color Value 12-4"
    },
    "description": "This is a premium Levi's product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 14
  },
  {
    "id": 173,
    "title": "Allen Solly Printed Sneakers | Bestseller Model 13 | High Quality Performance",
    "price": 508.2,
    "mrp": 702.9,
    "rating": 4.8,
    "rating_count": 8427,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#13",
    "category": "Clothing & Accessories",
    "brand": "Allen Solly",
    "highlights": "Allen Solly Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Allen Solly Custom Fit Value 13-0",
      "Fabric": "Allen Solly Custom Fabric Value 13-1",
      "Wash Care": "Allen Solly Custom Wash Care Value 13-2",
      "Style": "Allen Solly Custom Style Value 13-3",
      "Color": "Allen Solly Custom Color Value 13-4"
    },
    "description": "This is a premium Allen Solly product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 153
  },
  {
    "id": 174,
    "title": "Puma Athletic Chinos | Bestseller Model 14 | High Quality Performance",
    "price": 2663.1,
    "mrp": 3377.3,
    "rating": 4.2,
    "rating_count": 360,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#14",
    "category": "Clothing & Accessories",
    "brand": "Puma",
    "highlights": "Puma Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Puma Custom Fit Value 14-0",
      "Fabric": "Puma Custom Fabric Value 14-1",
      "Wash Care": "Puma Custom Wash Care Value 14-2",
      "Style": "Puma Custom Style Value 14-3",
      "Color": "Puma Custom Color Value 14-4"
    },
    "description": "This is a premium Puma product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 154
  },
  {
    "id": 175,
    "title": "Adidas Slim Fit T-Shirt | Bestseller Model 15 | High Quality Performance",
    "price": 1716.1,
    "mrp": 2207.2,
    "rating": 4.3,
    "rating_count": 3153,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#15",
    "category": "Clothing & Accessories",
    "brand": "Adidas",
    "highlights": "Adidas Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Adidas Custom Fit Value 15-0",
      "Fabric": "Adidas Custom Fabric Value 15-1",
      "Wash Care": "Adidas Custom Wash Care Value 15-2",
      "Style": "Adidas Custom Style Value 15-3",
      "Color": "Adidas Custom Color Value 15-4"
    },
    "description": "This is a premium Adidas product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 106
  },
  {
    "id": 176,
    "title": "Peter England Cotton Blend Jeans | Bestseller Model 16 | High Quality Performance",
    "price": 3948.4,
    "mrp": 5773.2,
    "rating": 4,
    "rating_count": 1916,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#16",
    "category": "Clothing & Accessories",
    "brand": "Peter England",
    "highlights": "Peter England Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Peter England Custom Fit Value 16-0",
      "Fabric": "Peter England Custom Fabric Value 16-1",
      "Wash Care": "Peter England Custom Wash Care Value 16-2",
      "Style": "Peter England Custom Style Value 16-3",
      "Color": "Peter England Custom Color Value 16-4"
    },
    "description": "This is a premium Peter England product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 152
  },
  {
    "id": 177,
    "title": "U.S. Polo Assn. Casual Jacket | Bestseller Model 17 | High Quality Performance",
    "price": 2350.1,
    "mrp": 3185,
    "rating": 4.5,
    "rating_count": 6145,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#17",
    "category": "Clothing & Accessories",
    "brand": "U.S. Polo Assn.",
    "highlights": "U.S. Polo Assn. Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "U.S. Polo Assn. Custom Fit Value 17-0",
      "Fabric": "U.S. Polo Assn. Custom Fabric Value 17-1",
      "Wash Care": "U.S. Polo Assn. Custom Wash Care Value 17-2",
      "Style": "U.S. Polo Assn. Custom Style Value 17-3",
      "Color": "U.S. Polo Assn. Custom Color Value 17-4"
    },
    "description": "This is a premium U.S. Polo Assn. product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 144
  },
  {
    "id": 178,
    "title": "Levi's Printed Sneakers | Bestseller Model 18 | High Quality Performance",
    "price": 264.6,
    "mrp": 404.7,
    "rating": 4.6,
    "rating_count": 9153,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#18",
    "category": "Clothing & Accessories",
    "brand": "Levi's",
    "highlights": "Levi's Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Levi's Custom Fit Value 18-0",
      "Fabric": "Levi's Custom Fabric Value 18-1",
      "Wash Care": "Levi's Custom Wash Care Value 18-2",
      "Style": "Levi's Custom Style Value 18-3",
      "Color": "Levi's Custom Color Value 18-4"
    },
    "description": "This is a premium Levi's product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 42
  },
  {
    "id": 179,
    "title": "Allen Solly Athletic Chinos | Bestseller Model 19 | High Quality Performance",
    "price": 3956.6,
    "mrp": 4829.1,
    "rating": 4.6,
    "rating_count": 2388,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#19",
    "category": "Clothing & Accessories",
    "brand": "Allen Solly",
    "highlights": "Allen Solly Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Allen Solly Custom Fit Value 19-0",
      "Fabric": "Allen Solly Custom Fabric Value 19-1",
      "Wash Care": "Allen Solly Custom Wash Care Value 19-2",
      "Style": "Allen Solly Custom Style Value 19-3",
      "Color": "Allen Solly Custom Color Value 19-4"
    },
    "description": "This is a premium Allen Solly product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 73
  },
  {
    "id": 180,
    "title": "Puma Slim Fit T-Shirt | Bestseller Model 20 | High Quality Performance",
    "price": 3745.5,
    "mrp": 4263.2,
    "rating": 4.2,
    "rating_count": 3750,
    "image_url": "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg",
    "images": [
      "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
    ],
    "badge": "#20",
    "category": "Clothing & Accessories",
    "brand": "Puma",
    "highlights": "Puma Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Fit": "Puma Custom Fit Value 20-0",
      "Fabric": "Puma Custom Fabric Value 20-1",
      "Wash Care": "Puma Custom Wash Care Value 20-2",
      "Style": "Puma Custom Style Value 20-3",
      "Color": "Puma Custom Color Value 20-4"
    },
    "description": "This is a premium Puma product in the Clothing & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 95
  },
  {
    "id": 181,
    "title": "HP Mechanical Keyboard | Bestseller Model 1 | High Quality Performance",
    "price": 1527.7,
    "mrp": 2191.2,
    "rating": 4.4,
    "rating_count": 8532,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Computers & Accessories",
    "brand": "HP",
    "highlights": "HP Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "HP Custom Interface Value 1-0",
      "Compatibility": "HP Custom Compatibility Value 1-1",
      "Warranty": "HP Custom Warranty Value 1-2",
      "Color": "HP Custom Color Value 1-3",
      "Weight": "HP Custom Weight Value 1-4"
    },
    "description": "This is a premium HP product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 75
  },
  {
    "id": 182,
    "title": "Lenovo Ultra-Slim Router | Bestseller Model 2 | High Quality Performance",
    "price": 4350.9,
    "mrp": 5482.9,
    "rating": 4.2,
    "rating_count": 3196,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Computers & Accessories",
    "brand": "Lenovo",
    "highlights": "Lenovo Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "Lenovo Custom Interface Value 2-0",
      "Compatibility": "Lenovo Custom Compatibility Value 2-1",
      "Warranty": "Lenovo Custom Warranty Value 2-2",
      "Color": "Lenovo Custom Color Value 2-3",
      "Weight": "Lenovo Custom Weight Value 2-4"
    },
    "description": "This is a premium Lenovo product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 6
  },
  {
    "id": 183,
    "title": "ASUS Dual-Band USB Hub | Bestseller Model 3 | High Quality Performance",
    "price": 570.7,
    "mrp": 657.2,
    "rating": 4.7,
    "rating_count": 8012,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Computers & Accessories",
    "brand": "ASUS",
    "highlights": "ASUS Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "ASUS Custom Interface Value 3-0",
      "Compatibility": "ASUS Custom Compatibility Value 3-1",
      "Warranty": "ASUS Custom Warranty Value 3-2",
      "Color": "ASUS Custom Color Value 3-3",
      "Weight": "ASUS Custom Weight Value 3-4"
    },
    "description": "This is a premium ASUS product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 24
  },
  {
    "id": 184,
    "title": "TP-Link High-Speed Laptop Stand | Bestseller Model 4 | High Quality Performance",
    "price": 261.9,
    "mrp": 391.5,
    "rating": 4.3,
    "rating_count": 9174,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Computers & Accessories",
    "brand": "TP-Link",
    "highlights": "TP-Link Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "TP-Link Custom Interface Value 4-0",
      "Compatibility": "TP-Link Custom Compatibility Value 4-1",
      "Warranty": "TP-Link Custom Warranty Value 4-2",
      "Color": "TP-Link Custom Color Value 4-3",
      "Weight": "TP-Link Custom Weight Value 4-4"
    },
    "description": "This is a premium TP-Link product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 115
  },
  {
    "id": 185,
    "title": "SanDisk Wireless Mouse | Bestseller Model 5 | High Quality Performance",
    "price": 3986.8,
    "mrp": 5478.7,
    "rating": 4.8,
    "rating_count": 8758,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Computers & Accessories",
    "brand": "SanDisk",
    "highlights": "SanDisk Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "SanDisk Custom Interface Value 5-0",
      "Compatibility": "SanDisk Custom Compatibility Value 5-1",
      "Warranty": "SanDisk Custom Warranty Value 5-2",
      "Color": "SanDisk Custom Color Value 5-3",
      "Weight": "SanDisk Custom Weight Value 5-4"
    },
    "description": "This is a premium SanDisk product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 47
  },
  {
    "id": 186,
    "title": "Logitech Mechanical Keyboard | Bestseller Model 6 | High Quality Performance",
    "price": 4539,
    "mrp": 6153.6,
    "rating": 4.6,
    "rating_count": 6503,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Computers & Accessories",
    "brand": "Logitech",
    "highlights": "Logitech Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "Logitech Custom Interface Value 6-0",
      "Compatibility": "Logitech Custom Compatibility Value 6-1",
      "Warranty": "Logitech Custom Warranty Value 6-2",
      "Color": "Logitech Custom Color Value 6-3",
      "Weight": "Logitech Custom Weight Value 6-4"
    },
    "description": "This is a premium Logitech product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 142
  },
  {
    "id": 187,
    "title": "HP Ultra-Slim Router | Bestseller Model 7 | High Quality Performance",
    "price": 4294.3,
    "mrp": 6197.1,
    "rating": 4.1,
    "rating_count": 2154,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Computers & Accessories",
    "brand": "HP",
    "highlights": "HP Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "HP Custom Interface Value 7-0",
      "Compatibility": "HP Custom Compatibility Value 7-1",
      "Warranty": "HP Custom Warranty Value 7-2",
      "Color": "HP Custom Color Value 7-3",
      "Weight": "HP Custom Weight Value 7-4"
    },
    "description": "This is a premium HP product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 21
  },
  {
    "id": 188,
    "title": "Lenovo Dual-Band USB Hub | Bestseller Model 8 | High Quality Performance",
    "price": 4577.1,
    "mrp": 5757.5,
    "rating": 4.4,
    "rating_count": 7507,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Computers & Accessories",
    "brand": "Lenovo",
    "highlights": "Lenovo Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "Lenovo Custom Interface Value 8-0",
      "Compatibility": "Lenovo Custom Compatibility Value 8-1",
      "Warranty": "Lenovo Custom Warranty Value 8-2",
      "Color": "Lenovo Custom Color Value 8-3",
      "Weight": "Lenovo Custom Weight Value 8-4"
    },
    "description": "This is a premium Lenovo product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 23
  },
  {
    "id": 189,
    "title": "ASUS High-Speed Laptop Stand | Bestseller Model 9 | High Quality Performance",
    "price": 3953.1,
    "mrp": 6065.2,
    "rating": 4.4,
    "rating_count": 6404,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Computers & Accessories",
    "brand": "ASUS",
    "highlights": "ASUS Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "ASUS Custom Interface Value 9-0",
      "Compatibility": "ASUS Custom Compatibility Value 9-1",
      "Warranty": "ASUS Custom Warranty Value 9-2",
      "Color": "ASUS Custom Color Value 9-3",
      "Weight": "ASUS Custom Weight Value 9-4"
    },
    "description": "This is a premium ASUS product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 86
  },
  {
    "id": 190,
    "title": "TP-Link Wireless Mouse | Bestseller Model 10 | High Quality Performance",
    "price": 3221.8,
    "mrp": 3870.6,
    "rating": 4.8,
    "rating_count": 8995,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Computers & Accessories",
    "brand": "TP-Link",
    "highlights": "TP-Link Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "TP-Link Custom Interface Value 10-0",
      "Compatibility": "TP-Link Custom Compatibility Value 10-1",
      "Warranty": "TP-Link Custom Warranty Value 10-2",
      "Color": "TP-Link Custom Color Value 10-3",
      "Weight": "TP-Link Custom Weight Value 10-4"
    },
    "description": "This is a premium TP-Link product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 24
  },
  {
    "id": 191,
    "title": "SanDisk Mechanical Keyboard | Bestseller Model 11 | High Quality Performance",
    "price": 1428.6,
    "mrp": 1843.6,
    "rating": 4.5,
    "rating_count": 2044,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Computers & Accessories",
    "brand": "SanDisk",
    "highlights": "SanDisk Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "SanDisk Custom Interface Value 11-0",
      "Compatibility": "SanDisk Custom Compatibility Value 11-1",
      "Warranty": "SanDisk Custom Warranty Value 11-2",
      "Color": "SanDisk Custom Color Value 11-3",
      "Weight": "SanDisk Custom Weight Value 11-4"
    },
    "description": "This is a premium SanDisk product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 89
  },
  {
    "id": 192,
    "title": "Logitech Ultra-Slim Router | Bestseller Model 12 | High Quality Performance",
    "price": 4956.9,
    "mrp": 7445.8,
    "rating": 4.1,
    "rating_count": 9855,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Computers & Accessories",
    "brand": "Logitech",
    "highlights": "Logitech Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "Logitech Custom Interface Value 12-0",
      "Compatibility": "Logitech Custom Compatibility Value 12-1",
      "Warranty": "Logitech Custom Warranty Value 12-2",
      "Color": "Logitech Custom Color Value 12-3",
      "Weight": "Logitech Custom Weight Value 12-4"
    },
    "description": "This is a premium Logitech product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 152
  },
  {
    "id": 193,
    "title": "HP Dual-Band USB Hub | Bestseller Model 13 | High Quality Performance",
    "price": 5101.4,
    "mrp": 7538.8,
    "rating": 4.4,
    "rating_count": 8548,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Computers & Accessories",
    "brand": "HP",
    "highlights": "HP Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "HP Custom Interface Value 13-0",
      "Compatibility": "HP Custom Compatibility Value 13-1",
      "Warranty": "HP Custom Warranty Value 13-2",
      "Color": "HP Custom Color Value 13-3",
      "Weight": "HP Custom Weight Value 13-4"
    },
    "description": "This is a premium HP product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 13
  },
  {
    "id": 194,
    "title": "Lenovo High-Speed Laptop Stand | Bestseller Model 14 | High Quality Performance",
    "price": 3399.5,
    "mrp": 5379.7,
    "rating": 4,
    "rating_count": 7933,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Computers & Accessories",
    "brand": "Lenovo",
    "highlights": "Lenovo Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "Lenovo Custom Interface Value 14-0",
      "Compatibility": "Lenovo Custom Compatibility Value 14-1",
      "Warranty": "Lenovo Custom Warranty Value 14-2",
      "Color": "Lenovo Custom Color Value 14-3",
      "Weight": "Lenovo Custom Weight Value 14-4"
    },
    "description": "This is a premium Lenovo product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 17
  },
  {
    "id": 195,
    "title": "ASUS Wireless Mouse | Bestseller Model 15 | High Quality Performance",
    "price": 4372.8,
    "mrp": 5481.4,
    "rating": 4.1,
    "rating_count": 8996,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Computers & Accessories",
    "brand": "ASUS",
    "highlights": "ASUS Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "ASUS Custom Interface Value 15-0",
      "Compatibility": "ASUS Custom Compatibility Value 15-1",
      "Warranty": "ASUS Custom Warranty Value 15-2",
      "Color": "ASUS Custom Color Value 15-3",
      "Weight": "ASUS Custom Weight Value 15-4"
    },
    "description": "This is a premium ASUS product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 128
  },
  {
    "id": 196,
    "title": "TP-Link Mechanical Keyboard | Bestseller Model 16 | High Quality Performance",
    "price": 3108.7,
    "mrp": 4246.6,
    "rating": 4.3,
    "rating_count": 9369,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Computers & Accessories",
    "brand": "TP-Link",
    "highlights": "TP-Link Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "TP-Link Custom Interface Value 16-0",
      "Compatibility": "TP-Link Custom Compatibility Value 16-1",
      "Warranty": "TP-Link Custom Warranty Value 16-2",
      "Color": "TP-Link Custom Color Value 16-3",
      "Weight": "TP-Link Custom Weight Value 16-4"
    },
    "description": "This is a premium TP-Link product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 145
  },
  {
    "id": 197,
    "title": "SanDisk Ultra-Slim Router | Bestseller Model 17 | High Quality Performance",
    "price": 712.3,
    "mrp": 857.8,
    "rating": 4.6,
    "rating_count": 420,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Computers & Accessories",
    "brand": "SanDisk",
    "highlights": "SanDisk Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "SanDisk Custom Interface Value 17-0",
      "Compatibility": "SanDisk Custom Compatibility Value 17-1",
      "Warranty": "SanDisk Custom Warranty Value 17-2",
      "Color": "SanDisk Custom Color Value 17-3",
      "Weight": "SanDisk Custom Weight Value 17-4"
    },
    "description": "This is a premium SanDisk product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 97
  },
  {
    "id": 198,
    "title": "Logitech Dual-Band USB Hub | Bestseller Model 18 | High Quality Performance",
    "price": 4771.2,
    "mrp": 5797.4,
    "rating": 4.1,
    "rating_count": 9211,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Computers & Accessories",
    "brand": "Logitech",
    "highlights": "Logitech Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "Logitech Custom Interface Value 18-0",
      "Compatibility": "Logitech Custom Compatibility Value 18-1",
      "Warranty": "Logitech Custom Warranty Value 18-2",
      "Color": "Logitech Custom Color Value 18-3",
      "Weight": "Logitech Custom Weight Value 18-4"
    },
    "description": "This is a premium Logitech product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 133
  },
  {
    "id": 199,
    "title": "HP High-Speed Laptop Stand | Bestseller Model 19 | High Quality Performance",
    "price": 4655,
    "mrp": 7167.9,
    "rating": 4.9,
    "rating_count": 6523,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Computers & Accessories",
    "brand": "HP",
    "highlights": "HP Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "HP Custom Interface Value 19-0",
      "Compatibility": "HP Custom Compatibility Value 19-1",
      "Warranty": "HP Custom Warranty Value 19-2",
      "Color": "HP Custom Color Value 19-3",
      "Weight": "HP Custom Weight Value 19-4"
    },
    "description": "This is a premium HP product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 121
  },
  {
    "id": 200,
    "title": "Lenovo Wireless Mouse | Bestseller Model 20 | High Quality Performance",
    "price": 3359.2,
    "mrp": 4692.5,
    "rating": 4.8,
    "rating_count": 9395,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Computers & Accessories",
    "brand": "Lenovo",
    "highlights": "Lenovo Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Interface": "Lenovo Custom Interface Value 20-0",
      "Compatibility": "Lenovo Custom Compatibility Value 20-1",
      "Warranty": "Lenovo Custom Warranty Value 20-2",
      "Color": "Lenovo Custom Color Value 20-3",
      "Weight": "Lenovo Custom Weight Value 20-4"
    },
    "description": "This is a premium Lenovo product in the Computers & Accessories department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 144
  },
  {
    "id": 201,
    "title": "boAt Airdopes Wireless Earbuds | Bestseller Model 1 | High Quality Performance",
    "price": 1871.1,
    "mrp": 2526.3,
    "rating": 4.7,
    "rating_count": 3828,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Electronics",
    "brand": "boAt",
    "highlights": "boAt Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "boAt Custom RAM Value 1-0",
      "Storage": "boAt Custom Storage Value 1-1",
      "Processor": "boAt Custom Processor Value 1-2",
      "Battery": "boAt Custom Battery Value 1-3",
      "Display": "boAt Custom Display Value 1-4"
    },
    "description": "This is a premium boAt product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 87
  },
  {
    "id": 202,
    "title": "Samsung Galaxy S24 ANC Headphones | Bestseller Model 2 | High Quality Performance",
    "price": 3272.6,
    "mrp": 4190.9,
    "rating": 4.2,
    "rating_count": 596,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Electronics",
    "brand": "Samsung",
    "highlights": "Samsung Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Samsung Custom RAM Value 2-0",
      "Storage": "Samsung Custom Storage Value 2-1",
      "Processor": "Samsung Custom Processor Value 2-2",
      "Battery": "Samsung Custom Battery Value 2-3",
      "Display": "Samsung Custom Display Value 2-4"
    },
    "description": "This is a premium Samsung product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 106
  },
  {
    "id": 203,
    "title": "Apple iPhone 15 Retina Tablet | Bestseller Model 3 | High Quality Performance",
    "price": 5093.5,
    "mrp": 5674.6,
    "rating": 4.1,
    "rating_count": 7829,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Electronics",
    "brand": "Apple",
    "highlights": "Apple Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Apple Custom RAM Value 3-0",
      "Storage": "Apple Custom Storage Value 3-1",
      "Processor": "Apple Custom Processor Value 3-2",
      "Battery": "Apple Custom Battery Value 3-3",
      "Display": "Apple Custom Display Value 3-4"
    },
    "description": "This is a premium Apple product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 9
  },
  {
    "id": 204,
    "title": "Sony WH-1000 Color Printer | Bestseller Model 4 | High Quality Performance",
    "price": 975.6,
    "mrp": 1327.3,
    "rating": 4.6,
    "rating_count": 5872,
    "image_url": "https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg"
    ],
    "badge": "#4",
    "category": "Electronics",
    "brand": "Sony",
    "highlights": "Sony Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Sony Custom RAM Value 4-0",
      "Storage": "Sony Custom Storage Value 4-1",
      "Processor": "Sony Custom Processor Value 4-2",
      "Battery": "Sony Custom Battery Value 4-3",
      "Display": "Sony Custom Display Value 4-4"
    },
    "description": "This is a premium Sony product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 129
  },
  {
    "id": 205,
    "title": "Redmi Ultra Fast Power Bank | Bestseller Model 5 | High Quality Performance",
    "price": 397.2,
    "mrp": 619.9,
    "rating": 4.2,
    "rating_count": 7166,
    "image_url": "https://m.media-amazon.com/images/I/81DT9t+45FL._SX679_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81DT9t+45FL._SX679_.jpg"
    ],
    "badge": "#5",
    "category": "Electronics",
    "brand": "Redmi",
    "highlights": "Redmi Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Redmi Custom RAM Value 5-0",
      "Storage": "Redmi Custom Storage Value 5-1",
      "Processor": "Redmi Custom Processor Value 5-2",
      "Battery": "Redmi Custom Battery Value 5-3",
      "Display": "Redmi Custom Display Value 5-4"
    },
    "description": "This is a premium Redmi product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 121
  },
  {
    "id": 206,
    "title": "JBL Signature 5G Smartphone | Bestseller Model 6 | High Quality Performance",
    "price": 3779.6,
    "mrp": 4959.4,
    "rating": 4.8,
    "rating_count": 4400,
    "image_url": "https://m.media-amazon.com/images/I/61PUjT3r3tL._SX679_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61PUjT3r3tL._SX679_.jpg"
    ],
    "badge": "#6",
    "category": "Electronics",
    "brand": "JBL",
    "highlights": "JBL Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "JBL Custom RAM Value 6-0",
      "Storage": "JBL Custom Storage Value 6-1",
      "Processor": "JBL Custom Processor Value 6-2",
      "Battery": "JBL Custom Battery Value 6-3",
      "Display": "JBL Custom Display Value 6-4"
    },
    "description": "This is a premium JBL product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 64
  },
  {
    "id": 207,
    "title": "Xiaomi Smart Tank Wireless Earbuds | Bestseller Model 7 | High Quality Performance",
    "price": 3038,
    "mrp": 3554.5,
    "rating": 4.1,
    "rating_count": 7171,
    "image_url": "https://m.media-amazon.com/images/I/6175nCxfc-L._SX679_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/6175nCxfc-L._SX679_.jpg"
    ],
    "badge": "#7",
    "category": "Electronics",
    "brand": "Xiaomi",
    "highlights": "Xiaomi Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Xiaomi Custom RAM Value 7-0",
      "Storage": "Xiaomi Custom Storage Value 7-1",
      "Processor": "Xiaomi Custom Processor Value 7-2",
      "Battery": "Xiaomi Custom Battery Value 7-3",
      "Display": "Xiaomi Custom Display Value 7-4"
    },
    "description": "This is a premium Xiaomi product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 129
  },
  {
    "id": 208,
    "title": "OnePlus Nord CE ANC Headphones | Bestseller Model 8 | High Quality Performance",
    "price": 2659.3,
    "mrp": 3733.1,
    "rating": 4.4,
    "rating_count": 3466,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Electronics",
    "brand": "OnePlus",
    "highlights": "OnePlus Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "OnePlus Custom RAM Value 8-0",
      "Storage": "OnePlus Custom Storage Value 8-1",
      "Processor": "OnePlus Custom Processor Value 8-2",
      "Battery": "OnePlus Custom Battery Value 8-3",
      "Display": "OnePlus Custom Display Value 8-4"
    },
    "description": "This is a premium OnePlus product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 90
  },
  {
    "id": 209,
    "title": "boAt Airdopes Retina Tablet | Bestseller Model 9 | High Quality Performance",
    "price": 1894.9,
    "mrp": 2496.9,
    "rating": 4.1,
    "rating_count": 4547,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Electronics",
    "brand": "boAt",
    "highlights": "boAt Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "boAt Custom RAM Value 9-0",
      "Storage": "boAt Custom Storage Value 9-1",
      "Processor": "boAt Custom Processor Value 9-2",
      "Battery": "boAt Custom Battery Value 9-3",
      "Display": "boAt Custom Display Value 9-4"
    },
    "description": "This is a premium boAt product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 16
  },
  {
    "id": 210,
    "title": "Samsung Galaxy S24 Color Printer | Bestseller Model 10 | High Quality Performance",
    "price": 3651.8,
    "mrp": 5532.1,
    "rating": 4.5,
    "rating_count": 2647,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Electronics",
    "brand": "Samsung",
    "highlights": "Samsung Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Samsung Custom RAM Value 10-0",
      "Storage": "Samsung Custom Storage Value 10-1",
      "Processor": "Samsung Custom Processor Value 10-2",
      "Battery": "Samsung Custom Battery Value 10-3",
      "Display": "Samsung Custom Display Value 10-4"
    },
    "description": "This is a premium Samsung product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 154
  },
  {
    "id": 211,
    "title": "Apple iPhone 15 Fast Power Bank | Bestseller Model 11 | High Quality Performance",
    "price": 1017.5,
    "mrp": 1330.6,
    "rating": 4.9,
    "rating_count": 1671,
    "image_url": "https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg"
    ],
    "badge": "#11",
    "category": "Electronics",
    "brand": "Apple",
    "highlights": "Apple Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Apple Custom RAM Value 11-0",
      "Storage": "Apple Custom Storage Value 11-1",
      "Processor": "Apple Custom Processor Value 11-2",
      "Battery": "Apple Custom Battery Value 11-3",
      "Display": "Apple Custom Display Value 11-4"
    },
    "description": "This is a premium Apple product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 79
  },
  {
    "id": 212,
    "title": "Sony WH-1000 5G Smartphone | Bestseller Model 12 | High Quality Performance",
    "price": 2699.9,
    "mrp": 3621.9,
    "rating": 4.5,
    "rating_count": 5521,
    "image_url": "https://m.media-amazon.com/images/I/81DT9t+45FL._SX679_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81DT9t+45FL._SX679_.jpg"
    ],
    "badge": "#12",
    "category": "Electronics",
    "brand": "Sony",
    "highlights": "Sony Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Sony Custom RAM Value 12-0",
      "Storage": "Sony Custom Storage Value 12-1",
      "Processor": "Sony Custom Processor Value 12-2",
      "Battery": "Sony Custom Battery Value 12-3",
      "Display": "Sony Custom Display Value 12-4"
    },
    "description": "This is a premium Sony product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 66
  },
  {
    "id": 213,
    "title": "Redmi Ultra Wireless Earbuds | Bestseller Model 13 | High Quality Performance",
    "price": 2769,
    "mrp": 4010.4,
    "rating": 4.6,
    "rating_count": 5010,
    "image_url": "https://m.media-amazon.com/images/I/61PUjT3r3tL._SX679_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61PUjT3r3tL._SX679_.jpg"
    ],
    "badge": "#13",
    "category": "Electronics",
    "brand": "Redmi",
    "highlights": "Redmi Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Redmi Custom RAM Value 13-0",
      "Storage": "Redmi Custom Storage Value 13-1",
      "Processor": "Redmi Custom Processor Value 13-2",
      "Battery": "Redmi Custom Battery Value 13-3",
      "Display": "Redmi Custom Display Value 13-4"
    },
    "description": "This is a premium Redmi product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 134
  },
  {
    "id": 214,
    "title": "JBL Signature ANC Headphones | Bestseller Model 14 | High Quality Performance",
    "price": 4196.8,
    "mrp": 4875.4,
    "rating": 4.8,
    "rating_count": 7168,
    "image_url": "https://m.media-amazon.com/images/I/6175nCxfc-L._SX679_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/6175nCxfc-L._SX679_.jpg"
    ],
    "badge": "#14",
    "category": "Electronics",
    "brand": "JBL",
    "highlights": "JBL Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "JBL Custom RAM Value 14-0",
      "Storage": "JBL Custom Storage Value 14-1",
      "Processor": "JBL Custom Processor Value 14-2",
      "Battery": "JBL Custom Battery Value 14-3",
      "Display": "JBL Custom Display Value 14-4"
    },
    "description": "This is a premium JBL product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 36
  },
  {
    "id": 215,
    "title": "Xiaomi Smart Tank Retina Tablet | Bestseller Model 15 | High Quality Performance",
    "price": 3015.6,
    "mrp": 4185.6,
    "rating": 4.7,
    "rating_count": 8940,
    "image_url": "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61+SW9nDTEL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Electronics",
    "brand": "Xiaomi",
    "highlights": "Xiaomi Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Xiaomi Custom RAM Value 15-0",
      "Storage": "Xiaomi Custom Storage Value 15-1",
      "Processor": "Xiaomi Custom Processor Value 15-2",
      "Battery": "Xiaomi Custom Battery Value 15-3",
      "Display": "Xiaomi Custom Display Value 15-4"
    },
    "description": "This is a premium Xiaomi product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 93
  },
  {
    "id": 216,
    "title": "OnePlus Nord CE Color Printer | Bestseller Model 16 | High Quality Performance",
    "price": 2129.2,
    "mrp": 2509,
    "rating": 4.5,
    "rating_count": 623,
    "image_url": "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71ndbdVgC7L._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Electronics",
    "brand": "OnePlus",
    "highlights": "OnePlus Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "OnePlus Custom RAM Value 16-0",
      "Storage": "OnePlus Custom Storage Value 16-1",
      "Processor": "OnePlus Custom Processor Value 16-2",
      "Battery": "OnePlus Custom Battery Value 16-3",
      "Display": "OnePlus Custom Display Value 16-4"
    },
    "description": "This is a premium OnePlus product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 115
  },
  {
    "id": 217,
    "title": "boAt Airdopes Fast Power Bank | Bestseller Model 17 | High Quality Performance",
    "price": 2848.5,
    "mrp": 3455.3,
    "rating": 4.4,
    "rating_count": 3820,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Electronics",
    "brand": "boAt",
    "highlights": "boAt Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "boAt Custom RAM Value 17-0",
      "Storage": "boAt Custom Storage Value 17-1",
      "Processor": "boAt Custom Processor Value 17-2",
      "Battery": "boAt Custom Battery Value 17-3",
      "Display": "boAt Custom Display Value 17-4"
    },
    "description": "This is a premium boAt product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 80
  },
  {
    "id": 218,
    "title": "Samsung Galaxy S24 5G Smartphone | Bestseller Model 18 | High Quality Performance",
    "price": 5172.9,
    "mrp": 5789.2,
    "rating": 4.1,
    "rating_count": 8079,
    "image_url": "https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/71RVuBs3q9L._SX679_.jpg"
    ],
    "badge": "#18",
    "category": "Electronics",
    "brand": "Samsung",
    "highlights": "Samsung Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Samsung Custom RAM Value 18-0",
      "Storage": "Samsung Custom Storage Value 18-1",
      "Processor": "Samsung Custom Processor Value 18-2",
      "Battery": "Samsung Custom Battery Value 18-3",
      "Display": "Samsung Custom Display Value 18-4"
    },
    "description": "This is a premium Samsung product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 140
  },
  {
    "id": 219,
    "title": "Apple iPhone 15 Wireless Earbuds | Bestseller Model 19 | High Quality Performance",
    "price": 3141.3,
    "mrp": 3505.6,
    "rating": 4.9,
    "rating_count": 2515,
    "image_url": "https://m.media-amazon.com/images/I/81DT9t+45FL._SX679_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/81DT9t+45FL._SX679_.jpg"
    ],
    "badge": "#19",
    "category": "Electronics",
    "brand": "Apple",
    "highlights": "Apple Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Apple Custom RAM Value 19-0",
      "Storage": "Apple Custom Storage Value 19-1",
      "Processor": "Apple Custom Processor Value 19-2",
      "Battery": "Apple Custom Battery Value 19-3",
      "Display": "Apple Custom Display Value 19-4"
    },
    "description": "This is a premium Apple product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 65
  },
  {
    "id": 220,
    "title": "Sony WH-1000 ANC Headphones | Bestseller Model 20 | High Quality Performance",
    "price": 3030.7,
    "mrp": 3837.9,
    "rating": 4.7,
    "rating_count": 213,
    "image_url": "https://m.media-amazon.com/images/I/61PUjT3r3tL._SX679_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61PUjT3r3tL._SX679_.jpg"
    ],
    "badge": "#20",
    "category": "Electronics",
    "brand": "Sony",
    "highlights": "Sony Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "RAM": "Sony Custom RAM Value 20-0",
      "Storage": "Sony Custom Storage Value 20-1",
      "Processor": "Sony Custom Processor Value 20-2",
      "Battery": "Sony Custom Battery Value 20-3",
      "Display": "Sony Custom Display Value 20-4"
    },
    "description": "This is a premium Sony product in the Electronics department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 136
  },
  {
    "id": 221,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 4181.8,
    "mrp": 4982.4,
    "rating": 4.9,
    "rating_count": 2223,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Garden & Outdoors",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 16
  },
  {
    "id": 222,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 2469,
    "mrp": 3929.8,
    "rating": 4.4,
    "rating_count": 954,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Garden & Outdoors",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 13
  },
  {
    "id": 223,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 479.6,
    "mrp": 711.5,
    "rating": 4.4,
    "rating_count": 237,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Garden & Outdoors",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 127
  },
  {
    "id": 224,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 1226.7,
    "mrp": 1505.6,
    "rating": 4.5,
    "rating_count": 7322,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Garden & Outdoors",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 46
  },
  {
    "id": 225,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 3700.7,
    "mrp": 5039.4,
    "rating": 4.4,
    "rating_count": 7881,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Garden & Outdoors",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 63
  },
  {
    "id": 226,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 4439,
    "mrp": 6512.3,
    "rating": 4.9,
    "rating_count": 3244,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Garden & Outdoors",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 36
  },
  {
    "id": 227,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 807.2,
    "mrp": 1053.9,
    "rating": 4.8,
    "rating_count": 8297,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Garden & Outdoors",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 79
  },
  {
    "id": 228,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 4509.7,
    "mrp": 6960.1,
    "rating": 4.4,
    "rating_count": 7058,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Garden & Outdoors",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 57
  },
  {
    "id": 229,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 4854.9,
    "mrp": 5379.4,
    "rating": 4.7,
    "rating_count": 6451,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Garden & Outdoors",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 53
  },
  {
    "id": 230,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 4233.1,
    "mrp": 4877.1,
    "rating": 4.3,
    "rating_count": 8208,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Garden & Outdoors",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 129
  },
  {
    "id": 231,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 1535.1,
    "mrp": 1801.5,
    "rating": 4.2,
    "rating_count": 5165,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Garden & Outdoors",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 136
  },
  {
    "id": 232,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 1448,
    "mrp": 2000.2,
    "rating": 4.5,
    "rating_count": 5035,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Garden & Outdoors",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 51
  },
  {
    "id": 233,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 480.1,
    "mrp": 632.7,
    "rating": 4.8,
    "rating_count": 8140,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Garden & Outdoors",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 30
  },
  {
    "id": 234,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 3779.6,
    "mrp": 5778.3,
    "rating": 4.4,
    "rating_count": 6038,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Garden & Outdoors",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 84
  },
  {
    "id": 235,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 1710.4,
    "mrp": 1885.8,
    "rating": 4.5,
    "rating_count": 6927,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Garden & Outdoors",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 91
  },
  {
    "id": 236,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 546.2,
    "mrp": 836.6,
    "rating": 4.4,
    "rating_count": 6180,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Garden & Outdoors",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 64
  },
  {
    "id": 237,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 4573.7,
    "mrp": 5743.2,
    "rating": 4.3,
    "rating_count": 7146,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Garden & Outdoors",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 53
  },
  {
    "id": 238,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 4079.3,
    "mrp": 4873.5,
    "rating": 4.2,
    "rating_count": 3074,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Garden & Outdoors",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 25
  },
  {
    "id": 239,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 3811.3,
    "mrp": 4971.3,
    "rating": 4.4,
    "rating_count": 8048,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Garden & Outdoors",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 99
  },
  {
    "id": 240,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 2473.9,
    "mrp": 3914.1,
    "rating": 4.4,
    "rating_count": 5865,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Garden & Outdoors",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Garden & Outdoors department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 139
  },
  {
    "id": 241,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 4240.7,
    "mrp": 4823.6,
    "rating": 4.5,
    "rating_count": 7857,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Gift Cards",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 91
  },
  {
    "id": 242,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 3862.1,
    "mrp": 5814.8,
    "rating": 4.2,
    "rating_count": 506,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Gift Cards",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 105
  },
  {
    "id": 243,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 293.5,
    "mrp": 433.5,
    "rating": 4.3,
    "rating_count": 2793,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Gift Cards",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 35
  },
  {
    "id": 244,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 2754.5,
    "mrp": 3603.8,
    "rating": 4.2,
    "rating_count": 1752,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Gift Cards",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 17
  },
  {
    "id": 245,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 4710,
    "mrp": 6454.4,
    "rating": 4.6,
    "rating_count": 2530,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Gift Cards",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 144
  },
  {
    "id": 246,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 3769.4,
    "mrp": 5757.8,
    "rating": 4.3,
    "rating_count": 5671,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Gift Cards",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 92
  },
  {
    "id": 247,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 2946.8,
    "mrp": 4266.2,
    "rating": 4,
    "rating_count": 2871,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Gift Cards",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 141
  },
  {
    "id": 248,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 315.3,
    "mrp": 488.4,
    "rating": 4.2,
    "rating_count": 4376,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Gift Cards",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 15
  },
  {
    "id": 249,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 4114.4,
    "mrp": 5767.6,
    "rating": 4.5,
    "rating_count": 1227,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Gift Cards",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 27
  },
  {
    "id": 250,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 692.5,
    "mrp": 1009,
    "rating": 4.8,
    "rating_count": 5276,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Gift Cards",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 140
  },
  {
    "id": 251,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 1236.3,
    "mrp": 1818.3,
    "rating": 4.3,
    "rating_count": 7434,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Gift Cards",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 11
  },
  {
    "id": 252,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 3604.2,
    "mrp": 5152.7,
    "rating": 4.1,
    "rating_count": 877,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Gift Cards",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 118
  },
  {
    "id": 253,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 1501.2,
    "mrp": 1752.5,
    "rating": 4,
    "rating_count": 1637,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Gift Cards",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 25
  },
  {
    "id": 254,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 363.3,
    "mrp": 432.4,
    "rating": 4.1,
    "rating_count": 9501,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Gift Cards",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 86
  },
  {
    "id": 255,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 3898.4,
    "mrp": 5500.6,
    "rating": 4.5,
    "rating_count": 7816,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Gift Cards",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 110
  },
  {
    "id": 256,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 4359.5,
    "mrp": 6948.5,
    "rating": 4.7,
    "rating_count": 8170,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Gift Cards",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 104
  },
  {
    "id": 257,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 4789.8,
    "mrp": 6345.9,
    "rating": 4.5,
    "rating_count": 9353,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Gift Cards",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 143
  },
  {
    "id": 258,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 410.3,
    "mrp": 645.7,
    "rating": 4.8,
    "rating_count": 9285,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Gift Cards",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 72
  },
  {
    "id": 259,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 3451.8,
    "mrp": 3991.3,
    "rating": 4.1,
    "rating_count": 4895,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Gift Cards",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 10
  },
  {
    "id": 260,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 4069.8,
    "mrp": 4535.9,
    "rating": 4.6,
    "rating_count": 8329,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Gift Cards",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Gift Cards department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 74
  },
  {
    "id": 261,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 2645.2,
    "mrp": 3164.2,
    "rating": 4.4,
    "rating_count": 2828,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Grocery & Gourmet Foods",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 14
  },
  {
    "id": 262,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 2166,
    "mrp": 2406.3,
    "rating": 4.7,
    "rating_count": 1752,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Grocery & Gourmet Foods",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 49
  },
  {
    "id": 263,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 1167.9,
    "mrp": 1713.3,
    "rating": 4.1,
    "rating_count": 2116,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Grocery & Gourmet Foods",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 5
  },
  {
    "id": 264,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 2675,
    "mrp": 3585.5,
    "rating": 4.8,
    "rating_count": 2763,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Grocery & Gourmet Foods",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 103
  },
  {
    "id": 265,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 2943.9,
    "mrp": 4453.9,
    "rating": 4.3,
    "rating_count": 2942,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Grocery & Gourmet Foods",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 65
  },
  {
    "id": 266,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 441.9,
    "mrp": 569.6,
    "rating": 4,
    "rating_count": 599,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Grocery & Gourmet Foods",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 11
  },
  {
    "id": 267,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 4857.4,
    "mrp": 5387.4,
    "rating": 4.8,
    "rating_count": 4741,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Grocery & Gourmet Foods",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 92
  },
  {
    "id": 268,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 2372.6,
    "mrp": 3142.9,
    "rating": 4.6,
    "rating_count": 8485,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Grocery & Gourmet Foods",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 66
  },
  {
    "id": 269,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 876.8,
    "mrp": 1178.5,
    "rating": 4.3,
    "rating_count": 9709,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Grocery & Gourmet Foods",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 138
  },
  {
    "id": 270,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 1283.3,
    "mrp": 1985.1,
    "rating": 4.5,
    "rating_count": 247,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Grocery & Gourmet Foods",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 48
  },
  {
    "id": 271,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 1509.2,
    "mrp": 1669.7,
    "rating": 4.9,
    "rating_count": 906,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Grocery & Gourmet Foods",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 83
  },
  {
    "id": 272,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 5137.7,
    "mrp": 7129.4,
    "rating": 4.7,
    "rating_count": 3087,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Grocery & Gourmet Foods",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 57
  },
  {
    "id": 273,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 1471.3,
    "mrp": 1702,
    "rating": 4.3,
    "rating_count": 6762,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Grocery & Gourmet Foods",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 20
  },
  {
    "id": 274,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 1138.5,
    "mrp": 1707.1,
    "rating": 4.6,
    "rating_count": 1502,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Grocery & Gourmet Foods",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 106
  },
  {
    "id": 275,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 5163.1,
    "mrp": 7506.1,
    "rating": 4.8,
    "rating_count": 5132,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Grocery & Gourmet Foods",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 111
  },
  {
    "id": 276,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 764.3,
    "mrp": 955.6,
    "rating": 4.4,
    "rating_count": 8216,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Grocery & Gourmet Foods",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 152
  },
  {
    "id": 277,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 4015.5,
    "mrp": 5891.1,
    "rating": 4.5,
    "rating_count": 1135,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Grocery & Gourmet Foods",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 101
  },
  {
    "id": 278,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 3622.5,
    "mrp": 4513.4,
    "rating": 4.5,
    "rating_count": 5184,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Grocery & Gourmet Foods",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 69
  },
  {
    "id": 279,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 1148.7,
    "mrp": 1602.6,
    "rating": 4.3,
    "rating_count": 9893,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Grocery & Gourmet Foods",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 135
  },
  {
    "id": 280,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 1597.6,
    "mrp": 2193.3,
    "rating": 4.1,
    "rating_count": 2225,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Grocery & Gourmet Foods",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Grocery & Gourmet Foods department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 149
  },
  {
    "id": 281,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 1058.5,
    "mrp": 1423.5,
    "rating": 4.4,
    "rating_count": 5304,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Health & Personal Care",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 39
  },
  {
    "id": 282,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 1192.1,
    "mrp": 1437.6,
    "rating": 4.3,
    "rating_count": 5362,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Health & Personal Care",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 87
  },
  {
    "id": 283,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 1428.4,
    "mrp": 1975.1,
    "rating": 4.3,
    "rating_count": 6195,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Health & Personal Care",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 111
  },
  {
    "id": 284,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 4279.9,
    "mrp": 6824.6,
    "rating": 4.2,
    "rating_count": 6846,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Health & Personal Care",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 64
  },
  {
    "id": 285,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 2784.3,
    "mrp": 4395.9,
    "rating": 4.8,
    "rating_count": 4980,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Health & Personal Care",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 132
  },
  {
    "id": 286,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 2777,
    "mrp": 3230.6,
    "rating": 4.2,
    "rating_count": 8795,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Health & Personal Care",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 152
  },
  {
    "id": 287,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 2306,
    "mrp": 3199.4,
    "rating": 4.1,
    "rating_count": 7561,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Health & Personal Care",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 66
  },
  {
    "id": 288,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 2022.8,
    "mrp": 2521.7,
    "rating": 4.9,
    "rating_count": 3050,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Health & Personal Care",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 50
  },
  {
    "id": 289,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 2771.1,
    "mrp": 3933.5,
    "rating": 4.2,
    "rating_count": 554,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Health & Personal Care",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 21
  },
  {
    "id": 290,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 2377.3,
    "mrp": 2967.6,
    "rating": 4.8,
    "rating_count": 4306,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Health & Personal Care",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 97
  },
  {
    "id": 291,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 4670.1,
    "mrp": 6697.5,
    "rating": 4.5,
    "rating_count": 8333,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Health & Personal Care",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 128
  },
  {
    "id": 292,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 2844.9,
    "mrp": 3526.6,
    "rating": 4,
    "rating_count": 4876,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Health & Personal Care",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 120
  },
  {
    "id": 293,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 2898.5,
    "mrp": 3709.3,
    "rating": 4.2,
    "rating_count": 3341,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Health & Personal Care",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 90
  },
  {
    "id": 294,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 2645.1,
    "mrp": 3576.1,
    "rating": 4.4,
    "rating_count": 9682,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Health & Personal Care",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 125
  },
  {
    "id": 295,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 2207.4,
    "mrp": 3026.2,
    "rating": 4.4,
    "rating_count": 6313,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Health & Personal Care",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 81
  },
  {
    "id": 296,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 4138,
    "mrp": 6270.4,
    "rating": 4.2,
    "rating_count": 1784,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Health & Personal Care",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 19
  },
  {
    "id": 297,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 5040.6,
    "mrp": 6685.7,
    "rating": 4.4,
    "rating_count": 8282,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Health & Personal Care",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 142
  },
  {
    "id": 298,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 362.5,
    "mrp": 410.9,
    "rating": 4.2,
    "rating_count": 4525,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Health & Personal Care",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 75
  },
  {
    "id": 299,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 1448.1,
    "mrp": 1912.4,
    "rating": 4.1,
    "rating_count": 1755,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Health & Personal Care",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 43
  },
  {
    "id": 300,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 1300.8,
    "mrp": 1506.5,
    "rating": 4.3,
    "rating_count": 1758,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Health & Personal Care",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Health & Personal Care department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 66
  },
  {
    "id": 301,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 4405,
    "mrp": 7001.9,
    "rating": 4.1,
    "rating_count": 8622,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Home & Kitchen",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 38
  },
  {
    "id": 302,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 4912.7,
    "mrp": 6252.5,
    "rating": 4.4,
    "rating_count": 8603,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Home & Kitchen",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 87
  },
  {
    "id": 303,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 910.6,
    "mrp": 1119.3,
    "rating": 4.3,
    "rating_count": 8373,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Home & Kitchen",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 131
  },
  {
    "id": 304,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 2224.7,
    "mrp": 2497.4,
    "rating": 4.3,
    "rating_count": 6982,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Home & Kitchen",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 153
  },
  {
    "id": 305,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 3759.8,
    "mrp": 5223,
    "rating": 4.5,
    "rating_count": 5955,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Home & Kitchen",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 50
  },
  {
    "id": 306,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 383.6,
    "mrp": 569.3,
    "rating": 4.9,
    "rating_count": 8733,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Home & Kitchen",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 96
  },
  {
    "id": 307,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 444.6,
    "mrp": 618.9,
    "rating": 4.2,
    "rating_count": 3446,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Home & Kitchen",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 153
  },
  {
    "id": 308,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 3412.6,
    "mrp": 3942.6,
    "rating": 4.6,
    "rating_count": 3775,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Home & Kitchen",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 107
  },
  {
    "id": 309,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 4321.8,
    "mrp": 5253.9,
    "rating": 4.5,
    "rating_count": 114,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Home & Kitchen",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 116
  },
  {
    "id": 310,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 1103.3,
    "mrp": 1231.8,
    "rating": 4,
    "rating_count": 4248,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Home & Kitchen",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 121
  },
  {
    "id": 311,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 2514.3,
    "mrp": 3064.9,
    "rating": 4.7,
    "rating_count": 8350,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Home & Kitchen",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 62
  },
  {
    "id": 312,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 2333.1,
    "mrp": 2830.9,
    "rating": 4.4,
    "rating_count": 182,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Home & Kitchen",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 31
  },
  {
    "id": 313,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 4761.4,
    "mrp": 5686.7,
    "rating": 4.8,
    "rating_count": 3217,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Home & Kitchen",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 140
  },
  {
    "id": 314,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 4691.8,
    "mrp": 7429,
    "rating": 4.1,
    "rating_count": 4207,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Home & Kitchen",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 37
  },
  {
    "id": 315,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 938.4,
    "mrp": 1114.2,
    "rating": 4.2,
    "rating_count": 7902,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Home & Kitchen",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 71
  },
  {
    "id": 316,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 2049.5,
    "mrp": 3160.3,
    "rating": 4.1,
    "rating_count": 7219,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Home & Kitchen",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 65
  },
  {
    "id": 317,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 3357.1,
    "mrp": 4720.8,
    "rating": 4.7,
    "rating_count": 9016,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Home & Kitchen",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 136
  },
  {
    "id": 318,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 2116.6,
    "mrp": 3108.9,
    "rating": 4.7,
    "rating_count": 244,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Home & Kitchen",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 24
  },
  {
    "id": 319,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 4156.5,
    "mrp": 6463.1,
    "rating": 4.8,
    "rating_count": 9278,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Home & Kitchen",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 79
  },
  {
    "id": 320,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 3124.5,
    "mrp": 4396.6,
    "rating": 4.8,
    "rating_count": 2086,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Home & Kitchen",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Home & Kitchen department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 79
  },
  {
    "id": 321,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 4573.6,
    "mrp": 7104.6,
    "rating": 4,
    "rating_count": 9467,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Home Improvement",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 88
  },
  {
    "id": 322,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 4884.5,
    "mrp": 7016.9,
    "rating": 4,
    "rating_count": 1694,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Home Improvement",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 106
  },
  {
    "id": 323,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 4816.9,
    "mrp": 7323.6,
    "rating": 4.3,
    "rating_count": 7753,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Home Improvement",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 88
  },
  {
    "id": 324,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 795,
    "mrp": 1018.6,
    "rating": 4.6,
    "rating_count": 7550,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Home Improvement",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 15
  },
  {
    "id": 325,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 2597.7,
    "mrp": 3969.5,
    "rating": 4.4,
    "rating_count": 4644,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Home Improvement",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 77
  },
  {
    "id": 326,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 906.8,
    "mrp": 1002.1,
    "rating": 4.9,
    "rating_count": 4841,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Home Improvement",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 99
  },
  {
    "id": 327,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 650.3,
    "mrp": 831,
    "rating": 4.7,
    "rating_count": 5902,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Home Improvement",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 42
  },
  {
    "id": 328,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 1864.2,
    "mrp": 2374.6,
    "rating": 4.2,
    "rating_count": 4501,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Home Improvement",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 60
  },
  {
    "id": 329,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 302.8,
    "mrp": 404.1,
    "rating": 4.5,
    "rating_count": 9756,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Home Improvement",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 67
  },
  {
    "id": 330,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 1391.3,
    "mrp": 1579.8,
    "rating": 4.5,
    "rating_count": 6663,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Home Improvement",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 70
  },
  {
    "id": 331,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 3228.3,
    "mrp": 3758.6,
    "rating": 4.4,
    "rating_count": 223,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Home Improvement",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 32
  },
  {
    "id": 332,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 1672.3,
    "mrp": 2568.6,
    "rating": 4.9,
    "rating_count": 1333,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Home Improvement",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 23
  },
  {
    "id": 333,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 5036.2,
    "mrp": 6709.5,
    "rating": 4.6,
    "rating_count": 5717,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Home Improvement",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 31
  },
  {
    "id": 334,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 4852.3,
    "mrp": 5520.5,
    "rating": 4.4,
    "rating_count": 5680,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Home Improvement",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 95
  },
  {
    "id": 335,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 1922.7,
    "mrp": 2679.8,
    "rating": 4.7,
    "rating_count": 5668,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Home Improvement",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 104
  },
  {
    "id": 336,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 1880,
    "mrp": 2938.5,
    "rating": 4.7,
    "rating_count": 5125,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Home Improvement",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 128
  },
  {
    "id": 337,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 2437.7,
    "mrp": 3232.5,
    "rating": 4.4,
    "rating_count": 2648,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Home Improvement",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 88
  },
  {
    "id": 338,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 914.5,
    "mrp": 1132.5,
    "rating": 4,
    "rating_count": 6511,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Home Improvement",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 111
  },
  {
    "id": 339,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 1840.7,
    "mrp": 2073.6,
    "rating": 4.8,
    "rating_count": 7063,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Home Improvement",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 135
  },
  {
    "id": 340,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 1810,
    "mrp": 2664.5,
    "rating": 4.8,
    "rating_count": 509,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Home Improvement",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Home Improvement department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 91
  },
  {
    "id": 341,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 1662.7,
    "mrp": 2515.3,
    "rating": 4.2,
    "rating_count": 6892,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Industrial & Scientific",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 96
  },
  {
    "id": 342,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 950,
    "mrp": 1462,
    "rating": 4.5,
    "rating_count": 9933,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Industrial & Scientific",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 106
  },
  {
    "id": 343,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 1102,
    "mrp": 1480.7,
    "rating": 4.1,
    "rating_count": 4753,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Industrial & Scientific",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 35
  },
  {
    "id": 344,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 3548.2,
    "mrp": 5640.8,
    "rating": 4.6,
    "rating_count": 7166,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Industrial & Scientific",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 105
  },
  {
    "id": 345,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 2833.2,
    "mrp": 4129.2,
    "rating": 4.7,
    "rating_count": 5348,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Industrial & Scientific",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 77
  },
  {
    "id": 346,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 3676.3,
    "mrp": 5125.2,
    "rating": 4.4,
    "rating_count": 4802,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Industrial & Scientific",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 14
  },
  {
    "id": 347,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 835,
    "mrp": 1290.5,
    "rating": 4.2,
    "rating_count": 5126,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Industrial & Scientific",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 14
  },
  {
    "id": 348,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 5131.1,
    "mrp": 7776.5,
    "rating": 4.3,
    "rating_count": 2585,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Industrial & Scientific",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 84
  },
  {
    "id": 349,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 2633.9,
    "mrp": 3306.7,
    "rating": 4.8,
    "rating_count": 8825,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Industrial & Scientific",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 10
  },
  {
    "id": 350,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 1672.3,
    "mrp": 1884.4,
    "rating": 4,
    "rating_count": 512,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Industrial & Scientific",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 109
  },
  {
    "id": 351,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 4679.2,
    "mrp": 6208.2,
    "rating": 4.9,
    "rating_count": 5326,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Industrial & Scientific",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 59
  },
  {
    "id": 352,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 4532.6,
    "mrp": 5363.9,
    "rating": 4.6,
    "rating_count": 4616,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Industrial & Scientific",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 55
  },
  {
    "id": 353,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 1266.4,
    "mrp": 1910,
    "rating": 4.5,
    "rating_count": 3237,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Industrial & Scientific",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 36
  },
  {
    "id": 354,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 4199.3,
    "mrp": 5110.2,
    "rating": 4.9,
    "rating_count": 761,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Industrial & Scientific",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 83
  },
  {
    "id": 355,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 2978,
    "mrp": 3779.4,
    "rating": 4.2,
    "rating_count": 6972,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Industrial & Scientific",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 43
  },
  {
    "id": 356,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 4160.4,
    "mrp": 4904.6,
    "rating": 4.7,
    "rating_count": 7625,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Industrial & Scientific",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 24
  },
  {
    "id": 357,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 1936.2,
    "mrp": 2489.9,
    "rating": 4.4,
    "rating_count": 3677,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Industrial & Scientific",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 31
  },
  {
    "id": 358,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 4344.8,
    "mrp": 5059.3,
    "rating": 4.4,
    "rating_count": 3249,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Industrial & Scientific",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 54
  },
  {
    "id": 359,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 1969.4,
    "mrp": 2844,
    "rating": 4.3,
    "rating_count": 2339,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Industrial & Scientific",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 26
  },
  {
    "id": 360,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 2418.4,
    "mrp": 3568.7,
    "rating": 4.6,
    "rating_count": 9702,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Industrial & Scientific",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Industrial & Scientific department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 28
  },
  {
    "id": 361,
    "title": "EcoSmart Durable Pack | Bestseller Model 1 | High Quality Performance",
    "price": 3679.1,
    "mrp": 4525.8,
    "rating": 4.1,
    "rating_count": 4393,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#1",
    "category": "Jewellery",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 1-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 1-1",
      "Weight": "EcoSmart Custom Weight Value 1-2",
      "Warranty": "EcoSmart Custom Warranty Value 1-3",
      "Color": "EcoSmart Custom Color Value 1-4"
    },
    "description": "This is a premium EcoSmart product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 126
  },
  {
    "id": 362,
    "title": "Premium Classic Utility Kit | Bestseller Model 2 | High Quality Performance",
    "price": 3749,
    "mrp": 5496.9,
    "rating": 4.7,
    "rating_count": 7797,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#2",
    "category": "Jewellery",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 2-0",
      "Dimensions": "Premium Custom Dimensions Value 2-1",
      "Weight": "Premium Custom Weight Value 2-2",
      "Warranty": "Premium Custom Warranty Value 2-3",
      "Color": "Premium Custom Color Value 2-4"
    },
    "description": "This is a premium Premium product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 81
  },
  {
    "id": 363,
    "title": "Direct Smart Organizer | Bestseller Model 3 | High Quality Performance",
    "price": 2506.7,
    "mrp": 3079.9,
    "rating": 4.2,
    "rating_count": 9456,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#3",
    "category": "Jewellery",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 3-0",
      "Dimensions": "Direct Custom Dimensions Value 3-1",
      "Weight": "Direct Custom Weight Value 3-2",
      "Warranty": "Direct Custom Warranty Value 3-3",
      "Color": "Direct Custom Color Value 3-4"
    },
    "description": "This is a premium Direct product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 50
  },
  {
    "id": 364,
    "title": "Daily Compact Accessory | Bestseller Model 4 | High Quality Performance",
    "price": 4369,
    "mrp": 5893.5,
    "rating": 4.7,
    "rating_count": 4288,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#4",
    "category": "Jewellery",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 4-0",
      "Dimensions": "Daily Custom Dimensions Value 4-1",
      "Weight": "Daily Custom Weight Value 4-2",
      "Warranty": "Daily Custom Warranty Value 4-3",
      "Color": "Daily Custom Color Value 4-4"
    },
    "description": "This is a premium Daily product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 124
  },
  {
    "id": 365,
    "title": "Generic Eco-friendly Product | Bestseller Model 5 | High Quality Performance",
    "price": 4554.4,
    "mrp": 5122.7,
    "rating": 4.5,
    "rating_count": 1294,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#5",
    "category": "Jewellery",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 5-0",
      "Dimensions": "Generic Custom Dimensions Value 5-1",
      "Weight": "Generic Custom Weight Value 5-2",
      "Warranty": "Generic Custom Warranty Value 5-3",
      "Color": "Generic Custom Color Value 5-4"
    },
    "description": "This is a premium Generic product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 48
  },
  {
    "id": 366,
    "title": "EcoSmart Durable Pack | Bestseller Model 6 | High Quality Performance",
    "price": 5172.1,
    "mrp": 7818,
    "rating": 4.8,
    "rating_count": 2074,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#6",
    "category": "Jewellery",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 6-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 6-1",
      "Weight": "EcoSmart Custom Weight Value 6-2",
      "Warranty": "EcoSmart Custom Warranty Value 6-3",
      "Color": "EcoSmart Custom Color Value 6-4"
    },
    "description": "This is a premium EcoSmart product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 125
  },
  {
    "id": 367,
    "title": "Premium Classic Utility Kit | Bestseller Model 7 | High Quality Performance",
    "price": 1144.6,
    "mrp": 1415.7,
    "rating": 4.4,
    "rating_count": 2607,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#7",
    "category": "Jewellery",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 7-0",
      "Dimensions": "Premium Custom Dimensions Value 7-1",
      "Weight": "Premium Custom Weight Value 7-2",
      "Warranty": "Premium Custom Warranty Value 7-3",
      "Color": "Premium Custom Color Value 7-4"
    },
    "description": "This is a premium Premium product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 51
  },
  {
    "id": 368,
    "title": "Direct Smart Organizer | Bestseller Model 8 | High Quality Performance",
    "price": 4580.6,
    "mrp": 5126.8,
    "rating": 4.3,
    "rating_count": 8040,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#8",
    "category": "Jewellery",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 8-0",
      "Dimensions": "Direct Custom Dimensions Value 8-1",
      "Weight": "Direct Custom Weight Value 8-2",
      "Warranty": "Direct Custom Warranty Value 8-3",
      "Color": "Direct Custom Color Value 8-4"
    },
    "description": "This is a premium Direct product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 7
  },
  {
    "id": 369,
    "title": "Daily Compact Accessory | Bestseller Model 9 | High Quality Performance",
    "price": 1604.9,
    "mrp": 1996.8,
    "rating": 4.4,
    "rating_count": 955,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#9",
    "category": "Jewellery",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 9-0",
      "Dimensions": "Daily Custom Dimensions Value 9-1",
      "Weight": "Daily Custom Weight Value 9-2",
      "Warranty": "Daily Custom Warranty Value 9-3",
      "Color": "Daily Custom Color Value 9-4"
    },
    "description": "This is a premium Daily product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 46
  },
  {
    "id": 370,
    "title": "Generic Eco-friendly Product | Bestseller Model 10 | High Quality Performance",
    "price": 2105.2,
    "mrp": 2734.7,
    "rating": 4.4,
    "rating_count": 1156,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#10",
    "category": "Jewellery",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 10-0",
      "Dimensions": "Generic Custom Dimensions Value 10-1",
      "Weight": "Generic Custom Weight Value 10-2",
      "Warranty": "Generic Custom Warranty Value 10-3",
      "Color": "Generic Custom Color Value 10-4"
    },
    "description": "This is a premium Generic product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 111
  },
  {
    "id": 371,
    "title": "EcoSmart Durable Pack | Bestseller Model 11 | High Quality Performance",
    "price": 2166.6,
    "mrp": 2664.7,
    "rating": 4.6,
    "rating_count": 1922,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#11",
    "category": "Jewellery",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 11-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 11-1",
      "Weight": "EcoSmart Custom Weight Value 11-2",
      "Warranty": "EcoSmart Custom Warranty Value 11-3",
      "Color": "EcoSmart Custom Color Value 11-4"
    },
    "description": "This is a premium EcoSmart product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 61
  },
  {
    "id": 372,
    "title": "Premium Classic Utility Kit | Bestseller Model 12 | High Quality Performance",
    "price": 3631.5,
    "mrp": 5785.2,
    "rating": 4.6,
    "rating_count": 5337,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#12",
    "category": "Jewellery",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 12-0",
      "Dimensions": "Premium Custom Dimensions Value 12-1",
      "Weight": "Premium Custom Weight Value 12-2",
      "Warranty": "Premium Custom Warranty Value 12-3",
      "Color": "Premium Custom Color Value 12-4"
    },
    "description": "This is a premium Premium product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 124
  },
  {
    "id": 373,
    "title": "Direct Smart Organizer | Bestseller Model 13 | High Quality Performance",
    "price": 2571.4,
    "mrp": 3447.4,
    "rating": 4.4,
    "rating_count": 5146,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#13",
    "category": "Jewellery",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 13-0",
      "Dimensions": "Direct Custom Dimensions Value 13-1",
      "Weight": "Direct Custom Weight Value 13-2",
      "Warranty": "Direct Custom Warranty Value 13-3",
      "Color": "Direct Custom Color Value 13-4"
    },
    "description": "This is a premium Direct product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 5
  },
  {
    "id": 374,
    "title": "Daily Compact Accessory | Bestseller Model 14 | High Quality Performance",
    "price": 4510.8,
    "mrp": 6381.5,
    "rating": 4.4,
    "rating_count": 2301,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#14",
    "category": "Jewellery",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 14-0",
      "Dimensions": "Daily Custom Dimensions Value 14-1",
      "Weight": "Daily Custom Weight Value 14-2",
      "Warranty": "Daily Custom Warranty Value 14-3",
      "Color": "Daily Custom Color Value 14-4"
    },
    "description": "This is a premium Daily product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 16
  },
  {
    "id": 375,
    "title": "Generic Eco-friendly Product | Bestseller Model 15 | High Quality Performance",
    "price": 3678.7,
    "mrp": 4719.7,
    "rating": 4.6,
    "rating_count": 8099,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#15",
    "category": "Jewellery",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 15-0",
      "Dimensions": "Generic Custom Dimensions Value 15-1",
      "Weight": "Generic Custom Weight Value 15-2",
      "Warranty": "Generic Custom Warranty Value 15-3",
      "Color": "Generic Custom Color Value 15-4"
    },
    "description": "This is a premium Generic product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 122
  },
  {
    "id": 376,
    "title": "EcoSmart Durable Pack | Bestseller Model 16 | High Quality Performance",
    "price": 4757.7,
    "mrp": 7200.5,
    "rating": 4.2,
    "rating_count": 1363,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#16",
    "category": "Jewellery",
    "brand": "EcoSmart",
    "highlights": "EcoSmart Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "EcoSmart Custom Material Value 16-0",
      "Dimensions": "EcoSmart Custom Dimensions Value 16-1",
      "Weight": "EcoSmart Custom Weight Value 16-2",
      "Warranty": "EcoSmart Custom Warranty Value 16-3",
      "Color": "EcoSmart Custom Color Value 16-4"
    },
    "description": "This is a premium EcoSmart product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 134
  },
  {
    "id": 377,
    "title": "Premium Classic Utility Kit | Bestseller Model 17 | High Quality Performance",
    "price": 4524.1,
    "mrp": 6238.6,
    "rating": 4.5,
    "rating_count": 6264,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#17",
    "category": "Jewellery",
    "brand": "Premium",
    "highlights": "Premium Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Premium Custom Material Value 17-0",
      "Dimensions": "Premium Custom Dimensions Value 17-1",
      "Weight": "Premium Custom Weight Value 17-2",
      "Warranty": "Premium Custom Warranty Value 17-3",
      "Color": "Premium Custom Color Value 17-4"
    },
    "description": "This is a premium Premium product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 77
  },
  {
    "id": 378,
    "title": "Direct Smart Organizer | Bestseller Model 18 | High Quality Performance",
    "price": 3715.7,
    "mrp": 5793.8,
    "rating": 4.3,
    "rating_count": 473,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#18",
    "category": "Jewellery",
    "brand": "Direct",
    "highlights": "Direct Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Direct Custom Material Value 18-0",
      "Dimensions": "Direct Custom Dimensions Value 18-1",
      "Weight": "Direct Custom Weight Value 18-2",
      "Warranty": "Direct Custom Warranty Value 18-3",
      "Color": "Direct Custom Color Value 18-4"
    },
    "description": "This is a premium Direct product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 121
  },
  {
    "id": 379,
    "title": "Daily Compact Accessory | Bestseller Model 19 | High Quality Performance",
    "price": 4086.5,
    "mrp": 6526.4,
    "rating": 4.1,
    "rating_count": 8434,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#19",
    "category": "Jewellery",
    "brand": "Daily",
    "highlights": "Daily Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Daily Custom Material Value 19-0",
      "Dimensions": "Daily Custom Dimensions Value 19-1",
      "Weight": "Daily Custom Weight Value 19-2",
      "Warranty": "Daily Custom Warranty Value 19-3",
      "Color": "Daily Custom Color Value 19-4"
    },
    "description": "This is a premium Daily product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 32
  },
  {
    "id": 380,
    "title": "Generic Eco-friendly Product | Bestseller Model 20 | High Quality Performance",
    "price": 1162.1,
    "mrp": 1576,
    "rating": 4.5,
    "rating_count": 2638,
    "image_url": "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg",
    "images": [
      "https://m.media-amazon.com/images/I/61B5hIAmvdL._AC_SY170_.jpg"
    ],
    "badge": "#20",
    "category": "Jewellery",
    "brand": "Generic",
    "highlights": "Generic Premium Build,Excellent Performance,Category Leading Design,Durable Materials,1 Year Warranty",
    "specs": {
      "Material": "Generic Custom Material Value 20-0",
      "Dimensions": "Generic Custom Dimensions Value 20-1",
      "Weight": "Generic Custom Weight Value 20-2",
      "Warranty": "Generic Custom Warranty Value 20-3",
      "Color": "Generic Custom Color Value 20-4"
    },
    "description": "This is a premium Generic product in the Jewellery department. Engineered for optimal performance and daily convenience, it stands out as a bestseller. Enjoy standard customer support and warranty coverage.",
    "stock": 106
  }
];
