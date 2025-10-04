import React from 'react';
import { motion } from 'motion/react';
import { Package, Layers, Zap, Palette, Globe, Truck } from 'lucide-react';

const icons = [
  { Icon: Package, delay: 0, x: 10, y: 20 },
  { Icon: Layers, delay: 1, x: 85, y: 15 },
  { Icon: Zap, delay: 2, x: 15, y: 75 },
  { Icon: Palette, delay: 3, x: 90, y: 80 },
  { Icon: Globe, delay: 4, x: 50, y: 10 },
  { Icon: Truck, delay: 5, x: 95, y: 45 },
];

export function FloatingIcons() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map(({ Icon, delay, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: `${x}%`, top: `${y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 0.4, 0.2, 0.4, 0.2],
            scale: [0, 1, 0.9, 1.1, 1],
            y: [0, -15, 0, -10, 0],
            rotate: [0, 5, -5, 3, 0]
          }}
          transition={{
            duration: 6,
            delay: delay * 0.3,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <div className="p-3 bg-primary/10 backdrop-blur-sm rounded-full">
            <Icon className="h-6 w-6 text-primary" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}