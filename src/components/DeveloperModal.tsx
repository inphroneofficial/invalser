import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Twitter,
  Instagram,
} from "lucide-react";

export interface DeveloperModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeveloperModal({ open, onOpenChange }: DeveloperModalProps) {
  const [imageOpen, setImageOpen] = React.useState(false);

  const developerLinks = [
    { icon: <Github className="h-4 w-4" />, url: "https://github.com" },
    { icon: <Instagram className="h-4 w-4 text-pink-500" />, url: "https://instagram.com/g_tahngella_k" },
    { icon: <Linkedin className="h-4 w-4 text-blue-600" />, url: "https://linkedin.com" },
    { icon: <Twitter className="h-4 w-4 text-blue-400" />, url: "https://twitter.com/g_thangella" },
    { icon: <Mail className="h-4 w-4 text-red-500" />, url: "mailto:imgtk17@gmail.com" },
    { icon: <Globe className="h-4 w-4 text-cyan-500" />, url: "https://thangella-creaftech-solutions.vercel.app/" },
  ];

  return (
    <>
      {/* MAIN DEVELOPER MODAL */}
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="
            w-[94%] max-w-sm
            max-h-[85vh] overflow-y-auto
            rounded-xl p-4
            bg-gradient-to-br from-white via-ice-blue-50 to-white
            dark:from-gray-900 dark:via-gray-800 dark:to-black
            backdrop-blur-xl shadow-2xl
            border border-white/20
          "
        >
          <DialogHeader className="space-y-1">
            <DialogTitle className="text-center text-base font-semibold">
              Meet the Developer
            </DialogTitle>
            <DialogDescription className="text-center text-[11px]">
              Behind the ValeGuard Pro application
            </DialogDescription>
          </DialogHeader>

          {/* CONTENT */}
          <div className="flex flex-col items-center gap-3 mt-2">
            {/* PROFILE CARD — FULL IMAGE, NO CROP */}
            <div
              onClick={() => setImageOpen(true)}
              className="cursor-pointer"
            >
              <div
                className="
                  relative h-24 w-24 sm:h-28 sm:w-28
                  rounded-lg overflow-hidden
                  bg-neutral-100 dark:bg-neutral-900
                  shadow-lg
                  transition-transform duration-300
                  hover:scale-[1.03]
                "
              >
                <img
                  src="/GTK1.png"
                  alt="G.Thangella"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>

            {/* NAME */}
            <div className="text-center">
              <h3 className="text-sm font-semibold bg-gradient-to-r from-ice-blue-600 to-blue-600 bg-clip-text text-transparent">
                G.Thangella
              </h3>
              <p className="text-[11px] text-gray-600 dark:text-gray-400">
                Entrepreneur • Tech Explorer
              </p>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-1.5 flex-wrap justify-center">
              {developerLinks.map((link, i) => (
                <Button
                  key={i}
                  variant="outline"
                  size="icon"
                  asChild
                  className="h-7 w-7 rounded-full"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>

            {/* SHORT BIO */}
            <p className="text-center text-[11px] text-gray-700 dark:text-gray-300 px-1">
              Building impactful digital products with vision and precision.
            </p>

            {/* INFO TEXT */}
            <div className="w-full text-[11px]">
              <div className="p-2 rounded-md bg-ice-blue-50 dark:bg-ice-blue-900/30 border text-center">
                Developed with the best technologies to ensure performance,
                security, and scalability.
              </div>
            </div>
          </div>

          <Separator className="my-2" />

          {/* FOOTER */}
          <DialogFooter className="flex gap-2 justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onOpenChange(false)}
            >
              Close
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-gradient-to-r from-ice-blue-600 to-blue-600"
            >
              <a href="mailto:imgtk17@gmail.com">Contact</a>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* SMALL IMAGE PREVIEW — ALSO NO CROP */}
      <Dialog open={imageOpen} onOpenChange={setImageOpen}>
        <DialogContent
          className="
            max-w-[260px]
            p-1
            rounded-lg
            overflow-hidden
            bg-neutral-900
          "
        >
          <img
            src="/GTK1.png"
            alt="Developer"
            className="w-full h-auto object-contain rounded-md"
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
