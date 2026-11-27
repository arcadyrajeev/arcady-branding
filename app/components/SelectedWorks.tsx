"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ProjectItem {
  id: string;
  title: string[];
  tags: string[];
  image: string;
  alt: string;
  href: string;
}

const SELECTED_PROJECTS: ProjectItem[] = [
  {
    id: "elanore-joaillerie",
    title: ["ÉLANORE", "JOAILLERIE"],
    tags: ["BRAND IDENTITY", "STRATEGY"],
    image: "/images/brands/elanore-cover-2.png",
    alt: "Élanore Joaillerie brand identity and luxury jewelry presentation",
    href: "/work/elanore-joaillerie",
  },
  {
    id: "silene",
    title: ["SILENE"],
    tags: ["PERFUME", "BRAND IDENTITY", "PACKAGING"],
    image: "/images/brands/silene-cover.png",
    alt: "Silene fragrance bottle and visual identity showcase",
    href: "/work/silene",
  },
  {
    id: "RupeeFlow",
    title: ["RUPEE", "FLOW"],
    tags: ["FINTECH", "BRAND IDENTITY", "UI DESIGN"],
    image: "/images/brands/rupeeflow-cover.png",
    alt: "RupeeFlow fintech brand identity and digital product interface",
    href: "/work/rupeeflow",
  },
  {
    id: "closex-pay",
    title: ["CLOSEX", "PAY"],
    tags: ["FINTECH", "BRAND IDENTITY", "UI DESIGN"],
    image: "/images/brands/closexpay-cover.png",
    alt: "CloseX Pay fintech brand identity and digital product interface",
    href: "/work/closex-pay",
  },
];

const rowVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SelectedWorks() {
  return (
    <section
      id="work"
      className="w-full bg-[#F5EAE8] text-[#1A1717]  font-alan-sans py-16 sm:py-20 lg:py-28 px-5 sm:px-8 md:px-12 lg:px-16"
    >
      <div className="max-w-[1440px] mx-auto">
        {/* Top Metadata Eyebrow */}
        <div className="mb-12 flex items-center gap-4">
          <span className="text-lg font-bold text-[#650914]">//</span>
          <p className="font-alan-sans text-lg uppercase tracking-[0.15em]">
            SELECTED WORKS
          </p>
        </div>

        {/* Alternating Project Rows */}
        <div className="flex flex-col gap-16 sm:gap-20 lg:gap-28">
          {SELECTED_PROJECTS.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={project.id}
                variants={rowVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-end"
              >
                {/* Text Column (Bottom-Aligned to Image Baseline) */}
                <div
                  className={`lg:col-span-3 flex flex-col justify-end order-2 ${
                    isReversed
                      ? "lg:order-2 lg:items-end lg:text-right"
                      : "lg:order-1 lg:items-start lg:text-left"
                  }`}
                >
                  <Link
                    href={project.href}
                    className="inline-block focus:outline-none"
                  >
                    <h3 className="text-4xl lg:text-[4vw] flex flex-wrap font-extrabold leading-[0.98] tracking-[-0.025em] uppercase text-[#1D1919] transition-colors duration-300 group-hover:text-[#5E111B]">
                      {project.title.map((line, lineIdx) => (
                        <span key={lineIdx} className="flex">
                          {line}
                        </span>
                      ))}
                    </h3>

                    <div className="mt-4 sm:mt-5 flex flex-wrap lg:flex-col gap-3 md:gap-0.5  ">
                      {project.tags.map((tag) => (
                        <p
                          key={tag}
                          className="text-lg md:text-[1.5vw] font-medium tracking-1 uppercase text-[#574E4E]"
                        >
                          {tag}
                        </p>
                      ))}
                    </div>
                  </Link>
                </div>

                {/* Wide Landscape Banner Column */}
                <div
                  className={`lg:col-span-9 order-1 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <Link
                    href={project.href}
                    aria-label={`View ${project.title.join(" ")} case study`}
                    className="relative block w-full aspect-[16/9] sm:aspect-[16/6] bg-[#0B131E] overflow-hidden focus:outline-none"
                  >
                    <motion.div
                      whileHover={{ scale: 1.025 }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute w-full h-full"
                    >
                      <Image
                        src={project.image}
                        alt={project.alt}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 75vw"
                        className="object-cover object-left left-20 md:left-0"
                      />
                    </motion.div>

                    {/* Top-Right Circular Action Button */}
                    <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white text-[#111111] flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5E111B] group-hover:text-white">
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </Link>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Explore More Bar */}
        <div className="mt-16 sm:mt-20 lg:mt-24 pt-6 border-t border-black/10 flex items-center justify-between">
          <Link
            href="/work"
            className="group/btn inline-flex items-center gap-3 text-lg md:text-xl font-semibold tracking-[0.14em] uppercase text-[#1D1919] hover:text-[#5E111B] transition-colors"
          >
            <span>EXPLORE MORE</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
