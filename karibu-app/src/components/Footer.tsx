"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Copy } from "lucide-react";

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };
const sans = { fontFamily: "Inter, system-ui, sans-serif" };

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#rooms", label: "The Cottage" },
  { href: "#gallery", label: "Photo Tour" },
  { href: "#amenities", label: "Amenities" },
  { href: "#safari", label: "Safari & Tours" },
  { href: "#booking", label: "Book Now" },
];

const policies = [
  "Self check-in via smartlock",
  "Check-out by 11:00 AM",
  "Children & Infants welcome",
  "Pets and animals allowed",
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#111111" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <Image
              src="/logo.jpg"
              alt="Karibu Cottage Safari"
              width={48}
              height={48}
              className="object-contain bg-white rounded-sm p-1"
            />
            <div>
              <div style={{ ...serif, fontSize: "15px", fontWeight: 600, color: "white", lineHeight: 1.2 }}>
                Karibu Cottage
              </div>
              <div style={{ ...sans, fontSize: "9px", letterSpacing: "0.3em", color: "#ff841a", textTransform: "uppercase", fontWeight: 600, marginTop: "2px" }}>
                Safari
              </div>
            </div>
          </div>
          <p style={{ ...sans, fontSize: "13px", color: "#9CA3AF", lineHeight: 1.8, marginBottom: "20px" }}>
            Your home away from home — where safari adventure meets the comfort of a private cottage at the foot of Kilimanjaro.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <a
              href="https://www.airbnb.com/rooms/1226048061128227278"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "8px 14px", borderRadius: "2px", backgroundColor: "#FF5A5F", color: "white", fontSize: "12px", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
              className="hover:opacity-90"
            >
              Airbnb
            </a>
            <a
              href="https://www.booking.com/hotel/tz/karibucottage-amp-safari.html"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "8px 14px", borderRadius: "2px", backgroundColor: "#003580", color: "white", fontSize: "12px", fontWeight: 600, textDecoration: "none", transition: "opacity 0.2s" }}
              className="hover:opacity-90"
            >
              Booking.com
            </a>
            <button
              onClick={(e) => { 
                e.preventDefault(); 
                navigator.clipboard.writeText(window.location.href); 
                alert("Website link copied!"); 
              }}
              style={{ padding: "8px 14px", borderRadius: "2px", border: "1px solid #374151", color: "#9CA3AF", fontSize: "12px", fontWeight: 600, background: "transparent", cursor: "pointer", transition: "all 0.2s", display: "flex", alignItems: "center", gap: "6px" }}
              className="hover:border-[#ff841a] hover:text-[#ff841a]"
            >
              <Copy size={14} /> Copy Link
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ ...serif, fontSize: "15px", fontWeight: 600, color: "white", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid #1F2937" }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  style={{ ...sans, fontSize: "13px", color: "#9CA3AF", textDecoration: "none", transition: "color 0.2s" }}
                  className="hover:text-[#ff841a]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h4 style={{ ...serif, fontSize: "15px", fontWeight: 600, color: "white", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid #1F2937" }}>
            Policies
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {policies.map((p) => (
              <li key={p} style={{ ...sans, fontSize: "13px", color: "#9CA3AF", display: "flex", alignItems: "flex-start", gap: "8px" }}>
                <span style={{ color: "#ff841a", marginTop: "2px", flexShrink: 0 }}>›</span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ ...serif, fontSize: "15px", fontWeight: 600, color: "white", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid #1F2937" }}>
            Contact Us
          </h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "14px" }}>
            <li>
              <a href="tel:+255742899903" style={{ ...sans, display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#9CA3AF", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[#ff841a]">
                <Phone size={14} style={{ marginTop: "2px", flexShrink: 0, color: "#ff841a" }} />
                +255 742 899 903
              </a>
            </li>
            <li>
              <a href="mailto:info@karibucottagesafari.com" style={{ ...sans, display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#9CA3AF", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[#ff841a]">
                <Mail size={14} style={{ marginTop: "2px", flexShrink: 0, color: "#ff841a" }} />
                info@karibucottagesafari.com
              </a>
            </li>
            <li style={{ ...sans, display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#9CA3AF" }}>
              <MapPin size={14} style={{ marginTop: "2px", flexShrink: 0, color: "#ff841a" }} />
              <span>Nkunjila, Moshi, Kilimanjaro Region, Tanzania</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid #1F2937" }} className="px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span style={{ ...sans, fontSize: "12px", color: "#6B7280" }}>
            © {new Date().getFullYear()} Karibu Cottage Safari. All rights reserved.
          </span>
          <span style={{ ...sans, fontSize: "12px", color: "#6B7280" }}>
            Nkunjila, Moshi · Kilimanjaro, Tanzania
          </span>
        </div>
      </div>
    </footer>
  );
}
