import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const faqs = [
  {
    question: "How do I book a valet service?",
    answer: "Booking is simple! Select your city, browse available services, choose a provider, and complete the booking form. You'll receive instant confirmation via WhatsApp."
  },
  {
    question: "Are the services insured?",
    answer: "Yes! All our verified providers carry comprehensive insurance coverage up to ₹10 lakh. Your vehicles and property are fully protected during the service period."
  },
  {
    question: "What types of events do you cater to?",
    answer: "We provide services for weddings, corporate events, private parties, restaurants, hotels, and special occasions. Our professionals are trained for both formal and casual settings."
  },
  {
    question: "How much do services cost?",
    answer: "All services are charged at a flat rate of ₹200 per hour. Simply calculate: hours × quantity × ₹200. No hidden charges, completely transparent pricing."
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "Yes, you can cancel or modify your booking up to 48 hours before the event without any charges. Contact us via WhatsApp for quick assistance."
  },
  {
    question: "How are providers verified?",
    answer: "All providers go through rigorous verification including background checks, license verification, insurance validation, and customer review analysis."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 section-muted">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-info/10 text-info text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get answers to common questions about our services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="card-modern overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-base sm:text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown 
                  className={cn(
                    "w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200",
                    openIndex === index && "rotate-180"
                  )} 
                />
              </button>
              
              <div className={cn(
                "overflow-hidden transition-all duration-200",
                openIndex === index ? "max-h-96" : "max-h-0"
              )}>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <div className="border-t border-border pt-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/9550464957" target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Support
              </Button>
            </a>
            <a href="mailto:support@invalser.com">
              <Button variant="outline">
                <Mail className="w-4 h-4 mr-2" />
                Email Support
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
