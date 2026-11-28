import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

type FooterProps = {
  image: string;
};

const navigation = [
  {
    title: "Main",
    links: [
      { label: "Home", href: "/" },
      { label: "Work", href: "/work" },
      { label: "Services", href: "/services" },
    ],
  },
  {
    title: "Studio",
    links: [
      { label: "Studio", href: "/studio" },
      { label: "Contact", href: "#contact" },
      {
        label: "Behance",
        href: "https://www.behance.net/arcadyarts",
        external: true,
      },
    ],
  },
];

export default function Footer({ image }: FooterProps) {
  return (
    <footer className="relative isolate w-full min-h-[560px]  overflow-hidden bg-[#EEDDD5] text-[#170809]">
      {/* Background Image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={image}
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Main Content */}
      <div className="relative mx-auto flex max-w-[1920px] min-h-[560px] flex-col px-6 pb-28 pt-10 sm:px-10 md:px-12 lg:px-16 lg:pt-12">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-zen-dots text-2xl font-semibold tracking-[-0.08em] text-[#410D15] transition-opacity hover:opacity-60"
          >
            ARCADY
          </Link>
        </div>

        {/* Main Grid */}
        <div className="mt-10 grid flex-1 grid-cols-1 gap-12 md:grid-cols-[1.4fr_0.9fr] lg:mt-12 lg:gap-20">
          {/* Headline */}
          <div className="flex flex-col justify-start">
            <h2 className="max-w-[850px] text-[clamp(2.8rem,5vw,5.2rem)] font-medium leading-[0.98] tracking-[-0.065em] text-[#70272A]">
              Build a brand
              <br />
              that moves forward.
            </h2>
          </div>

          {/* Navigation and CTA */}
          <div className="flex flex-col gap-10 md:items-end">
            {/* Navigation */}
            <nav className="grid w-full max-w-[480px] grid-cols-2 gap-x-12 gap-y-7 md:gap-x-16">
              {navigation.map((group) => (
                <div key={group.title} className="flex flex-col gap-5">
                  {group.links.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className="group flex w-fit items-center gap-1 text-lg font-medium tracking-[-0.04em] text-black transition-colors duration-300 hover:text-[#851426]"
                    >
                      {link.label}

                      {link.external && (
                        <ArrowUpRight
                          size={15}
                          className="opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100"
                        />
                      )}
                    </Link>
                  ))}
                </div>
              ))}
            </nav>

            {/* CTA */}
            <Link
              href="#contact"
              aria-label="Let's create your next brand"
              className="group relative mt-1 block w-full max-w-[515px] aspect-[4.1/1] overflow-hidden transition-transform duration-500 drop-shadow-[0_12px_12px_rgba(75,0,12,0.35)]
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/15 bg-black/45 backdrop-blur-[3px]">
        <div className="mx-auto flex max-w-[1920px] flex-col justify-between gap-3 px-6 py-3 text-white sm:px-10 md:flex-row md:items-center md:px-12 lg:px-16">
          <p className="text-sm font-light tracking-[-0.03em] ">
            © 2025 Arcady Studio
          </p>

          <p className="text-sm font-light tracking-[-0.02em] ">
            Brand strategy / Identity / Digital experience
          </p>
        </div>
      </div>
    </footer>
  );
}
