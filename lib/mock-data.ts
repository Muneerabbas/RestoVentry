export const actionCenterIssues = [
  {
    problem: "Chicken stock mismatch (-1.0 kg)",
    why: "Last prep batch consumed more than recipe baseline and no waste entry was logged.",
    action: "Review prep log and adjust stock",
    priority: "critical",
  },
  {
    problem: "Milk expires in 1 day (12 L)",
    why: "Weekend demand dropped and delivery was over-ordered by 18%.",
    action: "Run promo and reduce tomorrow reorder",
    priority: "warning",
  },
  {
    problem: "Tomatoes running low (par -22%)",
    why: "Two catering orders consumed buffer inventory.",
    action: "Place urgent reorder for 25 kg",
    priority: "warning",
  },
];

export const reorderSuggestions = [
  { item: "Chicken Breast", qty: "28 kg", eta: "Tomorrow 7:30 AM" },
  { item: "Roma Tomato", qty: "25 kg", eta: "Today 4:00 PM" },
  { item: "Whole Milk", qty: "20 L", eta: "Tomorrow 6:45 AM" },
];

export const inventoryItems = [
  { item: "Chicken Breast", category: "Protein", quantity: 22.4, status: "Low" },
  { item: "Whole Milk", category: "Dairy", quantity: 12, status: "Critical" },
  { item: "Roma Tomato", category: "Produce", quantity: 31.5, status: "Low" },
  { item: "Olive Oil", category: "Dry Goods", quantity: 42, status: "OK" },
  { item: "Basmati Rice", category: "Dry Goods", quantity: 58, status: "OK" },
];

export const stockCountItems = [
  { item: "Chicken Breast (kg)", expected: 24, actual: 22.4, variance: -1.6 },
  { item: "Mozzarella (kg)", expected: 18, actual: 17.2, variance: -0.8 },
  { item: "Canola Oil (L)", expected: 30, actual: 31.4, variance: 1.4 },
];

export const deliveryItems = [
  { item: "Chicken Breast", qty: 24, unitPrice: 9.8, amount: 235.2 },
  { item: "Whole Milk", qty: 20, unitPrice: 1.7, amount: 34 },
  { item: "Roma Tomato", qty: 25, unitPrice: 1.2, amount: 30 },
];

export const groupedAlerts = {
  critical: [
    {
      problem: "Milk shelf-life risk",
      why: "Batch M-938 expires tomorrow, current use trend is too low.",
      action: "Prioritize menu usage and pause next milk PO",
    },
  ],
  warnings: [
    {
      problem: "Chicken usage drift (+9%)",
      why: "Portion control slipped during dinner peak hours.",
      action: "Audit plating station for tonight",
    },
    {
      problem: "Tomato cost up 8.5%",
      why: "Vendor changed grade and price for this week.",
      action: "Switch to Vendor B for next 3 days",
    },
  ],
  info: [
    {
      problem: "Waste logging compliance improved",
      why: "Night shift logged 100% bins for 3 consecutive days.",
      action: "Keep current process in place",
    },
  ],
};

export const weeklyInsights = [
  "Food cost increased primarily from higher chicken consumption in dinner service.",
  "Waste increased by 12% due to dairy spoilage and over-prep of sauces.",
  "Reorder timing improved: emergency purchases dropped from 6 to 2 this week.",
];

export type DishProfitRow = {
  dish: string;
  cost: number;
  price: number;
  profit: number;
};

export const dishProfitRows: DishProfitRow[] = [
  { dish: "Chicken Biryani", cost: 155, price: 320, profit: 165 },
  { dish: "Paneer Tikka Bowl", cost: 132, price: 290, profit: 158 },
  { dish: "Seafood Risotto", cost: 268, price: 420, profit: 152 },
  { dish: "Mushroom Soup", cost: 118, price: 170, profit: 52 },
];
