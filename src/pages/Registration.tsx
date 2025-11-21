
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ValetRegistrationForm from "@/components/ValetRegistrationForm";

const Registration = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-ice-blue-50/30 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <Navbar />
      <div className="pt-16 md:pt-20 pb-8 md:pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-ice-blue-700 via-blue-600 to-ice-blue-600 dark:from-ice-blue-400 dark:via-blue-400 dark:to-ice-blue-400 bg-clip-text text-transparent mb-2 md:mb-4">
              Register Your Valet Service
            </h1>
            <p className="text-base md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto px-4">
              Join our platform and connect with customers looking for premium valet services
            </p>
          </div>
          <ValetRegistrationForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Registration;
