import {
  AboutSection,
  AwardsSection,
  ContactSection,
  ExperienceSection,
  Footer,
  HeroSection,
  InvolvementSection,
  ProjectsSection,
  TechStackSection,
} from "@/components/sections";

export default function Page() {
  return (
    <main className="page-shell">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TechStackSection />
      <InvolvementSection />
      <AwardsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
