import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';

interface AutoTypeWriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetween?: number;
  className?: string;
}

export function AutoTypeWriter({ 
  texts, 
  speed = 100, 
  deleteSpeed = 50, 
  delayBetween = 2000,
  className = ""
}: AutoTypeWriterProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    timeout = setTimeout(() => {
      if (isWaiting) {
        setIsWaiting(false);
        setIsDeleting(true);
        return;
      }

      const fullText = texts[currentTextIndex];
      
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          setIsWaiting(true);
        }
      } else {
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        } else {
          setCurrentText(currentText.slice(0, -1));
        }
      }
    }, isWaiting ? delayBetween : isDeleting ? deleteSpeed : speed);

    return () => {
      clearTimeout(timeout);
    };
  }, [currentText, isDeleting, isWaiting, currentTextIndex, texts, speed, deleteSpeed, delayBetween]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
}