import React from 'react';
import { motion } from 'motion/react';

export const PartnerLogos = () => {
  // Mock partner companies - typical textile industry partners
  const partners = [
    { name: "H&M", logo: "H&M" },
    { name: "Zara", logo: "ZARA" },
    { name: "Uniqlo", logo: "UNIQLO" },
    { name: "GAP", logo: "GAP" },
    { name: "Next", logo: "NEXT" },
    { name: "Primark", logo: "PRIMARK" },
    { name: "Target", logo: "TARGET" },
    { name: "Walmart", logo: "WALMART" }
  ];

  return (
    <section className="py-16 bg-accent/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl mb-4 text-foreground">Our Trusted Partners</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We work with leading global brands and retailers, providing them with high-quality textiles and apparel solutions
          </p>
        </div>

        {/* Auto-scrolling logos container */}
        <div className="relative overflow-hidden">
          {/* Gradient masks for smooth edges */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-accent/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-accent/30 to-transparent z-10" />
          
          <motion.div
            className="flex space-x-8 items-center"
            animate={{
              x: [-1600, 0]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{ width: `200%` }}
          >
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-1-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-sm border border-border flex items-center justify-center hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-xs text-muted-foreground font-medium text-center px-2">
                  {partner.logo}
                </span>
              </div>
            ))}
            {/* Second set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`${partner.name}-2-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-sm border border-border flex items-center justify-center hover:shadow-md transition-shadow duration-300"
              >
                <span className="text-xs text-muted-foreground font-medium text-center px-2">
                  {partner.logo}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Statistics section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
          <div>
            <div className="text-3xl text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Global Partners</div>
          </div>
          <div>
            <div className="text-3xl text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl text-primary mb-2">100K+</div>
            <div className="text-muted-foreground">Products Sourced</div>
          </div>
          <div>
            <div className="text-3xl text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Countries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};