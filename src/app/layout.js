import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@/components/Navbar';
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Refai Porfolio Apps",
  description: "Portfolio For An Expert",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>
          {children}
        </TransitionProvider>
      </body>
    </html>
  );
}
