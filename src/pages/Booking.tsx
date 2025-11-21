
import React from "react";
import { useSearchParams, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ImprovedBookingForm from "@/components/booking/ImprovedBookingForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Car, 
  Shield, 
  Users,
  CheckCircle,
  Phone,
  Mail,
  Clock
} from "lucide-react";
import { getProviderById } from "@/services/providerService";

const Booking = () => {
  const [searchParams] = useSearchParams();
  const { id } = useParams();
  
  const serviceType = searchParams.get('type') || 'personal';
  const provider = id ? getProviderById(id) : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navbar />
      
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-600 dark:from-blue-400 dark:via-indigo-400 dark:to-blue-400 bg-clip-text text-transparent mb-4">
              Book Professional Services
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto mb-8">
              Complete your booking in just a few simple steps
            </p>
            
            {/* Service Categories Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <Car className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Valet Services</h3>
                  <p className="text-gray-600 text-sm">Professional vehicle handling and parking solutions</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-red-100 hover:border-red-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <Shield className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Security Services</h3>
                  <p className="text-gray-600 text-sm">Comprehensive protection and safety solutions</p>
                </CardContent>
              </Card>
              
              <Card className="border-2 border-green-100 hover:border-green-300 transition-colors">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Combined Services</h3>
                  <p className="text-gray-600 text-sm">Mix and match services for complete coverage</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Available Services List */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Available Services Nationwide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-blue-600 mb-3 flex items-center gap-2">
                    <Car className="w-5 h-5" />
                    Valet Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-blue-500" />
                      Professional Valet Services
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-blue-500" />
                      Event Valet Management
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-blue-500" />
                      Corporate Valet Solutions
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Security Services
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-red-500" />
                      Professional Bouncers
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-red-500" />
                      Personal Bodyguards
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-red-500" />
                      Event Security
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-red-500" />
                      Corporate Security
                    </li>
                    <li className="flex items-center gap-2">
                      <Badge variant="outline" className="w-2 h-2 p-0 rounded-full bg-red-500" />
                      Specialized Protection
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Booking Form */}
          <ImprovedBookingForm />

          {/* Contact Information */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="text-center">Need Help with Your Booking?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 9550464957</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-600">support@serviceproviders.com</p>
                </div>
                <div className="flex flex-col items-center">
                  <Clock className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-semibold mb-1">Support Hours</h4>
                  <p className="text-gray-600">24/7 Available</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Booking;
