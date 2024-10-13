
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Home/Header";
import Footer from "@/components/Home/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MoviesFlix",
  description: "Your best movie app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en">
    <head>
      {/* Link to your favicon */}
      <link rel="icon" href="/logo.png" type="image/png" />
    </head>
    <body className={inter.className}>
    <Header /> 
      {children}
      <Footer />
      </body>

  </html>
  );
}
