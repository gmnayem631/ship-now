export interface WarehouseMapSection {
  name: string;
  slots: string[];
  space: string;
}

export const mapSections: WarehouseMapSection[] = [
  { name: "Electronics", slots: ["A1", "A2", "A3"], space: "70/100" },
  { name: "Home & Kitchen", slots: ["C1", "C2", "C3"], space: "10/100" },
  { name: "Automotive Parts", slots: ["D1", "D2", "D3"], space: "50/100" },
  { name: "Sports Equipment", slots: ["F1", "F2", "F3"], space: "40/100" },
  {
    name: "Apparel",
    slots: ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
    space: "20/100",
  },
  { name: "Beauty & Health", slots: ["E1", "E2", "E3", "E4"], space: "30/100" },
];
