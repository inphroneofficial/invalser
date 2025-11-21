import { X, Home, Search, Phone, Mail, UserPlus, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Search, label: "Find Services", path: "/providers" },
  { icon: UserPlus, label: "Join as Provider", path: "/registration" },
  { icon: Phone, label: "Contact", path: "/contact" },
];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 lg:hidden",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white dark:bg-slate-900 z-50 shadow-2xl transition-transform duration-300 ease-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-ice-blue-500 to-blue-500 rounded-lg blur-md opacity-50 animate-pulse-gentle" />
              <Menu className="relative h-7 w-7 text-ice-blue-600 dark:text-ice-blue-400" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-ice-blue-600 to-blue-600 dark:from-ice-blue-400 dark:to-blue-400 bg-clip-text text-transparent">
              INVALSER
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="h-6 w-6 text-slate-700 dark:text-slate-300" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={cn(
                  "flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300",
                  "hover:bg-gradient-to-r hover:from-ice-blue-50 hover:to-blue-50",
                  "dark:hover:from-ice-blue-900/20 dark:hover:to-blue-900/20",
                  "hover:shadow-md hover:scale-[1.02]",
                  "group animate-slide-in-right"
                )}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-ice-blue-100 to-blue-100 dark:from-ice-blue-900/30 dark:to-blue-900/30 group-hover:from-ice-blue-200 group-hover:to-blue-200 dark:group-hover:from-ice-blue-800/40 dark:group-hover:to-blue-800/40 transition-all">
                  <Icon className="h-5 w-5 text-ice-blue-600 dark:text-ice-blue-400" />
                </div>
                <span className="text-base font-medium text-slate-700 dark:text-slate-200 group-hover:text-ice-blue-600 dark:group-hover:text-ice-blue-400 transition-colors">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Contact & Theme Section */}
        <div className="p-6 mt-4 border-t border-slate-200 dark:border-slate-700">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-sm">
                <div className="p-2 rounded-lg bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30">
                  <Phone className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <a
                  href="tel:9550464957"
                  className="text-slate-700 dark:text-slate-200 hover:text-green-600 dark:hover:text-green-400 font-medium transition-colors"
                >
                  9550464957
                </a>
              </div>
              <ThemeToggle />
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30">
                <Mail className="h-4 w-4 text-blue-600 dark:text-blue-400" />
              </div>
              <a
                href="mailto:contact@invalser.com"
                className="text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-colors"
              >
                contact@invalser.com
              </a>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="p-6">
          <Link
            to="/providers"
            onClick={onClose}
            className="block w-full text-center bg-gradient-to-r from-ice-blue-600 to-blue-600 hover:from-ice-blue-700 hover:to-blue-700 text-white px-6 py-4 rounded-xl font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </Link>
        </div>
      </div>
    </>
  );
};
