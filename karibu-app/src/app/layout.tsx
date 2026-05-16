import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Karibu Cottage Safari | Luxury Stay at the Foot of Kilimanjaro",
  description:
    "Experience safari luxury and home comfort at Karibu Cottage Safari in Nkunjila, Moshi, Kilimanjaro, Tanzania. Book your stay near Kilimanjaro today.",
  keywords: [
    "Safari accommodation Moshi",
    "Cottages near Kilimanjaro",
    "Karibu Cottage Safari Tanzania",
    "Luxury safari lodge Moshi",
    "Kilimanjaro accommodation Tanzania",
  ],
  openGraph: {
    title: "Karibu Cottage Safari | Luxury Stay at the Foot of Kilimanjaro",
    description:
      "Experience safari luxury and home comfort at Karibu Cottage Safari in Nkunjila, Moshi, Kilimanjaro, Tanzania.",
    url: "https://karibucottagesafari.com",
    siteName: "Karibu Cottage Safari",
    locale: "en_TZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}

