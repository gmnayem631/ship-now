export interface InventoryData {
  category: string;
  percentage: number;
  count: string;
  color: string;
  pattern: boolean;
}

export const inventoryData: InventoryData[] = [
  {
    category: "Electronics",
    percentage: 25,
    count: "2,500",
    color: "#856DF3",
    pattern: false,
  },
  {
    category: "Apparel",
    percentage: 20,
    count: "2,000",
    color: "#856DF3",
    pattern: true,
  },
  {
    category: "Home & Kitchen",
    percentage: 18,
    count: "1,800",
    color: "#333333",
    pattern: false,
  },
  {
    category: "Beauty & Health",
    percentage: 15,
    count: "1,500",
    color: "#333333",
    pattern: true,
  },
  {
    category: "Automotive Parts",
    percentage: 12,
    count: "1,200",
    color: "#757575",
    pattern: false,
  },
  {
    category: "Sports Equipment",
    percentage: 10,
    count: "1,000",
    color: "#757575",
    pattern: true,
  },
];
