
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PremiumCard } from '@/components/ui/premium-card';
import { Motion } from '@/components/ui/motion';

const faqs = [
  {
    question: "How do I book a valet service?",
    answer: "Booking is simple! Just select your city, browse available valet services, choose the one that fits your needs, and complete the booking form. You'll receive instant confirmation and a follow-up call within 24 hours."
  },
  {
    question: "Are the valet services insured?",
    answer: "Yes! All our verified valet providers carry comprehensive insurance coverage up to ₹10 lakh. Your vehicles and property are fully protected during the service period."
  },
  {
    question: "What types of events do you cater to?",
    answer: "We provide valet services for all types of events including weddings, corporate events, private parties, restaurant services, hotels, and special occasions. Our valets are trained for both formal and casual settings."
  },
  {
    question: "How much do valet services cost?",
    answer: "Pricing varies based on location, event type, duration, and number of valets required. Most services range from ₹2,000 to ₹50,000+ for premium events. You'll see transparent pricing before booking."
  },
  {
    question: "Can I cancel or modify my booking?",
    answer: "Yes, you can cancel or modify your booking up to 48 hours before the event date without any charges. For cancellations within 48 hours, a small fee may apply depending on the service provider's policy."
  },
  {
    question: "How are valets verified?",
    answer: "All our valet providers go through a rigorous verification process including background checks, license verification, insurance validation, and customer review analysis. Only trusted providers are listed on our platform."
  },
  {
    question: "What if I'm not satisfied with the service?",
    answer: "Your satisfaction is our priority. If you're not happy with the service, contact us within 24 hours of the event and we'll work with you to resolve the issue, including potential refunds or service credits."
  },
  {
    question: "Do you provide services outside major cities?",
    answer: "We're expanding rapidly! While we primarily serve major cities, we also cover many smaller towns and can arrange services in new locations. Contact us to check availability in your area."
  }
];

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-ice-blue-50/30 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto px-4">
        <Motion variant="fadeIn">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 via-ice-blue-600 to-ice-blue-700 dark:from-white dark:via-ice-blue-400 dark:to-ice-blue-500 bg-clip-text text-transparent mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about our valet services
            </p>
          </div>
        </Motion>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Motion key={index} variant="slideUp" delay={index * 100}>
                <PremiumCard className="overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-ice-blue-50/50 dark:hover:bg-ice-blue-900/20 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    {openItems.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-ice-blue-600 dark:text-ice-blue-400 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-ice-blue-600 dark:text-ice-blue-400 flex-shrink-0" />
                    )}
                  </button>
                  
                  {openItems.includes(index) && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </PremiumCard>
              </Motion>
            ))}
          </div>
        </div>

        <Motion variant="fadeIn" delay={800}>
          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Still have questions? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/9550464957"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                WhatsApp Support
              </a>
              <a
                href="mailto:support@invalser.com"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-ice-blue-500 to-blue-500 hover:from-ice-blue-600 hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Email Support
              </a>
            </div>
          </div>
        </Motion>
      </div>
    </section>
  );
};

export default FAQ;
