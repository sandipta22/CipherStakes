import { Award, Rocket, Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const HackathonSection = () => {
  const credentials = [
    {
      icon: Award,
      title: "Credibility",
      description: "Backed by Solana's top accelerator",
      color: "neon-text-blue"
    },
    {
      icon: Trophy,
      title: "Prestige",
      description: "Global competition, elite builders",
      color: "neon-text-purple"
    },
    {
      icon: Rocket,
      title: "Upside",
      description: "Winners get funded – your early participation pays off",
      color: "neon-text-pink"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker to-cyber-dark" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Badge and headline */}
          <div className="text-center space-y-8 mb-16">
            {/* Colosseum Badge */}
            <div className="inline-flex items-center justify-center animate-slide-in-up">
              <div className="relative">
                <div className="w-32 h-32 rounded-full glass-panel neon-border-purple flex items-center justify-center animate-pulse-glow">
                  <div className="text-center">
                    <Trophy className="h-12 w-12 neon-text-purple mx-auto mb-2" />
                    <div className="text-xs font-orbitron font-bold neon-text-purple">COLOSSEUM</div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent neon-border-pink flex items-center justify-center">
                  <span className="text-xs font-bold">S</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
                Built in the Arena
              </h2>
              <p className="text-xl neon-text-purple font-semibold">
                Colosseum Hackathon Project
              </p>
            </div>
          </div>

          {/* Main content */}
          <div className="glass-panel p-8 md:p-12 rounded-2xl space-y-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                CipherStakes is a standout project from the <span className="neon-text-blue font-bold">Solana Cypherpunk Hackathon</span> by 
                Colosseum – crypto's premier competition.
              </p>
              
              <p>
                Powered by Colosseum's platform, we're accelerating Solana's ecosystem with innovative DeFi gamification. 
                This prestige means <span className="neon-text-purple font-bold">vetted tech</span>, 
                <span className="neon-text-pink font-bold"> rapid iteration</span>, and 
                <span className="neon-text-blue font-bold"> massive potential</span> – join a hackathon-born winner before launch.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="grid md:grid-cols-3 gap-6 pt-6">
              {credentials.map((cred, index) => (
                <div 
                  key={cred.title}
                  className="bg-card/30 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:border-primary transition-all duration-300 group"
                >
                  <cred.icon className={`h-10 w-10 ${cred.color} mb-3 group-hover:animate-pulse-glow`} />
                  <h3 className="font-orbitron font-bold text-foreground mb-2">{cred.title}</h3>
                  <p className="text-sm text-muted-foreground">{cred.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-8 text-center">
              <Button variant="neonOutline" size="lg" className="group">
                Learn More About Colosseum
                <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HackathonSection;
