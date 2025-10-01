import { Shield, Puzzle, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";

const AboutSection = () => {
  const features = [
    {
      icon: Shield,
      title: "No-Loss Model",
      description: "Risk only yields, keep your principal safe",
      color: "neon-text-blue"
    },
    {
      icon: Puzzle,
      title: "Gamified & Social",
      description: "Puzzles replace luck; solve to win",
      color: "neon-text-purple"
    },
    {
      icon: Users,
      title: "Guild Power",
      description: "Form teams for collaborative wins",
      color: "neon-text-pink"
    },
    {
      icon: TrendingUp,
      title: "5-12% APY",
      description: "Blue-chip DeFi yield generation",
      color: "neon-text-blue"
    }
  ];

  return (
  <section className="py-24 relative overflow-hidden about-section-scrollbar">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark to-cyber-darker" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Copy (Sticky) */}
            <div className="space-y-8 animate-slide-in-up lg:sticky lg:top-32 self-start">
              <h2 className="text-4xl md:text-5xl font-orbitron font-bold gradient-text">
                What is CipherStakes?
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  CipherStakes pools your <span className="neon-text-blue font-semibold">$1 stablecoin deposits</span> into high-yield vaults on Solana. 
                  Earn 5–12% APY via blue-chip DeFi protocols like Aave, Maker, and Ondo.
                </p>
                <p>
                  Yields fund puzzle-secured wallets – solve riddles, images, and challenges to claim tiered prizes up to <span className="neon-text-pink font-bold">$5,000+</span>. 
                  Form guilds for collaborative wins and forge real bonds.
                </p>
                <p>
                  Vault 10? That's our community treasury for DAO-voted impact. <span className="neon-text-purple font-semibold">Principal always safe</span> – withdraw anytime.
                </p>
              </div>
              {/* Feature bullets */}
              <div className="grid sm:grid-cols-2 gap-4 pt-6">
                {features.map((feature, index) => (
                  <div 
                    key={feature.title}
                    className="glass-panel p-4 rounded-lg hover:neon-border-blue transition-all duration-300 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <feature.icon className={`h-8 w-8 ${feature.color} mb-2 group-hover:animate-pulse-glow`} />
                    <h3 className="font-orbitron font-bold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                ))}
              </div>
              <Button variant="neonPurple" size="lg">
                Explore How It Works
              </Button>
            </div>
            {/* Right: Aceternity Timeline */}
            <div className="relative animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px] flex flex-col overflow-visible">
                <h3 className="text-2xl font-orbitron font-bold neon-text-blue text-center mb-8 shrink-0">The Flow</h3>
                {/* Timeline progress line overlay */}
                <div className="pointer-events-none absolute left-8 top-0 bottom-0 w-[2px] z-0">
                  {/* The Timeline component will render the animated line inside this container */}
                </div>
                <div className="flex-1 overflow-y-auto relative z-10 custom-timeline-scrollbar">
                  <Timeline
                    data={[
                      {
                        title: "Deposit",
                        content: <p className="text-lg text-muted-foreground">Pool stablecoins into vaults</p>,
                      },
                      {
                        title: "Yield Staking",
                        content: <p className="text-lg text-muted-foreground">Earn 5-12% APY automatically</p>,
                      },
                      {
                        title: "Puzzle Wallets",
                        content: <p className="text-lg text-muted-foreground">Solve challenges to claim prizes</p>,
                      },
                      {
                        title: "Claim Rewards",
                        content: <p className="text-lg text-muted-foreground">Withdraw principal + prizes anytime</p>,
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
