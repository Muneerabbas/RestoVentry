export const dashboardData = {
  foodCostPercent: 31.4,
  revenue: "$18,460",
  cogs: "$5,798",
  waste: "$412",
  deliveriesToday: 3,
  efficiency: 93.2,
  lowStock: ["Atlantic Salmon Fillet", "Micro Basil", "Unsalted Butter 82%", "Parmesan Wheel"],
  wasteAlerts: ["Overproduction: lunch risotto base (+4.2 kg)", "Spoilage risk: spinach batch expires in 9h"],
};

export const inventoryItems = [
  { item: "Atlantic Salmon", category: "Protein", quantity: "11.6 kg", status: "Low" },
  { item: "Extra Virgin Olive Oil", category: "Dry Goods", quantity: "37.4 L", status: "OK" },
  { item: "Truffle Butter", category: "Dairy", quantity: "5.1 kg", status: "Low" },
  { item: "Heirloom Tomatoes", category: "Produce", quantity: "62.0 kg", status: "OK" },
];

export const stockCountItems = [
  { item: "Prime Ribeye (kg)", expected: 18, actual: 16.2, variance: -1.8 },
  { item: "Maldon Sea Salt (box)", expected: 14, actual: 15, variance: 1 },
  { item: "Unsalted Butter (kg)", expected: 24, actual: 21.5, variance: -2.5 },
];

export const deliveryItems = [
  { item: "Free-range Chicken Breast", qty: "24 kg", unitPrice: "$9.80", amount: "$235.20" },
  { item: "Italian Parsley", qty: "12 bunches", unitPrice: "$1.90", amount: "$22.80" },
  { item: "Heavy Cream 36%", qty: "18 L", unitPrice: "$4.10", amount: "$73.80" },
];

export const alerts = [
  "Prawns projected to run out 45 min before second dinner seating",
  "Imported tomato lot +11.8% WoW from primary vendor",
  "Cold room B variance breach on high-value proteins",
  "Prep station 2 trim waste exceeded target by 2.3 kg",
];

export const dishProfitRows = [
  { dish: "Truffle Gnocchi", cost: "$8.90", price: "$26.00", profit: "$17.10" },
  { dish: "Miso Sea Bass", cost: "$13.40", price: "$34.00", profit: "$20.60" },
  { dish: "Prime Ribeye", cost: "$21.10", price: "$45.00", profit: "$23.90" },
  { dish: "Garden Risotto", cost: "$7.80", price: "$23.00", profit: "$15.20" },
];
