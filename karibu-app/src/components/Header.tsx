"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Globe2, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#rooms", label: "The Cottage" },
  { href: "#gallery", label: "Photo Tour" },
  { href: "#amenities", label: "Amenities" },
  { href: "#safari", label: "Safari & Tours" },
  { href: "#contact", label: "Contact" },
];

const sans = { fontFamily: "Inter, system-ui, sans-serif" };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div style={{ backgroundColor: "#1A1A1A", ...sans }} className="text-white text-xs px-6 py-2.5 flex justify-between items-center">
        <a
          href="tel:+255742899903"
          className="flex items-center gap-2 hover:text-[#ff841a] transition-colors"
        >
          <Phone size={13} />
          <span>+255 742 899 903</span>
        </a>
        <div className="flex items-center gap-4">
          <span style={{ color: "#ff841a", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "10px" }}>
            Nkunjila · Moshi · Kilimanjaro, Tanzania
          </span>
          <a
            href="https://instagram.com/karibucottagesafari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff841a] transition-colors"
            aria-label="Instagram"
          >
            <Globe2 size={14} />
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          backgroundColor: "white",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
          borderBottom: scrolled ? "none" : "1px solid #E8E0D0",
          transition: "box-shadow 0.3s, border-color 0.3s",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-1 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.jpg"
              alt="Karibu Cottage Safari Logo"
              width={140}
              height={140}
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ ...sans, fontSize: "13px", fontWeight: 500, color: "#3D3D3D", position: "relative", textDecoration: "none" }}
                className="hover:text-[#ff841a] transition-colors group"
              >
                {link.label}
                <span
                  style={{ position: "absolute", bottom: "-4px", left: 0, width: 0, height: "2px", backgroundColor: "#ff841a", transition: "width 0.3s" }}
                  className="group-hover:w-full"
                />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#booking"
              style={{ ...sans, backgroundColor: "#ff841a", color: "white", fontWeight: 700, padding: "10px 24px", fontSize: "13px", letterSpacing: "0.04em", textDecoration: "none", borderRadius: "2px", transition: "background-color 0.2s" }}
              className="hidden sm:inline-flex items-center hover:bg-[#cc6a14]"
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#cc6a14")}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#ff841a")}
            >
              Book Now
            </a>
            <button
              style={{ color: "#1A1A1A", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
              className="lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div style={{ borderTop: "1px solid #E8E0D0", backgroundColor: "white" }} className="lg:hidden px-6 py-5 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{ ...sans, fontSize: "14px", fontWeight: 500, color: "#3D3D3D", textDecoration: "none", padding: "4px 0" }}
                className="hover:text-[#ff841a] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#booking"
              style={{ ...sans, backgroundColor: "#ff841a", color: "white", fontWeight: 700, padding: "12px", fontSize: "13px", textAlign: "center", textDecoration: "none", borderRadius: "2px", marginTop: "8px" }}
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </header>
    </>
  );
}
