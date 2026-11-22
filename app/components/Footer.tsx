// components/Footer.tsx

import Image from "next/image";
import Link from "next/link";

type FooterProps = {
  image: string;
};

export default function Footer({ image }: FooterProps) {
  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[400px] max-w-[1800px] flex-col justify-between px-6 py-10 md:px-12 md:py-16">
        {/* Top */}
        <div className="flex items-start justify-between">
          <Link
            href="/"
            className="text-xl font-zen-dots font-semibold tracking-1 text-red-950"
          >
            ARCADY
          </Link>

          <Link
            href="#contact"
            className="text-sm uppercase tracking-wide transition-opacity hover:opacity-60"
          >
            Let&apos;s talk ↗
          </Link>
        </div>

        {/* Main */}
        <div className="flex flex-col justify-between gap-12 md:flex-row md:items-end">
          <div>
            <h2 className="max-w-3xl text-4xl font-medium leading-tight md:text-6xl">
              Build a brand
              <br />
              that moves forward.
            </h2>
          </div>

          {/* Links */}
          <nav className="flex gap-8 text-sm uppercase tracking-wide">
            <div className="flex flex-col gap-3">
              <Link href="/" className="hover:opacity-60">
                Home
              </Link>
              <Link href="/work" className="hover:opacity-60">
                Work
              </Link>
              <Link href="/services" className="hover:opacity-60">
                Services
              </Link>
            </div>

            <div className="flex flex-col gap-3">
              <Link href="/studio" className="hover:opacity-60">
                Studio
              </Link>
              <Link href="#contact" className="hover:opacity-60">
                Contact
              </Link>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60"
              >
                Instagram ↗
              </a>
            </div>
          </nav>
        </div>

        {/* Bottom */}
        <div className="flex flex-col justify-between gap-3 border-t border-white/30 pt-5 text-xs uppercase tracking-wide md:flex-row">
          <p>© 2025 Arcady Studio</p>
          <p>Brand strategy / Identity / Digital experience</p>
        </div>
      </div>
    </footer>
  );
}
