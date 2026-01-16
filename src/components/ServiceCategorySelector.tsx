import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface ServiceCategoryProps {
  selected: string;
  onSelect: (category: string) => void;
}

const ServiceCategorySelector: React.FC<ServiceCategoryProps> = ({ 
  selected, 
  onSelect 
}) => {
  const categories = [
    {
      id: 'personal',
      title: 'Personal Use Valet',
      description: 'For individual needs and private events. Select 1-5 valets.',
      icon: '🅰️'
    },
    {
      id: 'event',
      title: 'Function/Event Valet',
      description: 'For weddings, corporate events and parties. Select multiple valets.',
      icon: '🅱️'
    },
    {
      id: 'commercial',
      title: 'Commercial/Institutional',
      description: 'For hotels, restaurants and venues. Custom valet teams.',
      icon: '🅲️'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
      {categories.map((category) => (
        <Card 
          key={category.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            selected === category.id 
              ? 'border-2 border-primary bg-primary/5' 
              : 'border border-border'
          }`}
          onClick={() => onSelect(category.id)}
        >
          <CardContent className="p-3 sm:p-4 flex flex-col items-center text-center">
            <div className="text-2xl sm:text-3xl mb-1 sm:mb-2">{category.icon}</div>
            <h3 className="font-medium mb-1 text-sm sm:text-base text-foreground">{category.title}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{category.description}</p>
            {selected === category.id && (
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-1 sm:mt-2" />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCategorySelector;
