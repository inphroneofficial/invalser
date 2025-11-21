import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Star, Send, MessageSquare } from "lucide-react";
import { Motion } from "@/components/ui/motion";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`INVALSER Feedback - ${rating} Stars`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRating: ${rating}/5\n\nFeedback:\n${feedback}`
    );
    
    window.location.href = `mailto:invalser@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container px-4 mx-auto max-w-4xl">
        <Motion variant="fadeIn">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary/10 mb-4">
              <MessageSquare className="w-7 h-7 md:w-8 md:h-8 text-primary" />
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              We Value Your Feedback
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Help us improve INVALSER by sharing your experience. Your feedback matters!
            </p>
          </div>
        </Motion>

        <Motion variant="scale" delay={200}>
          <Card className="shadow-2xl border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
            <CardHeader className="space-y-2">
              <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                Share Your Experience
              </CardTitle>
              <CardDescription className="text-xs md:text-sm">
                Your feedback will be sent directly to our team
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {/* Rating */}
                <div className="space-y-2">
                  <Label className="text-sm md:text-base">Rate Your Experience</Label>
                  <div className="flex gap-1 md:gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-110 focus:outline-none"
                      >
                        <Star
                          className={`w-7 h-7 md:w-10 md:h-10 transition-colors ${
                            star <= (hoveredRating || rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-xs md:text-sm text-muted-foreground">
                      {rating === 5 && "⭐ Excellent!"}
                      {rating === 4 && "😊 Great!"}
                      {rating === 3 && "👍 Good"}
                      {rating === 2 && "😐 Fair"}
                      {rating === 1 && "😞 Needs Improvement"}
                    </p>
                  )}
                </div>

                {/* Name */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm md:text-base">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="h-9 md:h-10 text-sm md:text-base"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm md:text-base">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-9 md:h-10 text-sm md:text-base"
                  />
                </div>

                {/* Feedback */}
                <div className="space-y-2">
                  <Label htmlFor="feedback" className="text-sm md:text-base">Your Feedback</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Tell us about your experience with INVALSER..."
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    required
                    rows={5}
                    className="resize-none text-sm md:text-base"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:from-primary/90 hover:via-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 h-10 md:h-12 text-sm md:text-base"
                  disabled={!rating || !name || !email || !feedback}
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Send Feedback
                </Button>
              </form>
            </CardContent>
          </Card>
        </Motion>
      </div>
    </section>
  );
}
