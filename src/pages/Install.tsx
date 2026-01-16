import React from 'react';
import { motion } from 'framer-motion';
import { Download, Share, Smartphone, Zap, WifiOff, Bell, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { usePWAInstall } from '@/hooks/use-pwa-install';
import { useHaptic } from '@/hooks/use-haptic';
import { cn } from '@/lib/utils';

const Install = () => {
  const { 
    isInstalled, 
    isIOS, 
    isAndroid, 
    canPrompt, 
    promptInstall,
    getInstallInstructions 
  } = usePWAInstall();
  const { tap, success } = useHaptic();

  const handleInstall = async () => {
    tap();
    if (canPrompt) {
      const installed = await promptInstall();
      if (installed) {
        success();
      }
    }
  };

  const instructions = getInstallInstructions();

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'App loads instantly, even on slow networks',
    },
    {
      icon: WifiOff,
      title: 'Works Offline',
      description: 'Browse providers and view bookings without internet',
    },
    {
      icon: Bell,
      title: 'Push Notifications',
      description: 'Get instant updates on your bookings',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your data stays safe on your device',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container relative">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Smartphone className="w-4 h-4" />
              Install the App
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
              Get INVALSER
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                On Your Device
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8">
              Install our app for the fastest, smoothest booking experience. 
              Works offline and takes up minimal storage.
            </p>

            {isInstalled ? (
              <motion.div 
                className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-green-500/10 text-green-600 dark:text-green-400 border border-green-500/20"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
              >
                <CheckCircle2 className="w-6 h-6" />
                <span className="font-medium">App is already installed!</span>
              </motion.div>
            ) : canPrompt ? (
              <Button 
                variant="gradient" 
                size="lg" 
                className="shadow-lg shadow-primary/30"
                onClick={handleInstall}
              >
                <Download className="w-5 h-5 mr-2" />
                Install Now
              </Button>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Follow these steps to install on {instructions.platform}:
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Install Instructions for iOS/Manual */}
      {!isInstalled && !canPrompt && (
        <section className="py-12 bg-muted/30">
          <div className="container">
            <motion.div 
              className="max-w-lg mx-auto bg-card rounded-2xl border border-border p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-xl font-display font-bold text-foreground mb-6 text-center">
                How to Install on {instructions.platform}
              </h2>
              
              <ol className="space-y-4">
                {instructions.steps.map((step, i) => (
                  <motion.li 
                    key={i}
                    className="flex items-start gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <span className="w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-foreground/80 pt-1">{step}</span>
                  </motion.li>
                ))}
              </ol>

              {isIOS && (
                <div className="mt-6 p-4 rounded-xl bg-primary/5 border border-primary/20">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <Share className="w-5 h-5" />
                    <span className="font-medium">Look for the Share button</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    It's the square icon with an arrow pointing up, usually at the bottom of Safari.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Features Grid */}
      <section className="py-16">
        <div className="container">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Why Install the App?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Get a native app experience with all these benefits
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:shadow-lg group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8">
              Whether installed or in browser, INVALSER gives you access to premium services across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/providers">
                <Button variant="gradient" size="lg">
                  Find Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </a>
              <a href="/how-it-works">
                <Button variant="outline" size="lg">
                  Learn How It Works
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Install;
