"use client";
import Movies from "@/components/Home/Movies";
import HeroSection from "@/components/Home/HeroSection";

export default function Home() {

  return (
    <div className="bg-white">

      <HeroSection />

      <Movies />
    </div>
  );
}
