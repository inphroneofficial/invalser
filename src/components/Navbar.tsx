// components/Navbar.tsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ArrowRight, Mail, Home, Briefcase, Info, MessageSquare, Download } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useHaptic } from "@/hooks/use-haptic";
import { PWAInstallButton } from "@/components/ui/pwa-install-prompt";
import { AnimatedLogo } from "@/components/ui/animated-logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { tap } = useHaptic();

  // Swipe gesture state
  const touchStartX = useRef<number>(0);
  const touchCurrentX = useRef<number>(0);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const SWIPE_THRESHOLD = 80;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    window.dispatchEvent(new CustomEvent('mobile-menu-toggle', { detail: { isOpen } }));
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchCurrentX.current = e.touches[0].clientX;
    const deltaX = touchCurrentX.current - touchStartX.current;

    if (deltaX > 0 && menuPanelRef.current) {
      menuPanelRef.current.style.transform = `translateX(${deltaX}px)`;
      menuPanelRef.current.style.transition = 'none';
    }
  }, []);

  const handleTouchEnd = useCallback(() => {
    const deltaX = touchCurrentX.current - touchStartX.current;

    if (menuPanelRef.current) {
      menuPanelRef.current.style.transition = 'transform 0.3s ease-out';
      if (deltaX > SWIPE_THRESHOLD) setIsOpen(false);
      else menuPanelRef.current.style.transform = 'translateX(0)';
    }
  }, []);

  const navLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/providers", icon: Briefcase },
    { name: "About", path: "/about", icon: Info },
    { name: "Contact", path: "/contact", icon: MessageSquare },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Navbar */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/95 backdrop-blur-xl shadow-lg border-b border-border/50" : "bg-background/80 backdrop-blur-sm"
      )}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            
            {/* Logo - left corner */}
            <Link to="/" className="flex items-center justify-start z-50">
              <AnimatedLogo size="md" />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200",
                    isActive(link.path)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-muted/50"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:8499090369"
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>
              
              <PWAInstallButton />
              <ThemeToggle />

              <Link to="/registration">
                <Button variant="outline" size="sm">Join as Provider</Button>
              </Link>

              <Link to="/providers">
                <Button variant="gradient" size="sm">
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => { tap(); setIsOpen(!isOpen); }}
              className="lg:hidden p-2 rounded-lg z-50 text-foreground hover:bg-muted transition-colors active:scale-95"
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/95 backdrop-blur-xl animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          <div
            ref={menuPanelRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative h-full flex flex-col items-center justify-center px-6 py-20 animate-scale-in"
            style={{ touchAction: 'pan-y' }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-3 rounded-full bg-muted/50 hover:bg-muted active:scale-90 transition-all duration-150"
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
              aria-label="Close menu"
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Menu Links */}
            <div className="w-full max-w-xs grid grid-cols-2 gap-2">
              {navLinks.map((link, index) => {
                const Icon = link.icon;
                const active = isActive(link.path);

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => { tap(); setIsOpen(false); }}
                    className={cn(
                      "relative flex items-center gap-2 px-3 py-2.5 rounded-xl transition-all duration-200 overflow-hidden",
                      active
                        ? "bg-primary/15 text-primary shadow-md shadow-primary/10"
                        : "bg-muted/40 hover:bg-muted/60 text-foreground",
                      "animate-slide-up"
                    )}
                    style={{ animationDelay: `${index * 40 + 80}ms`, WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
                  >
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center transition-all flex-shrink-0",
                      active ? "bg-primary text-primary-foreground shadow-glow" : "bg-background/80 text-foreground/70"
                    )}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-xs">{link.name}</span>
                    {active && <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />}
                  </Link>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="mt-5 flex items-center justify-center gap-2 flex-wrap animate-slide-up">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-muted/40 border border-border/50">
                <ThemeToggle />
                <span className="text-xs font-medium text-foreground/70">Theme</span>
              </div>

              <Link to="/install" onClick={() => { tap(); setIsOpen(false); }}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-primary/10 border border-primary/30 hover:bg-primary/20 active:scale-95 transition-all"
                style={{ WebkitTapHighlightColor: 'transparent' }}>
                <Download className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium text-primary">Install</span>
              </Link>

              <a href="tel:+918499090369" className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-muted/40 border border-border/50 hover:border-primary/30 hover:bg-primary/5 active:scale-95 transition-all">
                <Phone className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium">Call</span>
              </a>

              <a href="mailto:info@invalser.com" className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-muted/40 border border-border/50 hover:border-primary/30 hover:bg-primary/5 active:scale-95 transition-all">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span className="text-xs font-medium">Email</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="mt-5 w-full max-w-xs space-y-2 animate-slide-up">
              <Link to="/providers" onClick={() => { tap(); setIsOpen(false); }} className="block">
                <Button variant="gradient" size="default" className="w-full shadow-lg shadow-primary/30 active:scale-[0.98] transition-transform">
                  <span>Book Now</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>

              <Link to="/registration" onClick={() => { tap(); setIsOpen(false); }} className="block">
                <Button variant="outline" size="default" className="w-full active:scale-[0.98] transition-transform">
                  Join as Provider
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Spacer for navbar */}
      <div className="h-16 sm:h-20" />
    </>
  );
};

export default Navbar;
