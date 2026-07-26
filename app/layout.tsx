import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShipNow",
  description: "ShipNow Logistics Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F0F0F0]">{children}</body>
    </html>
  );
}
