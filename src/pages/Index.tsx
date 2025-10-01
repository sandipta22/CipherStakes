import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import UrgencySection from "@/components/UrgencySection";
import VaultHighlight from "@/components/VaultHighlight";
import HackathonSection from "@/components/HackathonSection";
import FooterCTA from "@/components/FooterCTA";
import { Spotlight } from "@/components/ui/spotlight-new";
import { SmallGridBackground } from "@/components/ui/smallGridBackground";


const Index = () => {
  return (
    <SmallGridBackground>
      <div className="min-h-screen bg-cyber-darker relative z-10">
        <Navbar />
        <div className="absolute w-full h-full overflow-hidden top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient-x">
          <Spotlight />
        </div>
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
    </SmallGridBackground>
  );
};

export default Index;
