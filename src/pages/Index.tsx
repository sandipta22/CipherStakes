import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import UrgencySection from "@/components/UrgencySection";
import VaultHighlight from "@/components/VaultHighlight";
import HackathonSection from "@/components/HackathonSection";
import FooterCTA from "@/components/FooterCTA";
import { Spotlight } from "@/components/ui/spotlight-new";
import { AuroraBackground } from "@/components/ui/aurora-background";



const Index = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">

      
      {/* Main content */}
      <div className="relative z-10 min-h-screen w-full">
        <Navbar />
        <main>
          {/* Increase z-index for HeroSection to fully overlap grid */}
          <div className="relative z-20">
            <HeroSection />
          </div>
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
    </div>
  );
};

export default Index;
