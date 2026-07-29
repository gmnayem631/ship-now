export type InvoiceStatus = "Paid" | "Unpaid" | "Pending" | "Overdue";

export interface InvoiceItem {
  description: string;
  shipmentType: string;
  price: number;
  qty: number;
}

export interface Invoice {
  id: string;
  company: string;
  shippingId: string;
  issueDate: string;
  dueDate: string;
  amount: number;
  status: InvoiceStatus;
  billFrom: {
    name: string;
    email: string;
    address: string;
  };
  billTo: {
    name: string;
    email: string;
    address: string;
    phone: string;
  };
  items: InvoiceItem[];
  note?: string;
}

export const invoices: Invoice[] = [
  {
    id: "INV-1001",
    company: "TechGear Inc.",
    shippingId: "SH8283746",
    issueDate: "Mar 15, 2035",
    dueDate: "Mar 22, 2035",
    amount: 1350,
    status: "Paid",
    billFrom: {
      name: "TechGear Inc.",
      email: "billing@techgear.com",
      address: "120 Innovation Drive, San Jose, CA 95110",
    },
    billTo: {
      name: "ShipNow Logistics",
      email: "accounts@shipnow.com",
      address: "901 Distribution Ave, Charlotte, NC 28217",
      phone: "+1 704-555-9011",
    },
    items: [
      {
        description: "Electronics Package",
        shipmentType: "Air Freight",
        price: 450,
        qty: 2,
      },
      {
        description: "Handling Fee",
        shipmentType: "Standard",
        price: 150,
        qty: 3,
      },
    ],
    note: "Payment received. Thank you.",
  },
  {
    id: "INV-1002",
    company: "StyleHub Co.",
    shippingId: "SH9182635",
    issueDate: "Mar 16, 2035",
    dueDate: "Mar 23, 2035",
    amount: 980,
    status: "Unpaid",
    billFrom: {
      name: "StyleHub Co.",
      email: "finance@stylehub.com",
      address: "45 Fashion Ave, New York, NY 10018",
    },
    billTo: {
      name: "ShipNow Logistics",
      email: "accounts@shipnow.com",
      address: "901 Distribution Ave, Charlotte, NC 28217",
      phone: "+1 704-555-9011",
    },
    items: [
      {
        description: "Apparel Carton",
        shipmentType: "Road Freight",
        price: 320,
        qty: 2,
      },
      {
        description: "Express Fee",
        shipmentType: "Express",
        price: 170,
        qty: 2,
      },
    ],
  },
  {
    id: "INV-1008",
    company: "ModaWear",
    shippingId: "SH8893247",
    issueDate: "Mar 16, 2035",
    dueDate: "Mar 23, 2035",
    amount: 910,
    status: "Unpaid",
    billFrom: {
      name: "ModaWear",
      email: "billing@modawear.com",
      address: "89 Franklin St, Boston, MA 02110",
    },
    billTo: {
      name: "ShipNow Logistics",
      email: "accounts@shipnow.com",
      address: "901 Distribution Ave, Charlotte, NC 28217",
      phone: "+1 704-555-9011",
    },
    items: [
      {
        description: "Lightweight Hoodie Pack",
        shipmentType: "Road Freight Express",
        price: 120,
        qty: 3,
      },
      {
        description: "Autumn Jacket Set",
        shipmentType: "Road Freight Standard",
        price: 180,
        qty: 2,
      },
      {
        description: "Lightweight Hoodie Pack",
        shipmentType: "Road Freight Express",
        price: 95,
        qty: 2,
      },
    ],
    note: "Please process payment by the due date to avoid delivery disruption.",
  },
  {
    id: "INV-1010",
    company: "VitaFresh",
    shippingId: "SH8881190",
    issueDate: "Mar 15, 2035",
    dueDate: "Mar 22, 2035",
    amount: 1120,
    status: "Overdue",
    billFrom: {
      name: "VitaFresh",
      email: "accounts@vitafresh.com",
      address: "200 Fresh Way, Nashville, TN 37203",
    },
    billTo: {
      name: "ShipNow Logistics",
      email: "accounts@shipnow.com",
      address: "901 Distribution Ave, Charlotte, NC 28217",
      phone: "+1 704-555-9011",
    },
    items: [
      {
        description: "Perishable Goods",
        shipmentType: "Local Courier",
        price: 280,
        qty: 4,
      },
    ],
  },
];
