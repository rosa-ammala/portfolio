"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import About from "./About";
import Experience from "./Experience";

export default function AboutExperienceSection() {
  const ref = useRef<HTMLDivElement | null>(null);

  // Track scroll progress only while this section is on screen
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // When progress goes from ~0.3 → 0.8,
  // move Experience from 100% (off right) to 0% (fully on top)
  const x = useTransform(scrollYProgress, [0.3, 0.6], ["100%", "0%"]);

  return (
    <section ref={ref} className="relative h-[200vh]">
      {/* Sticky viewport area */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background: About */}
        <About />

        <section id="experience">
        {/* Foreground: Experience sliding in from the right */}
        <motion.div
          style={{ x }}
          className="absolute inset-0 z-50"
        >
          <Experience /> 
        </motion.div>
        </section>
      </div>
    </section>
  );
}
