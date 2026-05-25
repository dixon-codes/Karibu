import { Camera } from "lucide-react";

export default function PhotoTour() {
  return (
    <section id="gallery" style={{ position: "relative", padding: "120px 0", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {/* Background Image with Overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 1 }}>
        <img src="/building/GOPR0111.jpg" alt="Karibu Cottage Safari" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.7)" }} />
      </div>
      
      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, textAlign: "center", maxWidth: "600px", padding: "0 24px" }}>
        <p style={{ color: "#ff841a", fontSize: "11px", letterSpacing: "0.4em", textTransform: "uppercase", fontWeight: 700, marginBottom: "16px" }}>
          Explore Every Detail
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "white", fontWeight: 600, marginBottom: "20px" }}>
          Take a Photo Tour
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "15px", lineHeight: 1.8, marginBottom: "40px" }}>
          Walk through all 7 bedrooms (including the new Ming Wing), explore the lush gardens, and view the fully-equipped kitchen. Experience the warmth and comfort of Karibu Cottage before you even arrive.
        </p>
        <a 
          href="https://www.airbnb.com/rooms/1226048061128227278?search_mode=regular_search&adults=1&check_in=2026-05-16&check_out=2026-05-21&children=0&infants=0&pets=0&source_impression_id=p3_1778887226_P3sSPxGGeQENIPGC&previous_page_section_name=1000&modal=PHOTO_TOUR_SCROLLABLE"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent"
          style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "16px 40px", fontSize: "14px" }}
        >
          <Camera size={18} />
          View Full Photo Tour on Airbnb
        </a>
      </div>
    </section>
  );
}
