import { useState } from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, User, Car, Key, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DeveloperModal } from "@/components/DeveloperModal";

const footerLinks = {
  company: [
    { name: "Find Services", path: "/providers" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ],
  resources: [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Help Center", path: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
];

export default function Footer() {
  const [isDeveloperModalOpen, setIsDeveloperModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-foreground dark:bg-card text-background dark:text-foreground">
        <div className="container py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4 group">
                {/* Animated icon for footer */}
                <div className="relative w-9 h-9 flex items-center justify-center bg-background/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Car className="w-5 h-5 text-primary" />
                  <Key className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 text-primary/70" />
                </div>
                <span className="text-2xl font-bold text-background dark:text-foreground tracking-tight">
                  INVALSER
                </span>
              </Link>
              <p className="text-background/60 dark:text-muted-foreground mb-6 text-sm">
                Premium valet and security services across major cities in India.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-background/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-background/60 dark:text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path}
                      className="text-background/60 dark:text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-background/60 dark:text-muted-foreground">
                    Hyderabad, Telangana, India
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-background/60 dark:text-muted-foreground">+91 8008133117</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="text-background/60 dark:text-muted-foreground">info@invalser.com</span>
                </li>
              </ul>
              
             <Button
  variant="outline"
  size="sm"
  onClick={() => setIsDeveloperModalOpen(true)}
  className="
    mt-4
    border-background/20
    text-background/80
    hover:bg-background/10
    dark:text-white
  "
>
  <User className="w-4 h-4 mr-2" />
  Meet Developer
</Button>

            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/10 dark:border-border mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-background/50 dark:text-muted-foreground text-sm">
              © {new Date().getFullYear()} INVALSER. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/terms-of-service" className="text-background/50 dark:text-muted-foreground hover:text-primary transition-colors">
                Terms
              </Link>
              <Link to="/privacy-policy" className="text-background/50 dark:text-muted-foreground hover:text-primary transition-colors">
                Privacy
              </Link>
              <Link to="/cookie-policy" className="text-background/50 dark:text-muted-foreground hover:text-primary transition-colors">
                Cookies
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
