"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const logos = [
  "/images/logos/logo1.svg",
  "/images/logos/logo2.svg",
  "/images/logos/logo3.svg",
  "/images/logos/logo4.svg",
  "/images/logos/logo5.svg",
  "/images/logos/logo6.svg",
  "/images/logos/logo7.svg",
  "/images/logos/logo8.svg",
  "/images/logos/logo9.svg",
];

function shuffleArray(array: string[]) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

export default function TrustedBySection() {
  const [randomLogos, setRandomLogos] = useState(logos);

  return (
    <section className="relative w-full overflow-hidden bg-white py-24 font-alan-sans">
      {/* Top Border */}
      <div className="absolute left-0 top-0 h-px w-full bg-black/5" />

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 sm:px-10 lg:px-24">
        {/* Heading */}
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-2xl font-medium uppercase tracking-[-0.06em] text-[#241516] md:text-4xl">
            Brands we&apos;ve helped move forward.
          </p>
        </div>

        {/* Infinite Logo Marquee */}
        <div className="relative mt-12 w-screen overflow-hidden">
          {/* Left Fade */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 bg-gradient-to-r from-white to-transparent md:w-28" />

          {/* Right Fade */}
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 bg-gradient-to-l from-white to-transparent md:w-28" />

          {/* Marquee Track */}
          <div className="marquee-track flex w-max">
            {/* First Logo Group */}
            <div className="marquee-group flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20">
              {randomLogos.map((logo, index) => (
                <div
                  key={`first-${logo}-${index}`}
                  className="flex min-w-[120px] items-center justify-center opacity-60 transition-opacity duration-300 hover:opacity-100 md:min-w-[160px]"
                >
                  <Image
                    src={logo}
                    alt={`Brand logo ${index + 1}`}
                    width={140}
                    height={60}
                    unoptimized
                    className="h-8 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 md:h-10"
                  />
                </div>
              ))}
            </div>

            {/* Second Identical Group for Seamless Loop */}
            <div
              aria-hidden="true"
              className="marquee-group flex shrink-0 items-center gap-14 pr-14 md:gap-20 md:pr-20"
            >
              {randomLogos.map((logo, index) => (
                <div
                  key={`second-${logo}-${index}`}
                  className="flex min-w-[120px] items-center justify-center opacity-60 transition-opacity duration-300 hover:opacity-100 md:min-w-[160px]"
                >
                  <Image
                    src={logo}
                    alt=""
                    width={140}
                    height={60}
                    unoptimized
                    className="h-8 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0 md:h-10"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="#contact"
          aria-label="Let's create your next brand"
          className="group relative mt-20  block aspect-[4.1/1] w-full max-w-[515px] overflow-hidden  transition-transform duration-500 drop-shadow-[0_12px_12px_rgba(75,0,12,0.35)]
            hover:drop-shadow-[0_16px_20px_rgba(100,0,15,0.5)]
            hover:scale-[1.03]
            active:scale-[0.98]"
        >
          <Image
            src="/images/CTA-button.webp"
            alt="Let's create your next brand"
            fill
            sizes="(max-width: 768px) 100vw, 515px"
            className="object-contain transition-all duration-700 group-hover:brightness-110"
          />
        </Link>
      </div>
    </section>
  );
}
