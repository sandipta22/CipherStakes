
"use client";
import { Wallet } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "About", link: "#about" },
  { name: "How It Works", link: "#how" },
  { name: "Hackathon", link: "#hackathon" },
];

const CipherStakesLogo = () => (
  <a href="#" className="flex items-center gap-2 px-2 py-1">
    <div className="w-10 h-10 rounded-lg neon-border-blue flex items-center justify-center animate-pulse-glow">
      <span className="text-xl font-bold font-orbitron gradient-text">C</span>
    </div>
    <span className="text-xl font-orbitron font-bold gradient-text">CipherStakes</span>
  </a>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <ResizableNavbar className="fixed top-0 left-0 right-0 z-50 ">
      {/* Desktop Navigation */}
      <NavBody>
        <CipherStakesLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton
            variant="primary"
            className="hidden sm:flex"
            onClick={() => toast({ title: 'Coming Soon', description: 'Solana wallet integration coming soon!' })}
          >
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <CipherStakesLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4 mt-4">
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                toast({ title: 'Coming Soon', description: 'Solana wallet integration coming soon!' });
              }}
              variant="primary"
              className="w-full"
            >
              <Wallet className="mr-2 h-4 w-4" />
              Connect Wallet
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </ResizableNavbar>
  );
};

export default Navbar;
