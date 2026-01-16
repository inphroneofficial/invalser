
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Phone, Mail, MapPin, Star, CreditCard, Check, ArrowLeft, Info, Crown, Shield, Zap } from 'lucide-react';
import { toast } from 'sonner';

const registrationSchema = z.object({
  businessName: z.string().min(2, 'Business name must be at least 2 characters'),
  ownerName: z.string().min(2, 'Owner name must be at least 2 characters'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  areas: z.string().min(5, 'Service areas are required'),
  services: z.array(z.string()).min(1, 'Select at least one service'),
  servicePrices: z.record(z.string()).optional(),
  experience: z.string().min(1, 'Experience is required'),
  description: z.string().min(20, 'Description must be at least 20 characters'),
  subscriptionPlan: z.enum(['monthly', 'yearly']),
  agreeTerms: z.boolean().refine(val => val === true, 'You must agree to terms'),
  contactMethod: z.enum(['whatsapp', 'email']).default('whatsapp')
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

const serviceOptions = [
  'Personal Valet', 'Event Valet', 'Wedding Valet', 'Corporate Valet',
  'Hotel Valet', 'Restaurant Valet', 'Airport Valet', 'VIP Valet',
  'Mall Valet', 'Hospital Valet', 'Premium Valet', 'Executive Valet',
  'Professional Valet Services', 'Professional Bouncers', 'Personal Bodyguards',
  'Event Security', 'Corporate Security'
];

const ValetRegistrationForm: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [servicePrices, setServicePrices] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      subscriptionPlan: 'monthly',
      agreeTerms: false,
      contactMethod: 'whatsapp',
      servicePrices: {}
    }
  });

  const subscriptionPlan = watch('subscriptionPlan');
  const contactMethod = watch('contactMethod');

  const handleServiceChange = (service: string, checked: boolean) => {
    let updatedServices;
    if (checked) {
      updatedServices = [...selectedServices, service];
    } else {
      updatedServices = selectedServices.filter(s => s !== service);
      // Remove price when deselecting service
      const updatedPrices = { ...servicePrices };
      delete updatedPrices[service];
      setServicePrices(updatedPrices);
      setValue('servicePrices', updatedPrices);
    }
    setSelectedServices(updatedServices);
    setValue('services', updatedServices);
  };

  const handlePriceChange = (service: string, price: string) => {
    const updatedPrices = { ...servicePrices, [service]: price };
    setServicePrices(updatedPrices);
    setValue('servicePrices', updatedPrices);
  };

  const handleTermsChange = (checked: boolean) => {
    setAgreeTerms(checked);
    setValue('agreeTerms', checked);
  };

  const onSubmit = async (data: RegistrationFormData) => {
    if (!agreeTerms) {
      toast.error("Please agree to the terms and conditions");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const pricingDetails = data.services.map(service => {
        const price = data.servicePrices?.[service] || 'Not specified';
        return `${service}: ₹${price}/hour`;
      }).join('\n');

      const registrationMessage = `🔹 NEW VALET SERVICE REGISTRATION 🔹

🏢 BUSINESS DETAILS:
Business Name: ${data.businessName}
Owner Name: ${data.ownerName}
Phone: ${data.phone}
Email: ${data.email}

📍 LOCATION:
City: ${data.city}
State: ${data.state}
Service Areas: ${data.areas}

💼 SERVICE DETAILS:
Services Offered: ${data.services.join(', ')}

💰 PRICING (Per Hour):
${pricingDetails}

Experience: ${data.experience}
Description: ${data.description}

💳 SUBSCRIPTION:
Plan: ${data.subscriptionPlan === 'monthly' ? 'Monthly (₹500)' : 'Yearly (₹1,200)'}

📝 REGISTRATION REQUEST
Please review and approve this valet service provider for listing on the platform.

Royal Valet Services Platform`;

      if (data.contactMethod === 'whatsapp') {
        const whatsappMessage = encodeURIComponent(registrationMessage);
        const whatsappUrl = `https://wa.me/9550464957?text=${whatsappMessage}`;
        window.open(whatsappUrl, '_blank');
      } else {
        const subject = encodeURIComponent('New Valet Service Registration Request');
        const body = encodeURIComponent(registrationMessage);
        const mailtoUrl = `mailto:megtk21@gmail.com?subject=${subject}&body=${body}`;
        window.open(mailtoUrl, '_blank');
      }
      
      toast.success("Registration submitted successfully! We'll review your application within 24 hours and contact you for payment verification.");
      
    } catch (error) {
      console.error('Registration error:', error);
      toast.error("Failed to submit registration. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-ice-blue-50 to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-5xl mx-auto p-4 sm:p-6 space-y-6 sm:space-y-8">
        {/* Back Button */}
        <div className="flex items-center mb-6">
          <Button
            variant="outline"
            onClick={() => navigate('/')}
            className="flex items-center gap-2 hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/30 border-ice-blue-200 dark:border-ice-blue-700 text-ice-blue-700 dark:text-ice-blue-300 hover:text-ice-blue-800 dark:hover:text-ice-blue-200 transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Button>
        </div>

        {/* Premium Header */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-ice-blue-500/20 to-blue-500/20 backdrop-blur-sm border border-ice-blue-200 dark:border-ice-blue-700 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
            <Crown className="h-4 sm:h-5 w-4 sm:w-5 text-ice-blue-600 dark:text-ice-blue-400" />
            <span className="text-sm sm:text-base text-ice-blue-800 dark:text-ice-blue-200 font-semibold">Premium Valet Partnership</span>
            <Shield className="h-3 sm:h-4 w-3 sm:w-4 text-ice-blue-500 dark:text-ice-blue-400" />
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-ice-blue-700 via-blue-600 to-ice-blue-600 dark:from-ice-blue-400 dark:via-blue-400 dark:to-ice-blue-400 bg-clip-text text-transparent mb-4 sm:mb-6">
            Join Royal Valet Services
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
            Become a verified premium valet service provider and transform your business with our trusted platform
          </p>
          
          {/* Process Information */}
          <div className="bg-gradient-to-r from-ice-blue-50 to-blue-50 dark:from-ice-blue-900/30 dark:to-blue-900/30 border border-ice-blue-200 dark:border-ice-blue-700 rounded-2xl p-4 sm:p-8 mb-6 sm:mb-8 shadow-lg">
            <div className="flex items-center justify-center mb-4">
              <Info className="h-5 sm:h-6 w-5 sm:w-6 text-ice-blue-600 dark:text-ice-blue-400 mr-2" />
              <h3 className="text-xl sm:text-2xl font-bold text-ice-blue-800 dark:text-ice-blue-200">How It Works</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-6 text-left">
              <div className="text-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-ice-blue-500 dark:bg-ice-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <span className="text-white font-bold text-sm sm:text-base">1</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Submit your registration details</p>
              </div>
              <div className="text-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-ice-blue-500 dark:bg-ice-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <span className="text-white font-bold text-sm sm:text-base">2</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">We review & contact you within 24 hours</p>
              </div>
              <div className="text-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-ice-blue-500 dark:bg-ice-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <span className="text-white font-bold text-sm sm:text-base">3</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Complete verification & payment</p>
              </div>
              <div className="text-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-ice-blue-500 dark:bg-ice-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <span className="text-white font-bold text-sm sm:text-base">4</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Your service goes live</p>
              </div>
              <div className="text-center">
                <div className="w-10 sm:w-12 h-10 sm:h-12 bg-ice-blue-500 dark:bg-ice-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                  <span className="text-white font-bold text-sm sm:text-base">5</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">Start receiving bookings!</p>
              </div>
            </div>
          </div>
          
          {/* Premium Subscription Plans */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-8 sm:mb-12">
            <Card className="border-2 border-ice-blue-200 dark:border-ice-blue-700 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-900">
              <CardHeader className="text-center bg-gradient-to-r from-ice-blue-50 to-blue-50 dark:from-ice-blue-900/30 dark:to-blue-900/30">
                <CardTitle className="text-3xl text-ice-blue-700 dark:text-ice-blue-300 flex items-center justify-center gap-2">
                  <Zap className="h-6 w-6" />
                  Monthly Plan
                </CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">₹500</span>
                  <span className="text-slate-600 dark:text-slate-400">/month</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center"><Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3" />Premium profile listing</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3" />Direct customer bookings</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3" />Customer reviews & ratings</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3" />24/7 basic support</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-ice-blue-300 dark:border-ice-blue-600 shadow-2xl hover:shadow-3xl transition-all duration-300 relative transform hover:-translate-y-1 bg-white dark:bg-gray-900">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-ice-blue-600 to-blue-600 dark:from-ice-blue-500 dark:to-blue-500 text-white px-4 py-1">
                Most Popular
              </Badge>
              <CardHeader className="text-center bg-gradient-to-r from-ice-blue-100 to-blue-100 dark:from-ice-blue-900/50 dark:to-blue-900/50">
                <CardTitle className="text-3xl text-ice-blue-800 dark:text-ice-blue-200 flex items-center justify-center gap-2">
                  <Crown className="h-6 w-6" />
                  Yearly Plan
                </CardTitle>
                <CardDescription className="space-y-1">
                  <span className="text-4xl font-bold text-slate-900 dark:text-white">₹1,200</span>
                  <span className="text-slate-600 dark:text-slate-400">/year</span>
                  <span className="block text-ice-blue-600 dark:text-ice-blue-400 font-bold text-lg mt-1">Save ₹4,800!</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-center"><Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3" />Everything in Monthly Plan</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3" />Featured & priority listings</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3" />Priority customer support</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3" />Advanced analytics dashboard</li>
                  <li className="flex items-center"><Check className="h-5 w-5 text-ice-blue-500 dark:text-ice-blue-400 mr-3" />Marketing promotion inclusion</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Premium Registration Form */}
        <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-ice-blue-50/30 dark:from-gray-900 dark:to-gray-800/80">
          <CardHeader className="bg-gradient-to-r from-ice-blue-600 to-blue-600 dark:from-ice-blue-700 dark:to-blue-700 text-white rounded-t-lg p-4 sm:p-6">
            <CardTitle className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl">
              <CreditCard className="h-5 sm:h-7 w-5 sm:w-7" />
              Premium Valet Service Registration
            </CardTitle>
            <CardDescription className="text-ice-blue-100 dark:text-ice-blue-200 text-sm sm:text-base">
              Complete your registration to join India's most trusted valet platform
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
              {/* Contact Method Selection */}
              <div className="bg-gradient-to-r from-slate-50 to-ice-blue-50 dark:from-slate-800 dark:to-ice-blue-900/30 p-4 sm:p-6 rounded-xl border border-ice-blue-100 dark:border-ice-blue-700">
                <h3 className="text-lg sm:text-xl font-semibold text-ice-blue-800 dark:text-ice-blue-200 mb-4 flex items-center gap-2">
                  <Phone className="h-4 sm:h-5 w-4 sm:w-5" />
                  Preferred Contact Method
                </h3>
                <RadioGroup
                  value={contactMethod}
                  onValueChange={(value: 'whatsapp' | 'email') => setValue('contactMethod', value)}
                  className="grid grid-cols-2 gap-4"
                >
                  <div className="flex items-center space-x-3 p-3 sm:p-4 border border-ice-blue-200 dark:border-ice-blue-700 rounded-lg hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/30 bg-white dark:bg-gray-800">
                    <RadioGroupItem value="whatsapp" id="whatsapp" className="border-ice-blue-300 dark:border-ice-blue-600 text-ice-blue-600 dark:text-ice-blue-400" />
                    <Label htmlFor="whatsapp" className="text-slate-700 dark:text-slate-200 cursor-pointer flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      WhatsApp
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-3 sm:p-4 border border-ice-blue-200 dark:border-ice-blue-700 rounded-lg hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/30 bg-white dark:bg-gray-800">
                    <RadioGroupItem value="email" id="email-method" className="border-ice-blue-300 dark:border-ice-blue-600 text-ice-blue-600 dark:text-ice-blue-400" />
                    <Label htmlFor="email-method" className="text-slate-700 dark:text-slate-200 cursor-pointer flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Business Information Section */}
              <div className="bg-gradient-to-r from-slate-50 to-ice-blue-50 dark:from-slate-800 dark:to-ice-blue-900/30 p-6 rounded-xl border border-ice-blue-100 dark:border-ice-blue-700">
                <h3 className="text-xl font-semibold text-ice-blue-800 dark:text-ice-blue-200 mb-4 flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Business Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="businessName" className="text-slate-700 dark:text-slate-200 font-medium">Business Name *</Label>
                    <Input
                      id="businessName"
                      {...register('businessName')}
                      placeholder="Elite Valet Services"
                      className="mt-2 border-ice-blue-200 dark:border-ice-blue-700 focus:border-ice-blue-500 dark:focus:border-ice-blue-400 focus:ring-ice-blue-500/20 dark:focus:ring-ice-blue-400/20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    {errors.businessName && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.businessName.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="ownerName" className="text-slate-700 dark:text-slate-200 font-medium">Owner Name *</Label>
                    <Input
                      id="ownerName"
                      {...register('ownerName')}
                      placeholder="John Doe"
                      className="mt-2 border-ice-blue-200 dark:border-ice-blue-700 focus:border-ice-blue-500 dark:focus:border-ice-blue-400 focus:ring-ice-blue-500/20 dark:focus:ring-ice-blue-400/20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    {errors.ownerName && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.ownerName.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="bg-gradient-to-r from-slate-50 to-ice-blue-50 dark:from-slate-800 dark:to-ice-blue-900/30 p-6 rounded-xl border border-ice-blue-100 dark:border-ice-blue-700">
                <h3 className="text-xl font-semibold text-ice-blue-800 dark:text-ice-blue-200 mb-4 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number *</Label>
                    <Input
                      id="phone"
                      {...register('phone')}
                      placeholder="9876543210"
                      className="mt-2 border-ice-blue-200 focus:border-ice-blue-500 focus:ring-ice-blue-500/20 dark:focus:border-ice-blue-400 dark:focus:ring-ice-blue-400/20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    {errors.phone && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-slate-700 font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      {...register('email')}
                      placeholder="contact@elitevalets.com"
                      className="mt-2 border-ice-blue-200 focus:border-ice-blue-500 focus:ring-ice-blue-500/20 dark:focus:border-ice-blue-400 dark:focus:ring-ice-blue-400/20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    {errors.email && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Location Section */}
              <div className="bg-gradient-to-r from-slate-50 to-ice-blue-50 dark:from-slate-800 dark:to-ice-blue-900/30 p-6 rounded-xl border border-ice-blue-100 dark:border-ice-blue-700">
                <h3 className="text-xl font-semibold text-ice-blue-800 dark:text-ice-blue-200 mb-4 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Service Location
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <Label htmlFor="city" className="text-slate-700 font-medium">City *</Label>
                    <Input
                      id="city"
                      {...register('city')}
                      placeholder="Mumbai"
                      className="mt-2 border-ice-blue-200 focus:border-ice-blue-500 focus:ring-ice-blue-500/20 dark:focus:border-ice-blue-400 dark:focus:ring-ice-blue-400/20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    {errors.city && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.city.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="state" className="text-slate-700 font-medium">State *</Label>
                    <Input
                      id="state"
                      {...register('state')}
                      placeholder="Maharashtra"
                      className="mt-2 border-ice-blue-200 focus:border-ice-blue-500 focus:ring-ice-blue-500/20 dark:focus:border-ice-blue-400 dark:focus:ring-ice-blue-400/20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                    />
                    {errors.state && (
                      <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.state.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="areas" className="text-slate-700 font-medium">Service Areas *</Label>
                  <Input
                    id="areas"
                    {...register('areas')}
                    placeholder="Bandra, Juhu, Andheri, Powai, Lower Parel"
                    className="mt-2 border-ice-blue-200 focus:border-ice-blue-500 focus:ring-ice-blue-500/20 dark:focus:border-ice-blue-400 dark:focus:ring-ice-blue-400/20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  {errors.areas && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.areas.message}</p>
                  )}
                </div>
              </div>

              {/* Services Section */}
              <div className="bg-gradient-to-r from-slate-50 to-ice-blue-50 dark:from-slate-800 dark:to-ice-blue-900/30 p-6 rounded-xl border border-ice-blue-100 dark:border-ice-blue-700">
                <h3 className="text-xl font-semibold text-ice-blue-800 dark:text-ice-blue-200 mb-4 flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Services Offered & Pricing
                </h3>
                <Label className="text-slate-700 dark:text-slate-200 font-medium">Select all services you provide and set prices (per hour) *</Label>
                <div className="grid grid-cols-1 gap-4 mt-4">
                  {serviceOptions.map((service) => (
                    <div key={service} className="border border-ice-blue-100 dark:border-ice-blue-700 rounded-lg p-4 hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/30 transition-colors bg-white dark:bg-gray-800">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id={service}
                          checked={selectedServices.includes(service)}
                          onCheckedChange={(checked) => handleServiceChange(service, checked as boolean)}
                          className="mt-1 border-ice-blue-300 dark:border-ice-blue-600 data-[state=checked]:bg-ice-blue-500 dark:data-[state=checked]:bg-ice-blue-600 data-[state=checked]:border-ice-blue-500 dark:data-[state=checked]:border-ice-blue-600"
                        />
                        <div className="flex-1">
                          <Label htmlFor={service} className="text-sm text-slate-700 dark:text-slate-200 cursor-pointer font-medium block mb-2">{service}</Label>
                          {selectedServices.includes(service) && (
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-slate-600 dark:text-slate-300">₹</span>
                              <Input
                                type="number"
                                placeholder="Price per hour"
                                value={servicePrices[service] || ''}
                                onChange={(e) => handlePriceChange(service, e.target.value)}
                                className="h-9 text-sm border-ice-blue-200 dark:border-ice-blue-700 focus:border-ice-blue-500 dark:focus:border-ice-blue-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-white max-w-[200px]"
                              />
                              <span className="text-sm text-slate-600 dark:text-slate-300">/hour</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {errors.services && (
                  <p className="text-red-500 dark:text-red-400 text-sm mt-2">{errors.services.message}</p>
                )}
              </div>

              {/* Business Details Section */}
              <div className="bg-gradient-to-r from-slate-50 to-ice-blue-50 dark:from-slate-800 dark:to-ice-blue-900/30 p-6 rounded-xl border border-ice-blue-100 dark:border-ice-blue-700">
                <h3 className="text-xl font-semibold text-ice-blue-800 dark:text-ice-blue-200 mb-4">Business Details</h3>
                <div className="mb-6">
                  <Label htmlFor="experience" className="text-slate-700 font-medium">Years of Experience *</Label>
                  <Input
                    id="experience"
                    {...register('experience')}
                    placeholder="5+ years"
                    className="mt-2 border-ice-blue-200 focus:border-ice-blue-500 focus:ring-ice-blue-500/20 dark:focus:border-ice-blue-400 dark:focus:ring-ice-blue-400/20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  {errors.experience && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.experience.message}</p>
                  )}
                </div>

                <div>
                  <Label htmlFor="description" className="text-slate-700 font-medium">Business Description *</Label>
                  <Textarea
                    id="description"
                    {...register('description')}
                    placeholder="Describe your valet service business, experience, and what makes you special..."
                    rows={4}
                    className="mt-2 border-ice-blue-200 focus:border-ice-blue-500 focus:ring-ice-blue-500/20 dark:focus:border-ice-blue-400 dark:focus:ring-ice-blue-400/20 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                  {errors.description && (
                    <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.description.message}</p>
                  )}
                </div>
              </div>

              {/* Subscription Plan Section */}
              <div className="bg-gradient-to-r from-slate-50 to-ice-blue-50 dark:from-slate-800 dark:to-ice-blue-900/30 p-6 rounded-xl border border-ice-blue-100 dark:border-ice-blue-700">
                <h3 className="text-xl font-semibold text-ice-blue-800 dark:text-ice-blue-200 mb-4">Choose Your Plan</h3>
                <Label className="text-slate-700 dark:text-slate-200 font-medium">Subscription Plan *</Label>
                <RadioGroup
                  value={subscriptionPlan}
                  onValueChange={(value: 'monthly' | 'yearly') => setValue('subscriptionPlan', value)}
                  className="mt-4 space-y-4"
                >
                  <div className="flex items-center space-x-3 p-4 border border-ice-blue-200 dark:border-ice-blue-700 rounded-lg hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/30 bg-white dark:bg-gray-800">
                    <RadioGroupItem value="monthly" id="monthly" className="border-ice-blue-300 dark:border-ice-blue-600 text-ice-blue-600 dark:text-ice-blue-400" />
                    <Label htmlFor="monthly" className="text-slate-700 dark:text-slate-200 cursor-pointer">Monthly Plan - ₹500/month</Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border-2 border-ice-blue-300 dark:border-ice-blue-600 rounded-lg hover:bg-ice-blue-50 dark:hover:bg-ice-blue-900/30 bg-ice-blue-25 dark:bg-ice-blue-900/20">
                    <RadioGroupItem value="yearly" id="yearly" className="border-ice-blue-300 dark:border-ice-blue-600 text-ice-blue-600 dark:text-ice-blue-400" />
                    <Label htmlFor="yearly" className="text-slate-700 dark:text-slate-200 cursor-pointer">
                      <span className="font-semibold">Yearly Plan - ₹1,200/year</span>
                      <span className="text-ice-blue-600 dark:text-ice-blue-400 ml-2">(Save ₹4,800!)</span>
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start space-x-3 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                <Checkbox
                  id="agreeTerms"
                  checked={agreeTerms}
                  onCheckedChange={handleTermsChange}
                  className="mt-1 border-ice-blue-300 dark:border-ice-blue-600 data-[state=checked]:bg-ice-blue-500 dark:data-[state=checked]:bg-ice-blue-600 data-[state=checked]:border-ice-blue-500 dark:data-[state=checked]:border-ice-blue-600"
                />
                <Label htmlFor="agreeTerms" className="text-sm text-slate-700 dark:text-slate-200 cursor-pointer">
                  I agree to the <span className="text-ice-blue-600 dark:text-ice-blue-400 underline">terms and conditions</span> and <span className="text-ice-blue-600 dark:text-ice-blue-400 underline">privacy policy</span> of Royal Valet Services *
                </Label>
              </div>
              {errors.agreeTerms && (
                <p className="text-red-500 dark:text-red-400 text-sm">{errors.agreeTerms.message}</p>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-ice-blue-600 to-blue-600 hover:from-ice-blue-700 hover:to-blue-700 dark:from-ice-blue-500 dark:to-blue-500 dark:hover:from-ice-blue-600 dark:hover:to-blue-600 text-white font-semibold py-3 sm:py-4 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-4 sm:w-5 h-4 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Processing Registration...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 sm:h-5 w-4 sm:w-5" />
                    {contactMethod === 'whatsapp' ? 'Send via WhatsApp' : 'Send via Email'}
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ValetRegistrationForm;
