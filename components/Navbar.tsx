"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const linksLeft = [
  { name: "about", href: "#about" },
  { name: "experience", href: "#experience" },
];

const linksRight = [
  { name: "projects", href: "#projects" },
  { name: "contact", href: "#contact" },
];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <nav className="
      w-full bg-transparent 
      py-4 sm:py-6 
      px-6 sm:px-10 lg:px-16 
      font-handwritten text-2xl sm:text-3xl
    ">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 xl:gap-12 max-w-6xl">
        {/* vasen puoli */}
        <div className="flex items-center gap-6 sm:gap-10 xl:gap-16">
        {linksLeft.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="relative transition-all"
            onMouseEnter={() => setHovered(link.name)}
            onMouseLeave={() => setHovered(null)}
          >
            {link.name}
            {hovered === link.name && (
              <Image
                src="/nav-hover.svg"
                alt=""
                width={250}
                height={150}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
              />
            )}
          </Link>
        ))}
        </div>

        {/* keskellä logo */}
        <div className="flex items-center justify-center px-4 order-first md:order-none">
          <Image
            src="/portfolio-letters.png"
            alt="Portfolio logo"
            width={160}
            height={70}
            className="mx-auto w-[140px] sm:w-[160px] lg:w-[190px] h-auto"
          />
        </div>

        {/* oikea puoli */}
        <div className="flex items-center gap-6 sm:gap-10 xl:gap-16">
          {linksRight.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative transition-all"
              onMouseEnter={() => setHovered(link.name)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.name}
              {hovered === link.name && (
                <Image
                  src="/nav-hover.svg"
                  alt=""
                  width={250}
                  height={150}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
