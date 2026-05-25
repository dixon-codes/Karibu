import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Charity & Community | Karibu Cottage Safari",
  description:
    "Learn about our charity and community outreach programs at Karibu Cottage Safari in Moshi.",
};

export default function CharityPage() {
  return (
    <main>
      <Header />
      
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 bg-[#FAF8F3] min-h-[60vh] flex flex-col justify-center">
        <div className="section-container text-center">
          <p className="section-eyebrow">Giving Back</p>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] font-semibold mb-6">
            Charity & Affiliate Programs
          </h1>
          <div className="section-divider my-8"></div>
          <p className="text-[#6B7280] max-w-2xl mx-auto leading-relaxed text-lg">
            At Karibu Cottage Safari, we believe in giving back to the community that hosts us. 
            Information about our charity partnerships and affiliate programs is currently being updated.
            <br/><br/>
            Please check back soon for ways you can get involved and support the local communities in Moshi.
          </p>
          
          <div className="mt-12">
            <a href="/#contact" className="btn-accent">
              Contact Us to Learn More
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
