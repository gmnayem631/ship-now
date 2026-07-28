interface ProductCategoriesData {
  name: string;
  value: number;
  count: string;
  color: string;
}

export const productCategoriesData: ProductCategoriesData[] = [
  { name: "Electronics", value: 24, count: "240 products", color: "#856DF3" },
  {
    name: "Home & Kitchen",
    value: 20,
    count: "200 products",
    color: "#E3DDFF",
  },
  { name: "Apparel", value: 18, count: "180 products", color: "#333" },
  {
    name: "Beauty & Health",
    value: 14,
    count: "140 products",
    color: "#757575",
  },
  {
    name: "Sports & Outdoors",
    value: 12,
    count: "120 products",
    color: "#E0E0E0",
  },
  { name: "Automotive", value: 12, count: "120 products", color: "#F0F0F0" },
];
