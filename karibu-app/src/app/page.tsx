import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TheSpace from "@/components/TheSpace";
import PhotoTour from "@/components/PhotoTour";
import Amenities from "@/components/Amenities";
import Safari from "@/components/Safari";
import Reviews from "@/components/Reviews";
import BookingCTA from "@/components/BookingCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppWidget from "@/components/WhatsAppWidget";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TheSpace />
      <PhotoTour />
      <Amenities />
      <Safari />
      <Reviews />
      <BookingCTA />
      <Contact />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
