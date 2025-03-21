"use client";
import React from "react";

export function HeroSection() {
  return (
    <section className="flex relative px-24 py-16 z-[1] max-md:flex-col max-md:px-5 max-md:py-10 max-sm:p-5">
      <div className="max-w-[606px] max-md:mb-10 max-md:max-w-full">
        <h2 className="mb-8 text-5xl text-white max-sm:text-3xl">
          SAIRAS: AI-Agents powered ecosystem. No Code. Infinite Possibilities.
        </h2>
        <p className="text-2xl text-white max-sm:text-lg">
          We've developed an application that automates processes. From
          comprehensive business planning to simple two-day trip itineraries,
          SAIRAS Tech employs the most suitable model for each problem.
        </p>
      </div>
      <div className="relative">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/f4c1d4bc79e7e9dd605dc502c9446f8eb63720f3"
          className="object-cover h-[566px] w-[787px] max-md:w-full max-md:h-auto"
          alt="AI visualization"
        />
        <p className="absolute top-0 text-4xl text-center text-white right-[140px] max-md:static max-md:mt-5 max-md:text-center">
          sAirAs
        </p>
      </div>
    </section>
  );
}
