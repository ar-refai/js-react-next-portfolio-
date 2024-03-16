import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Boda's Porfolio",
  description: "Portfolio For A Developer : Abdelrahman Elrefai",
  icons: {
    icon: '/logo.png', // /public path
  },
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
