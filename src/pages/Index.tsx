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
import ImprovedChatbot from "@/components/ImprovedChatbot";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { usePerformanceMonitoring } from "@/hooks/use-performance";
import { useAccessibility } from "@/hooks/use-accessibility";
import { useRouteTransition } from "@/hooks/use-route-transition";

const Index = () => {
  usePerformanceMonitoring();
  useAccessibility();
  useRouteTransition();

  return (
    <div className="min-h-screen">
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
        <ScrollReveal variant="zoom" delay={200}>
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
      <ImprovedChatbot />
    </div>
  );
};

export default Index;
