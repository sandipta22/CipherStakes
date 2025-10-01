import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { Sparkles, Lock, TrendingUp } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { toast } from "@/components/ui/use-toast";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden z-30">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker/90 via-cyber-dark/80 to-cyber-dark" />
      </div>

      {/* Floating puzzle elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-16 h-16 border-2 border-neon-blue opacity-20 animate-float" />
        <div className="absolute top-40 right-20 w-12 h-12 border-2 border-neon-purple opacity-20 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-20 w-14 h-14 border-2 border-neon-cyan opacity-20 animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Main Headline with Flicker Effect */}
          <h1 className=" font-orbitron font-bold leading-tight animate-flicker">
            <TypewriterEffect
              words={[
                { text: "Unlock", className: "gradient-text" },
                { text: "Yields", className: "gradient-text" },
                { text: "with", className: "gradient-text" },
                { text: "Just", className: "gradient-text" },
                { text: "$10", className: "gradient-text" }
              ]}
              className="text-5xl md:text-7xl lg:text-8xl"
              cursorClassName="bg-blue-500 text-5xl md:text-7xl lg:text-8xl"
            />
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-orbitron neon-text-blue">
            Puzzle Your Way to Crypto Riches
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            CipherStakes: Turn idle stablecoins into no-loss prizes through gamified vaults, puzzles, and guilds. 
            Deposit micro, win macro. <span className="neon-text-cyan font-semibold">Limited spots – join before they're gone.</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              variant="neon"
              size="xl"
              className="group"
              onClick={() => toast({ title: 'Coming Soon', description: 'Solana wallet integration and $10 deposit coming soon!' })}
            >
              <Lock className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Deposit $10 & PuzzleFi
            </Button>
            <Button
              variant="neonOutline"
              size="xl"
              onClick={() => {
                const waitlist = document.querySelector('#footer-waitlist');
                if (waitlist) waitlist.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Join Waitlist
            </Button>
          </div>

          {/* Powered by badge */}
          <div className="pt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <TrendingUp className="h-4 w-4 neon-text-blue" />
            <span>Powered by Solana – Secure, Fast, Scalable.</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
