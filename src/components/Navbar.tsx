
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Phone, Sparkles, Shield, Users, Award, Star } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileMenu } from "@/components/navigation/MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentIcon, setCurrentIcon] = useState(0);
  const location = useLocation();

  const icons = [Sparkles, Shield, Users, Award, Star];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animate icons
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/providers" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About", path: "/about" },
  ];

  const CurrentIcon = icons[currentIcon];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/98 dark:bg-slate-900/98 backdrop-blur-xl shadow-2xl border-b border-ice-blue-100/50 dark:border-slate-800' 
          : 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg shadow-md'
      }`}>
        <div className="container mx-auto px-3 sm:px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo with Animated Icons */}
            <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group z-50 flex-shrink-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-ice-blue-500 to-blue-500 dark:from-ice-blue-400 dark:to-blue-400 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse-gentle" />
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-ice-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-xl group-hover:shadow-ice-blue-500/40">
                  <CurrentIcon 
                    className="h-5 w-5 sm:h-6 sm:w-6 text-white transition-all duration-500 transform group-hover:rotate-12" 
                    key={currentIcon}
                  />
                </div>
              </div>
              <span className="font-bold text-xl sm:text-2xl bg-gradient-to-r from-ice-blue-600 to-blue-600 dark:from-ice-blue-400 dark:to-blue-400 bg-clip-text text-transparent">
                INVALSER
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative px-4 py-2.5 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-ice-blue-600 dark:hover:text-ice-blue-400 rounded-xl transition-all duration-300 group overflow-hidden"
                >
                  <span className="relative z-10">{link.name}</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-ice-blue-50 to-blue-50 dark:from-ice-blue-900/20 dark:to-blue-900/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-xl" />
                </Link>
              ))}
            </div>

            {/* Contact, Theme Toggle & CTAs */}
            <div className="hidden lg:flex items-center space-x-2">
              <a
                href="tel:9550464957"
                className="flex items-center space-x-1.5 px-3 py-2 rounded-lg transition-all duration-300 text-slate-700 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 group"
              >
                <Phone className="h-4 w-4" />
                <span className="font-medium text-sm">Call</span>
              </a>
              
              <ThemeToggle />
              
              <Link
                to="/registration"
                className="px-4 py-2 rounded-lg font-medium text-ice-blue-600 dark:text-ice-blue-400 hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/20 transition-all duration-300"
              >
                Join as Provider
              </Link>
              
              <Link
                to="/providers"
                className="bg-gradient-to-r from-ice-blue-600 to-blue-600 hover:from-ice-blue-700 hover:to-blue-700 text-white px-5 py-2 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-2 z-50">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl transition-all duration-300 text-slate-800 dark:text-slate-200 hover:bg-gradient-to-r hover:from-ice-blue-50 hover:to-blue-50 dark:hover:from-ice-blue-900/20 dark:hover:to-blue-900/20 hover:scale-110"
                aria-label="Toggle menu"
              >
                <Menu className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
