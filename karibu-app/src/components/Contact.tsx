import { MapPin, Phone, Mail, Clock, Car } from "lucide-react";

const WhatsAppIcon = ({ size = 14, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const contactCards = [
  { icon: <Phone size={22} />, title: "Phone / WhatsApp", lines: ["+255 742 899 903", <span key="wa" style={{ display: "flex", alignItems: "center", gap: "6px" }}><WhatsAppIcon size={14} color="#ff841a" /> +255 767 399 123</span>] },
  { icon: <Mail size={22} />, title: "Email", lines: ["info@karibucottage.co.tz"] },
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
                {card.lines.map((line, i) => (
                  <p key={i} style={{ fontSize: "13px", color: "#6B7280", lineHeight: 1.7 }}>{line}</p>
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
