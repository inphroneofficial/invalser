
import React from 'react';
import { PremiumCard } from "@/components/ui/premium-card";
import { Mail, MessageSquare, CheckCircle } from "lucide-react";
import { Motion } from "@/components/ui/motion";

interface ContactMethodProps {
  selected: string;
  onSelect: (method: string) => void;
}

const ContactMethodSelector: React.FC<ContactMethodProps> = ({ 
  selected, 
  onSelect 
}) => {
  const methods = [
    {
      id: 'email',
      title: 'Email Confirmation',
      description: 'Receive detailed booking confirmation via email',
      icon: <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
      gradient: 'from-blue-500/10 to-indigo-500/10',
      borderColor: 'border-blue-200 dark:border-blue-800'
    },
    {
      id: 'whatsapp',
      title: 'WhatsApp Instant',
      description: 'Quick confirmation via WhatsApp to 9550464957',
      icon: <MessageSquare className="h-8 w-8 text-green-600 dark:text-green-400" />,
      gradient: 'from-green-500/10 to-emerald-500/10',
      borderColor: 'border-green-200 dark:border-green-800'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {methods.map((method, index) => (
        <Motion key={method.id} variant="scale" delay={index * 100}>
          <PremiumCard 
            variant="glass"
            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
              selected === method.id 
                ? `ring-2 ring-gold dark:ring-blue-400 bg-gradient-to-br ${method.gradient} ${method.borderColor}` 
                : 'hover:shadow-xl border-gray-200/50 dark:border-gray-700/50'
            }`}
            onClick={() => onSelect(method.id)}
          >
            <div className="p-6 flex items-center">
              <div className={`mr-4 p-4 rounded-xl bg-gradient-to-br ${method.gradient} border ${method.borderColor}`}>
                {method.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2 text-navy-dark dark:text-white">
                  {method.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {method.description}
                </p>
              </div>
              {selected === method.id && (
                <div className="ml-4">
                  <div className="p-2 rounded-full bg-gold dark:bg-blue-500">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                </div>
              )}
            </div>
          </PremiumCard>
        </Motion>
      ))}
    </div>
  );
};

export default ContactMethodSelector;
