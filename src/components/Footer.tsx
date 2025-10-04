import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { BankLogos } from './BankLogos';
import { useLanguage } from './LanguageContext';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const { t } = useLanguage();
  
  const navigationLinks = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.about'), id: 'about' },
    { name: 'Portfolio', id: 'portfolio' },
    { name: t('nav.gallery'), id: 'gallery' },
    // { name: t('nav.clients'), id: 'clients' },
    { name: t('nav.resources'), id: 'resources' },
    { name: t('nav.careers'), id: 'careers' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook' },
    { icon: Twitter, label: 'Twitter' },
    { icon: Linkedin, label: 'LinkedIn' },
    { icon: Instagram, label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl mb-4">DW-Bridging</h3>
            <p className="text-sm text-primary-foreground/80 mb-6">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.button
                  key={social.label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <motion.button
                    whileHover={{ x: 4 }}
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4">{t('footer.contact')}</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">
                  Global Textile Hub, Asia Pacific
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-foreground/60" />
                <span className="text-sm text-primary-foreground/80">
                  info@dw-bridging.com
                </span>
              </div>
            </div>
          </motion.div>

          {/* Business Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="mb-4">Business Hours</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>9:00 AM - 2:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bank Logos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <BankLogos />
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-8 pt-8 text-center"
        >
          <p className="text-sm text-primary-foreground/60">
            © 2024 DW-Bridging. {t('footer.rights')} | Privacy Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  );
}