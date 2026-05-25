"use client";

import { useState } from "react";
import { X, BedDouble, Users, Sofa, Wifi, AirVent, Sunset, Layers, Eye, Bath } from "lucide-react";

interface Room {
  id: string;
  name: string;
  size: string;
  pricePerNight: number;
  description: string;
  amenities: string[];
  highlights: { icon: React.ReactNode; text: string }[];
  image: string;
  badge?: string;
}

const rooms: Room[] = [
  {
    id: "deluxe-double",
    name: "Deluxe Double Room",
    size: "Private Bathroom",
    pricePerNight: 85,
    description:
      "A comfortable and well-appointed room with a full-sized double bed, private bathroom with bathtub, and garden views. Perfect for couples or solo travellers seeking a peaceful safari retreat.",
    amenities: [
      "Full Double Bed", "Private Bathroom", "Bathtub", "Air Conditioning",
      "Free WiFi", "Flat-Screen TV", "Garden View", "Daily Housekeeping",
    ],
    highlights: [
      { icon: <BedDouble size={14} />, text: "Full Double Bed" },
      { icon: <Bath size={14} />, text: "Private Bathtub" },
      { icon: <AirVent size={14} />, text: "Air Conditioning" },
      { icon: <Wifi size={14} />, text: "Free WiFi" },
    ],
    image: "/building/GOPR0095.jpg",
    badge: "Great Value",
  },
  {
    id: "bungalow-garden",
    name: "Bungalow with Garden View",
    size: "King Bed + Sofa Bed",
    pricePerNight: 120,
    description:
      "A charming standalone bungalow with a king bed in the bedroom and a sofa bed in the separate living area. Set within our lush tropical gardens with a private balcony — ideal for extended stays and families.",
    amenities: [
      "King Bed", "Sofa Bed (Living Room)", "Private Balcony", "Garden View",
      "Air Conditioning", "Free WiFi", "Bathtub", "Kitchen",
    ],
    highlights: [
      { icon: <BedDouble size={14} />, text: "King Bed" },
      { icon: <Sofa size={14} />, text: "Sofa Bed (Living Room)" },
      { icon: <Sunset size={14} />, text: "Private Balcony" },
      { icon: <Wifi size={14} />, text: "Free WiFi" },
    ],
    image: "/building/GOPR0086.jpg",
    badge: "Most Popular",
  },
  {
    id: "family-mountain",
    name: "Family Room with Mountain View",
    size: "Sleeps up to 6",
    pricePerNight: 160,
    description:
      "Our largest and most spacious room, designed for families or groups. Features 1 full bed, 1 king bed, and 1 queen bed with a breathtaking panoramic view of snow-capped Mount Kilimanjaro every morning.",
    amenities: [
      "1 Full Bed + 1 King Bed + 1 Queen Bed", "Kilimanjaro View", "Private Pool Access",
      "Air Conditioning", "Free WiFi", "Kitchen", "Balcony", "Daily Housekeeping",
    ],
    highlights: [
      { icon: <Users size={14} />, text: "Sleeps up to 6" },
      { icon: <Eye size={14} />, text: "Kilimanjaro View" },
      { icon: <Layers size={14} />, text: "3 Beds" },
      { icon: <Sunset size={14} />, text: "Pool Access" },
    ],
    image: "/building/GOPR0079.jpg",
    badge: "Family Pick",
  },
  {
    id: "ming-wing",
    name: "The Ming Wing",
    size: "4 Additional Bedrooms",
    pricePerNight: 200,
    description:
      "The newly added Ming Wing expands the property's capacity with four additional comfortable bedrooms. It is perfectly designed for larger groups or families wanting to stay together.",
    amenities: [
      "4 Bedrooms", "Shared Lounge Area", "Private Access", "Garden Views",
      "Air Conditioning", "Free WiFi", "Housekeeping",
    ],
    highlights: [
      { icon: <BedDouble size={14} />, text: "4 Bedrooms" },
      { icon: <Users size={14} />, text: "Sleeps up to 8" },
      { icon: <Sofa size={14} />, text: "Shared Lounge" },
      { icon: <Wifi size={14} />, text: "Free WiFi" },
    ],
    image: "/building/GOPR0095.jpg", // placeholder
    badge: "New Addition",
  },
];

function RoomModal({ room, onClose }: { room: Room; onClose: () => void }) {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", backgroundColor: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)" }}>
      <div style={{ backgroundColor: "#fff", borderRadius: "2px", maxWidth: "640px", width: "100%", maxHeight: "90vh", overflowY: "auto", boxShadow: "0 24px 60px rgba(0,0,0,0.25)" }}>
        <div style={{ position: "relative", height: "280px", overflow: "hidden" }}>
          <img src={room.image} alt={room.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <button onClick={onClose} style={{ position: "absolute", top: "16px", right: "16px", width: "36px", height: "36px", backgroundColor: "rgba(255,255,255,0.95)", border: "none", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }} aria-label="Close">
            <X size={17} />
          </button>
          {room.badge && (
            <span style={{ position: "absolute", top: "16px", left: "16px", backgroundColor: "#ff841a", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "5px 12px", borderRadius: "2px", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              {room.badge}
            </span>
          )}
        </div>
        <div style={{ padding: "32px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
            <div>
              <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#1A1A1A", marginBottom: "4px" }}>{room.name}</h3>
              <p style={{ fontSize: "13px", color: "#9CA3AF" }}>{room.size}</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: "28px", fontWeight: 600, color: "#ff841a", lineHeight: 1 }}>${room.pricePerNight}</p>
              <p style={{ fontSize: "12px", color: "#9CA3AF", marginTop: "4px" }}>per night</p>
            </div>
          </div>
          <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: 1.75, marginBottom: "24px" }}>{room.description}</p>
          <h4 style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#1A1A1A", marginBottom: "14px" }}>What&apos;s Included</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "28px" }}>
            {room.amenities.map((a) => (
              <li key={a} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#4B5563" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#ff841a", flexShrink: 0 }} />
                {a}
              </li>
            ))}
          </ul>
          <a href="#booking" onClick={onClose} className="btn-accent" style={{ width: "100%", paddingTop: "14px", paddingBottom: "14px", fontSize: "14px" }}>
            Book This Room
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Rooms() {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

  return (
    <section id="rooms" style={{ backgroundColor: "#FAF8F3" }} className="section-padding">
      <div className="section-container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-eyebrow">Accommodation</p>
          <h2 className="section-title">Our Rooms &amp; Suites</h2>
          <p className="section-subtitle">
            Four unique spaces (including the newly added Ming Wing) — from cosy doubles to spacious family rooms — each designed to deliver safari comfort and Kilimanjaro views.
          </p>
          <div className="section-divider" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "28px" }}>
          {rooms.map((room) => (
            <div
              key={room.id}
              className="card"
              style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px rgba(0,0,0,0.12)";
                (e.currentTarget as HTMLElement).style.borderColor = "#ff841a";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "";
                (e.currentTarget as HTMLElement).style.borderColor = "#E8E0D0";
              }}
            >
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <img src={room.image} alt={room.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                {room.badge && (
                  <span style={{ position: "absolute", top: "12px", left: "12px", backgroundColor: "#ff841a", color: "#fff", fontSize: "10px", fontWeight: 700, padding: "4px 10px", borderRadius: "2px", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                    {room.badge}
                  </span>
                )}
              </div>
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3, flex: 1, paddingRight: "8px" }}>{room.name}</h3>
                  <span style={{ fontSize: "11px", color: "#9CA3AF", backgroundColor: "#F3F4F6", padding: "3px 8px", borderRadius: "2px", whiteSpace: "nowrap" }}>{room.size}</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 20px 0", display: "flex", flexDirection: "column", gap: "8px", flex: 1 }}>
                  {room.highlights.map((h, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#6B7280" }}>
                      <span style={{ color: "#ff841a", flexShrink: 0 }}>{h.icon}</span>
                      {h.text}
                    </li>
                  ))}
                </ul>
                <div style={{ borderTop: "1px solid #E8E0D0", paddingTop: "18px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ fontSize: "22px", fontWeight: 700, color: "#ff841a" }}>${room.pricePerNight}</span>
                    <span style={{ fontSize: "12px", color: "#9CA3AF", marginLeft: "4px" }}>/night</span>
                  </div>
                  <button onClick={() => setSelectedRoom(room)} className="btn-outline" style={{ fontSize: "12px" }}>
                    View More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedRoom && <RoomModal room={selectedRoom} onClose={() => setSelectedRoom(null)} />}
    </section>
  );
}
