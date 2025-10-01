import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import UrgencySection from "@/components/UrgencySection";
import VaultHighlight from "@/components/VaultHighlight";
import HackathonSection from "@/components/HackathonSection";
import FooterCTA from "@/components/FooterCTA";


const Index = () => {
  return (
    <div className="min-h-screen bg-cyber-darker">
      <Navbar />
      <main>
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <UrgencySection />
        <div id="how">
          <VaultHighlight />
        </div>
        <div id="hackathon">
          <HackathonSection />
        </div>
        <FooterCTA />
      </main>
    </div>
  );
};

export default Index;
