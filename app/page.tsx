
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { PrincipalSection } from '@/components/principal-section';
import { StaffSection } from '@/components/staff-section';
import { GallerySection } from '@/components/gallery-section';
import { ClassPhotosSection } from '@/components/class-photos-section';
import Testimonials from '@/components/testimonials'; // <--- Testimonials Import
import SchoolMap from '@/components/school-map'; // <--- Map Import Kiya
import ScrollReveal from '@/components/scroll-reveal'; // <--- Animation Import Kiya


export default function Home() {
  return (
    <div className="min-h-screen">
      
      <main>
        {/* Hero page pehle se dikhna chahiye, isliye ispe animation nahi lagayi */}
        <HeroSection />

        {/* Ab baaki saare sections smooth animation ke sath khulenge */}
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        <ScrollReveal>
          <PrincipalSection />
        </ScrollReveal>

        <ScrollReveal>
          <StaffSection />
        </ScrollReveal>

        <ScrollReveal>
          <GallerySection />
        </ScrollReveal>

        <ScrollReveal>
          <ClassPhotosSection />
        </ScrollReveal>

        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <SchoolMap /> {/* <--- Map Section Yahan Set Kiya */}
        </ScrollReveal>
      </main>
      
    </div>
  );
}