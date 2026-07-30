export interface WarehouseTableData {
  floor: number;
  section: string;
  category: string;
  fill: number;
  available: string;
}

export const tableData: WarehouseTableData[] = [
  {
    floor: 1,
    section: "A1 – A10",
    category: "Electronics",
    fill: 80,
    available: "20/100",
  },
  {
    floor: 2,
    section: "B1 – B10",
    category: "Apparel",
    fill: 60,
    available: "40/100",
  },
  {
    floor: 1,
    section: "C1 – C10",
    category: "Home & Kitchen",
    fill: 90,
    available: "10/100",
  },
  {
    floor: 3,
    section: "D1 – D10",
    category: "Automotive Parts",
    fill: 50,
    available: "50/100",
  },
  {
    floor: 2,
    section: "E1 – E10",
    category: "Beauty & Health",
    fill: 70,
    available: "30/100",
  },
];
