"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface ProcessStep {
  number: string;
  description: string;
  title: string;
}

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    description: "MARKET POSITIONING, NARRATIVE, AND STRATEGIC DIRECTION.",
    title: "STRATEGY",
  },
  {
    number: "02",
    description: "LOGO/WORDMARKS, TYPOGRAPHY, AND VISUAL DIRECTION.",
    title: "IDENTITY",
  },
  {
    number: "03",
    description: "MODULAR DESIGN SYSTEMS BUILT TO SCALE CLEANLY.",
    title: "SYSTEMS",
  },
  {
    number: "04",
    description: "HIGH-CONVERTING WEBSITES, PACKAGING, AND LAUNCH ASSETS.",
    title: "EXPERIENCE",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Process() {
  return (
    <section
      id="process"
      className="w-full bg-white text-[#111111] font-alan-sans py-16 sm:py-20 lg:py-28 px-5 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="mb-12 flex items-center gap-4">
        <span className="text-lg font-bold text-[#650914]">//</span>
        <p className="font-alan-sans text-lg uppercase tracking-[0.15em]">
          PROCESS
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1440px] mx-auto"
      >
        {/* Top Row: Left Landscape Visual + Right Editorial Headline & Subtext */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-14 items-stretch">
          {/* Left Column: Landscape Image with Overlaid Labels */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-7 relative w-full aspect-[16/10] sm:aspect-[16/8] bg-[#E8DCD8] overflow-hidden"
          >
            <Image
              src="/images/process-img.png"
              alt="Timeless luxury sculptural 3D visual"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
            />

            {/* Top-Left Overlay Label */}
            <span className="absolute top-4 left-4 sm:top-6 sm:left-7 z-10 text-lg font-zen-dots font-bold tracking-[0.06em] uppercase text-[#1A1A1A]">
              ARCADY
            </span>

            {/* Bottom-Right Overlay Label */}
            <span className="absolute bottom-4 right-4 sm:bottom-6 sm:right-7 z-10 text-xs sm:text-sm md:text-base font-normal tracking-[0.06em] uppercase text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.45)]">
              PREMIUM & LUXURY BRANDS
            </span>
          </motion.div>

          {/* Right Column: Stacked Display Headline + Bottom-Aligned Description */}
          <motion.div
            variants={fadeUpVariants}
            className="lg:col-span-5 flex flex-col justify-between py-0.5"
          >
            <h2 className="text-[36px]  md:text-[4.6vw] font-extrabold leading-[0.98] tracking-[-0.03em] uppercase text-[#0D0D0D]">
              THE DISCIPLINE
              <br />
              OF TIMELESS
              <br />
              DESIGN.
            </h2>

            <p className="mt-6 lg:mt-10 text-lg md:text-[1.4vw] max-w-[540px] font-medium leading-[1.45] tracking-[0.02em] uppercase text-[#262626] ">
              FROM INITIAL POSITIONING TO FINAL LAUNCH, EVERY DETAIL IS
              CONSIDERED, MEASURED, AND MADE TO HOLD VALUE OVER TIME.
            </p>
          </motion.div>
        </div>

        {/* Bottom Row: 4-Column Process Grid (1 col mobile -> 2 cols tablet -> 4 cols desktop) */}
        <div className="mt-14 sm:mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 xl:gap-x-10 gap-y-10 lg:gap-y-12">
          {PROCESS_STEPS.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeUpVariants}
              className="group flex items-start max-w-[250px] gap-3.5 sm:gap-4"
            >
              {/* Large Muted Warm-Grey Numeral */}
              <span className="text-5xl  md:text-[6vw] font-bold leading-[0.86] tracking-[-0.04em] text-[#B5AAA6] select-none shrink-0 transition-colors duration-300 group-hover:text-[#6E171D]">
                {step.number}
              </span>

              {/* Right Side of Numeral: Top Micro-Description + Bottom Burgundy Title */}
              <div className="flex flex-col justify-between min-h-[72px] sm:min-h-[82px]">
                <p className="text-xs font-medium leading-[1.35] tracking-[0.02em] uppercase text-[#333333]">
                  {step.description}
                </p>

                <h3 className="mt-2.5 text-2xl font-bold leading-none tracking-[0.01em] uppercase text-[#6E171D]">
                  {step.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
