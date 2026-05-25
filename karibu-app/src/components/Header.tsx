"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Globe2, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Accommodation", href: "/#rooms" },
  { name: "Amenities", href: "/#amenities" },
  { name: "Safaris", href: "/safaris" },
  { name: "Charity", href: "/charity" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Payment Info", href: "/#payment" },
  { name: "Contact", href: "/#contact" },
];

const sans = { fontFamily: "Inter, system-ui, sans-serif" };

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    
    // Set initial hash
    setActiveHash(window.location.hash);
    const onHashChange = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div style={{ backgroundColor: "#1A1A1A", ...sans }} className="text-white text-xs px-6 py-2.5 flex justify-between items-center">
        <a href="tel:+255767399123" className="flex items-center gap-2 hover:text-[#ff841a] transition-colors" style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.05em" }}>
          <Phone size={14} />
          <span>+255 767 399 123</span>
        </a>
        <div className="flex items-center gap-4">
          <a 
            href="https://www.google.com/maps/place/KARIBU+COTTAGE+%26+SAFARI/@-3.3583388,37.3771707,17z/data=!4m9!3m8!1s0x1839d7b26b0d863f:0x5cfa00b52e726666!5m2!4m1!1i2!8m2!3d-3.3583388!4d37.3797456!16s%2Fg%2F11lzzxmlyp?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:underline" 
            style={{ color: "#ff841a", letterSpacing: "0.2em", textTransform: "uppercase", fontSize: "10px" }}
          >
            Msaranga Msufini · Moshi · Kilimanjaro, Tanzania
          </a>
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
          <Link href="/" className="flex items-center flex-shrink-0">
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
            {navLinks.map((link) => {
              const isHashLink = link.href.includes('#');
              const targetHash = isHashLink ? '#' + link.href.split('#')[1] : '';
              
              const isActive = 
                (isHashLink && pathname === '/' && activeHash === targetHash) ||
                (link.href === '/' && pathname === '/' && !activeHash) ||
                (!isHashLink && pathname === link.href);
                
              const isHovered = hoveredLink === link.href;
              const showHighlight = isActive || isHovered;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onMouseEnter={() => setHoveredLink(link.href)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{ 
                    ...sans, 
                    fontSize: "13px", 
                    fontWeight: 500, 
                    color: showHighlight ? "#ff841a" : "#3D3D3D", 
                    position: "relative", 
                    textDecoration: "none",
                    transition: "color 0.3s"
                  }}
                  onClick={() => {
                    if (isHashLink) setActiveHash(targetHash);
                  }}
                >
                  {link.name}
                  <span
                    style={{ 
                      position: "absolute", 
                      bottom: "-4px", 
                      left: 0, 
                      width: showHighlight ? "100%" : "0", 
                      height: "2px", 
                      backgroundColor: "#ff841a", 
                      transition: "width 0.3s" 
                    }}
                  />
                </a>
              );
            })}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/#booking"
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
                {link.name}
              </a>
            ))}
            <a
              href="/#booking"
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
