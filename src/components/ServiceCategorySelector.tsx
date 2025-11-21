
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
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {categories.map((category) => (
        <Card 
          key={category.id}
          className={`cursor-pointer transition-all hover:shadow-md ${
            selected === category.id 
              ? 'border-2 border-ice-blue-500 bg-ice-blue-50 dark:border-ice-blue-400 dark:bg-ice-blue-900/10' 
              : 'border border-gray-200 dark:border-gray-700'
          }`}
          onClick={() => onSelect(category.id)}
        >
          <CardContent className="p-4 flex flex-col items-center text-center">
            <div className="text-3xl mb-2">{category.icon}</div>
            <h3 className="font-medium mb-1 text-navy-dark dark:text-ice-blue-300">{category.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300">{category.description}</p>
            {selected === category.id && (
              <CheckCircle className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mt-2" />
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServiceCategorySelector;
