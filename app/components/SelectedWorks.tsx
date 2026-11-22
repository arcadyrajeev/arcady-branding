"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Élanore Joaillerie",
    category: "Brand Identity / Strategy",
    image: "/images/brands/elanore-cover-2.png",
    href: "/work/elanore",
  },
  {
    title: "Seline",
    category: "Visual Identity / Digital",
    image: "/images/brands/silene-cover-2.png",
    href: "/work/seline",
  },
  {
    title: "RupeeFlow",
    category: "Brand System / Digital",
    image: "/images/brands/rupeeflow-cover-2.png",
    href: "/work/rupeeflow",
  },
];

export default function SelectedWorks() {
  return (
    <section
      id="work"
      className="overflow-hidden bg-[#f4e8dc] px-6 py-20 md:px-12 md:py-28"
    >
      <div className="mx-auto max-w-[1800px]">
        {/* Section Label */}
        <div className="mb-10 flex items-center gap-4">
          <span className="font-alan-sans text-[#650914]">//</span>
          <span className="font-alan-sans text-sm uppercase tracking-[0.15em] text-black">
            Selected Work
          </span>
        </div>

        {/* Featured Project */}
        <Link
          href={projects[0].href}
          className="group grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]"
        >
          {/* Project Information */}
          <div className="flex flex-col justify-end pb-3">
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="font-alan-sans text-[clamp(2.5rem,5vw,5rem)] font-medium leading-[0.9] tracking-[-0.06em] text-stone-900">
                Élanore
                <br />
                Joaillerie
              </h3>

              <p className="mt-6 font-alan-sans text-xs uppercase tracking-[0.15em] text-black/60">
                Brand Identity / Strategy
              </p>
            </motion.div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/7] overflow-hidden bg-[#45060d]">
            <Image
              src={projects[0].image}
              alt={projects[0].title}
              fill
              priority
              className="object-cover object-left transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
            />

            <div className="absolute right-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
              <ArrowUpRight size={20} />
            </div>
          </div>
        </Link>

        {/* Secondary Projects */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* Seline */}
          <Link href={projects[1].href} className="group  overflow-hidden">
            <div className="relative aspect-[16/9] overflow-hidden bg-[#1c1c1c]">
              <Image
                src={projects[1].image}
                alt={projects[1].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />

              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white transition-all group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </Link>

          {/* RupeeFlow */}
          <Link href={projects[2].href} className="group overflow-hidden">
            <div className="relative aspect-[16/9] overflow-hidden bg-[#00271e]">
              <Image
                src={projects[2].image}
                alt={projects[2].title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
              />

              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/50 text-white transition-all group-hover:bg-white group-hover:text-black">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </Link>
        </div>

        {/* View All */}
        <Link
          href="/work"
          className="group mt-12 flex items-center justify-between border-t border-[#650914]/30 pt-5"
        >
          <span className="font-alan-sans text-sm uppercase tracking-[0.15em] text-black">
            Explore More
          </span>

          <ArrowRight
            size={22}
            className="text-[#650914] transition-transform duration-300 group-hover:translate-x-2"
          />
        </Link>
      </div>
    </section>
  );
}
