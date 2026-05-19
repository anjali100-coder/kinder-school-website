import { Header } from '@/components/header'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { PrincipalSection } from '@/components/principal-section'
import { StaffSection } from '@/components/staff-section'
import { GallerySection } from '@/components/gallery-section'
import { ClassPhotosSection } from '@/components/class-photos-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <PrincipalSection />
        <StaffSection />
        <GallerySection />
        <ClassPhotosSection />
      </main>
      <Footer />
    </div>
  )
}
