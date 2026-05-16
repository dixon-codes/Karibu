import { CalendarCheck, ExternalLink } from "lucide-react";

export default function BookingCTA() {
  return (
    <section id="booking" style={{ backgroundColor: "#FAF8F3", padding: "120px 0" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "72px", height: "72px", borderRadius: "50%", backgroundColor: "rgba(255,132,26,0.1)", color: "#ff841a", marginBottom: "24px" }}>
          <CalendarCheck size={32} />
        </div>
        
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2rem, 4vw, 2.75rem)", color: "#1A1A1A", fontWeight: 600, marginBottom: "20px" }}>
          Ready to Book Your Stay?
        </h2>
        
        <p style={{ color: "#6B7280", fontSize: "16px", lineHeight: 1.8, marginBottom: "48px", maxWidth: "600px", margin: "0 auto 48px" }}>
          Secure your dates at Karibu Cottage instantly. We partner with the world's most trusted travel platforms to provide you with a safe, seamless, and fully protected booking experience.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.airbnb.com/rooms/1226048061128227278"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", 
              backgroundColor: "#FF5A5F", color: "white", 
              fontWeight: 600, padding: "16px 32px", borderRadius: "4px", 
              fontSize: "15px", textDecoration: "none", width: "100%", maxWidth: "280px"
            }}
            className="hover:opacity-90 transition-opacity"
          >
            Book on Airbnb <ExternalLink size={16} />
          </a>

          <a
            href="https://www.booking.com/hotel/tz/karibucottage-amp-safari.html"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", 
              backgroundColor: "#003580", color: "white", 
              fontWeight: 600, padding: "16px 32px", borderRadius: "4px", 
              fontSize: "15px", textDecoration: "none", width: "100%", maxWidth: "280px"
            }}
            className="hover:opacity-90 transition-opacity"
          >
            Book on Booking.com <ExternalLink size={16} />
          </a>
        </div>

        <p style={{ marginTop: "40px", fontSize: "13px", color: "#9CA3AF" }}>
          View live availability and instant pricing on our partner sites.
        </p>
      </div>
    </section>
  );
}
