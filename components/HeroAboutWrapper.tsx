"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Hero from "./Hero";
import AboutExperienceSection from "./AboutExperienceSection";

export default function HeroAboutWrapper() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const [showInHero, setShowInHero] = useState(true);

  // Track scroll while the hero is on screen
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // When user has scrolled past ~40% of hero, move polaroid to About
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShowInHero(v < 0.4);
  });

  return (
    <>
      {/* Pass info about where the polaroid should be */}
      <div ref={heroRef}>
        <Hero showPolaroid={showInHero} />
      </div>
      <AboutExperienceSection showPolaroidInAbout={!showInHero} />
    </>
  );
}
