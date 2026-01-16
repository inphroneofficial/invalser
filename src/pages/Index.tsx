import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ValueProposition from "@/components/ValueProposition";
import Testimonials from "@/components/Testimonials";
import ServiceProviderCTA from "@/components/ServiceProviderCTA";
import FAQ from "@/components/FAQ";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ui/scroll-to-top";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main id="main-content" role="main" aria-label="Main content">
        <Hero />
        <ScrollReveal variant="slide-up" delay={100}>
          <ValueProposition />
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={150}>
          <Features />
        </ScrollReveal>
        <ScrollReveal variant="slide-up" delay={100}>
          <ServiceProviderCTA />
        </ScrollReveal>
        <ScrollReveal variant="zoom" delay={100}>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal variant="slide-up" delay={100}>
          <FAQ />
        </ScrollReveal>
        <ScrollReveal variant="fade" delay={100}>
          <Feedback />
        </ScrollReveal>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
