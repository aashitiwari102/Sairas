"use client";
import React from "react";
import { HeroSection } from "./Components/HeroSection";
import { Header } from "./Components/Header";
import { BlurEffects } from "./Components/BlurEffect";

export default function App() {
  return (
    <main className="overflow-hidden relative min-h-screen bg-black">
      <Header />
      <HeroSection />
      <BlurEffects />
    </main>
  );
}
