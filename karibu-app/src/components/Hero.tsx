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
        <p style={{ color: "#ff841a", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", fontWeight: 600, marginBottom: "20px", fontFamily: "Inter, sans-serif" }}>
          Nkunjila · Moshi · Kilimanjaro, Tanzania
        </p>

        <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", color: "white", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 600, lineHeight: 1.15, marginBottom: "24px", textShadow: "0 2px 20px rgba(0,0,0,0.4)" }}>
          Experience Safari Luxury &amp;<br />
          <em style={{ fontStyle: "normal", color: "#ff841a" }}>Home Comfort</em> at the<br />
          Foot of Kilimanjaro
        </h1>

        <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto 40px", fontWeight: 300, lineHeight: 1.75, fontFamily: "Inter, sans-serif" }}>
          Karibu — welcome to your private retreat surrounded by lush gardens, mountain views, and curated safari experiences.
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px" }}>
          <a
            href="#booking"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#ff841a", color: "white", fontWeight: 700, padding: "14px 32px", borderRadius: "2px", fontSize: "14px", letterSpacing: "0.05em", textDecoration: "none", transition: "background-color 0.2s", fontFamily: "Inter, sans-serif" }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#cc6a14")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff841a")}
          >
            Book Your Stay
          </a>
          <a
            href="#rooms"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.45)", fontWeight: 500, padding: "14px 32px", borderRadius: "2px", fontSize: "14px", letterSpacing: "0.05em", textDecoration: "none", backdropFilter: "blur(8px)", fontFamily: "Inter, sans-serif" }}
          >
            <Images size={16} />
            Explore The Cottage
          </a>
          <a
            href="tel:+255742899903"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.75)", fontSize: "14px", textDecoration: "none", fontFamily: "Inter, sans-serif" }}
          >
            <Phone size={15} />
            +255 742 899 903
          </a>
        </div>

        {/* Stats bar */}
        <div style={{ marginTop: "56px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "48px" }}>
          {[
            { value: "8", label: "Max Guests" },
            { value: "3", label: "Bedrooms" },
            { value: "3.5", label: "Bathrooms" },
            { value: "43km", label: "From KIA Airport" },
          ].map((stat) => (
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
