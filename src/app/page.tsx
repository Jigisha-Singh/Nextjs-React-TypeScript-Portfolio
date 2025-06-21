import Header from '@/components/portfolio/Header';
import HeroSection from '@/components/portfolio/HeroSection';
import AboutSection from '@/components/portfolio/AboutSection';
import SkillsSection from '@/components/portfolio/SkillsSection';
import ProjectsSection from '@/components/portfolio/ProjectsSection';
import AchievementsSection from '@/components/portfolio/AchievementsSection';
import ContactSection from '@/components/portfolio/ContactSection';
import Footer from '@/components/portfolio/Footer';
import { Analytics } from "@vercel/analytics/react"; 

export default function PortfolioPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          {/* <ProjectsSection /> */}
          <AchievementsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
      <Analytics /> 
    </>
  );
}
