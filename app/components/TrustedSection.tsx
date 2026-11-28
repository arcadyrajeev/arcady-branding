"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const logos = [
  "/images/logos/logo1.svg",
  "/images/logos/logo2.svg",
  "/images/logos/logo3.svg",
  "/images/logos/logo4.svg",
  "/images/logos/logo5.svg",
  "/images/logos/logo6.svg",
  "/images/logos/logo7.svg",
  "/images/logos/logo8.svg",
  "/images/logos/logo3.svg",
  "/images/logos/logo4.svg",
  "/images/logos/logo5.svg",
  "/images/logos/logo6.svg",
  "/images/logos/logo7.svg",
  "/images/logos/logo8.svg",
  "/images/logos/logo9.svg",
];

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function TrustedSection() {
  return (
    <section className="relative w-full font-alan-sans overflow-hidden bg-[#F6EAE5] text-[#160D0D]">
      {/* TRUST HERO */}
      <div className="relative min-h-[540px] md:min-h-[620px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/trusted-bg.png"
            alt="Arcady abstract burgundy sculptural artwork"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#F6EAE5] via-[#F6EAE5]/90 to-transparent" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 w-full px-6 py-24 md:px-12 lg:px-16"
        >
          <motion.div variants={fadeUp} className="max-w-[580px]">
            <div className="mb-12 flex items-center gap-4">
              <span className="text-lg font-bold text-[#650914]">//</span>
              <p className="font-alan-sans text-lg uppercase tracking-[0.15em]">
                CLIENTS PERSPECTIVE
              </p>
            </div>

            <h2 className="text-[42px] font-semibold uppercase leading-[0.96] tracking-[-0.065em] sm:text-5xl md:text-6xl lg:text-[76px]">
              Trusted to
              <br />
              shape what
              <br />
              comes next.
            </h2>

            <p className="mt-7 max-w-[200px] uppercase md:max-w-[580px] text-sm leading-relaxed text-[#554541] md:text-xl">
              From emerging labels to ambitious businesses, we build distinctive
              brands through thoughtful strategy, visual identity and digital
              experiences.
            </p>

            {/* CTA */}
            <Link
              href="#contact"
              aria-label="Let's create your next brand"
              className="group relative mt-1 block w-full max-w-[515px] aspect-[4.1/1] overflow-hidden transition-transform duration-500 hover:scale-[1.025] active:scale-[0.99]"
            >
              <Image
                src="/images/CTA-button.webp"
                alt="Let's create your next brand"
                fill
                sizes="(max-width: 768px) 100vw, 515px"
                className="object-contain transition-all duration-700 group-hover:brightness-110"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
