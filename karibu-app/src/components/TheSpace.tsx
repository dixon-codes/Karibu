"use client";

import { BedDouble, Bath, Users, Key, PawPrint, CheckCircle2 } from "lucide-react";

const bedrooms = [
  {
    name: "Bedroom 1",
    description: "Spacious master bedroom with a queen-size bed, garden views, and natural light.",
    image: "/building/GOPR0095.jpg",
  },
  {
    name: "Bedroom 2",
    description: "Comfortable second bedroom with a queen-size bed, ideal for family or guests.",
    image: "/building/GOPR0086.jpg",
  },
  {
    name: "Bedroom 3",
    description: "Third bedroom with a queen-size bed — perfect for children, friends, or extra guests.",
    image: "/building/GOPR0079.jpg",
  },
];

const homeStats = [
  { icon: <Users size={20} />, value: "8 Guests", label: "Maximum capacity" },
  { icon: <BedDouble size={20} />, value: "3 Bedrooms", label: "4 Queen beds total" },
  { icon: <Bath size={20} />, value: "3.5 Bathrooms", label: "3 warm showers" },
  { icon: <Key size={20} />, value: "Self Check-in", label: "Secure smartlock" },
  { icon: <CheckCircle2 size={20} />, value: "Superhost", label: "Highly rated host" },
  { icon: <PawPrint size={20} />, value: "Pet-Friendly", label: "Animals welcome" },
];

export default function TheSpace() {
  return (
    <section id="rooms" style={{ backgroundColor: "#FAF8F3" }} className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-eyebrow">Your Private Retreat</p>
          <h2 className="section-title">The Cottage</h2>
          <p className="section-subtitle">
            Step into your own private oasis. Karibu Cottage offers three comfortable bedrooms, a fully equipped kitchen, and lush gardens within a secure, peaceful compound — perfect for families and groups.
          </p>
          <div className="section-divider" />
        </div>

        {/* Stats bar */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "64px",
        }}>
          {homeStats.map((stat) => (
            <div
              key={stat.value}
              style={{
                flex: "1 1 160px",
                maxWidth: "220px",
                backgroundColor: "#fff",
                border: "1px solid #E8E0D0",
                borderRadius: "2px",
                padding: "20px 16px",
                textAlign: "center",
              }}
            >
              <div style={{ color: "#ff841a", display: "flex", justifyContent: "center", marginBottom: "10px" }}>
                {stat.icon}
              </div>
              <p style={{ fontSize: "15px", fontWeight: 700, color: "#1A1A1A", marginBottom: "4px" }}>{stat.value}</p>
              <p style={{ fontSize: "12px", color: "#9CA3AF" }}>{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Bedroom showcase */}
        <div style={{ marginBottom: "48px" }}>
          <h3 style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A1A1A", marginBottom: "24px", textAlign: "center" }}>
            The Bedrooms
          </h3>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px" }}>
            {bedrooms.map((bed) => (
              <div key={bed.name} style={{ flex: "1 1 300px", maxWidth: "360px", borderRadius: "2px", overflow: "hidden", border: "1px solid #E8E0D0", backgroundColor: "#fff" }}>
                <div style={{ height: "220px", overflow: "hidden" }}>
                  <img
                    src={bed.image}
                    alt={bed.name}
                    loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseOver={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1.05)")}
                    onMouseOut={(e) => ((e.target as HTMLImageElement).style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: "20px 22px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                    <BedDouble size={16} style={{ color: "#ff841a" }} />
                    <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A" }}>{bed.name}</h4>
                    <span style={{ marginLeft: "auto", fontSize: "11px", backgroundColor: "rgba(255,132,26,0.10)", color: "#ff841a", padding: "3px 10px", borderRadius: "2px", fontWeight: 600 }}>
                      Queen Bed
                    </span>
                  </div>
                  <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>{bed.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <a
            href="#booking"
            className="btn-accent"
            style={{ padding: "14px 40px", fontSize: "14px", display: "inline-block" }}
          >
            Book The Cottage
          </a>
          <p style={{ marginTop: "16px", fontSize: "13px", color: "#9CA3AF" }}>
            Self check-in via smartlock · Pets welcome · Up to 8 guests
          </p>
        </div>
      </div>
    </section>
  );
}
