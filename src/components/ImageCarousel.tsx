import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import exampleImage from 'figma:asset/581473d8639d0ca7d418af8f5078106d7e50694e.png';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image5 from '../assets/5.jpg';

interface CarouselImage {
  id: number;
  src: string;
  alt: string;
}

const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: image1,
    alt: 'Textile materials and fabrics'
  },
  {
    id: 2,
    src: image2,
    alt: 'Textile factory production line'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1720394493759-dd94fcaa3907?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0aWxlJTIwd2VhdmluZ3xlbnwxfHx8fDE3NTgyOTg2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Fabric weaving process'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1700170726155-fe844921b8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YXJuJTIwY29sb3JmdWwlMjB0aHJlYWRzfGVufDF8fHx8MTc1ODI5ODY1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Colorful yarn and threads'
  },
  {
    id: 5,
    src: image5,
    alt: 'Textile warehouse materials'
  }
];

export function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full perspective-1000">
      {/* Main Container */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => {
          const position = (index - currentIndex + carouselImages.length) % carouselImages.length;
          
          return (
            <motion.div
              key={image.id}
              className="absolute inset-0 origin-center"
              initial={false}
              animate={{
                zIndex: carouselImages.length - position,
                scale: position === 0 ? 1 : 0.85 - position * 0.05,
                y: position === 0 ? 0 : position * 20,
                x: position === 0 ? 0 : position * 15,
                rotateY: position === 0 ? 0 : position * 5,
                opacity: position === 0 ? 1 : position <= 2 ? 0.7 - position * 0.2 : 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut"
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full"
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
                  
                  {/* Content overlay for front image */}
                  {position === 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.6 }}
                      className="absolute bottom-6 left-6 right-6 text-white"
                    >
                      <div className="bg-primary/80 backdrop-blur-sm rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-1">
                          {image.alt}
                        </h3>
                        <p className="text-sm text-white/90">
                          Premium quality textile solutions
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-50">
        {carouselImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125 shadow-lg' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-cyan-500/20 rounded-full blur-xl" />
      <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-blue-500/15 to-primary/15 rounded-full blur-2xl" />
      
      {/* Floating particles around carousel */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`carousel-particle-${i}`}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
            style={{
              left: `${10 + (i % 3) * 30}%`,
              top: `${10 + Math.floor(i / 3) * 40}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}