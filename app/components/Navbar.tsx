"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "WORK", href: "#work" },
  { label: "PROCESS", href: "#process" },
  { label: "STUDIO", href: "#studio" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 z-50 w-full px-6 py-5 md:px-12 md:py-8">
      <div className="mx-auto flex max-w-[1800px] items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="relative z-50 flex items-center"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-zen-dots text-xl font-black tracking-tight text-red-950">
            ARCADY
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-alan-sans text-sm font-medium text-black transition-opacity duration-300 hover:opacity-40"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Contact */}
        <Link
          href="#contact"
          className="hidden rounded-full bg-red-950 px-6 py-3 font-alan-sans text-sm text-white transition-colors duration-300 hover:bg-red-900 md:block"
        >
          CONTACT
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex flex-col gap-[5px] p-2 md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
        >
          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-black transition-transform duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 top-0 w-full overflow-hidden bg-[#f7f5f0] transition-all duration-500 ease-in-out md:hidden ${
          menuOpen
            ? "visible max-h-[400px] opacity-100"
            : "invisible max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 pb-8 pt-24">
          {navItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="border-b border-black/10 py-5 font-alan-sans text-2xl font-medium text-black transition-opacity hover:opacity-50"
            >
              <span className="mr-4 text-xs text-black/40">0{index + 1}</span>
              {item.label}
            </Link>
          ))}

          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-6 flex items-center justify-center rounded-full bg-red-950 px-6 py-4 font-alan-sans text-sm text-white"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
}
