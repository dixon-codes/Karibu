"use client";

import { useState } from "react";
import { CalendarCheck, ExternalLink, Copy, Check } from "lucide-react";

export default function BookingCTA() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("052644944700");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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

        <p style={{ marginTop: "24px", fontSize: "13px", color: "#9CA3AF" }}>
          View live availability and instant pricing on our partner sites.
        </p>

        <div id="payment" style={{ marginTop: "64px", borderTop: "1px solid #E8E0D0", paddingTop: "48px", textAlign: "center", scrollMarginTop: "100px" }}>
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem", color: "#1A1A1A", fontWeight: 600, marginBottom: "16px" }}>
            Direct Booking & Local Payments
          </h3>
          <p style={{ color: "#6B7280", fontSize: "15px", marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
            For local guests and direct bookings, you can pay directly via bank transfer. Contact us to confirm your dates before transferring.
          </p>
          
          <div className="w-full max-w-[420px] md:max-w-[760px] mx-auto bg-white border border-[#E8E0D0] rounded-sm p-8 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
            <div className="mb-8 md:mb-10 flex justify-center md:justify-start">
              <img src="/crdb.svg" alt="CRDB Bank Logo" className="h-10 md:h-14 w-auto" />
            </div>
            
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 text-left">
              <div className="flex-1">
                <div className="text-xs md:text-sm text-[#9CA3AF] uppercase tracking-wider mb-2">Account Name</div>
                <div className="flex items-center h-[68px] md:h-[84px] bg-[#FAF8F3] p-4 md:p-5 border border-[#E8E0D0] rounded-sm">
                  <span className="text-[#1A1A1A] font-semibold text-lg md:text-2xl">John Kaakufui Ngowi</span>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="text-xs md:text-sm text-[#9CA3AF] uppercase tracking-wider mb-2">Account Number</div>
                <div className="flex justify-between items-center h-[68px] md:h-[84px] bg-[#FAF8F3] p-4 md:p-5 border border-[#E8E0D0] rounded-sm">
                  <span className="text-[#1A1A1A] font-bold text-xl md:text-[28px] tracking-[0.1em] font-mono">052644944700</span>
                  <button 
                    onClick={handleCopy}
                    className="p-2 md:p-3 hover:bg-[#E8E0D0] rounded-sm transition-colors text-[#6B7280] hover:text-[#ff841a]"
                    title="Copy to clipboard"
                  >
                    {copied ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                  </button>
                </div>
              </div>
            </div>
            
            <p className="text-sm md:text-base text-[#6B7280] mt-8 md:mt-10 border-t border-[#E8E0D0] pt-6 md:pt-8 text-center md:text-left">
              Please share your payment receipt with us via WhatsApp once completed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
