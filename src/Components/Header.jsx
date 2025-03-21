"use client";
import React from "react";
import HamburgerMenu from "./HamburgerMenu";

export function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-0 h-[77px] shadow-[0_4px_4px_rgba(0,0,0,0.25)_inset,0_4px_4px_rgba(0,0,0,0.25),0_4px_4px_rgba(0,0,0,0.25)_inset] max-md:px-4 max-md:py-0 max-sm:h-[60px]">
      <h1 className="text-3xl font-extrabold text-white max-sm:text-2xl">
        SAiRAS
      </h1>
      <HamburgerMenu />
      <nav className="flex gap-5 items-center max-md:hidden">
      
        <button className="text-base text-white cursor-pointer">
          What We Do
        </button>
        <button className="text-base text-white cursor-pointer">Blog</button>
        <button className="text-base text-white cursor-pointer">Podcast</button>
        <button className="text-base text-white cursor-pointer">Careers</button>
        <button className="px-8 py-2 text-base text-white bg-pink-500 cursor-pointer rounded-[50px]">
          Some Random Text
        </button>
      </nav>
    </header>
  );
}
