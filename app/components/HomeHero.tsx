"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "./Navbar";

export default function HomeHero() {
  const { scrollY } = useScroll();

  // Parallax layers
  const backgroundY = useTransform(scrollY, [0, 800], [0, 180]);
  const headlineY = useTransform(scrollY, [0, 800], [0, 300]);
  const ctaY = useTransform(scrollY, [0, 800], [0, -60]);
  const servicesY = useTransform(scrollY, [0, 800], [0, 260]);
  const positioningY = useTransform(scrollY, [0, 800], [0, 100]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#ead5c8]">
      {/* Background Image */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 h-[120%] w-full"
      >
        <Image
          src="/images/arcady-hero-bg-big.png"
          alt=""
          fill
          priority
          className="object-cover object-center w-[110%]"
        />
      </motion.div>

      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1800px] flex-col  px-6  md:px-20 pt-[20vh]">
        {/* Main Headline */}
        <motion.div
          style={{ y: headlineY }}
          className="relative z-20 max-w-[1200px]"
        >
          <h1 className="flex flex-wrap font-zen-dots items-center text-5xl sm:text-6xl md:text-[11vw] leading-[0.8] tracking-[-0.04em] text-black">
            <span>ARC</span>
            <span className="text-[#650914]">ADY</span>
          </h1>
        </motion.div>

        {/* Right Side Services */}
        <motion.div
          style={{ y: servicesY }}
          className="absolute right-6 top-[24%] hidden border-l-4 border-[#650914] pl-6 md:block lg:right-20"
        >
          <p className="text-xl leading-[1.35] font-alan-sans uppercase lg:text-2xl">
            Brand
            <br />
            Strategy
            <br />
            Visual Identity
            <br />
            Art Direction
            <br />
            Digital
            <br />
            Experience
          </p>
        </motion.div>

        {/* Bottom Left Positioning */}
        <motion.div
          style={{ y: positioningY }}
          className="absolute bottom-[20%] left-6 z-20 max-w-[320px] md:bottom-[18%] md:left-12 mix-blend-difference"
        >
          <p className="text-lg font-light font-alan-sans leading-[1.35] uppercase text-red-100 md:text-2xl">
            Luxury Branding
            <br />
            Studio for Ambitious
            <br />
            Businesses
          </p>
        </motion.div>
      </div>
    </section>
  );
}
