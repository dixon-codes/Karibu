"use client";

import { BedDouble, Bath, Users, Key, PawPrint, CheckCircle2 } from "lucide-react";



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


      </div>
    </section>
  );
}
