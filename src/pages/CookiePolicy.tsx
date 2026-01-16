import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cookie, ShieldCheck, Info } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background">
      <Navbar />
      <main className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/10 mb-4">
              <Cookie className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-foreground">Cookie Policy</h1>
            <p className="text-base md:text-lg text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          {/* No Cookies Notice */}
          <Card className="border-2 border-primary/20 shadow-lg">
            <CardHeader className="bg-primary/5">
              <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
                <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                We Don't Use Cookies
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                At Royal Valet Services, we respect your privacy. Our application <strong>does not use cookies</strong> to 
                track, store, or collect any information about your browsing behavior.
              </p>
              <div className="bg-muted/50 rounded-lg p-4 md:p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="space-y-2 text-sm md:text-base">
                    <p className="font-semibold text-foreground">What does this mean for you?</p>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
                      <li>No tracking cookies</li>
                      <li>No advertising cookies</li>
                      <li>No analytics cookies</li>
                      <li>No third-party cookies</li>
                      <li>Complete privacy while browsing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Browser Storage */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Local Browser Storage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm md:text-base">
              <p className="text-muted-foreground leading-relaxed">
                While we don't use cookies, your web browser may use local storage to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Remember your theme preference (light/dark mode)</li>
                <li>Store temporary session data for form submissions</li>
                <li>Cache static resources for faster loading</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                This local storage is managed entirely by your browser and is never transmitted to our servers 
                or shared with third parties.
              </p>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Questions About Our Privacy Practices?</CardTitle>
            </CardHeader>
            <CardContent className="text-sm md:text-base">
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our cookie policy or privacy practices, please contact us at{' '}
                <a 
                  href="mailto:megtk17@gmail.com" 
                  className="text-primary hover:underline font-medium"
                >
                  megtk17@gmail.com
                </a>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
