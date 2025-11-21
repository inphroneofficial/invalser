import { Clock, Users, CheckCircle, Star, Car, MapPin, Phone } from "lucide-react";

const competitiveAdvantages = [
  {
    title: "Fast & Reliable",
    stats: [
      { label: "Avg Booking Time", value: "60 sec", icon: <Clock className="h-5 w-5 text-purple-500" /> },
      { label: "On-Time Service", value: "99%", icon: <CheckCircle className="h-5 w-5 text-green-500" /> }
    ]
  },
  {
    title: "Professional Staff",
    stats: [
      { label: "Trained Valets", value: "100+", icon: <Users className="h-5 w-5 text-blue-500" /> },
      { label: "Customer Rating", value: "4.9/5", icon: <Star className="h-5 w-5 text-yellow-400" /> }
    ]
  },
  {
    title: "Wide Coverage",
    stats: [
      { label: "Cities Covered", value: "20+", icon: <MapPin className="h-5 w-5 text-cyan-500" /> },
      { label: "Event Types", value: "Corporate/Wedding/Personal", icon: <Car className="h-5 w-5 text-indigo-500" /> }
    ]
  }
];

const trustFactors = [
  {
    icon: <Phone className="h-8 w-8 text-green-500" />,
    title: "24/7 Support",
    description: "Get help whenever you need it, day or night."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-blue-500" />,
    title: "Trusted Professionals",
    description: "All valets are background-checked and trained."
  },
  {
    icon: <Car className="h-8 w-8 text-purple-500" />,
    title: "Secure Handling",
    description: "Your vehicle is in safe hands, always."
  }
];

export default function ValueProposition() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50 dark:from-slate-800 dark:via-blue-900 dark:to-purple-900">
      <div className="container mx-auto px-4">

        {/* Main Value Proposition */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-6">
            <Star className="h-5 w-5 text-emerald-600" />
            <span className="text-emerald-800 dark:text-emerald-300 font-semibold">
              Trusted by Thousands of Customers
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              The Smart Choice for Valet Services
            </span>
          </h2>

          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Quick, professional, and reliable valet services for events, corporates, and personal use. Experience hassle-free parking with trusted staff.
          </p>
        </div>

        {/* Competitive Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {competitiveAdvantages.map((adv, idx) => (
            <div key={idx} className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-blue-200/30 dark:border-blue-700/30 rounded-2xl p-8 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-6">{adv.title}</h3>
              <div className="space-y-4">
                {adv.stats.map((stat, i) => (
                  <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl">
                    <div className="flex items-center gap-3 mb-2 sm:mb-0">
                      {stat.icon}
                      <span className="text-slate-700 dark:text-slate-300">{stat.label}</span>
                    </div>
                    <span
                      className={`text-2xl font-bold text-slate-800 dark:text-white ${
                        stat.label === "Event Types" ? "break-all" : "break-words"
                      }`}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Factors */}
        <div className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 rounded-3xl p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Your Trust is Our Priority</h3>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Professional staff, secure vehicle handling, and 24/7 support — making valet services seamless and reliable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trustFactors.map((factor, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/20 transition-all duration-300">
                <div className="flex justify-center mb-4">{factor.icon}</div>
                <h4 className="text-xl font-bold mb-2">{factor.title}</h4>
                <p className="text-blue-100">{factor.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Ready to Experience Hassle-Free Valet?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              Join thousands of satisfied customers who trust us for smooth, professional valet services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                Book Your Valet
              </button>
              <button className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-bold py-4 px-8 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
