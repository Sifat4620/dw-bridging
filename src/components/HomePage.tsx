import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Users, Award, TrendingUp, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AutoTypeWriter } from './AutoTypeWriter';
import { TestimonialSlider } from './TestimonialSlider';
import { FloatingIcons } from './FloatingIcons';
import { ServicesCarousel } from './ServicesCarousel';
import { PartnerLogos } from './PartnerLogos';
import { ImageCarousel } from './ImageCarousel';

interface HomePageProps {
  onNavigate: (page: string, scrollToSection?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const typewriterTexts = React.useMemo(() => [
    "High-Quality Textiles",
    "Global Supply Chain Solutions", 
    "Premium Yarn & Fibers",
    "Sustainable Materials",
    "Industrial Fabrics"
  ], []);

  const stats = React.useMemo(() => [
    { 
      number: '15+', 
      label: 'Years of Experience', 
      icon: Award,
      description: 'Proven track record in textile trading'
    },
    { 
      number: '200+', 
      label: 'Global Partners', 
      icon: Globe,
      description: 'Trusted suppliers worldwide'
    },
    { 
      number: '500+', 
      label: 'Satisfied Clients', 
      icon: Users,
      description: 'Companies we serve globally'
    },
    { 
      number: '98%', 
      label: 'Success Rate', 
      icon: TrendingUp,
      description: 'Client satisfaction guarantee'
    },
  ], []);

  const features = React.useMemo(() => [
    {
      title: 'Global Sourcing Network',
      description: 'Access to premium suppliers worldwide',
      image: 'https://images.unsplash.com/photo-1669699282653-42520fda41f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFicmljJTIwd2FyZWhvdXNlfGVufDF8fHx8MTc1ODE3ODU0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing and compliance standards',
      image: 'https://images.unsplash.com/photo-1684259499086-93cb3e555803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXh0aWxlJTIwZmFjdG9yeSUyMHByb2R1Y3Rpb258ZW58MXx8fHwxNzU4MTc4NTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      title: 'Innovation Focus',
      description: 'Latest trends and sustainable solutions',
      image: 'https://images.unsplash.com/photo-1700170726155-fe844921b8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwY29sb3JmdWwlMjB0aHJlYWRzfGVufDF8fHx8MTc1ODE3ODU0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ], []);

  return (
    <div className="min-h-screen">
      {/* Hero Section with Auto-typing and Floating Icons */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-primary/5">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-cyan-50 opacity-30"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e0f2fe' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 lg:py-0">
            
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-left space-y-6 lg:space-y-8"
            >
              <div className="space-y-4 lg:space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary mb-4 lg:mb-6 leading-tight">
                    Welcome to <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-600">
                      DW-Bridging
                    </span>
                  </h1>
                  
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-foreground/80 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 h-auto sm:h-16">
                    <span className="text-primary">Sourcing</span>
                    <AutoTypeWriter 
                      texts={typewriterTexts}
                      className="text-primary font-semibold"
                      speed={120}
                      deleteSpeed={80}
                      delayBetween={2500}
                    />
                  </div>
                </motion.div>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl"
                >
                  Connecting global manufacturers, mills, and brands with reliable suppliers worldwide through 
                  innovative textile sourcing and supply chain solutions.
                </motion.p>
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <Button
                  size="lg"
                  onClick={() => onNavigate('about')}
                  className="group px-8 py-4 text-lg"
                >
                  Discover Our Story
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
                
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('services', 'quote-form')}
                  className="group border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
                >
                  Request Quote
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Side - Image Carousel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative h-[600px] lg:h-[700px]"
            >
              <ImageCarousel />
            </motion.div>
          </div>
        </div>

        {/* Floating Icons - Reduced for cleaner look */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-60">
          <FloatingIcons />
        </div>
      </section>

      {/* Animated Stats Section */}
      <section className="py-20 bg-gradient-to-r from-white to-accent/30 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-primary">Our Impact in Numbers</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building trust through excellence in textile sourcing and trading
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group"
              >
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-primary/5 border-primary/20">
                  <CardContent className="p-0">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="flex justify-center mb-4"
                    >
                      <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <stat.icon className="h-8 w-8 text-primary" />
                      </div>
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                      viewport={{ once: true }}
                      className="text-4xl mb-2 text-primary font-bold"
                    >
                      {stat.number}
                    </motion.h3>
                    <p className="font-medium mb-2 text-primary">{stat.label}</p>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-primary">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for your textile sourcing needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ServicesCarousel />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => onNavigate('services')}
              size="lg"
              className="group px-8 py-4"
            >
              Explore All Services
              <motion.div
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.div>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid with Animations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-primary">Why Choose DW-Bridging?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the difference with our comprehensive approach to textile sourcing
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, rotateY: 5 }}
                className="group perspective-1000"
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 transform-gpu">
                  <div className="relative h-64 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <ImageWithFallback
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="absolute bottom-4 left-4 text-white"
                    >
                      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-sm text-white/90">{feature.description}</p>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      {/* 
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4 text-primary">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from the companies that trust DW-Bridging for their textile sourcing needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TestimonialSlider />
          </motion.div>
        </div>
      </section>
      */}

      {/* Partner Logos Section */}
      <PartnerLogos />

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`background-element-${i}`}
              className="absolute w-32 h-32 border border-white/10 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.2, 0.1],
                rotate: [0, 90, 180],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                delay: i * 3,
                ease: "easeInOut"
              }}
              style={{
                left: `${15 + i * 25}%`,
                top: `${20 + (i % 2) * 40}%`,
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">Ready to Transform Your Supply Chain?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Partner with DW-Bridging for reliable, efficient, and innovative textile sourcing solutions 
              that drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={() => onNavigate('about')}
                  className="group px-8 py-4"
                >
                  Learn More About Us
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => onNavigate('products')}
                  className="group border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary px-8 py-4"
                >
                  View Our Products
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}