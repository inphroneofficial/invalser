
import React, { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { CheckCircle, Calendar, MapPin, User, Phone, Mail, Download } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PremiumCard } from "@/components/ui/premium-card";
import { PremiumButton } from "@/components/ui/premium-button";
import { Motion } from "@/components/ui/motion";

const BookingConfirmation = () => {
  const [searchParams] = useSearchParams();
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    // Get booking details from URL params or localStorage
    const bookingId = searchParams.get("booking");
    const storedBooking = localStorage.getItem(`booking_${bookingId}`);
    
    if (storedBooking) {
      setBookingDetails(JSON.parse(storedBooking));
    }
  }, [searchParams]);

  const handleDownloadReceipt = () => {
    // Generate and download receipt
    const receiptContent = `
VALET SERVICE BOOKING RECEIPT
============================
Booking ID: ${bookingDetails?.id}
Date: ${new Date().toLocaleDateString()}
Service Provider: ${bookingDetails?.providerName}
Service Type: ${bookingDetails?.serviceType}
Event Date: ${bookingDetails?.eventDate}
Location: ${bookingDetails?.location}
Total Amount: ₹${bookingDetails?.totalAmount}
Status: Confirmed
============================
Thank you for choosing invalser!
    `;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `valet-booking-${bookingDetails?.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!bookingDetails) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-ice-blue-50/30 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <Navbar />
        <div className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-2xl font-bold mb-4">No booking found</h1>
              <Link to="/providers" className="text-ice-blue-600 hover:underline">
                Book a service
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-ice-blue-50/30 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navbar />
      
      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4">
          <Motion variant="fadeIn">
            <div className="max-w-4xl mx-auto">
              {/* Success Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Booking Confirmed!
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300">
                  Your valet service has been successfully booked
                </p>
              </div>

              {/* Booking Details Card */}
              <PremiumCard className="p-8 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                      Booking Details
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <User className="h-5 w-5 text-ice-blue-600" />
                        <div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Provider</span>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {bookingDetails.providerName}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-ice-blue-600" />
                        <div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Event Date</span>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {bookingDetails.eventDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-ice-blue-600" />
                        <div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Location</span>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {bookingDetails.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-ice-blue-600" />
                        <div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Phone</span>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {bookingDetails.phone}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-ice-blue-600" />
                        <div>
                          <span className="text-sm text-gray-500 dark:text-gray-400">Email</span>
                          <p className="font-semibold text-gray-900 dark:text-white">
                            {bookingDetails.email}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-lg text-gray-600 dark:text-gray-300">Total Amount</span>
                      <p className="text-3xl font-bold text-ice-blue-600 dark:text-ice-blue-400">
                        ₹{bookingDetails.totalAmount}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500 dark:text-gray-400">Booking ID</span>
                      <p className="text-lg font-mono font-semibold text-gray-900 dark:text-white">
                        #{bookingDetails.id}
                      </p>
                    </div>
                  </div>
                </div>
              </PremiumCard>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <PremiumButton
                  onClick={handleDownloadReceipt}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <Download className="h-5 w-5" />
                  Download Receipt
                </PremiumButton>
                <PremiumButton asChild>
                  <Link to="/providers">Book Another Service</Link>
                </PremiumButton>
              </div>

              {/* Next Steps */}
              <PremiumCard className="p-6 mt-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  What's Next?
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div className="p-4">
                    <div className="w-12 h-12 bg-ice-blue-100 dark:bg-ice-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-ice-blue-600 dark:text-ice-blue-400 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Confirmation Call</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      You'll receive a confirmation call within 24 hours
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-ice-blue-100 dark:bg-ice-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-ice-blue-600 dark:text-ice-blue-400 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Service Delivery</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Professional valets will arrive at your event
                    </p>
                  </div>
                  <div className="p-4">
                    <div className="w-12 h-12 bg-ice-blue-100 dark:bg-ice-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-ice-blue-600 dark:text-ice-400 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Rate & Review</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Share your experience to help others
                    </p>
                  </div>
                </div>
              </PremiumCard>
            </div>
          </Motion>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookingConfirmation;
