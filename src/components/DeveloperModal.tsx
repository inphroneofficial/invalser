
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail, Globe, Twitter, Instagram } from "lucide-react";

export interface DeveloperModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeveloperModal({ open, onOpenChange }: DeveloperModalProps) {
  const developerLinks = [
    { icon: <Github className="h-3 w-3 sm:h-4 sm:w-4" />, label: "GitHub", url: "https://github.com" },
    { icon: <Instagram className="h-3 w-3 sm:h-4 sm:w-4 text-pink-500" />, label: "Instagram", url: "https://instagram.com/g_tahngella_k" },
    { icon: <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 text-blue-600" />, label: "LinkedIn", url: "https://www.linkedin.com/in/gthangella/" },
    { icon: <Twitter className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />, label: "Twitter", url: "https://twitter.com/g_thangella" },
    { icon: <Mail className="h-3 w-3 sm:h-4 sm:w-4 text-red-500" />, label: "Email", url: "mailto:imgtk17@gmail.com" },
    { icon: <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-ice-blue-500" />, label: "Portfolio", url: "https://thangella-creaftech-solutions.vercel.app/" }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95%] max-w-sm sm:max-w-md rounded-lg p-3 sm:p-4 max-h-[90vh] overflow-y-auto bg-white dark:bg-gray-900 border-ice-blue-200 dark:border-ice-blue-700">
        <DialogHeader>
          <DialogTitle className="text-sm sm:text-lg text-center text-gray-900 dark:text-white">Meet the Developer</DialogTitle>
          <DialogDescription className="text-center text-xs text-gray-600 dark:text-gray-400">
            Behind the ValeGuard Pro application
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center gap-3 pt-2">
          {/* Avatar & Info */}
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-14 w-14 sm:h-20 sm:w-20 border-2 border-ice-blue-500 mb-2">
              <AvatarImage src="/GTK.JPG" alt="G. Thangella" />
              <AvatarFallback className="bg-ice-blue-100 text-ice-blue-700 dark:bg-ice-blue-900 dark:text-ice-blue-300">GT</AvatarFallback>
            </Avatar>
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">G. Thangella</h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 leading-tight">
              💼 Entrepreneur • 🧠 Tech Explorer{"\n"}
              🎨 Creative Thinker • 🔭 Visionary
            </p>

            <div className="flex gap-1 mt-2 flex-wrap justify-center">
              {developerLinks.map((link, i) => (
                <Button key={i} variant="outline" size="icon" asChild className="h-6 w-6 sm:h-7 sm:w-7 rounded-full border-ice-blue-300 hover:bg-ice-blue-50 dark:border-ice-blue-600 dark:hover:bg-ice-blue-900">
                  <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Compact Description */}
          <div className="space-y-2 text-xs w-full">
            <p className="text-center text-gray-700 dark:text-gray-300">
              Building impactful digital tools to simplify complex systems through service-tech innovation.
            </p>

            <div className="grid grid-cols-1 gap-2">
              <div className="bg-ice-blue-50 dark:bg-ice-blue-900/30 p-2 rounded-md border border-ice-blue-200 dark:border-ice-blue-700">
                <h4 className="font-medium text-xs mb-1 text-ice-blue-700 dark:text-ice-blue-300">Tech Stack</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  React, TypeScript, TailwindCSS, shadcn/ui
                </p>
              </div>

              <div className="bg-ice-blue-50 dark:bg-ice-blue-900/30 p-2 rounded-md border border-ice-blue-200 dark:border-ice-blue-700">
                <h4 className="font-medium text-xs mb-1 text-ice-blue-700 dark:text-ice-blue-300">Mission</h4>
                <p className="text-gray-600 dark:text-gray-400 text-xs">
                  Creating meaningful digital products that solve real-world problems through technology and design.
                </p>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-2 bg-ice-blue-200 dark:bg-ice-blue-700" />

        <DialogFooter className="flex flex-row gap-2 justify-end">
          <Button variant="outline" onClick={() => onOpenChange(false)} className="text-xs h-8 border-ice-blue-300 text-ice-blue-700 hover:bg-ice-blue-50 dark:border-ice-blue-600 dark:text-ice-blue-300 dark:hover:bg-ice-blue-900">
            Close
          </Button>
          <Button variant="default" asChild className="text-xs h-8 bg-ice-blue-600 hover:bg-ice-blue-700 text-white">
            <a href="mailto:imgtk17@gmail.com" target="_blank" rel="noopener noreferrer">
              Contact
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
