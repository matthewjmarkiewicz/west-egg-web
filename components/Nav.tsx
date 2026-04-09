"use client";

import { useEffect, useState } from "react";
import DemoButton from "./DemoButton";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-sm border-b border-warm-gray shadow-sm"
          : "bg-cream/80"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <a
          href="/"
          className="font-display text-xl text-charcoal tracking-wide hover:opacity-80 transition-opacity"
        >
          West Egg Wealth
        </a>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#platform"
            className="font-body text-[15px] text-charcoal-soft hover:text-charcoal transition-colors tracking-wide"
          >
            Platform
          </a>
          <a
            href="#about"
            className="font-body text-[15px] text-charcoal-soft hover:text-charcoal transition-colors tracking-wide"
          >
            About
          </a>
          <a
            href="#pricing"
            className="font-body text-[15px] text-charcoal-soft hover:text-charcoal transition-colors tracking-wide"
          >
            Pricing
          </a>
        </nav>

        {/* CTA */}
        <DemoButton variant="outlined" size="sm" />
      </div>
    </header>
  );
}
