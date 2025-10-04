import React from 'react';
import { motion } from 'motion/react';

export const BankLogos = () => {
  const paymentMethods = [
    { name: "Visa", color: "#1A1F71" },
    { name: "Mastercard", color: "#EB001B" },
    { name: "American Express", color: "#006FCF" },
    { name: "PayPal", color: "#0070BA" },
    { name: "Apple Pay", color: "#000000" },
    { name: "Google Pay", color: "#4285F4" },
    { name: "Stripe", color: "#635BFF" },
    { name: "Wire Transfer", color: "#2E7D32" },
    { name: "Bank Transfer", color: "#1976D2" },
    { name: "Western Union", color: "#F7931E" },
    { name: "MoneyGram", color: "#D50000" },
    { name: "SWIFT", color: "#FF6D00" },
    { name: "Alipay", color: "#1677FF" },
    { name: "WeChat Pay", color: "#07C160" },
  ];

  return (
    <div className="border-t border-primary-foreground/20 pt-6">
      <div className="flex items-center justify-between">
        <span className="text-sm text-primary-foreground/80 font-medium">Pay With:</span>
        
        <div className="flex flex-wrap items-center gap-1">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={method.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1 }}
              className="relative"
            >
              <div 
                className="w-8 h-5 rounded-sm flex items-center justify-center text-white text-xs font-medium shadow-sm"
                style={{ backgroundColor: method.color }}
                title={method.name}
              >
                {method.name === "Visa" && "V"}
                {method.name === "Mastercard" && "MC"}
                {method.name === "American Express" && "AX"}
                {method.name === "PayPal" && "PP"}
                {method.name === "Apple Pay" && "AP"}
                {method.name === "Google Pay" && "GP"}
                {method.name === "Stripe" && "ST"}
                {method.name === "Wire Transfer" && "WT"}
                {method.name === "Bank Transfer" && "BT"}
                {method.name === "Western Union" && "WU"}
                {method.name === "MoneyGram" && "MG"}
                {method.name === "SWIFT" && "SW"}
                {method.name === "Alipay" && "AL"}
                {method.name === "WeChat Pay" && "WC"}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};