import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Refai Porfolio App",
  description: "Portfolio For An Expert",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en" className="w-screen overflow-x-hidden">
      <body className={inter.className}>
        <TransitionProvider>
          {children} 
        </TransitionProvider>
      </body>
    </html>
  );
}
