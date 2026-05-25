"use client";

import Image from "next/image";
import { ChevronDown, Images, Phone } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{ position: "relative", width: "100%", height: "100vh", minHeight: "640px", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
    >
      {/* Background Image */}
      <Image
        src="/building/GOPR0095.jpg"
        alt="Karibu Cottage exterior with tropical gardens near Kilimanjaro"
        fill
        className="object-cover object-center"
        priority
        quality={90}
      />

      {/* Gradient overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.50) 0%, rgba(0,0,0,0.38) 50%, rgba(0,0,0,0.65) 100%)" }} />

      {/* Gold accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, transparent, #ff841a, transparent)", opacity: 0.9 }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "0 24px", maxWidth: "1000px", margin: "0 auto" }}>
        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "white", fontSize: "clamp(2.2rem, 5vw, 4.2rem)", fontWeight: 600, lineHeight: 1.15, marginBottom: "20px", textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}>
          Safari Adventures &<br />
          <em style={{ fontStyle: "normal", color: "#ff841a" }}>Home Comfort</em> at<br />
          Kilimanjaro
        </h1>

        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", maxWidth: "520px", margin: "0 auto 36px", fontWeight: 300, lineHeight: 1.6, fontFamily: "Inter, sans-serif" }}>
          Welcome to your private retreat—surrounded by lush gardens, mountain views, and curated wildlife experiences.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 mt-8">
          <a
            href="#booking"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "#ff841a", color: "white", fontWeight: 700, padding: "14px 32px", borderRadius: "2px", fontSize: "14px", letterSpacing: "0.05em", textDecoration: "none", transition: "background-color 0.2s", fontFamily: "Inter, sans-serif" }}
            className="w-full sm:w-auto hover:bg-[#cc6a14]"
          >
            Book Your Stay
          </a>
          <a
            href="#rooms"
            style={{ alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.45)", fontWeight: 500, padding: "14px 32px", borderRadius: "2px", fontSize: "14px", letterSpacing: "0.05em", textDecoration: "none", backdropFilter: "blur(8px)", fontFamily: "Inter, sans-serif" }}
            className="hidden sm:inline-flex hover:bg-white/20 transition-colors"
          >
            <Images size={16} />
            Explore The Cottage
          </a>
          <a
            href="tel:+255742899903"
            style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px", backgroundColor: "rgba(0,0,0,0.3)", color: "white", border: "1px solid rgba(255,255,255,0.2)", fontWeight: 500, padding: "14px 32px", borderRadius: "2px", fontSize: "14px", letterSpacing: "0.05em", textDecoration: "none", backdropFilter: "blur(8px)", fontFamily: "Inter, sans-serif" }}
            className="w-full sm:w-auto hover:bg-black/50 transition-colors"
          >
            <Phone size={16} />
            +255 742 899 903
          </a>
        </div>

        {/* Stats bar */}
        <div className="hidden md:flex flex-wrap justify-center gap-x-12 gap-y-6 mt-16">
          {[{ value: "7", label: "Bedrooms" },
            { value: "3.5", label: "Baths" },
            { value: "14", label: "Guests Max" },
            { value: "2", label: "Acres of Garden" }].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "#ff841a", fontSize: "1.75rem", fontWeight: 600 }}>
                {stat.value}
              </div>
              <div style={{ color: "rgba(255,255,255,0.55)", fontSize: "10px", letterSpacing: "0.2em", textTransform: "uppercase", marginTop: "4px", fontFamily: "Inter, sans-serif" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "32px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "4px", color: "rgba(255,255,255,0.55)" }}>
        <span style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", fontFamily: "Inter, sans-serif" }}>Scroll</span>
        <ChevronDown size={18} className="animate-bounce" />
      </div>
    </section>
  );
}
