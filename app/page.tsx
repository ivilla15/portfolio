import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { CurrentlyLearningSection } from "@/components/currently-learning-section";
import { TechStackSection } from "@/components/tech-stack-section";
import { FeaturedProjectsSection } from "@/components/featured-projects-section";
import { CertificationsSection } from "@/components/certifications-section";
import { ExperienceSection } from "@/components/experience-section";
import ContactSection from "@/components/contact-section";
import { BlogSection } from "@/components/blog-section";
import { OrganizationsSection } from "@/components/organizations-section";
import { AwardsSection } from "@/components/awards-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <CurrentlyLearningSection />
        <TechStackSection />
        <FeaturedProjectsSection />
        <CertificationsSection />
        <ExperienceSection />
        {/* <BlogSection /> */}
        <ContactSection />
        <OrganizationsSection />
        <AwardsSection />
      </main>
      <Footer />
    </div>
  );
}
