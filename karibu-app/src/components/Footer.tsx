"use client";

import Image from "next/image";
import { Phone, Mail, MapPin, Copy } from "lucide-react";

const serif = { fontFamily: "'Playfair Display', Georgia, serif" };
const sans = { fontFamily: "Inter, system-ui, sans-serif" };

const WhatsAppIcon = ({ size = 14, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Accommodation", href: "/#rooms" },
  { name: "Amenities", href: "/#amenities" },
  { name: "Safaris", href: "/safaris" },
  { name: "Charity", href: "/charity" },
  { name: "Reviews", href: "/#reviews" },
  { name: "Contact", href: "/#contact" },
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
                  {link.name}
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
              <a href="https://wa.me/255767399123" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#9CA3AF" }} className="hover:text-white transition-colors">
                <div style={{ width: "24px", height: "24px", borderRadius: "12px", backgroundColor: "#ff841a20", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <WhatsAppIcon size={14} color="#ff841a" />
                </div>
                +255 767 399 123
              </a>
            </li>
            <li>
              <a href="mailto:info@karibucottage.co.tz" style={{ ...sans, display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#9CA3AF", textDecoration: "none", transition: "color 0.2s" }} className="hover:text-[#ff841a]">
                <Mail size={14} style={{ marginTop: "2px", flexShrink: 0, color: "#ff841a" }} />
                info@karibucottage.co.tz
              </a>
            </li>
            <li style={{ ...sans, display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "#9CA3AF" }}>
              <MapPin size={14} style={{ marginTop: "2px", flexShrink: 0, color: "#ff841a" }} />
              <a href="https://www.google.com/maps/place/KARIBU+COTTAGE+%26+SAFARI/@-3.3583388,37.3771707,17z/data=!4m9!3m8!1s0x1839d7b26b0d863f:0x5cfa00b52e726666!5m2!4m1!1i2!8m2!3d-3.3583388!4d37.3797456!16s%2Fg%2F11lzzxmlyp?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff841a] transition-colors">
                Msaranga Msufini, Moshi, Kilimanjaro Region, Tanzania
              </a>
            </li>
          </ul>

          {/* Payment Info */}
          <div style={{ marginTop: "24px" }}>
            <h4 style={{ ...serif, fontSize: "14px", fontWeight: 600, color: "white", marginBottom: "12px" }}>
              Pay Here
            </h4>
            <div style={{ ...sans, fontSize: "13px", color: "#9CA3AF", lineHeight: 1.6, backgroundColor: "rgba(255, 255, 255, 0.05)", padding: "12px", borderRadius: "2px", borderLeft: "3px solid #ff841a" }}>
              <div style={{ color: "white", fontWeight: 500, marginBottom: "2px" }}>John Kaakufui Ngowi</div>
              <div>CRDB: <span style={{ color: "white", fontFamily: "monospace", letterSpacing: "1px" }}>052644944700</span></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid #1F2937" }} className="px-6 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span style={{ ...sans, fontSize: "12px", color: "#6B7280" }}>
            © {new Date().getFullYear()} Karibu Cottage Safari. All rights reserved.
          </span>
          <span style={{ ...sans, fontSize: "12px", color: "#6B7280" }}>
            Msaranga Msufini, Moshi · Kilimanjaro, Tanzania
          </span>
        </div>
      </div>
    </footer>
  );
}
