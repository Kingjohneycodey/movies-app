"use client";
import Movies from "@/components/Home/Movies";
import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {

  return (
    <div className="bg-white">
      <Header />

      <HeroSection />

      <Movies />

      <Footer />
    </div>
  );
}
