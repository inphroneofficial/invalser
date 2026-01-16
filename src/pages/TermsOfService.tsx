import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, XCircle, AlertTriangle, Scale, UserCheck } from "lucide-react";
import { Motion } from "@/components/ui/motion";

export default function TermsOfService() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      icon: UserCheck,
      title: "Acceptance of Terms",
      content: "By accessing and using INVALSER platform, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services."
    },
    {
      icon: CheckCircle,
      title: "Service Description",
      content: "INVALSER is a platform connecting users with verified valet and security service providers. We facilitate bookings but are not directly responsible for service execution."
    },
    {
      icon: Scale,
      title: "User Responsibilities",
      content: "Users must provide accurate information, comply with local laws, treat service providers respectfully, and pay agreed fees. Misuse of the platform may result in account termination."
    },
    {
      icon: AlertTriangle,
      title: "Provider Verification",
      content: "While we verify service providers, INVALSER does not guarantee service quality. We recommend users review ratings and communicate requirements clearly before booking."
    },
    {
      icon: XCircle,
      title: "Cancellation Policy",
      content: "Cancellations made 24 hours before scheduled service may receive full refunds. Late cancellations may incur charges. Specific terms vary by service provider."
    },
    {
      icon: FileText,
      title: "Limitation of Liability",
      content: "INVALSER is not liable for service provider actions, property damage, or injuries. Users engage services at their own risk. Our liability is limited to platform fees paid."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 md:py-24 mt-16">
        <Motion variant="fadeIn">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-6">
              <FileText className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Please read these terms carefully before using INVALSER platform. These terms govern your use of our services.
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
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Questions About Terms?</h3>
              <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
                If you have questions about these terms or need clarification, please contact our team.
              </p>
              <a
                href="mailto:megtk17@gmail.com"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm md:text-base"
              >
                <FileText className="w-4 h-4 md:w-5 md:h-5" />
                megtk17@gmail.com
              </a>
            </CardContent>
          </Card>
        </Motion>
      </div>

      <Footer />
    </div>
  );
}
