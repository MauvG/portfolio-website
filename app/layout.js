import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muavia Ghazi",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="tracking-wider scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
