import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Chen",
    company: "Global Fashion Inc.",
    text: "DW-Bridging has revolutionized our supply chain. Their expertise and reliability have helped us achieve 25% cost reduction while maintaining premium quality.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    company: "EcoTextile Solutions",
    text: "Working with DW-Bridging transformed our sustainable sourcing initiatives. Their innovative approach aligns perfectly with our environmental goals.",
    rating: 5
  },
  {
    id: 3,
    name: "Dr. Priya Patel",
    company: "Asian Manufacturing Group",
    text: "The team's deep understanding of global textile markets and their reliable partnerships make them our preferred sourcing partner.",
    rating: 5
  },
  {
    id: 4,
    name: "James Thompson",
    company: "Premium Fabrics Ltd.",
    text: "Consistent delivery, quality control, and competitive pricing. DW-Bridging has been instrumental in our market success.",
    rating: 5
  }
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <Card className="relative overflow-hidden">
        <CardContent className="p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={`star-${i}`} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </blockquote>
              
              <div>
                <p className="font-medium text-primary">{testimonials[currentIndex].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].company}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </CardContent>
      </Card>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="sm"
        onClick={goToPrevious}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 rounded-full p-2 bg-white/90 backdrop-blur-sm"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={goToNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 rounded-full p-2 bg-white/90 backdrop-blur-sm"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={`testimonial-dot-${index}`}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-primary scale-125' 
                : 'bg-primary/30 hover:bg-primary/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}