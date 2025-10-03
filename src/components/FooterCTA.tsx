import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import emailjs from "@emailjs/browser";

const FooterCTA = () => {
  const [email, setEmail] = useState("");
  const [twitter, setTwitter] = useState("");
  const [telegram, setTelegram] = useState("");
  const [discord, setDiscord] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Email validation
  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleWaitlistSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({ title: "Email required", description: "Please enter your email.", variant: "destructive" });
      return;
    }
    if (!isValidEmail(email)) {
      toast({ title: "Invalid email", description: "Enter a valid email address.", variant: "destructive" });
      return;
    }

    setIsLoading(true);

    // Ideally: position & referral_code should come from backend for consistency
    const position = Math.floor(Math.random() * 1000) + 1;
    const referral_code = `REF-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
    const joined_at = new Date().toISOString();
    const user_name = email.split("@")[0]; // fallback for welcome email

    try {
      // 1. Admin Email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID,
        {
          user_email: email,
          twitter,
          telegram,
          discord,
          position,
          referral_code,
          joined_at,
          to_email: import.meta.env.VITE_ADMIN_EMAIL,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 2. User Welcome Email
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_WELCOME_TEMPLATE_ID,
        {
          user_name,
          user_email: email,
          position,
          referral_code,
          joined_at,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // 3. Store in backend DB
      const res = await fetch("http://localhost:5000/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          twitter,
          telegram,
          discord,
          position,
          referral_code,
          joined_at,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to join waitlist");
      }

      toast({
        title: "Waitlist Joined! 🎉",
        description: `Welcome ${user_name}\nYour position: ${position}\nReferral code: ${referral_code}`,
      });

      // Reset form
      setEmail("");
      setTwitter("");
      setTelegram("");
      setDiscord("");
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Error",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer id="footer-waitlist" className="relative py-16 overflow-hidden border-t border-border/20">
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-cyber-dark to-cyber-dark" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4 animate-slide-in-up">
            <h2 className="text-3xl md:text-5xl font-orbitron font-bold gradient-text">
              Ready to Stake Your Claim?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't let this slip away. Deposit $10, solve puzzles, build guilds – unlock yields today. 
              Signup now for first-mover advantage.
            </p>
          </div>

          <div className="space-y-6 animate-slide-in-up" style={{ animationDelay: "0.1s" }}>
            <form className="glass-panel p-6 rounded-xl max-w-2xl mx-auto" onSubmit={handleWaitlistSubmit}>
              <h3 className="font-orbitron font-bold text-xl mb-6 neon-text-purple">Join the Waitlist</h3>
              <div className="space-y-4">
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
                      disabled={isLoading}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Input
                    type="text"
                    placeholder="Twitter @handle"
                    value={twitter}
                    onChange={(e) => setTwitter(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    disabled={isLoading}
                  />
                  <Input
                    type="text"
                    placeholder="Telegram @handle"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    disabled={isLoading}
                  />
                  <Input
                    type="text"
                    placeholder="Discord handle"
                    value={discord}
                    onChange={(e) => setDiscord(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary"
                    disabled={isLoading}
                  />
                  <Button variant="neonCyan" className="group w-full" type="submit" disabled={isLoading}>
                    {isLoading ? "Joining..." : (
                      <>
                        <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
