import type { Metadata } from "next";
import { Outfit, Ovo, } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";

const outfit = Outfit({
  subsets: ["latin"], weight:["400","500","600","700"]
});
const ovo = Ovo({
  subsets: ["latin"], weight:["400"]
});

export const metadata: Metadata = {
  title: "Riya Reginold Kalluvalappil",
  description: "My portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased bg-white transition-colors dark:bg-gray-900 dark:text-white`}>
        <ThemeProvider>
        <Navbar/>
        <main className="min-h-screen pt-20">
            {children}
        </main>
        <Footer/>
        </ThemeProvider>
      </body>
    </html>
  );
}
