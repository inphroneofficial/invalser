import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  Globe,
  Sparkles,
  MessageSquare,
} from "lucide-react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (!name || !email || !message) {
      toast.error("Please fill in all required fields");
      setSubmitting(false);
      return;
    }

    setTimeout(() => {
      console.log("Sending contact form data:", {
        name,
        email,
        phone,
        message,
      });

      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setSubmitting(false);

      toast.success("Message sent successfully! We'll get back to you shortly.");
    }, 1000);
  };

  const contactMethods = [
    {
      icon: Phone,
      label: "Call Us",
      value: "+91 9550464957",
      href: "tel:9550464957",
    },
    {
      icon: Mail,
      label: "Email Us",
      value: "support@invalser.com",
      href: "mailto:support@invalser.com",
    },
    {
      icon: MapPin,
      label: "Visit Us",
      value: "Pan India Service",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-8 pb-16 overflow-hidden">
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 gradient-mesh opacity-50" />

        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        />

        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
              <MessageSquare className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Get in Touch
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              <span className="text-foreground">Contact </span>
              <span className="gradient-text">INVALSER</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-up stagger-2">
              Have questions? We're here to help you find the perfect service
              solution.
            </p>

            {/* CONTACT METHODS */}
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up stagger-3">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/50 backdrop-blur border border-border/50 hover:border-primary/30 transition-all hover-lift"
                >
                  <method.icon className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground">
                      {method.label}
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* FORM */}
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Name *
                        </label>
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your name"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone
                      </label>
                      <Input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="How can we help you?"
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="gradient"
                      className="w-full"
                      disabled={submitting}
                    >
                      {submitting ? (
                        <span className="flex items-center">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* INFO CARDS */}
            <div className="lg:col-span-2 space-y-6">
              {/* SUPPORT HOURS */}
              <Card className="border-0 shadow-xl overflow-hidden">
                <div className="p-6 bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  <Clock className="w-8 h-8 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Support Hours</h3>
                  <p className="text-primary-foreground/80 text-sm mb-4">
                    We're available around the clock
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Mon - Fri</span>
                      <span className="font-medium">24 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sat - Sun</span>
                      <span className="font-medium">24 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Holidays</span>
                      <span className="font-medium">24 Hours</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* SERVICE COVERAGE */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <Globe className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-4">
                    Service Coverage
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    We operate across 100+ cities in India
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Mumbai",
                      "Delhi",
                      "Bangalore",
                      "Chennai",
                      "Hyderabad",
                      "Pune",
                    ].map((city) => (
                      <span
                        key={city}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* WHATSAPP CHAT */}
              <Card className="border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm font-medium">
                      Live Support Available
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-4">
                    Chat with us instantly on WhatsApp
                  </p>

                  <Button variant="outline" className="w-full" asChild>
                    <a
                      href="https://wa.me/919550464957"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Sparkles className="w-4 h-4 mr-2" />
                      Start Chat
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
