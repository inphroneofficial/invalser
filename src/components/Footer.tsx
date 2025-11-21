import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeveloperModal } from "@/components/DeveloperModal";

export default function Footer() {
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-navy dark:bg-navy-dark text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <span className="text-2xl font-serif font-bold">
                  Invalser  <span className="text-gold">Platform</span>
                </span>
              </Link>
              <p className="text-white/70 mb-6">
                Premium valet and security services in major cities across India and international destinations.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-gold transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-white/70 hover:text-gold transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-serif font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/providers" className="text-white/70 hover:text-gold transition-colors">
                    Find Services
                  </Link>
                </li>
                <li>
                  <Link to="/how-it-works" className="text-white/70 hover:text-gold transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/70 hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-gold transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-serif font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/how-it-works" className="text-white/70 hover:text-gold transition-colors">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/70 hover:text-gold transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/privacy-policy" className="text-white/70 hover:text-gold transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/cookie-policy" className="text-white/70 hover:text-gold transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link to="/terms-of-service" className="text-white/70 hover:text-gold transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/70 hover:text-gold transition-colors">
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-serif font-semibold mb-6">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 text-gold shrink-0 mt-0.5" />
                  <span className="text-white/70">
                    Hyderabad, India
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gold" />
                  <span className="text-white/70">+91 9550464957</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-gold" />
                  <span className="text-white/70">invalser@gmail.com</span>
                </li>
              </ul>
              
              <div className="mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsDeveloperModalOpen(true)}
                  className="bg-white text-gray-900 border-ice-blue-300 hover:bg-ice-blue-50 dark:bg-white/10 dark:text-white dark:hover:bg-ice-blue-600 transition-colors"
                >
                  <User className="h-4 w-4 mr-2" />
                  Meet Developer
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Invalser. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/terms" className="text-white/70 hover:text-gold transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-white/70 hover:text-gold transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link to="/cookies" className="text-white/70 hover:text-gold transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <DeveloperModal 
        open={isDeveloperModalOpen} 
        onOpenChange={setIsDeveloperModalOpen} 
      />
    </>
  );
}
