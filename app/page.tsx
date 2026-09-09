// app/page.tsx

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import StatsSection from '@/components/StatsStatics';
import IndustriesMarquee from '@/components/IndustriesMarquee';
import VisionMissionSection from '@/components/Visionmissionsection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fbf9f8] text-[#172039] antialiased">
      <Header />

      <main className="w-full grow overflow-x-hidden">
        {/* HERO */}
        <HeroSection />

        {/* STATS */}
        <section className="w-full overflow-hidden">
          <StatsSection />
        </section>

        {/* INDUSTRIES */}
        <section className="w-full overflow-hidden">
          <IndustriesMarquee />
        </section>

        {/* VISION & MISSION */}
        <section className="w-full overflow-hidden">
          <VisionMissionSection />
        </section>

        {/* SERVICES */}
        <section id="services" className="w-full overflow-hidden">
          <ServicesSection />
        </section>

        {/* ABOUT */}
        <section id="about" className="w-full overflow-hidden">
          <AboutSection />
        </section>

        {/* CONTACT */}
        <section className="w-full overflow-hidden">
          <ContactSection />
        </section>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
