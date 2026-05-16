import { MapPin, Phone, Mail, Clock, Car } from "lucide-react";

const contactCards = [
  { icon: <Phone size={22} />, title: "Phone / WhatsApp", lines: ["+255 742 899 903", "+255 767 399 123 (WhatsApp)"] },
  { icon: <Mail size={22} />, title: "Email", lines: ["info@karibucottagesafari.com"] },
  { icon: <MapPin size={22} />, title: "Location", lines: ["Nkunjila, Moshi", "Kilimanjaro Region, Tanzania"] },
  { icon: <Clock size={22} />, title: "Check-in / Check-out", lines: ["Self check-in via smartlock — flexible arrival", "Check-out: By 11:00 AM"] },
  { icon: <Car size={22} />, title: "Airport Transfers", lines: ["Kilimanjaro International Airport (43km)", "Transfers available at extra cost — enquire when booking"] },
];

export default function Contact() {
  return (
    <section id="contact" style={{ backgroundColor: "#ffffff" }} className="section-padding">
      <div className="section-container">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p className="section-eyebrow">Get in Touch</p>
          <h2 className="section-title">Contact Us</h2>
          <p className="section-subtitle">
            We are always happy to help with enquiries, special arrangements, and travel advice. Reach out anytime.
          </p>
          <div className="section-divider" />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "40px" }}>
          {/* Info Cards grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "20px" }}>
            {contactCards.map((card) => (
              <div key={card.title} className="card" style={{ padding: "28px 24px" }}>
                <div style={{ color: "#ff841a", marginBottom: "16px" }}>{card.icon}</div>
                <h4 style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", marginBottom: "10px" }}>{card.title}</h4>
                {card.lines.map((line) => (
                  <p key={line} style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>{line}</p>
                ))}
              </div>
            ))}
          </div>

          {/* Map */}
          <div style={{ borderRadius: "2px", overflow: "hidden", border: "1px solid #E8E0D0", height: "400px" }}>
            <iframe
              src="https://maps.google.com/maps?q=-3.358083,37.379583&hl=en&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Karibu Cottage Safari — Moshi, Tanzania"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
