import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Клеемазательные машины",
  description:
    "Производственная компания SHAROVtechnologies. Занимаемся разработкой и изготовлением оборудования. Основная наша продукция: КЛЕЕМАЗАТЕЛЬНЫЕ МАШИНЫ.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header></Header>
        {children}
      </body>
    </html>
  );
}
