import React from 'react';
import { motion } from 'motion/react';

export const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 bg-white z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-center">
        {/* Company Logo/Name */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-3xl text-primary mb-1">DW-Bridging</h1>
          <p className="text-muted-foreground text-sm">Textile Buying House</p>
        </motion.div>

        {/* Simple Spinner */}
        <motion.div
          className="w-8 h-8 border-3 border-accent rounded-full border-t-primary mx-auto"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
};