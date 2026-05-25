import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  CheckCircle2, 
  Users, 
  MapPin, 
  Footprints, 
  Bike, 
  ChefHat, 
  Music,
  Camera,
  Heart,
  Coffee,
  Trees,
  Car,
  Compass,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Karibu Safari & Activities | One Day Safaris",
  description:
    "Experience Tanzania's hidden gems with a guided Materuni Waterfalls safari by Karibu Cottage & Safari. Breathtaking scenery, rich Chagga culture, and unforgettable nature adventures.",
};

const safariImages = [
  "/Safari/IMG_1393.jpg.jpeg",
  "/Safari/IMG_1434.jpg.jpeg",
  "/Safari/IMG_1463.jpg.jpeg",
  "/Safari/IMG_1476.jpg.jpeg",
  "/Safari/IMG_1492.jpg.jpeg",
  "/Safari/IMG_1505.jpg.jpeg",
  "/Safari/IMG_1527.jpg.jpeg",
  "/Safari/IMG_1540.jpg.jpeg",
  "/Safari/IMG_3460.jpg.jpeg",
  "/Safari/IMG_3508.jpg.jpeg",
  "/Safari/IMG_3558.jpg.jpeg",
  "/Safari/IMG_3587.jpg.jpeg",
  "/Safari/IMG_3641.jpg.jpeg",
];

const activities = [
  {
    icon: <Footprints size={28} className="text-[#ff841a]" />,
    title: "Walking Tours",
    description: "Explore the scenic trails of the Kilimanjaro foothills with our expert local guides. Discover hidden waterfalls, local villages, and stunning viewpoints.",
    duration: "2–4 hours",
    difficulty: "Easy to Moderate",
  },
  {
    icon: <Bike size={28} className="text-[#ff841a]" />,
    title: "Bike Tours",
    description: "Ride through banana plantations, coffee farms, and local markets on our curated cycling routes. Bikes and helmets provided for all skill levels.",
    duration: "3–5 hours",
    difficulty: "Moderate",
  },
  {
    icon: <ChefHat size={28} className="text-[#ff841a]" />,
    title: "Themed Dinners",
    description: "Savor exclusive themed dining experiences under the stars — from authentic Tanzanian barbecue nights to romantic private candlelit dinners.",
    duration: "Evening",
    difficulty: "All Guests",
  },
  {
    icon: <Music size={28} className="text-[#ff841a]" />,
    title: "Cultural Classes",
    description: "Immerse yourself in local Chagga culture with Swahili lessons, traditional cooking classes, and drumming workshops led by local artisans.",
    duration: "1–3 hours",
    difficulty: "All Ages",
  },
];

export default function SafarisPage() {
  return (
    <main className="bg-white">
      <Header />
      
      {/* 1. Immersive Hero Section */}
      <section className="relative w-full min-h-[60vh] lg:min-h-[75vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Background Image - Full Opacity */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/Safari/IMG_3508.jpg.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        
        {/* Premium Dark Gradient Overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%)" }}></div>
        
        {/* Gold Accent Line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] opacity-90 z-20" style={{ background: "linear-gradient(to right, transparent, #ff841a, transparent)" }}></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 w-full max-w-[1000px] mx-auto">
          <p className="font-semibold tracking-[0.25em] uppercase text-[#ff841a] text-xs sm:text-sm" style={{ marginBottom: "20px" }}>
            Explore With Us
          </p>
          <h1 className="font-serif font-semibold text-white" style={{ color: "white", fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.15, textShadow: "0 4px 30px rgba(0,0,0,0.5)", marginBottom: "24px" }}>
            Karibu Safari
          </h1>
          <p className="text-white/90 text-base sm:text-lg lg:text-xl font-light" style={{ textAlign: "center", maxWidth: "672px", margin: "0 auto 40px auto", fontFamily: "Inter, sans-serif", lineHeight: 1.625 }}>
            Your gateway to the wild. From intimate local cultural tours to the vast, breathtaking plains of the Serengeti, our experts will craft your perfect Tanzanian adventure.
          </p>
          <a
            href="https://wa.me/255767399123?text=Hello!%20I%27d%20like%20to%20plan%20a%20Safari."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 justify-center bg-[#ff841a] hover:bg-[#cc6a14] text-white font-bold py-3 px-6 rounded-[2px] text-[14px] tracking-[0.05em] uppercase transition-colors duration-300 font-sans shadow-2xl hover:shadow-[#ff841a]/20"
          >
            <Compass size={18} />
            Start Planning
          </a>
        </div>
      </section>

      {/* 2. The Karibu Experience (Introduction) */}
      <section className="section-padding bg-[#FAF8F3]">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl border border-[#E8E0D0]">
                <img src="/Safari/IMG_1492.jpg.jpeg" alt="Safari Experience" className="w-full h-auto object-cover aspect-[4/5] lg:aspect-[3/4]" loading="lazy" />
              </div>
              {/* Decorative background block */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#ff841a] rounded-sm z-0 hidden md:block"></div>
            </div>
            
            <div className="order-1 lg:order-2">
              <p className="section-eyebrow" style={{ marginBottom: "20px" }}>Why Choose Us</p>
              <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A] leading-tight" style={{ marginBottom: "32px" }}>
                Authentic Adventures,<br />Curated For You
              </h2>
              <div className="text-[#6B7280] text-lg leading-relaxed font-light">
                <p style={{ marginBottom: "24px" }}>
                  At <strong className="text-[#1A1A1A] font-medium">Karibu Cottage & Safari</strong>, we believe the best way to experience Tanzania is through the eyes of the locals who know it best.
                </p>
                <p>
                  We combine authentic cultural experiences with warm Tanzanian hospitality to create memorable adventures right in the lush foothills of Mount Kilimanjaro. Whether you are seeking a relaxing day trip to hidden waterfalls or a multi-day deep bush excursion, we handle every detail seamlessly.
                </p>
              </div>
              
              <div className="flex items-center gap-6" style={{ marginTop: "40px" }}>
                <div className="w-16 h-[1px] bg-[#ff841a]"></div>
                <p className="font-serif text-xl text-[#1A1A1A] italic">
                  Karibu sana — adventure awaits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Safari: Materuni Waterfalls */}
      <section className="section-padding bg-white relative">
        <div className="section-container">
          <div className="text-center mb-16 lg:mb-24">
            <p className="section-eyebrow">Featured Experience</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A] mb-6">
              Materuni Waterfalls
            </h2>
            <p className="section-subtitle">
              A perfect day trip from Moshi town combining nature, hiking, and rich Chagga culture.
            </p>
            <div className="section-divider"></div>
          </div>
          
          <div className="bg-[#1A1A1A] rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="lg:w-1/2 relative min-h-[400px] lg:min-h-full">
              <div className="absolute inset-0 bg-black/20 z-10"></div>
              <img src="/Safari/IMG_1505.jpg.jpeg" alt="Materuni Waterfalls" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            
            {/* Content Side */}
            <div className="lg:w-1/2 p-10 lg:p-16 text-white">
              <h3 className="font-serif text-3xl mb-8 border-b border-white/10 pb-6">Tour Highlights</h3>
              
              <div className="space-y-12">
                {/* What to Expect */}
                <div>
                  <h4 className="text-[#ff841a] font-semibold tracking-wider uppercase text-xs mb-5">What to Expect</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <Trees className="text-[#ff841a] flex-shrink-0 mt-0.5" size={16} />
                      <span>Scenic rainforest hike</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <MapPin className="text-[#ff841a] flex-shrink-0 mt-0.5" size={16} />
                      <span>80-meter cascading waterfall</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <Coffee className="text-[#ff841a] flex-shrink-0 mt-0.5" size={16} />
                      <span>Chagga coffee-making</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <Users className="text-[#ff841a] flex-shrink-0 mt-0.5" size={16} />
                      <span>Local cuisine & interaction</span>
                    </li>
                  </ul>
                </div>

                {/* Tour Includes */}
                <div>
                  <h4 className="text-[#ff841a] font-semibold tracking-wider uppercase text-xs mb-5">Tour Includes</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <CheckCircle2 className="text-[#ff841a] flex-shrink-0 mt-0.5" size={16} />
                      <span>Professional local guide</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <Car className="text-[#ff841a] flex-shrink-0 mt-0.5" size={16} />
                      <span>Transport (optional)</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <CheckCircle2 className="text-[#ff841a] flex-shrink-0 mt-0.5" size={16} />
                      <span>All entry fees</span>
                    </li>
                    <li className="flex items-start gap-3 text-white/80 text-sm">
                      <ChefHat className="text-[#ff841a] flex-shrink-0 mt-0.5" size={16} />
                      <span>Picnic / local lunch</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t border-white/10">
                <a
                  href="https://wa.me/255767399123?text=Hello!%20I%27d%20like%20to%20book%20the%20Materuni%20Waterfalls%20Safari."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-white font-bold text-sm tracking-[0.05em] uppercase hover:text-[#ff841a] transition-colors"
                >
                  Book This Experience <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Curated Activities Grid */}
      <section className="section-padding bg-[#FAF8F3]">
        <div className="section-container">
          <div className="text-center mb-16 lg:mb-20">
            <p className="section-eyebrow">More Local Activities</p>
            <h2 className="font-serif text-4xl lg:text-5xl text-[#1A1A1A] mb-6">Explore the Foothills</h2>
            <p className="section-subtitle">Discover the Kilimanjaro region through our tailored walking tours, cycling adventures, and cultural experiences.</p>
            <div className="section-divider"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {activities.map((act, i) => (
              <div key={i} className="bg-white p-10 rounded-sm shadow-sm border border-[#E8E0D0] hover:border-[#ff841a] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                <div className="mb-8 p-4 bg-[#FAF8F3] inline-block rounded-sm group-hover:bg-[#ff841a]/10 transition-colors">
                  {act.icon}
                </div>
                <h3 className="font-serif text-2xl font-semibold text-[#1A1A1A] mb-4">{act.title}</h3>
                <p className="text-[#6B7280] leading-relaxed mb-8 font-light">{act.description}</p>
                
                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-[#E8E0D0]">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[#9CA3AF] font-bold mb-1">Duration</span>
                    <span className="text-sm text-[#1A1A1A] font-medium">{act.duration}</span>
                  </div>
                  <div className="w-[1px] h-8 bg-[#E8E0D0]"></div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-wider text-[#9CA3AF] font-bold mb-1">Difficulty</span>
                    <span className="text-sm text-[#1A1A1A] font-medium">{act.difficulty}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Safari Gallery */}
      <section className="section-padding bg-[#1A1A1A]">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6">Moments in the Wild</h2>
            <p className="section-subtitle text-white/70">A glimpse into the unforgettable memories made on our tours.</p>
            <div className="section-divider border-white/20"></div>
          </div>
          
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
            {safariImages.map((src, i) => (
              <div key={i} className="break-inside-avoid rounded-sm overflow-hidden border border-white/10 group cursor-pointer mb-6">
                <img 
                  src={src} 
                  alt={`Karibu Safari Experience ${i + 1}`} 
                  className="w-full h-auto object-cover group-hover:scale-110 group-hover:opacity-90 transition-all duration-700 ease-in-out" 
                  loading="lazy" 
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Booking CTA */}
      <section id="booking" className="relative py-32 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "url('/Safari/IMG_1492.jpg.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
        <div className="absolute inset-0 bg-black/70"></div>
        
        <div className="section-container text-center relative z-10">
          <h2 className="font-serif text-4xl lg:text-6xl mb-6 font-semibold" style={{ color: "white" }}>Ready to explore Tanzania?</h2>
          <p className="text-white/90 mb-12 max-w-2xl mx-auto text-lg lg:text-xl font-light">
            Contact us to arrange your Materuni tour, walking safaris, or to plan a larger National Park adventure.
          </p>
          <a 
            href="https://wa.me/255767399123?text=Hello!%20I%27d%20like%20to%20enquire%20about%20booking%20a%20Safari%2FTour." 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-2 bg-[#ff841a] text-white hover:bg-[#cc6a14] font-bold px-6 py-3 rounded-[2px] text-sm uppercase tracking-[0.05em] transition-colors shadow-xl hover:shadow-[#ff841a]/20"
          >
            <Compass size={18} /> Speak to a Safari Expert
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
