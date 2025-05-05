export interface Order {
  id: string;
  customerName: string;
  address: string;
  mealType: 'Breakfast' | 'Lunch' | 'Dinner';
  items: string[];
  status: 'Pending' | 'In Progress' | 'Dispatched' | 'Delivered';
  date: string;
}

export interface Subscription {
  id: string;
  customerName: string;
  planType: string;
  startDate: string;
  endDate: string;
  mealTypes: string[];
  status: 'Active' | 'Paused' | 'Expired';
}

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  category: 'Breakfast' | 'Lunch' | 'Dinner';
  isToday: boolean;
}

export interface Stats {
  todaysOrders: number;
  tiffinsDispatched: number;
  pendingDeliveries: number;
}

export interface MealRating {
  id: string;
  mealId: string;
  customerId: string;
  customerName: string;
  rating: number;
  review: string;
  date: string;
  imageUrl?: string;
}

export const orders: Order[] = [
  {
    id: 'ord-001',
    customerName: 'Rahul Sharma',
    address: '204, Sunshine Apts, Sector 15, Navi Mumbai',
    mealType: 'Lunch',
    items: ['Dal Tadka', 'Jeera Rice', 'Roti (4)', 'Mixed Vegetable'],
    status: 'Pending',
    date: '2025-05-05'
  },
  {
    id: 'ord-002',
    customerName: 'Priya Singh',
    address: '102, Green Valley, Andheri East, Mumbai',
    mealType: 'Lunch',
    items: ['Paneer Butter Masala', 'Steamed Rice', 'Roti (3)', 'Salad'],
    status: 'Pending',
    date: '2025-05-05'
  },
  {
    id: 'ord-003',
    customerName: 'Amit Patel',
    address: '502, Blue Heights, Malad West, Mumbai',
    mealType: 'Dinner',
    items: ['Mix Veg Curry', 'Jeera Rice', 'Roti (5)', 'Sweet (Gulab Jamun)'],
    status: 'Pending',
    date: '2025-05-05'
  },
  {
    id: 'ord-004',
    customerName: 'Neha Verma',
    address: '305, Harmony Towers, Powai, Mumbai',
    mealType: 'Lunch',
    items: ['Chana Masala', 'Steamed Rice', 'Roti (4)', 'Salad'],
    status: 'In Progress',
    date: '2025-05-05'
  },
  {
    id: 'ord-005',
    customerName: 'Rajesh Kumar',
    address: '201, Seawoods Estate, Nerul, Navi Mumbai',
    mealType: 'Dinner',
    items: ['Aloo Gobi', 'Jeera Rice', 'Roti (4)', 'Raita'],
    status: 'In Progress',
    date: '2025-05-05'
  },
  {
    id: 'ord-006',
    customerName: 'Sunita Joshi',
    address: '705, Cloud View, Dadar, Mumbai',
    mealType: 'Breakfast',
    items: ['Poha', 'Tea', 'Fruits'],
    status: 'Dispatched',
    date: '2025-05-05'
  },
  {
    id: 'ord-007',
    customerName: 'Vikram Desai',
    address: '404, Ocean Vista, Bandra West, Mumbai',
    mealType: 'Lunch',
    items: ['Palak Paneer', 'Steamed Rice', 'Roti (3)', 'Salad'],
    status: 'Dispatched',
    date: '2025-05-05'
  },
  {
    id: 'ord-008',
    customerName: 'Meera Shah',
    address: '901, Horizon View, Worli, Mumbai',
    mealType: 'Dinner',
    items: ['Bhindi Masala', 'Jeera Rice', 'Roti (3)', 'Raita'],
    status: 'Delivered',
    date: '2025-05-05'
  },
];

export const subscriptions: Subscription[] = [
  {
    id: 'sub-001',
    customerName: 'Rahul Sharma',
    planType: 'Monthly Premium',
    startDate: '2025-04-10',
    endDate: '2025-05-10',
    mealTypes: ['Breakfast', 'Lunch', 'Dinner'],
    status: 'Active'
  },
  {
    id: 'sub-002',
    customerName: 'Priya Singh',
    planType: 'Monthly Basic',
    startDate: '2025-04-15',
    endDate: '2025-05-15',
    mealTypes: ['Lunch'],
    status: 'Active'
  },
  {
    id: 'sub-003',
    customerName: 'Amit Patel',
    planType: 'Quarterly Premium',
    startDate: '2025-03-01',
    endDate: '2025-06-01',
    mealTypes: ['Lunch', 'Dinner'],
    status: 'Active'
  },
  {
    id: 'sub-004',
    customerName: 'Neha Verma',
    planType: 'Monthly Standard',
    startDate: '2025-04-20',
    endDate: '2025-05-20',
    mealTypes: ['Breakfast', 'Dinner'],
    status: 'Active'
  },
  {
    id: 'sub-005',
    customerName: 'Rajesh Kumar',
    planType: 'Weekly Premium',
    startDate: '2025-05-01',
    endDate: '2025-05-08',
    mealTypes: ['Breakfast', 'Lunch', 'Dinner'],
    status: 'Active'
  }
];

export const menuItems: MenuItem[] = [
  {
    id: 'menu-001',
    name: 'Paneer Butter Masala',
    description: 'Creamy paneer curry with rich butter gravy',
    category: 'Lunch',
    isToday: true
  },
  {
    id: 'menu-002',
    name: 'Dal Tadka',
    description: 'Yellow lentils tempered with cumin and garlic',
    category: 'Lunch',
    isToday: true
  },
  {
    id: 'menu-003',
    name: 'Aloo Gobi',
    description: 'Potato and cauliflower curry',
    category: 'Dinner',
    isToday: true
  },
  {
    id: 'menu-004',
    name: 'Poha',
    description: 'Flattened rice with peanuts and spices',
    category: 'Breakfast',
    isToday: false
  },
  {
    id: 'menu-005',
    name: 'Palak Paneer',
    description: 'Cottage cheese in spinach gravy',
    category: 'Dinner',
    isToday: false
  },
  {
    id: 'menu-006',
    name: 'Chole Bhature',
    description: 'Spicy chickpea curry with fried bread',
    category: 'Lunch',
    isToday: false
  }
];

export const stats: Stats = {
  todaysOrders: 35,
  tiffinsDispatched: 22,
  pendingDeliveries: 13
};

export const mealRatings: MealRating[] = [
  {
    id: 'rating-001',
    mealId: 'menu-001',
    customerId: 'cust-001',
    customerName: 'Rahul Sharma',
    rating: 4.5,
    review: "The Paneer Butter Masala was delicious! Perfect balance of spices and the paneer was fresh.",
    date: '2025-05-03',
    imageUrl: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 'rating-002',
    mealId: 'menu-002',
    customerId: 'cust-002',
    customerName: 'Priya Singh',
    rating: 5,
    review: "Dal Tadka was amazing as always. My favorite comfort food!",
    date: '2025-05-02',
    imageUrl: "https://images.unsplash.com/photo-1546833998-877b37c2e5c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 'rating-003',
    mealId: 'menu-003',
    customerId: 'cust-003',
    customerName: 'Amit Patel',
    rating: 3.5,
    review: "The Aloo Gobi was good but could use a bit more flavor.",
    date: '2025-05-01'
  },
  {
    id: 'rating-004',
    mealId: 'menu-001',
    customerId: 'cust-004',
    customerName: 'Neha Verma',
    rating: 4,
    review: "Love the creamy texture of the gravy. Would order again!",
    date: '2025-04-30',
    imageUrl: "https://images.unsplash.com/photo-1631515242808-497c3d4a9c4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 'rating-005',
    mealId: 'menu-004',
    customerId: 'cust-005',
    customerName: 'Rajesh Kumar',
    rating: 5,
    review: "Best Poha I've ever had! Light, fluffy and full of flavor.",
    date: '2025-04-29',
    imageUrl: "https://images.unsplash.com/photo-1606491956391-8828bf6a101d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];
