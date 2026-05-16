"use client";

import { Footprints, Bike, ChefHat, Music } from "lucide-react";

const activities = [
  {
    icon: <Footprints size={32} />,
    title: "Walking Tours",
    description: "Explore the scenic trails of the Kilimanjaro foothills with our expert local guides. Discover hidden waterfalls, local villages, and stunning viewpoints.",
    duration: "2–4 hours",
    difficulty: "Easy to Moderate",
  },
  {
    icon: <Bike size={32} />,
    title: "Bike Tours",
    description: "Ride through banana plantations, coffee farms, and local markets on our curated cycling routes. Bikes and helmets provided for all skill levels.",
    duration: "3–5 hours",
    difficulty: "Moderate",
  },
  {
    icon: <ChefHat size={32} />,
    title: "Themed Dinners",
    description: "Savor exclusive themed dining experiences under the stars — from authentic Tanzanian barbecue nights to romantic private candlelit dinners.",
    duration: "Evening",
    difficulty: "All Guests",
  },
  {
    icon: <Music size={32} />,
    title: "Cultural Classes",
    description: "Immerse yourself in local Chagga culture with Swahili lessons, traditional cooking classes, and drumming workshops led by local artisans.",
    duration: "1–3 hours",
    difficulty: "All Ages",
  },
];

export default function Safari() {
  return (
    <section id="safari" style={{ backgroundColor: "#111111" }} className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-eyebrow">Curated Experiences</p>
          <h2 className="section-title section-title--light">Safari &amp; Activities</h2>
          <p className="section-subtitle" style={{ color: "#9CA3AF" }}>
            Beyond the cottage walls, a world of adventure awaits. Our team curates unique experiences that connect you with the magic of Tanzania.
          </p>
          <div className="section-divider" />
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "24px" }}>
          {activities.map((act) => (
            <div
              key={act.title}
              style={{
                backgroundColor: "#1E1E1E",
                border: "1px solid #2D2D2D",
                borderRadius: "2px",
                padding: "32px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                transition: "border-color 0.3s, box-shadow 0.3s",
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#ff841a";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px rgba(255,132,26,0.12)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#2D2D2D";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <div style={{ width: "60px", height: "60px", backgroundColor: "rgba(255,132,26,0.10)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", color: "#ff841a" }}>
                {act.icon}
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "17px", fontWeight: 600, color: "#ffffff", marginBottom: "12px" }}>{act.title}</h3>
                <p style={{ fontSize: "13px", color: "#9CA3AF", lineHeight: 1.75, marginBottom: "16px" }}>{act.description}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  <span style={{ fontSize: "11px", backgroundColor: "rgba(255,132,26,0.12)", color: "#ff841a", padding: "4px 10px", borderRadius: "2px", fontWeight: 600 }}>
                    ⏱ {act.duration}
                  </span>
                  <span style={{ fontSize: "11px", backgroundColor: "#2A2A2A", color: "#9CA3AF", padding: "4px 10px", borderRadius: "2px" }}>
                    {act.difficulty}
                  </span>
                </div>
              </div>
              <a href="#contact" style={{ fontSize: "13px", color: "#ff841a", fontWeight: 600 }}>
                Enquire about this →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
