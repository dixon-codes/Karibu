"use client";

import { useState } from "react";
import {
  Wifi, UtensilsCrossed, Car, ShieldCheck, Flower2, Briefcase,
  ChefHat, PawPrint, KeyRound, Droplets, Tv, Wind, Flame,
  Refrigerator, Coffee, WashingMachine, Package, Cigarette,
  Baby, ShowerHead, Lock, Phone, BellRing, Eye, Luggage,
  MapPin, Bike, TreePine, Sofa, Sun, AlertTriangle,
} from "lucide-react";

const ALL_AMENITIES = [
  // Internet & Workspace
  { icon: <Wifi size={22} />, title: "Fast Wi-Fi", category: "Internet & Workspace" },
  { icon: <Briefcase size={22} />, title: "Dedicated Workspace", category: "Internet & Workspace" },
  { icon: <Tv size={22} />, title: "Flat-Screen TV (Cable/Satellite)", category: "Internet & Workspace" },

  // Kitchen & Dining
  { icon: <UtensilsCrossed size={22} />, title: "Fully Equipped Kitchen", category: "Kitchen & Dining" },
  { icon: <ChefHat size={22} />, title: "Host-Prepared Meals (extra cost)", category: "Kitchen & Dining" },
  { icon: <Refrigerator size={22} />, title: "Refrigerator", category: "Kitchen & Dining" },
  { icon: <Flame size={22} />, title: "Oven & Stovetop", category: "Kitchen & Dining" },
  { icon: <Coffee size={22} />, title: "Electric Kettle & Coffee/Tea Maker", category: "Kitchen & Dining" },
  { icon: <UtensilsCrossed size={22} />, title: "Dining Area & Table", category: "Kitchen & Dining" },

  // Bathroom
  { icon: <ShowerHead size={22} />, title: "Private Bathroom", category: "Bathroom" },
  { icon: <Droplets size={22} />, title: "Hot Water Shower (×3)", category: "Bathroom" },
  { icon: <Droplets size={22} />, title: "Bathtub", category: "Bathroom" },
  { icon: <Droplets size={22} />, title: "Bidet", category: "Bathroom" },
  { icon: <Package size={22} />, title: "Free Toiletries (Soap, Shampoo)", category: "Bathroom" },
  { icon: <Droplets size={22} />, title: "Towels & Slippers Provided", category: "Bathroom" },

  // Comfort & Climate
  { icon: <Wind size={22} />, title: "Air Conditioning", category: "Comfort & Climate" },
  { icon: <Sun size={22} />, title: "Ceiling Fan", category: "Comfort & Climate" },
  { icon: <Sofa size={22} />, title: "Seating & Lounge Area", category: "Comfort & Climate" },
  { icon: <Package size={22} />, title: "Fresh Linens", category: "Comfort & Climate" },

  // Outdoors & Views
  { icon: <Flower2 size={22} />, title: "Expansive Front Lawn & Garden", category: "Outdoors & Views" },
  { icon: <Flower2 size={22} />, title: "Backyard Oasis (Kilimanjaro Foothills)", category: "Outdoors & Views" },
  { icon: <Sun size={22} />, title: "Private Balcony / Terrace", category: "Outdoors & Views" },
  { icon: <Flower2 size={22} />, title: "Outdoor Seating / Picnic Area", category: "Outdoors & Views" },
  { icon: <TreePine size={22} />, title: "Shared Lounge / Garden TV Area", category: "Outdoors & Views" },
  { icon: <Bike size={22} />, title: "Access to Local Tour & Ticket Services", category: "Outdoors & Views" },

  // Parking & Transport
  { icon: <Car size={22} />, title: "Free Private Parking (On-Site)", category: "Parking & Transport" },
  { icon: <Car size={22} />, title: "Airport Transfers (extra cost)", category: "Parking & Transport" },
  { icon: <MapPin size={22} />, title: "Near Kilimanjaro, Materuni Waterfalls & Coffee Farms", category: "Parking & Transport" },

  // Security & Safety
  { icon: <ShieldCheck size={22} />, title: "Gated & Secured Compound", category: "Security & Safety" },
  { icon: <Lock size={22} />, title: "Self Check-In via Smartlock", category: "Security & Safety" },
  { icon: <Eye size={22} />, title: "24-Hour Security", category: "Security & Safety" },
  { icon: <Lock size={22} />, title: "Safety Deposit Box", category: "Security & Safety" },
  { icon: <AlertTriangle size={22} />, title: "Smoke Alarm Installed", category: "Security & Safety" },

  // Services
  { icon: <BellRing size={22} />, title: "Daily Housekeeping", category: "Services" },
  { icon: <WashingMachine size={22} />, title: "Laundry & Ironing Service", category: "Services" },
  { icon: <Luggage size={22} />, title: "Luggage Storage", category: "Services" },
  { icon: <Phone size={22} />, title: "On-Site Host Support", category: "Services" },

  // Family & Guests
  { icon: <Baby size={22} />, title: "Child-Friendly", category: "Family & Guests" },
  { icon: <PawPrint size={22} />, title: "Pet-Friendly", category: "Family & Guests" },
  { icon: <KeyRound size={22} />, title: "Entire Home — Full Property Access", category: "Family & Guests" },

  // Not Available
  { icon: <Cigarette size={22} />, title: "No Smoking (smoke-free property)", category: "House Rules" },
  { icon: <AlertTriangle size={22} />, title: "No Carbon Monoxide Alarm", category: "House Rules" },
];

const INITIAL_COUNT = 12;
const categories = [...new Set(ALL_AMENITIES.map((a) => a.category))];

export default function Amenities() {
  const [expanded, setExpanded] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = activeCategory
    ? ALL_AMENITIES.filter((a) => a.category === activeCategory)
    : ALL_AMENITIES;

  const displayed = expanded ? filtered : filtered.slice(0, INITIAL_COUNT);

  return (
    <section id="amenities" style={{ backgroundColor: "#ffffff" }} className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p className="section-eyebrow">What We Offer</p>
          <h2 className="section-title">Amenities &amp; Facilities</h2>
          <p className="section-subtitle">
            A spacious entire home for up to 8 guests — every comfort, right here at the foothills of Kilimanjaro.
          </p>
          <div className="section-divider" />
        </div>

        {/* Category filter pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center", marginBottom: "40px" }}>
          <button
            onClick={() => { setActiveCategory(null); setExpanded(false); }}
            style={{
              padding: "7px 16px", borderRadius: "2px", fontSize: "12px", fontWeight: 600, cursor: "pointer",
              border: "1px solid",
              borderColor: activeCategory === null ? "#ff841a" : "#E8E0D0",
              backgroundColor: activeCategory === null ? "#ff841a" : "transparent",
              color: activeCategory === null ? "#fff" : "#6B7280",
              transition: "all 0.2s",
            }}
          >
            All ({ALL_AMENITIES.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setExpanded(false); }}
              style={{
                padding: "7px 16px", borderRadius: "2px", fontSize: "12px", fontWeight: 600, cursor: "pointer",
                border: "1px solid",
                borderColor: activeCategory === cat ? "#ff841a" : "#E8E0D0",
                backgroundColor: activeCategory === cat ? "#ff841a" : "transparent",
                color: activeCategory === cat ? "#fff" : "#6B7280",
                transition: "all 0.2s",
              }}
            >
              {cat} ({ALL_AMENITIES.filter((a) => a.category === cat).length})
            </button>
          ))}
        </div>

        {/* Amenities grid */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px" }}>
          {displayed.map((item) => (
            <div
              key={item.title}
              style={{
                flex: "1 1 230px",
                maxWidth: "320px",
                display: "flex", alignItems: "flex-start", gap: "14px",
                padding: "18px 20px", border: "1px solid #E8E0D0", borderRadius: "2px",
                backgroundColor: "#fff",
              }}
            >
              <span style={{ color: "#ff841a", flexShrink: 0, marginTop: "2px" }}>{item.icon}</span>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.4 }}>{item.title}</p>
                <p style={{ fontSize: "11px", color: "#9CA3AF", marginTop: "3px" }}>{item.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Show more / less */}
        {filtered.length > INITIAL_COUNT && (
          <div style={{ textAlign: "center", marginTop: "36px" }}>
            <button
              onClick={() => setExpanded(!expanded)}
              className="btn-outline"
              style={{ fontSize: "13px", padding: "12px 32px" }}
            >
              {expanded
                ? "Show Less"
                : `Show All ${filtered.length} Amenities ↓`}
            </button>
          </div>
        )}

        {/* Source note */}
        <p style={{ textAlign: "center", marginTop: "32px", fontSize: "12px", color: "#C4B9A8" }}>
          Amenities sourced from Airbnb, Booking.com, and Agoda listings for Karibu Cottage, Moshi.
        </p>
      </div>
    </section>
  );
}
