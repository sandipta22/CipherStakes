import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, Twitter, MessageCircle, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const FooterCTA = () => {
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [telegram, setTelegram] = useState("");
  const [discord, setDiscord] = useState("");

  // Email validation function
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Email validation
    if (!email) {
      toast({ 
        title: "Email required", 
        description: "Please enter your email address.",
        variant: "destructive" 
      });
      return;
    }

    if (!isValidEmail(email)) {
      toast({ 
        title: "Invalid email", 
        description: "Please enter a valid email address.",
        variant: "destructive" 
      });
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          twitter,
          telegram,
          discord
        })
      });
      
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to join waitlist");
      }
      
      toast({
        title: "Waitlist Joined!",
        description: `Email: ${email}\nTwitter: ${twitter || "-"}\nTelegram: ${telegram || "-"}\nDiscord: ${discord || "-"}`,
      });
      
      // Reset form
      setEmail("");
      setTwitter("");
      setTelegram("");
      setDiscord("");
      
    } catch (err: any) {
      toast({
        title: "Error",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive"
      });
    }
  };

  return (
    <footer id="footer-waitlist" className="relative py-16 overflow-hidden border-t border-border/20">
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
              <Button
                variant="neon"
                size="xl"
                className="w-full sm:w-auto group"
                onClick={() => toast({ title: 'Coming Soon', description: 'Solana wallet integration and $10 deposit coming soon!' })}
              >
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
            <form className="glass-panel p-6 rounded-xl max-w-2xl mx-auto" onSubmit={handleWaitlistSubmit}>
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
                      required
                    />
                  </div>
                </div>
                
                {/* Social handles */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Input
                    type="text"
                    placeholder="Twitter @handle"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                  <Input
                    type="text"
                    placeholder="Telegram @handle"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                  <Input
                    type="text"
                    placeholder="Discord handle"
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                  <Button variant="neonCyan" className="group w-full" type="submit">
                    <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    Subscribe
                  </Button>
                </div>
                
                {/* Social connect */}
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-muted-foreground mb-3">Connect with us:</p>
                  <div className="flex justify-center gap-3">
                    <Button variant="ghost" size="icon" className="hover:neon-border-blue" asChild>
                      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                        <Twitter className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:neon-border-blue" asChild>
                      <a href="https://t.me/" target="_blank" rel="noopener noreferrer">
                        <Send className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:neon-border-blue" asChild>
                      <a href="https://discord.com/" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </form>
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