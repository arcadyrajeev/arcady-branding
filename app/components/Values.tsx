"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Values() {
  return (
    <section className="bg-[#F7EAE5] px-6 py-8 md:px-12 md:py-10">
      <div className="mx-auto max-w-[1800px]">
        {/* Label */}
        <div className="mb-12 flex items-center gap-4">
          <span className="text-lg font-bold text-[#650914]">//</span>
          <p className="font-alan-sans text-lg uppercase tracking-[0.15em]">
            ABOUT ARCADY
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1.4fr_0.6fr] md:gap-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <h2 className="font-alan-sans text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.92] tracking-[-0.06em] text-black">
              A BRAND DESIGN STUDIO
              <br />
              FOR NEXT-GEN BUSINESSES.
            </h2>

            <p className="mt-10 max-w-xl font-alan-sans text-lg leading-[1.4] text-black/75 md:text-2xl">
              We shape how businesses are positioned, perceived, and experienced
              through thoughtful strategy and distinctive design.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col"
          >
            {/* Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src="/images/ribbon-portrait.png"
                alt="Arcady creative direction"
                fill
                className="object-cover h-[30vw]"
              />
            </div>

            {/* Services */}
            <div className="mt-6 font-alan-sans font-medium text-base uppercase leading-[1.5] tracking-wide text-black md:text-xl">
              Strategy
              <br />
              Identity
              <br />
              Design Systems
              <br />
              Brand Experiences
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
