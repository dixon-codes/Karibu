"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "255767399123";
const WHATSAPP_MESSAGE = "Hello! I'd like to enquire about a stay at Karibu Cottage Safari.";

export default function WhatsAppWidget() {
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-105 transition-transform duration-200 group"
    >
      {/* Tooltip label */}
      <span className="absolute right-full mr-4 whitespace-nowrap bg-[#1A1A1A] text-white text-xs px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none font-medium">
        Chat with us
      </span>

      {/* Icon button */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#25D366]">
        <MessageCircle size={26} className="fill-white stroke-none" />
      </div>
    </a>
  );
}
