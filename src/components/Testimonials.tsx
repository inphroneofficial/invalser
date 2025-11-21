import { Star } from "lucide-react";

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
    <section id="success-stories" className="py-20 bg-navy/5 dark:bg-navy-light/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-dark dark:text-white mb-4">
            What Our <span className="text-gold">Customers</span> Say
          </h2>
          <p className="text-lg text-navy/70 dark:text-white/70 max-w-2xl mx-auto">
            Hear from people who have experienced our premium valet services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-6 card-hover"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.rating ? 'fill-gold stroke-gold' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-navy/80 dark:text-white/80 mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-navy-dark dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-navy/70 dark:text-white/70">
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
