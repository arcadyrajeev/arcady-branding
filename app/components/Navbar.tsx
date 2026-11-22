"use client";

import Link from "next/link";

const navItems = [
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "PROCESS", href: "#process" },
  { label: "STUDIO", href: "#studio" },
];

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-6 py-6 md:px-12 md:py-8">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="text-xl font-black tracking-.5 font-zen-dots text-red-950">
            ARCADY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-12 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium font-alan-sans text-black transition-opacity duration-300 hover:opacity-50"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="flex flex-col gap-[5px] md:hidden"
          aria-label="Open navigation menu"
        >
          <span className="h-[2px] w-7 bg-black" />
          <span className="h-[2px] w-7 bg-black" />
        </button>
      </div>
    </nav>
  );
}
