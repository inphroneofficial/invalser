
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
        <ValueProposition />
        <Features />
        <ServiceProviderCTA />
        <Testimonials />
        <FAQ />
        <Feedback />
      </main>
      <Footer />
      <ImprovedChatbot />
    </div>
  );
};

export default Index;
