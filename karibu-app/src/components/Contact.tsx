"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Car, CreditCard, CheckCircle2 } from "lucide-react";

const WhatsAppIcon = ({ size = 14, color = "currentColor" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const contactCards = [
  { icon: <Phone size={22} />, title: "Phone / WhatsApp", lines: [<span key="wa" style={{ display: "flex", alignItems: "center", gap: "6px" }}><WhatsAppIcon size={14} color="#ff841a" /> +255 767 399 123</span>] },
  { icon: <Mail size={22} />, title: "Email", lines: ["info@karibucottage.co.tz"] },
  { 
    icon: <MapPin size={22} />, 
    title: "Location", 
    lines: [
      <a key="map" href="https://www.google.com/maps/place/KARIBU+COTTAGE+%26+SAFARI/@-3.3583388,37.3771707,17z/data=!4m9!3m8!1s0x1839d7b26b0d863f:0x5cfa00b52e726666!5m2!4m1!1i2!8m2!3d-3.3583388!4d37.3797456!16s%2Fg%2F11lzzxmlyp?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-[#ff841a] transition-colors block">
        Msaranga Msufini, Moshi<br/>Kilimanjaro Region, Tanzania
      </a>
    ] 
  },
  { icon: <CreditCard size={22} />, title: "Payment Info", lines: ["John Kaakufui Ngowi", "CRDB Bank", "Account: 052644944700"] },
  { icon: <Clock size={22} />, title: "Check-in / Check-out", lines: ["Self check-in via smartlock — flexible arrival", "Check-out: By 11:00 AM"] },
  { icon: <Car size={22} />, title: "Airport Transfers", lines: ["Kilimanjaro International Airport (43km)", "Transfers available at extra cost — enquire when booking"] },
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Reset form state after a few seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const err = await response.json();
        alert(`Failed to send message: ${err.error || "Please try again."}`);
      }
    } catch (error) {
      alert("An error occurred. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Form & Map */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Form */}
            <div className="bg-white p-8 md:p-10 border border-[#E8E0D0] rounded-sm shadow-xl">
              <h3 className="font-serif text-2xl text-[#1A1A1A] mb-2">Send us a message</h3>
              <p className="text-[#6B7280] text-sm mb-8">Have a question or want to plan a custom safari? Drop us a line.</p>
              
              {isSubmitted ? (
                <div className="bg-[#FAF8F3] border border-[#E8E0D0] rounded-sm p-8 text-center flex flex-col items-center justify-center py-12">
                  <CheckCircle2 size={48} className="text-[#ff841a] mb-4" />
                  <h4 className="font-serif text-xl text-[#1A1A1A] mb-2">Message Sent!</h4>
                  <p className="text-[#6B7280] text-sm">Thank you for reaching out. We will get back to you shortly.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Your Name</label>
                      <input type="text" id="name" name="name" required className="w-full bg-[#FAF8F3] border border-[#E8E0D0] rounded-sm px-4 py-3 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#ff841a] focus:ring-1 focus:ring-[#ff841a] transition-all" placeholder="John Doe" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Your Email</label>
                      <input type="email" id="email" name="email" required className="w-full bg-[#FAF8F3] border border-[#E8E0D0] rounded-sm px-4 py-3 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#ff841a] focus:ring-1 focus:ring-[#ff841a] transition-all" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" required className="w-full bg-[#FAF8F3] border border-[#E8E0D0] rounded-sm px-4 py-3 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#ff841a] focus:ring-1 focus:ring-[#ff841a] transition-all" placeholder="Booking Enquiry" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-[#9CA3AF] uppercase tracking-wider mb-2">Message</label>
                    <textarea id="message" name="message" required rows={4} className="w-full bg-[#FAF8F3] border border-[#E8E0D0] rounded-sm px-4 py-3 text-[#1A1A1A] text-sm focus:outline-none focus:border-[#ff841a] focus:ring-1 focus:ring-[#ff841a] transition-all resize-none" placeholder="Tell us about your plans..."></textarea>
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    style={{ backgroundColor: "#ff841a", color: "white" }}
                    className="w-full font-bold py-4 px-8 rounded-sm text-sm uppercase tracking-[0.1em] transition-all disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_4px_14px_rgba(255,132,26,0.3)] hover:opacity-90"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div className="rounded-sm overflow-hidden border border-[#E8E0D0] shadow-sm h-[350px]">
              <iframe
                src="https://maps.google.com/maps?q=KARIBU+COTTAGE+%26+SAFARI,+Moshi,+Tanzania&hl=en&z=15&output=embed"
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

          {/* Right Column: Info Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {contactCards.map((card) => (
              <div key={card.title} className="bg-white border border-[#E8E0D0] shadow-sm rounded-sm p-6 flex gap-4 hover:border-[#ff841a] transition-colors">
                <div className="text-[#ff841a] flex-shrink-0 mt-1">{card.icon}</div>
                <div>
                  <h4 className="text-[13px] font-bold text-[#1A1A1A] mb-2 tracking-wide uppercase">{card.title}</h4>
                  <div className="flex flex-col gap-1">
                    {card.lines.map((line, i) => (
                      <div key={i} className="text-[14px] text-[#6B7280] leading-relaxed">{line}</div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
