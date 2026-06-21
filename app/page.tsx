import AnnouncementMarquee from '@/components/announcement-marquee';
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { PrincipalSection } from '@/components/principal-section';
import { StaffSection } from '@/components/staff-section';
import { GallerySection } from '@/components/gallery-section';
import { ClassPhotosSection } from '@/components/class-photos-section';
import Testimonials from '@/components/testimonials'; // <--- Testimonials Import
import SchoolMap from '@/components/school-map'; // <--- Map Import Kiya
import ScrollReveal from '@/components/scroll-reveal'; // 
import DynamicContent from '@/components/DynamicContent';


export default function Home() {
  return (
    <div className="min-h-screen">
      
      <main>
        <AnnouncementMarquee />
        <div className="mt-4">
          <DynamicContent pageName="Home Page" />
        </div>
        
        <HeroSection />

        
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
          <Testimonials />
        </ScrollReveal>

        <ScrollReveal>
          <SchoolMap /> {/* <--- Map Section Yahan Set Kiya */}
        </ScrollReveal>
      </main>
      
    </div>
  );
}