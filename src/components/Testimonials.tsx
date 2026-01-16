import React from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Reddy",
    location: "Hyderabad",
    rating: 5,
    text: "Fantastic valet service! The team arrived on time and handled my car with utmost care. Highly trustworthy!",
    image: "/smile.png"
  },
  {
    name: "Arjun Verma",
    location: "Hyderabad",
    rating: 4,
    text: "Really impressed with the seamless booking process and professional behaviour. Will definitely book again!",
    image: "/smile.png"
  },
  {
    name: "Karthik Sharma",
    location: "Hyderabad",
    rating: 5,
    text: "Top-notch experience! The valet staff was courteous and ensured a hassle-free parking experience.",
    image: "/smile.png"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 section-light">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-warning/10 text-warning text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-warning" />
            Customer Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            What Our{" "}
            <span className="gradient-text">Customers</span>
            {" "}Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Hear from people who have experienced our premium services
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="card-modern p-6 sm:p-8 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? 'fill-warning text-warning' : 'text-muted'}`} 
                  />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
