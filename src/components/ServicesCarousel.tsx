import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Truck, TrendingUp, Shield, Search } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
  image: string;
  color: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Supply Chain Management",
    description: "End-to-end supply chain solutions ensuring seamless operations from sourcing to delivery.",
    features: ["Global Sourcing", "Inventory Management", "Logistics Optimization", "Real-time Tracking"],
    icon: Truck,
    image: 'https://images.unsplash.com/photo-1669699282653-42520fda41f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFicmljJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc1ODE3ODU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: "Product Development",
    description: "Innovative product development services to keep you ahead of market trends.",
    features: ["Trend Analysis", "Design Innovation", "Material Research", "Prototype Development"],
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1700170726155-fe844921b8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwY29sb3JmdWwlMjB0aHJlYWRzfGVufDF8fHx8MTc1ODE3ODU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: "Quality Assurance",
    description: "Rigorous quality control processes to ensure products meet the highest standards.",
    features: ["Testing Protocols", "Compliance Checks", "Certification Support", "Continuous Monitoring"],
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1684259499086-93cb3e555803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU4MTc4NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 4,
    title: "Market Research",
    description: "Comprehensive market analysis and sourcing opportunities identification.",
    features: ["Market Intelligence", "Competitor Analysis", "Opportunity Mapping", "Risk Assessment"],
    icon: Search,
    image: 'https://images.unsplash.com/photo-1705493625048-f3ae8452d249?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0dXJlJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NTgxNjc5NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    color: 'from-orange-500 to-red-500'
  }
];

export function ServicesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  const currentService = services[currentIndex];

  return (
    <div className="relative max-w-6xl mx-auto">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Card className="overflow-hidden bg-gradient-to-r shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Content Side */}
              <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  <div className="flex items-center mb-6">
                    <div className={`p-4 rounded-full bg-gradient-to-r ${currentService.color} shadow-lg`}>
                      <currentService.icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-primary mb-2">{currentService.title}</h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-primary to-primary/50 rounded-full"></div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                    {currentService.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-primary">Key Features:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentService.features.map((feature, index) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </CardContent>

              {/* Image Side */}
              <div className="relative overflow-hidden">
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="h-full"
                >
                  <ImageWithFallback
                    src={currentService.image}
                    alt={currentService.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${currentService.color} opacity-20`}></div>
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-8">
        <Button
          variant="outline"
          onClick={goToPrevious}
          className="group"
        >
          <motion.div
            whileHover={{ x: -3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ChevronLeft className="h-4 w-4" />
          </motion.div>
          Previous
        </Button>

        <div className="flex space-x-2">
          {services.map((_, index) => (
            <motion.button
              key={`service-dot-${index}`}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary scale-125' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        <Button
          variant="outline"
          onClick={goToNext}
          className="group"
        >
          Next
          <motion.div
            whileHover={{ x: 3 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ChevronRight className="h-4 w-4" />
          </motion.div>
        </Button>
      </div>
    </div>
  );
}