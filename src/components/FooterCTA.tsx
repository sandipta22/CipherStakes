import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, Twitter, MessageCircle, Send } from "lucide-react";
import { useState } from "react";

const FooterCTA = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative py-16 overflow-hidden border-t border-border/20">
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-cyber-dark to-cyber-dark" />
      
      {/* Animated background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Headline */}
          <div className="space-y-4 animate-slide-in-up">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold gradient-text">
              Ready to Stake Your Claim?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't let this slip away. Deposit $10, solve puzzles, build guilds – unlock yields today. 
              Signup now for first-mover advantage.
            </p>
          </div>

          {/* Dual CTA */}
          <div className="space-y-6 animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            {/* Primary CTA - Deposit */}
            <div>
              <Button variant="neon" size="xl" className="w-full sm:w-auto group">
                <Lock className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                Enter Vault
              </Button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-4 max-w-md mx-auto">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">or</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* Waitlist form */}
            <div className="glass-panel p-6 rounded-xl max-w-2xl mx-auto">
              <h3 className="font-orbitron font-bold text-xl mb-6 neon-text-purple">Join the Waitlist</h3>
              
              <div className="space-y-4">
                {/* Email input */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 bg-background/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  <Button variant="neonCyan" className="group">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Subscribe
                  </Button>
                </div>

                {/* Social connect */}
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground mb-3">Connect with us:</p>
                  <div className="flex justify-center gap-3">
                    <Button variant="ghost" size="icon" className="hover:neon-border-blue">
                      <Twitter className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:neon-border-blue">
                      <Send className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:neon-border-blue">
                      <MessageCircle className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security badge */}
          <div className="pt-8 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Lock className="h-4 w-4 neon-text-blue" />
              <span>Secure. Audited. Solana-Powered.</span>
            </p>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border/20">
            <p className="text-sm text-muted-foreground">
              © 2025 CipherStakes. All rights reserved. Built with 💜 on Solana.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
