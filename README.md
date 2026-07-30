<div align="center">

# ShipNow

### Modern Logistics, Supply Chain & Fleet Management Dashboard

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Recharts](https://img.shields.io/badge/Recharts-2-8884d8?style=for-the-badge)](https://recharts.org/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/)

[Live Demo](https://ship-now.vercel.app)

</div>

---

## Overview

**ShipNow** is a responsive, modern **logistics, supply chain, and fleet management dashboard** built with the **Next.js 15 App Router**. The application simulates a real-world logistics operations platform, covering everything from live shipment tracking and fleet telemetry to driver safety records, warehouse inventory, invoicing, and team communication.

---

## Tech Stack

| Category          | Technology                                     |
| ----------------- | ---------------------------------------------- |
| Framework         | [Next.js 15](https://nextjs.org/) (App Router) |
| Language          | [TypeScript](https://www.typescriptlang.org/)  |
| Styling           | [Tailwind CSS](https://tailwindcss.com/)       |
| Icons             | [Lucide React](https://lucide.dev/)            |
| Charts & Data Viz | [Recharts](https://recharts.org/)              |
| Deployment        | [Vercel](https://vercel.com/)                  |

---

## Design System

The visual identity strictly follows the Figma color palette provided for this assessment:

| Token               | Swatch | Hex       | Usage                                  |
| ------------------- | ------ | --------- | -------------------------------------- |
| Primary Accent      | 🟣     | `#856DF3` | Buttons, active states, key highlights |
| Light Accent        | 🔳     | `#E3DDFF` | Backgrounds, badges, hover states      |
| Dark Neutral / Text | ⬛     | `#333333` | Headings, primary text                 |
| Muted Text          | ◼️     | `#757575` | Secondary/supporting text              |
| Background          | ⬜     | `#FEFEFE` | Page & surface background              |

---

## Setup & Installation

### Prerequisites

- **Node.js** `v18.17` or later
- **npm** (or your preferred package manager)

### 1. Clone the repository

```bash
git clone https://github.com/gmnayem631/ship-now.git
cd ship-now
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).

### 4. Build for production

```bash
npm run build
npm run start
```

### Live Demo

A deployed, production-built version of the app is available here:

**[https://ship-now.vercel.app](https://ship-now.vercel.app)**

---

## Screen-by-Screen Implementation Status

The table below documents the implementation status of every route in the application.

| Route            | Screen                       | Description                                                                      |
| ---------------- | ---------------------------- | -------------------------------------------------------------------------------- |
| `/`              | Dashboard / Overview         | High-level KPI summary cards, shipment volume charts, and recent activity feed.  |
| `/login`         | Login Page                   | Branded authentication screen with email/password form UI and validation states. |
| `/analytics`     | Analytics & Insights         | Revenue, delivery performance, and route efficiency charts built with Recharts.  |
| `/calendar`      | Logistics Calendar           | Monthly calendar view for scheduled pickups, deliveries, and maintenance events. |
| `/shipments`     | Shipment Operations          | Searchable, filterable table of all shipments with status badges and details.    |
| `/tracking`      | Live Shipment Tracking & GPS | Real-time-styled tracking interface with a simulated map/GPS visualization.      |
| `/warehouse`     | Warehouse Inventory & Stock  | Stock level overview, inventory tables, and low-stock alert indicators.          |
| `/fleets`        | Fleet Management & Telemetry | Vehicle roster with fuel, mileage, and maintenance telemetry cards.              |
| `/drivers`       | Driver Roster & Safety       | Driver profiles, safety scores, license status, and assignment history.          |
| `/invoices`      | Invoices & Billing           | Invoice list, payment status tracking, and billing summary cards.                |
| `/messages`      | Communication Hub            | Chat-style interface for internal team and dispatcher communication.             |
| `/notifications` | Notifications & Alerts       | Categorized system alerts, shipment updates, and read/unread states.             |
| `/settings`      | System & User Settings       | User profile, preferences, and system configuration UI panels.                   |

---

## Project Structure

```
ship-now/
├── app/
│   ├── (auth)/
│   │   └── login/
│   ├── (dashboard)/
│   │   ├── analytics/
│   │   ├── calendar/
│   │   ├── shipments/
│   │   ├── tracking/
│   │   ├── warehouse/
│   │   ├── fleets/
│   │   ├── drivers/
│   │   ├── invoices/
│   │   ├── messages/
│   │   ├── notifications/
│   │   └── settings/
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── data/
├── lib/
├── types/
├── public/
└── README.md
```

---

<div align="center">
Built with Next.js, TypeScript, and Tailwind CSS.
</div>
