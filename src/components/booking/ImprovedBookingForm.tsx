import React, { useState, useEffect } from 'react';
import { useSearchParams, useParams } from 'react-router-dom';
import { PremiumCard } from '@/components/ui/premium-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { getProviderById } from '@/services/providerService';
import { useScrollToTop } from '@/hooks/use-scroll-to-top';
import ValetCountSelector from '@/components/ValetCountSelector';
import ServiceCategorySelector from '@/components/ServiceCategorySelector';
import { 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  Clock, 
  Star,
  CheckCircle,
  Car,
  Shield,
  Users,
  Eye,
  Building,
  MessageCircle
} from 'lucide-react';

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  duration: string;
  location: string;
  specialRequirements: string;
  selectedServices: string[];
  eventType: string;
  numberOfValets: number;
  numberOfBouncers: number;
  numberOfBodyguards: number;
  numberOfEventSecurity: number;
  numberOfCorporateSecurity: number;
}

interface Service {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  category: 'Valet' | 'Security';
  price: string;
  pricePerUnit: number; // Base price per person/hour
  billingType: 'hour' | 'day';
}

const ImprovedBookingForm: React.FC = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Use scroll to top hook
  useScrollToTop();
  
  // Scroll to top when component mounts or step changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [currentStep]);
  
  const serviceType = searchParams.get('type') || 'personal';
  const provider = id ? getProviderById(id) : null;

  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    duration: '',
    location: '',
    specialRequirements: '',
    selectedServices: [],
    eventType: '',
    numberOfValets: 1,
    numberOfBouncers: 1,
    numberOfBodyguards: 1,
    numberOfEventSecurity: 1,
    numberOfCorporateSecurity: 1
  });

  // Get provider-specific pricing from their profile
  const getServicePricing = (serviceId: string) => {
    if (provider?.pricingDetails?.[serviceId]) {
      const pricing = provider.pricingDetails[serviceId];
      return {
        perHour: pricing.perHour || 0,
        perMinute: pricing.perMinute || 0,
        baseFee: pricing.baseFee || 0,
        notes: pricing.notes
      };
    }
    // Return zero if pricing not set for this provider/service
    return { perHour: 0, perMinute: 0, baseFee: 0, notes: 'Contact for pricing' };
  };

  const availableServices: Service[] = [
    {
      id: 'valet',
      name: 'Professional Valet Services',
      description: 'Expert vehicle handling and parking solutions',
      icon: Car,
      category: 'Valet',
      price: '₹200/hour',
      pricePerUnit: 200,
      billingType: 'hour'
    },
    {
      id: 'bouncers',
      name: 'Professional Bouncers',
      description: 'Trained security personnel for crowd control',
      icon: Users,
      category: 'Security',
      price: '₹200/hour',
      pricePerUnit: 200,
      billingType: 'hour'
    },
    {
      id: 'bodyguards',
      name: 'Personal Bodyguards',
      description: 'Individual protection and security services',
      icon: Shield,
      category: 'Security',
      price: '₹200/hour',
      pricePerUnit: 200,
      billingType: 'hour'
    },
    {
      id: 'event-security',
      name: 'Event Security',
      description: 'Comprehensive security for events and functions',
      icon: Eye,
      category: 'Security',
      price: '₹200/hour',
      pricePerUnit: 200,
      billingType: 'hour'
    },
    {
      id: 'corporate-security',
      name: 'Corporate Security',
      description: 'Professional security for business premises',
      icon: Building,
      category: 'Security',
      price: '₹200/hour',
      pricePerUnit: 200,
      billingType: 'hour'
    }
  ];

  const handleInputChange = (field: keyof FormData, value: string | string[] | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: typeof value === 'string' && !isNaN(Number(value)) && ['numberOfValets', 'numberOfBouncers', 'numberOfBodyguards', 'numberOfEventSecurity', 'numberOfCorporateSecurity'].includes(field)
        ? Number(value)
        : value
    }));
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
  };

  const calculateTotalPrice = () => {
    let total = 0;
    
    // Parse hours directly from duration
    const hours = parseInt(formData.duration) || 0;
    
    formData.selectedServices.forEach(serviceId => {
      const service = availableServices.find(s => s.id === serviceId);
      if (service) {
        let quantity = 1;
        if (serviceId === 'valet') quantity = formData.numberOfValets;
        else if (serviceId === 'bouncers') quantity = formData.numberOfBouncers;
        else if (serviceId === 'bodyguards') quantity = formData.numberOfBodyguards;
        else if (serviceId === 'event-security') quantity = formData.numberOfEventSecurity;
        else if (serviceId === 'corporate-security') quantity = formData.numberOfCorporateSecurity;
        
        // Calculate: (price per hour) * (number of hours) * (quantity of people)
        total += service.pricePerUnit * hours * quantity;
      }
    });
    return total;
  };

  const validateStep = (step: number): boolean => {
    switch (step) {
      case 1:
        if (formData.selectedServices.length === 0) {
          toast({
            title: "Service Selection Required",
            description: "Please select at least one service to continue.",
            variant: "destructive"
          });
          return false;
        }
        return true;
      
      case 2:
        const personalFields = ['name', 'phone', 'email'] as const;
        for (const field of personalFields) {
          if (!formData[field].trim()) {
            toast({
              title: "Missing Information",
              description: `Please fill in the ${field} field.`,
              variant: "destructive"
            });
            return false;
          }
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
          toast({
            title: "Invalid Email",
            description: "Please enter a valid email address.",
            variant: "destructive"
          });
          return false;
        }
        
        const phoneRegex = /^[0-9+\-\s()]{10,}$/;
        if (!phoneRegex.test(formData.phone)) {
          toast({
            title: "Invalid Phone Number",
            description: "Please enter a valid phone number.",
            variant: "destructive"
          });
          return false;
        }
        return true;
      
      case 3:
        const serviceFields = ['date', 'time', 'location'] as const;
        for (const field of serviceFields) {
          if (!formData[field].trim()) {
            toast({
              title: "Missing Information",
              description: `Please fill in the ${field.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`,
              variant: "destructive"
            });
            return false;
          }
        }
        return true;
      
      default:
        return true;
    }
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const generateBookingMessage = () => {
    const hours = parseFloat(formData.duration) || 0;
    
    const selectedServiceDetails = availableServices
      .filter(service => formData.selectedServices.includes(service.id))
      .map(service => {
        let quantity = 1;
        if (service.id === 'valet') quantity = formData.numberOfValets;
        else if (service.id === 'bouncers') quantity = formData.numberOfBouncers;
        else if (service.id === 'bodyguards') quantity = formData.numberOfBodyguards;
        else if (service.id === 'event-security') quantity = formData.numberOfEventSecurity;
        else if (service.id === 'corporate-security') quantity = formData.numberOfCorporateSecurity;
        
        const hourlyPrice = service.pricePerUnit;
        const totalForService = hourlyPrice * hours * quantity;
        
        return {
          name: service.name,
          quantity,
          hourlyPrice,
          hours,
          totalForService
        };
      });

    const totalPrice = calculateTotalPrice();
    const providerInfo = provider ? `Provider: ${provider.name}\nLocation: ${provider.location}\nRating: ${provider.rating}⭐\n\n` : '';

    // Build service details with pricing
    let serviceDetails = '';
    selectedServiceDetails.forEach(service => {
      serviceDetails += `• ${service.name}\n  ${service.quantity} person(s) × ${service.hours} hour(s) × ₹${service.hourlyPrice}/hr = ₹${service.totalForService.toLocaleString('en-IN')}\n`;
    });

    return `🔥 NEW BOOKING REQUEST

${providerInfo}👤 Customer: ${formData.name}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}

🛎️ Services:
${serviceDetails}${formData.eventType ? `\n📍 Event: ${formData.eventType}` : ''}
📅 Date: ${formData.date}
⏰ Time: ${formData.time}
⌛ Duration: ${formData.duration || 'Not specified'}
📍 Location: ${formData.location}

💰 TOTAL: ₹${totalPrice.toLocaleString('en-IN')}
${formData.specialRequirements ? `\n📝 Notes: ${formData.specialRequirements}` : ''}
Thank you! 🙏`;
  };

  const handleWhatsAppSubmit = () => {
    const message = generateBookingMessage();
    const encoded = encodeURIComponent(message);
    
    // Get provider's phone number - this should always be used
    const phoneDigits = provider?.phone ? provider.phone.replace(/[^\d]/g, '') : '';
    
    if (!phoneDigits) {
      toast({ 
        title: 'Error', 
        description: 'Provider phone number not available.',
        variant: 'destructive'
      });
      return;
    }

    // Build WhatsApp link directly to provider's number
    const url = `https://wa.me/${phoneDigits}?text=${encoded}`;
    
    // Open WhatsApp directly - this will open WhatsApp app with the provider's chat
    window.open(url, '_blank');
    
    toast({ 
      title: 'Opening WhatsApp', 
      description: `Sending booking details to ${provider?.name || 'provider'}.`
    });
  };

  const handleEmailSubmit = () => {
    const message = generateBookingMessage();
    const subject = encodeURIComponent(`Booking Request - ${availableServices.filter(service => formData.selectedServices.includes(service.id)).map(service => service.name).join(', ')}`);
    const body = encodeURIComponent(message);
    const emailUrl = `mailto:${provider?.email || 'support@invalser.com'}?subject=${subject}&body=${body}`;
    window.open(emailUrl, '_blank');
    
    toast({
      title: "Opening Email Client",
      description: "Your email client will open with the booking details pre-filled.",
    });
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Select Your Services
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Choose the services you need for your requirements
              </p>
            </div>

            {provider && (
              <Card className="border-2 border-ice-blue-200 dark:border-ice-blue-700">
                <CardContent className="p-3 sm:p-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img 
                      src={provider.coverImage} 
                      alt={provider.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base truncate">{provider.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">{provider.location}</p>
                      <div className="flex items-center gap-1 text-xs sm:text-sm">
                        <Star className="w-3 h-3 sm:w-4 sm:h-4 text-ice-blue-500 fill-current" />
                        <span>{provider.rating}</span>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 mt-2">
                        <div className="flex items-center gap-1 text-xs text-green-600">
                          <Phone className="w-3 h-3" />
                          <span>{provider.phone}</span>
                        </div>
                        <div className="flex items-center gap-1 text-xs text-blue-600 truncate">
                          <Mail className="w-3 h-3" />
                          <span>{provider.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {availableServices.map((service) => {
                const isSelected = formData.selectedServices.includes(service.id);
                const IconComponent = service.icon;
                
                return (
                  <Card
                    key={service.id}
                    className={`cursor-pointer transition-all hover:shadow-md ${
                      isSelected ? 'ring-2 ring-ice-blue-500 bg-ice-blue-50/50 dark:bg-ice-blue-900/20' : ''
                    }`}
                    onClick={() => handleServiceToggle(service.id)}
                  >
                    <CardContent className="p-3 sm:p-4">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2 flex-wrap">
                            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-ice-blue-600 flex-shrink-0" />
                            <h4 className="font-semibold text-sm sm:text-base">{service.name}</h4>
                            <Badge variant={service.category === 'Valet' ? 'default' : 'destructive'} className="text-xs">
                              {service.category}
                            </Badge>
                          </div>
                          <p className="text-xs sm:text-sm text-gray-600 mb-2">{service.description}</p>
                          <p className="text-xs sm:text-sm font-medium text-ice-blue-600">{service.price}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {formData.selectedServices.length > 0 && (
              <div className="p-3 sm:p-4 bg-ice-blue-50 dark:bg-ice-blue-900/20 rounded-lg">
                <p className="text-xs sm:text-sm font-medium text-ice-blue-800 dark:text-ice-blue-200">
                  {formData.selectedServices.length} service{formData.selectedServices.length !== 1 ? 's' : ''} selected
                </p>
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Personal Information
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Please provide your contact details
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2 text-sm sm:text-base">
                  <User className="w-4 h-4" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className="h-11 sm:h-12 text-sm sm:text-base bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700 focus:border-ice-blue-500 focus:ring-ice-blue-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone" className="flex items-center gap-2 text-sm sm:text-base">
                  <Phone className="w-4 h-4" />
                  Phone Number *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter your phone number"
                  className="h-11 sm:h-12 text-sm sm:text-base bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700 focus:border-ice-blue-500 focus:ring-ice-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center gap-2 text-sm sm:text-base">
                  <Mail className="w-4 h-4" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email address"
                  className="h-11 sm:h-12 text-sm sm:text-base bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700 focus:border-ice-blue-500 focus:ring-ice-blue-500"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Service Details
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                When and where do you need our services?
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2 text-sm sm:text-base">
                  <Calendar className="w-4 h-4 text-foreground" />
                  Service Date *
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  className="h-11 sm:h-12 text-sm sm:text-base bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700 focus:border-ice-blue-500 focus:ring-ice-blue-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center gap-2 text-sm sm:text-base">
                  <Clock className="w-4 h-4 text-foreground" />
                  Service Time *
                </Label>
                <Select onValueChange={(value) => handleInputChange('time', value)} value={formData.time}>
                  <SelectTrigger className="h-11 sm:h-12 text-sm sm:text-base bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700 focus:border-ice-blue-500 focus:ring-ice-blue-500">
                    <SelectValue placeholder="Select service time" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto z-50 bg-white dark:bg-slate-800">
                    {(() => {
                      const times = [];
                      const now = new Date();
                      const currentHour = now.getHours();
                      const isToday = formData.date === new Date().toISOString().split('T')[0];
                      
                      for (let hour = 6; hour <= 23; hour++) {
                        if (isToday && hour <= currentHour) continue;
                        const displayHour = hour > 12 ? hour - 12 : hour;
                        const period = hour >= 12 ? 'PM' : 'AM';
                        const hourStr = hour.toString().padStart(2, '0');
                        times.push(
                          <SelectItem key={hour} value={`${hourStr}:00`}>
                            {displayHour === 0 ? 12 : displayHour}:00 {period}
                          </SelectItem>
                        );
                      }
                      return times;
                    })()}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 sm:col-span-2 lg:col-span-1">
                <Label htmlFor="duration" className="text-sm sm:text-base">Duration (Hours)</Label>
                <Select onValueChange={(value) => handleInputChange('duration', value)} value={formData.duration}>
                  <SelectTrigger className="h-11 sm:h-12 text-sm sm:text-base bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700 focus:border-ice-blue-500 focus:ring-ice-blue-500">
                    <SelectValue placeholder="Select hours" />
                  </SelectTrigger>
                  <SelectContent className="max-h-60 overflow-y-auto z-50 bg-white dark:bg-slate-800">
                    {Array.from({ length: 24 }, (_, i) => i + 1).map((hour) => (
                      <SelectItem key={hour} value={hour.toString()}>
                        {hour} {hour === 1 ? 'hour' : 'hours'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2 text-sm sm:text-base">
                <MapPin className="w-4 h-4" />
                Service Location *
              </Label>
              <Textarea
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="Enter complete address with city, state, and pincode where service is needed"
                required
                rows={3}
                className="text-sm sm:text-base min-h-20 bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700 focus:border-ice-blue-500 focus:ring-ice-blue-500"
              />
            </div>

            {formData.selectedServices.includes('valet') && (
              <>
                <div className="space-y-2">
                  <Label className="text-sm sm:text-base">Event Type</Label>
                  <Select onValueChange={(value) => handleInputChange('eventType', value)} value={formData.eventType}>
                    <SelectTrigger className="h-11 sm:h-12 text-sm sm:text-base bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700">
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto z-50 bg-white dark:bg-slate-800">
                      <SelectItem value="hotel">Hotel/Resort Valet</SelectItem>
                      <SelectItem value="restaurant">Restaurant/Bar Valet</SelectItem>
                      <SelectItem value="wedding">Wedding Function</SelectItem>
                      <SelectItem value="corporate">Corporate Event</SelectItem>
                      <SelectItem value="concert">Concert/Large Event</SelectItem>
                      <SelectItem value="party">Private Party</SelectItem>
                      <SelectItem value="birthday">Birthday Party</SelectItem>
                      <SelectItem value="engagement">Engagement Ceremony</SelectItem>
                      <SelectItem value="reception">Reception Event</SelectItem>
                      <SelectItem value="conference">Conference/Seminar</SelectItem>
                      <SelectItem value="exhibition">Exhibition/Trade Show</SelectItem>
                      <SelectItem value="mall">Shopping Mall</SelectItem>
                      <SelectItem value="hospital">Hospital/Medical Facility</SelectItem>
                      <SelectItem value="airport">Airport Transfer</SelectItem>
                      <SelectItem value="residential">Residential Building</SelectItem>
                      <SelectItem value="commercial">Commercial Establishment</SelectItem>
                      <SelectItem value="club">Club/Nightclub</SelectItem>
                      <SelectItem value="sports">Sports Event</SelectItem>
                      <SelectItem value="festival">Festival/Cultural Event</SelectItem>
                      <SelectItem value="charity">Charity/Fundraiser Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <ValetCountSelector
                  count={formData.numberOfValets}
                  onCountChange={(count) => handleInputChange('numberOfValets', count.toString())}
                  maxCount={20}
                />
              </>
            )}

            {formData.selectedServices.includes('bouncers') && (
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm sm:text-base">
                  <Users className="w-4 h-4" />
                  Number of Bouncers
                </Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleInputChange('numberOfBouncers', Math.max(1, formData.numberOfBouncers - 1).toString())}
                    className="h-10 w-10"
                  >
                    -
                  </Button>
                  <div className="text-center min-w-[60px]">
                    <span className="text-2xl font-bold">{formData.numberOfBouncers}</span>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleInputChange('numberOfBouncers', Math.min(50, formData.numberOfBouncers + 1).toString())}
                    className="h-10 w-10"
                  >
                    +
                  </Button>
                </div>
              </div>
            )}

            {formData.selectedServices.includes('bodyguards') && (
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm sm:text-base">
                  <Shield className="w-4 h-4" />
                  Number of Bodyguards
                </Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleInputChange('numberOfBodyguards', Math.max(1, formData.numberOfBodyguards - 1).toString())}
                    className="h-10 w-10"
                  >
                    -
                  </Button>
                  <div className="text-center min-w-[60px]">
                    <span className="text-2xl font-bold">{formData.numberOfBodyguards}</span>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleInputChange('numberOfBodyguards', Math.min(50, formData.numberOfBodyguards + 1).toString())}
                    className="h-10 w-10"
                  >
                    +
                  </Button>
                </div>
              </div>
            )}

            {formData.selectedServices.includes('event-security') && (
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm sm:text-base">
                  <Eye className="w-4 h-4" />
                  Number of Event Security Personnel
                </Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleInputChange('numberOfEventSecurity', Math.max(1, formData.numberOfEventSecurity - 1).toString())}
                    className="h-10 w-10"
                  >
                    -
                  </Button>
                  <div className="text-center min-w-[60px]">
                    <span className="text-2xl font-bold">{formData.numberOfEventSecurity}</span>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleInputChange('numberOfEventSecurity', Math.min(50, formData.numberOfEventSecurity + 1).toString())}
                    className="h-10 w-10"
                  >
                    +
                  </Button>
                </div>
              </div>
            )}

            {formData.selectedServices.includes('corporate-security') && (
              <div className="space-y-2">
                <Label className="flex items-center gap-2 text-sm sm:text-base">
                  <Building className="w-4 h-4" />
                  Number of Corporate Security Personnel
                </Label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleInputChange('numberOfCorporateSecurity', Math.max(1, formData.numberOfCorporateSecurity - 1).toString())}
                    className="h-10 w-10"
                  >
                    -
                  </Button>
                  <div className="text-center min-w-[60px]">
                    <span className="text-2xl font-bold">{formData.numberOfCorporateSecurity}</span>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => handleInputChange('numberOfCorporateSecurity', Math.min(50, formData.numberOfCorporateSecurity + 1).toString())}
                    className="h-10 w-10"
                  >
                    +
                  </Button>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="requirements" className="text-sm sm:text-base">Special Requirements</Label>
              <Textarea
                id="requirements"
                value={formData.specialRequirements}
                onChange={(e) => handleInputChange('specialRequirements', e.target.value)}
                placeholder="Any specific requirements or instructions..."
                rows={4}
                className="text-sm sm:text-base min-h-24 bg-white dark:bg-slate-800 border-ice-blue-200 dark:border-ice-blue-700 focus:border-ice-blue-500 focus:ring-ice-blue-500"
              />
            </div>
          </div>
        );

      case 4:
        const selectedServices = availableServices.filter(service => 
          formData.selectedServices.includes(service.id)
        );
        
        const totalPrice = calculateTotalPrice();
        
        return (
          <div className="space-y-4 sm:space-y-6">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Review & Submit Booking
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Choose how you'd like to send your booking request
              </p>
            </div>

            <div className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">Selected Services & Pricing</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {selectedServices.map((service) => {
                    let quantity = 1;
                    if (service.id === 'valet') quantity = formData.numberOfValets;
                    else if (service.id === 'bouncers') quantity = formData.numberOfBouncers;
                    else if (service.id === 'bodyguards') quantity = formData.numberOfBodyguards;
                    else if (service.id === 'event-security') quantity = formData.numberOfEventSecurity;
                    else if (service.id === 'corporate-security') quantity = formData.numberOfCorporateSecurity;
                    
                    // Parse hours directly
                    const hours = parseInt(formData.duration) || 0;
                    const serviceTotal = service.pricePerUnit * quantity * hours;
                    
                    return (
                      <div key={service.id} className="border-b pb-2 last:border-b-0">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-sm sm:text-base">{service.name}</span>
                          <Badge variant={service.category === 'Valet' ? 'default' : 'destructive'} className="text-xs">
                            {service.category}
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                          <span>{quantity} person(s) × {hours} hour(s) × ₹{service.pricePerUnit}/hour</span>
                          <span className="font-semibold text-ice-blue-600">₹{serviceTotal.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    );
                  })}
                  <div className="pt-3 border-t-2 border-ice-blue-200 dark:border-ice-blue-700">
                    <div className="flex items-center justify-between">
                      <span className="text-base sm:text-lg font-bold">Estimated Total:</span>
                      <span className="text-xl sm:text-2xl font-bold text-ice-blue-600">₹{totalPrice.toLocaleString('en-IN')}</span>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">*Final price may vary based on duration and requirements</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{formData.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm sm:text-base">{formData.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm sm:text-base break-all">{formData.email}</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-base sm:text-lg">Service Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 flex-shrink-0 text-foreground" />
                    <span className="text-sm sm:text-base">{formData.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 flex-shrink-0 text-foreground" />
                    <span className="text-sm sm:text-base">{formData.time}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{formData.location}</span>
                  </div>
                  {formData.eventType && (
                    <div className="text-sm sm:text-base">
                      <strong>Event Type:</strong> {formData.eventType.charAt(0).toUpperCase() + formData.eventType.slice(1)}
                    </div>
                  )}
                  {formData.selectedServices.includes('valet') && (
                    <div className="flex items-center gap-2">
                      <Car className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        <strong>Number of Valets:</strong> {formData.numberOfValets}
                      </span>
                    </div>
                  )}
                  {formData.selectedServices.includes('bouncers') && (
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        <strong>Number of Bouncers:</strong> {formData.numberOfBouncers}
                      </span>
                    </div>
                  )}
                  {formData.selectedServices.includes('bodyguards') && (
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        <strong>Number of Bodyguards:</strong> {formData.numberOfBodyguards}
                      </span>
                    </div>
                  )}
                  {formData.selectedServices.includes('event-security') && (
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        <strong>Number of Event Security:</strong> {formData.numberOfEventSecurity}
                      </span>
                    </div>
                  )}
                  {formData.selectedServices.includes('corporate-security') && (
                    <div className="flex items-center gap-2">
                      <Building className="w-4 h-4 flex-shrink-0" />
                      <span className="text-sm sm:text-base">
                        <strong>Number of Corporate Security:</strong> {formData.numberOfCorporateSecurity}
                      </span>
                    </div>
                  )}
                  {formData.duration && (
                    <div className="text-sm sm:text-base">
                      <strong>Duration:</strong> {formData.duration}
                    </div>
                  )}
                  {formData.specialRequirements && (
                    <div className="text-sm sm:text-base">
                      <strong>Special Requirements:</strong> {formData.specialRequirements}
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="border-2 border-ice-blue-300 bg-gradient-to-br from-ice-blue-50 to-blue-50 dark:from-ice-blue-900/20 dark:to-blue-900/20 dark:border-ice-blue-700 shadow-premium">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="font-bold text-ice-blue-800 dark:text-ice-blue-200 mb-4 text-center text-base sm:text-lg flex items-center justify-center gap-2">
                    <MessageCircle className="w-5 h-5 animate-bounce-gentle" />
                    Send Your Booking Request
                  </h4>
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <Button
                      onClick={handleWhatsAppSubmit}
                      className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex items-center justify-center gap-2 h-12 sm:h-14 text-sm sm:text-base font-bold shadow-premium hover:shadow-glow transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                      Send via WhatsApp
                    </Button>
                    <Button
                      onClick={handleEmailSubmit}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex items-center justify-center gap-2 h-12 sm:h-14 text-sm sm:text-base font-bold shadow-premium hover:shadow-glow transform hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                      Send via Email
                    </Button>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 text-center mt-4 font-medium">
                    Choose your preferred method to send the booking details
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const steps = [
    { number: 1, title: 'Services', icon: CheckCircle },
    { number: 2, title: 'Personal', icon: User },
    { number: 3, title: 'Details', icon: Calendar },
    { number: 4, title: 'Submit', icon: CheckCircle }
  ];

  return (
    <div className="max-w-4xl mx-auto p-3 sm:p-6">
      {/* Progress Steps */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium ${
                  currentStep >= step.number
                    ? 'bg-ice-blue-500 text-white'
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    step.number
                  )}
                </div>
                <span className="text-xs mt-1 sm:mt-2 text-center">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 sm:mx-4 ${
                  currentStep > step.number ? 'bg-ice-blue-500' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <PremiumCard variant="glass" className="p-4 sm:p-8 shadow-premium">
        {renderStepContent()}

        <Separator className="my-6 sm:my-8" />

        {/* Navigation Buttons */}
        <div className="flex justify-between gap-4">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-bold"
          >
            Previous
          </Button>

          {currentStep < 4 && (
            <Button
              onClick={nextStep}
              className="bg-gradient-to-r from-ice-blue-600 to-ice-blue-500 hover:from-ice-blue-700 hover:to-ice-blue-600 h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-bold shadow-premium hover:shadow-glow transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Next
            </Button>
          )}
        </div>
      </PremiumCard>
    </div>
  );
};

export default ImprovedBookingForm;
