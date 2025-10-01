import { Clock, Zap, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const UrgencySection = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Scarcity",
      description: "Vaults cap at $100k – spots vanish quick",
      color: "neon-text-cyan"
    },
    {
      icon: TrendingUp,
      title: "Upside",
      description: "$1 could unlock $5k+ through skill-based puzzles",
      color: "neon-text-blue"
    },
    {
      icon: Users,
      title: "Community",
      description: "Build guilds, make friends, shape the future",
      color: "neon-text-purple"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker" />
      
      {/* Animated vault icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-10 right-10 text-6xl animate-float">🔒</div>
        <div className="absolute bottom-20 left-20 text-6xl animate-float" style={{ animationDelay: '1s' }}>🔐</div>
        <div className="absolute top-1/2 left-1/4 text-6xl animate-float" style={{ animationDelay: '2s' }}>🧩</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          {/* Headline */}
          <div className="space-y-4 animate-slide-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 glass-panel rounded-full mb-4">
              <Clock className="h-5 w-5 neon-text-cyan animate-pulse-glow" />
              <span className="text-sm font-semibold neon-text-cyan uppercase tracking-wider">Limited Time</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-orbitron font-bold gradient-text">
              The Crypto Opportunity You Can't Afford to Miss
            </h2>
          </div>

          {/* Main copy */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            <p>
              Stablecoins are exploding – <span className="neon-text-blue font-bold">trillions idle</span>, billions in dust. 
              CipherStakes captures this with micro-entry vaults filling <span className="neon-text-cyan font-bold">fast</span>.
            </p>
            
            <p>
              Early participants snag the biggest prizes before TVL skyrockets. In 2025's bull run, yields are peaking – 
              <span className="neon-text-purple font-bold"> don't watch from the sidelines</span>.
            </p>
          </div>

          {/* Reasons grid */}
          <div className="grid md:grid-cols-3 gap-6 pt-8">
            {reasons.map((reason, index) => (
              <div 
                key={reason.title}
                className="glass-panel p-6 rounded-xl hover:neon-border-cyan transition-all duration-300 group animate-slide-in-up"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <reason.icon className={`h-12 w-12 ${reason.color} mx-auto mb-4 group-hover:animate-pulse-glow`} />
                <h3 className="text-xl font-orbitron font-bold text-foreground mb-2">{reason.title}</h3>
                <p className="text-sm text-muted-foreground">{reason.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="pt-8 animate-slide-in-up" style={{ animationDelay: '0.5s' }}>
            <Button variant="neonCyan" size="xl" className="group">
              <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Claim Your Spot Before It's Gone
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
