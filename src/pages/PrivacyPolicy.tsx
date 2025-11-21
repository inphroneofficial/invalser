import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, FileText, UserCheck, Database } from "lucide-react";
import { Motion } from "@/components/ui/motion";

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, including name, email, phone number, location data, and service preferences when you use INVALSER platform."
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: "We use your information to provide, maintain, and improve our services, process bookings, communicate with service providers, send updates, and ensure platform security."
    },
    {
      icon: Lock,
      title: "Data Security",
      content: "We implement industry-standard security measures to protect your personal information. All data transmissions are encrypted using SSL/TLS protocols."
    },
    {
      icon: UserCheck,
      title: "Information Sharing",
      content: "We share your booking details with service providers only to fulfill your requests. We never sell your personal information to third parties."
    },
    {
      icon: FileText,
      title: "Your Rights",
      content: "You have the right to access, update, or delete your personal information. Contact us at invalser@gmail.com for any data-related requests."
    },
    {
      icon: Shield,
      title: "Cookies & Tracking",
      content: "We use cookies and similar technologies to enhance user experience, analyze usage patterns, and improve our services. You can control cookie preferences in your browser."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 md:py-24 mt-16">
        <Motion variant="fadeIn">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-6">
              <Shield className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Your privacy is important to us. This policy outlines how INVALSER collects, uses, and protects your personal information.
            </p>
            <p className="text-xs md:text-sm text-muted-foreground mt-4">
              Last Updated: January 2025
            </p>
          </div>
        </Motion>

        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          {sections.map((section, index) => (
            <Motion key={index} variant="fadeIn" delay={index * 100}>
              <Card className="hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg md:text-xl">
                    <div className="p-2 md:p-3 bg-primary/10 rounded-lg">
                      <section.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </div>
                    {section.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    {section.content}
                  </p>
                </CardContent>
              </Card>
            </Motion>
          ))}
        </div>

        <Motion variant="fadeIn" delay={600}>
          <Card className="mt-8 md:mt-12 max-w-5xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-6 md:p-8 text-center">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Questions About Privacy?</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                If you have any questions or concerns about our privacy practices, please contact us.
              </p>
              <a
                href="mailto:invalser@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm md:text-base"
              >
                <Shield className="w-4 h-4 md:w-5 md:h-5" />
                invalser@gmail.com
              </a>
            </CardContent>
          </Card>
        </Motion>
      </div>

      <Footer />
    </div>
  );
}
